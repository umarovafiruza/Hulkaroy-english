/**
 * Speak Fast - Asosiy mantiq
 * Ovoz chiqarib o'qish, teleprompter uslubidagi avtomatik surilish,
 * Web Speech API orqali talaffuz va hisoblagich.
 */

(function () {
  'use strict';

  /* Eski sozlamalar qoldiqlarini tozalash */
  try {
    localStorage.removeItem('sf_vol');
    localStorage.removeItem('sf_track');
    localStorage.removeItem('sf_m_vol');
    localStorage.removeItem('sf_m_track');
    localStorage.removeItem('sf_m_enabled');
  } catch (e) {}

  /* ---------- DOM elementlari ---------- */
  const $ = (id) => document.getElementById(id);
  const homeEl = $('home');
  const readerEl = $('reader');
  const statsEl = $('stats');
  const listEl = $('list');
  const stageEl = $('stage');
  const contentEl = $('content');
  const textEl = $('text');
  const overlayEl = $('overlay');
  const progEl = $('prog');
  const sheetEl = $('sheet');
  const swEl = $('sw');
  const suEl = $('su');
  const finishEl = $('finish');
  const fmsgEl = $('fmsg');
  const pauseBtn = $('pause');
  const restartBtn = $('restart');
  const speedInput = $('speed');
  const speedVal = $('speedVal');
  const speedDownBtn = $('speedDown');
  const speedUpBtn = $('speedUp');
  const backBtn = $('back');
  const toListBtn = $('toList');
  const againBtn = $('again');
  const sListenBtn = $('sListen');
  const sGoBtn = $('sGo');
  const rtitleEl = $('rtitle');
  const rtitleTextEl = $('rtitleText');
  const rlvlEl = $('rlvl');
  const levelTabsEl = $('levelTabs');
  const recBadgeEl = $('recBadge');
  const recDotEl = $('recDot');
  const recTextEl = $('recText');
  const recToggleBtn = $('recToggle');
  const recsSectionEl = $('recsSection');
  const recsCountEl = $('recsCount');
  const recsListEl = $('recsList');
  const finishRecEl = $('finishRec');
  const finishRecTitleEl = $('finishRecTitle');
  const finishRecMetaEl = $('finishRecMeta');
  const finishPlayBtn = $('finishPlayBtn');
  const finishRecBarEl = $('finishRecBar');
  const finishRecFillEl = $('finishRecFill');
  const finishRecTimeEl = $('finishRecTime');

  /* ---------- Ma'lumotlar va Saqlash (LocalStorage) ---------- */
  const topicsData = (typeof TOPICS !== 'undefined') ? TOPICS : (window.TOPICS || []);

  const store = {
    get() {
      try {
        const raw = localStorage.getItem('sf_progress') || localStorage.getItem('sf');
        if (raw) {
          const parsed = JSON.parse(raw);
          return {
            reads: Number(parsed.reads) || 0,
            secs: Number(parsed.secs) || 0,
            done: parsed.done || {}
          };
        }
      } catch (e) {
        console.error('LocalStorage xatolik:', e);
      }
      return { reads: 0, secs: 0, done: {} };
    },
    set(v) {
      try {
        localStorage.setItem('sf_progress', JSON.stringify(v));
        localStorage.setItem('sf', JSON.stringify(v));
      } catch (e) {
        console.error('LocalStorage saqlashda xatolik:', e);
      }
    },
    getSpeed() {
      try {
        const val = Number(localStorage.getItem('sf_speed') || localStorage.getItem('sfw'));
        if (val >= 60 && val <= 260) return val;
      } catch (e) {}
      return 110;
    },
    setSpeed(v) {
      try {
        localStorage.setItem('sf_speed', String(v));
        localStorage.setItem('sfw', String(v));
      } catch (e) {}
    },
    getLevel() {
      try {
        const lvl = localStorage.getItem('sf_lvl');
        if (lvl && ['all', 'A1', 'A2', 'B1'].includes(lvl)) return lvl;
      } catch (e) {}
      return 'all';
    },
    setLevel(lvl) {
      try {
        localStorage.setItem('sf_lvl', String(lvl));
      } catch (e) {}
    },
    getDictaphoneEnabled() {
      try {
        const v = localStorage.getItem('sf_rec_enabled');
        return v === null ? true : v === 'true';
      } catch (e) {
        return true;
      }
    },
    setDictaphoneEnabled(v) {
      try {
        localStorage.setItem('sf_rec_enabled', v ? 'true' : 'false');
      } catch (e) {}
    },
    getRecordings() {
      try {
        const raw = localStorage.getItem('sf_recs');
        if (raw) {
          const arr = JSON.parse(raw);
          if (Array.isArray(arr)) return arr;
        }
      } catch (e) {
        console.warn('Yozuvlarni o\'qishda xatolik:', e);
      }
      return [];
    },
    saveRecording(rec) {
      let list = this.getRecordings();
      // Yangi yozuvni ro'yxat boshiga qo'shish
      list.unshift(rec);
      // Maksimum 3 dona audio saqlansin, eski audiolar yangisi qo'shilganda o'chib ketadi
      if (list.length > 3) {
        list = list.slice(0, 3);
      }
      // LocalStorage to'lib qolish xatolaridan himoya qilib saqlash
      let saved = false;
      while (!saved && list.length > 0) {
        try {
          localStorage.setItem('sf_recs', JSON.stringify(list));
          saved = true;
        } catch (err) {
          console.warn('LocalStorage joyi to\'ldi, eng eski yozuv o\'chirilmoqda:', err);
          list.pop();
        }
      }
      return list;
    },
    deleteRecording(id) {
      let list = this.getRecordings().filter((r) => r.id !== id);
      try {
        localStorage.setItem('sf_recs', JSON.stringify(list));
      } catch (e) {}
      return list;
    }
  };

  /* Matn yordamchilari */
  const plainText = (s) => s.replace(/\{([^|}]+)\|[^}]+\}/g, '$1');
  const countWords = (s) => plainText(s).trim().split(/\s+/).filter(Boolean).length;
  const escapeHtml = (s) => s.replace(/[&<>"']/g, (c) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[c]));

  function renderFormattedText(raw) {
    return raw.split(/\n\n+/).map((para) => {
      const parsed = escapeHtml(para).replace(/\{([^|}]+)\|([^}]+)\}/g, (_, w, u) => {
        return `<span class="hw" role="button" tabindex="0" data-word="${w}" data-uz="${u}">${w}</span>`;
      });
      return `<p>${parsed}</p>`;
    }).join('');
  }

  /* Audio va sana yordamchilari */
  function formatUzDate(d = new Date()) {
    const months = ['yan', 'fev', 'mar', 'apr', 'may', 'iyn', 'iyl', 'avg', 'sen', 'okt', 'noy', 'dek'];
    const day = d.getDate();
    const mon = months[d.getMonth()];
    const hh = String(d.getHours()).padStart(2, '0');
    const mm = String(d.getMinutes()).padStart(2, '0');
    return `${day}-${mon}, ${hh}:${mm}`;
  }

  function formatDuration(sec) {
    const safeSec = Math.max(0, Math.round(sec || 0));
    const m = Math.floor(safeSec / 60);
    const s = Math.floor(safeSec % 60);
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }

  function getSupportedMimeType() {
    const types = [
      'audio/webm;codecs=opus',
      'audio/webm',
      'audio/ogg;codecs=opus',
      'audio/ogg',
      'audio/mp4',
      'audio/aac'
    ];
    for (const t of types) {
      if (typeof MediaRecorder !== 'undefined' && MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported(t)) {
        return t;
      }
    }
    return '';
  }

  function blobToBase64(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }

  /* ---------- Ovozli Yozuvlarni Tinglash Boshqaruvchisi ---------- */
  const recPlayerManager = {
    currentAudio: null,
    currentBtn: null,
    currentFill: null,
    currentTimeEl: null,
    currentId: null,

    stopCurrent() {
      if (this.currentAudio) {
        try {
          this.currentAudio.pause();
          this.currentAudio.currentTime = 0;
        } catch (e) {}
        if (this.currentBtn) {
          this.currentBtn.textContent = 'Eshitish';
          this.currentBtn.classList.remove('active');
        }
        if (this.currentFill) {
          this.currentFill.style.width = '0%';
        }
        this.currentAudio = null;
        this.currentBtn = null;
        this.currentFill = null;
        this.currentTimeEl = null;
        this.currentId = null;
      }
    },

    play(id, audioSrc, btn, fillEl, timeEl, durSec) {
      if (this.currentId === id && this.currentAudio) {
        if (!this.currentAudio.paused) {
          this.currentAudio.pause();
          btn.textContent = 'Eshitish';
          btn.classList.remove('active');
          return;
        } else {
          this.currentAudio.play().catch(() => {});
          btn.textContent = 'Pauza';
          btn.classList.add('active');
          return;
        }
      }

      this.stopCurrent();

      const audio = new Audio(audioSrc);
      this.currentAudio = audio;
      this.currentBtn = btn;
      this.currentFill = fillEl;
      this.currentTimeEl = timeEl;
      this.currentId = id;

      btn.textContent = 'Pauza';
      btn.classList.add('active');

      audio.addEventListener('timeupdate', () => {
        const total = audio.duration || durSec || 1;
        const cur = audio.currentTime;
        const pct = Math.min(100, Math.max(0, (cur / total) * 100));
        if (fillEl) fillEl.style.width = pct + '%';
        if (timeEl) timeEl.textContent = formatDuration(cur);
      });

      audio.addEventListener('ended', () => {
        this.stopCurrent();
        if (timeEl) timeEl.textContent = formatDuration(durSec);
      });

      audio.addEventListener('error', () => {
        console.warn('Ovozli yozuvni ijro etishda xatolik yuz berdi');
        this.stopCurrent();
      });

      audio.play().catch((err) => {
        console.warn('Audio play xatolik:', err);
        this.stopCurrent();
      });
    }
  };

  /* ---------- Ovozli Yozuvlar Ro'yxatini Ko'rsatish ---------- */
  function renderRecordingsList() {
    const list = store.getRecordings();
    if (recsCountEl) {
      recsCountEl.textContent = `${list.length} / 3`;
    }

    if (!recsListEl) return;

    if (list.length === 0) {
      recsListEl.innerHTML = `
        <div class="recs-empty">
          Hozircha saqlangan ovozli yozuvlar yo'q. Matnni o'qiyotganingizda ovozingiz diktafon orqali avtomatik yozib olinadi (maksimum 3 ta saqlanadi).
        </div>
      `;
      return;
    }

    recsListEl.innerHTML = list.map((rec) => {
      const isCurrentPlaying = (recPlayerManager.currentId === rec.id && recPlayerManager.currentAudio && !recPlayerManager.currentAudio.paused);
      return `
        <div class="rec-card" data-rec-id="${rec.id}">
          <div class="rec-card-top">
            <span class="rec-card-title">${escapeHtml(rec.topicTitle)}</span>
            <div class="rec-card-meta">
              <span class="lvl">${escapeHtml(rec.level || 'A1')}</span>
              <span>${escapeHtml(rec.date)}</span>
            </div>
          </div>
          <div class="rec-card-bottom">
            <button class="btn-rec-play ${isCurrentPlaying ? 'active' : ''}" type="button" data-action="play">
              ${isCurrentPlaying ? 'Pauza' : 'Eshitish'}
            </button>
            <div class="rec-bar" data-action="seek" role="slider" aria-label="Audio progress">
              <div class="rec-bar-fill" style="width: 0%;"></div>
            </div>
            <span class="rec-time">${rec.durationStr || formatDuration(rec.duration)}</span>
            <button class="btn-rec-del" type="button" data-action="delete">O'chirish</button>
          </div>
        </div>
      `;
    }).join('');
  }

  function renderFinishRecording(rec) {
    if (!finishRecEl) return;
    if (!rec || !rec.audioData) {
      finishRecEl.classList.add('hidden');
      return;
    }

    finishRecEl.classList.remove('hidden');
    if (finishRecTitleEl) finishRecTitleEl.textContent = rec.topicTitle;
    if (finishRecMetaEl) finishRecMetaEl.textContent = `${rec.level || 'A1'} · ${rec.date}`;
    if (finishRecTimeEl) finishRecTimeEl.textContent = rec.durationStr || formatDuration(rec.duration);
    if (finishRecFillEl) finishRecFillEl.style.width = '0%';
    if (finishPlayBtn) {
      finishPlayBtn.textContent = 'Eshitish';
      finishPlayBtn.classList.remove('active');
    }
  }

  /* ---------- Bosh sahifa (Home) ---------- */
  let currentLevelFilter = store.getLevel();

  function renderHome() {
    const s = store.get();
    const mins = Math.round(s.secs / 60);

    if (s.reads > 0 || mins > 0) {
      statsEl.textContent = `Siz ${s.reads} marta mashq qildingiz, jami ${mins} daqiqa.`;
    } else {
      statsEl.textContent = '';
    }

    // Daraja tugmalarining holatini yangilash
    if (levelTabsEl) {
      const tabBtns = levelTabsEl.querySelectorAll('.level-btn');
      tabBtns.forEach((btn) => {
        if (btn.dataset.lvl === currentLevelFilter) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
    }

    // Mavzularni daraja bo'yicha filtrlash
    const filtered = (currentLevelFilter === 'all')
      ? topicsData
      : topicsData.filter((t) => t.level === currentLevelFilter);

    listEl.innerHTML = filtered.map((t, idx) => {
      const isDone = Boolean(s.done[t.id]);
      const numStr = String(idx + 1).padStart(2, '0');
      const wCount = countWords(t.text);

      return `
        <button class="topic ${isDone ? 'done' : ''}" data-id="${t.id}" type="button">
          <span class="n">${numStr}</span>
          <span class="t">${escapeHtml(t.title)}</span>
          <span class="lvl">${t.level}</span>
          <span class="m">${wCount} so'z</span>
        </button>
      `;
    }).join('');

    // Saqlangan yozuvlar ro'yxatini chiqarish
    renderRecordingsList();
  }

  if (levelTabsEl) {
    levelTabsEl.addEventListener('click', (e) => {
      const btn = e.target.closest('.level-btn');
      if (btn && btn.dataset.lvl) {
        currentLevelFilter = btn.dataset.lvl;
        store.setLevel(currentLevelFilter);
        renderHome();
      }
    });
  }

  listEl.addEventListener('click', (e) => {
    const btn = e.target.closest('.topic');
    if (btn) {
      const id = Number(btn.dataset.id);
      if (!isNaN(id)) {
        openTopic(id);
      }
    }
  });

  /* ---------- Diktafon (Ovoz Yozib Olish) ---------- */
  const dictaphone = {
    mediaRecorder: null,
    stream: null,
    chunks: [],
    startTime: 0,
    elapsedSecs: 0,
    timerId: null,
    state: 'idle', // 'idle' | 'recording' | 'paused'
    enabled: true,
    lastRecording: null,

    init() {
      this.enabled = store.getDictaphoneEnabled();
      this.updateToggleUI();
    },

    toggleEnabled() {
      this.enabled = !this.enabled;
      store.setDictaphoneEnabled(this.enabled);
      this.updateToggleUI();
      if (!this.enabled && this.state !== 'idle') {
        this.discard();
      }
    },

    updateToggleUI() {
      if (recToggleBtn) {
        recToggleBtn.textContent = this.enabled ? 'Yozuv: Yoqiq' : "Yozuv: O'chiq";
        if (this.enabled) {
          recToggleBtn.classList.remove('ghost');
        } else {
          recToggleBtn.classList.add('ghost');
        }
      }
      this.updateBadge('ready');
    },

    updateBadge(status, textOverride = '') {
      if (!recBadgeEl || !recTextEl || !recDotEl) return;
      if (!this.enabled) {
        recBadgeEl.className = 'rec-badge';
        recTextEl.textContent = "Yozuv: O'chiq";
        return;
      }
      if (status === 'recording') {
        recBadgeEl.className = 'rec-badge recording';
        const timeStr = formatDuration(this.elapsedSecs);
        recTextEl.textContent = textOverride || `Yozilmoqda ${timeStr}`;
      } else if (status === 'paused') {
        recBadgeEl.className = 'rec-badge';
        const timeStr = formatDuration(this.elapsedSecs);
        recTextEl.textContent = textOverride || `Pauza ${timeStr}`;
      } else if (status === 'saving') {
        recBadgeEl.className = 'rec-badge';
        recTextEl.textContent = 'Saqlanmoqda...';
      } else if (status === 'error') {
        recBadgeEl.className = 'rec-badge';
        recTextEl.textContent = textOverride || 'Mikrofon xatosi';
      } else {
        recBadgeEl.className = 'rec-badge';
        recTextEl.textContent = 'Yozuv: Tayyor';
      }
    },

    async getStream() {
      if (this.stream && this.stream.active) {
        return this.stream;
      }
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('MediaDevices not supported');
      }
      this.stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true
        }
      });
      return this.stream;
    },

    async start() {
      if (!this.enabled) return;
      try {
        const stream = await this.getStream();
        this.chunks = [];
        this.elapsedSecs = 0;
        clearInterval(this.timerId);

        const mimeType = getSupportedMimeType();
        const options = { audioBitsPerSecond: 24000 };
        if (mimeType) options.mimeType = mimeType;

        this.mediaRecorder = new MediaRecorder(stream, options);

        this.mediaRecorder.ondataavailable = (e) => {
          if (e.data && e.data.size > 0) {
            this.chunks.push(e.data);
          }
        };

        this.mediaRecorder.start(250);
        this.state = 'recording';
        this.startTime = Date.now();

        this.timerId = setInterval(() => {
          if (this.state === 'recording') {
            this.elapsedSecs++;
            this.updateBadge('recording');
          }
        }, 1000);

        this.updateBadge('recording');
      } catch (err) {
        console.warn('Mikrofonni ishga tushirishda xatolik:', err);
        this.updateBadge('error', "Mikrofon o'chiq");
        this.state = 'idle';
      }
    },

    pause() {
      if (this.mediaRecorder && this.state === 'recording' && this.mediaRecorder.state === 'recording') {
        try {
          this.mediaRecorder.pause();
        } catch (e) {}
        this.state = 'paused';
        this.updateBadge('paused');
      }
    },

    resume() {
      if (this.mediaRecorder && this.state === 'paused' && this.mediaRecorder.state === 'paused') {
        try {
          this.mediaRecorder.resume();
        } catch (e) {}
        this.state = 'recording';
        this.updateBadge('recording');
      }
    },

    stop(save = true, topicInfo = null) {
      clearInterval(this.timerId);
      if (!this.mediaRecorder || this.state === 'idle') {
        this.updateBadge('ready');
        return Promise.resolve(null);
      }

      const wasRecording = (this.state === 'recording' || this.state === 'paused');
      this.state = 'idle';
      this.updateBadge('saving');

      return new Promise((resolve) => {
        this.mediaRecorder.onstop = async () => {
          try {
            if (save && wasRecording && this.chunks.length > 0 && this.elapsedSecs >= 3) {
              const mimeType = this.mediaRecorder.mimeType || 'audio/webm';
              const blob = new Blob(this.chunks, { type: mimeType });
              const base64Data = await blobToBase64(blob);

              const recObj = {
                id: Date.now(),
                topicId: topicInfo?.id || R.topicId || 1,
                topicTitle: topicInfo?.title || 'Mashq',
                level: topicInfo?.level || 'A1',
                date: formatUzDate(new Date()),
                duration: this.elapsedSecs,
                durationStr: formatDuration(this.elapsedSecs),
                audioData: base64Data,
                mimeType: mimeType
              };

              store.saveRecording(recObj);
              this.lastRecording = recObj;
              renderRecordingsList();
              renderFinishRecording(recObj);
              this.updateBadge('ready');
              resolve(recObj);
            } else {
              this.updateBadge('ready');
              resolve(null);
            }
          } catch (e) {
            console.error('Yozuvni saqlashda xatolik:', e);
            this.updateBadge('error', 'Saqlanmadi');
            resolve(null);
          }
        };

        try {
          if (this.mediaRecorder.state !== 'inactive') {
            this.mediaRecorder.stop();
          } else {
            resolve(null);
          }
        } catch (e) {
          resolve(null);
        }
      });
    },

    discard() {
      clearInterval(this.timerId);
      this.elapsedSecs = 0;
      if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
        try {
          this.mediaRecorder.stop();
        } catch (e) {}
      }
      this.state = 'idle';
      this.chunks = [];
      this.updateBadge('ready');
    }
  };

  /* ---------- Nutq sintezi (SpeechSynthesis) ---------- */
  const tts = ('speechSynthesis' in window) ? window.speechSynthesis : null;
  let currentVoice = null;

  function loadVoice() {
    if (!tts) return;
    const voices = tts.getVoices().filter((v) => /^en/i.test(v.lang));
    currentVoice = voices.find((v) => /female|samantha|zira|aria|jenny|google us english|google uk english/i.test(v.name))
      || voices[0]
      || null;
  }

  if (tts) {
    loadVoice();
    if (typeof tts.addEventListener === 'function') {
      tts.addEventListener('voiceschanged', loadVoice);
    } else {
      tts.onvoiceschanged = loadVoice;
    }
  }

  function speakText(text, rate = 0.95) {
    return new Promise((resolve) => {
      if (!tts) {
        resolve();
        return;
      }
      try {
        tts.cancel();
        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = 'en-US';
        utter.rate = rate;
        if (currentVoice) {
          utter.voice = currentVoice;
        }

        let finished = false;
        const complete = () => {
          if (!finished) {
            finished = true;
            resolve();
          }
        };

        utter.onend = complete;
        utter.onerror = complete;

        // Xavfsizlik taymeri
        setTimeout(complete, 4500);

        tts.speak(utter);
      } catch (err) {
        console.warn('TTS xatolik:', err);
        resolve();
      }
    });
  }

  /* ---------- Reader (O'qish ekrani) Mantiqi ---------- */
  const R = {
    topicId: 1,
    index: 0,
    pos: 0,
    totalHeight: 0,
    startOff: 0,
    wpm: store.getSpeed(),
    pxPerWord: 0,
    running: false,
    lastTime: 0,
    activeSecs: 0,
    rafId: 0,
    sessionId: 0,
    inCountdown: false
  };

  function updateSpeedDisplay() {
    speedVal.textContent = `${R.wpm} so'z/daq`;
    speedInput.value = R.wpm;

    // Tezkor tanlov (preset) tugmalarini yangilash
    const presetBtns = document.querySelectorAll('.preset-btn');
    presetBtns.forEach((btn) => {
      const pWpm = Number(btn.dataset.wpm);
      if (pWpm === R.wpm) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  function setSpeed(val) {
    const clamped = Math.max(60, Math.min(260, Math.round(val / 5) * 5));
    R.wpm = clamped;
    updateSpeedDisplay();
    store.setSpeed(clamped);
    measureLayout();
  }

  function measureLayout() {
    const stageHeight = stageEl.clientHeight || (window.innerHeight * 0.7);
    R.startOff = stageHeight * 0.42; // O'qish chizig'i 42% balandlikda
    
    const rect = textEl.getBoundingClientRect();
    const currentTopic = topicsData.find((t) => t.id === R.topicId) || topicsData[R.index] || topicsData[0];
    const totalWords = currentTopic ? countWords(currentTopic.text) : 100;

    // Matn balandligini aniq o'lchash (ixcham qatorlar uchun har bir so'z ~13-15px)
    const measuredHeight = (rect && rect.height > 80) ? rect.height : (textEl.offsetHeight > 80 ? textEl.offsetHeight : totalWords * 13.5);
    R.totalHeight = measuredHeight;
    R.pxPerWord = measuredHeight / totalWords;
  }

  function updateScrollPosition() {
    contentEl.style.transform = `translate3d(0, ${R.startOff - R.pos}px, 0)`;
    const pct = R.totalHeight > 0 ? Math.min(100, Math.max(0, (R.pos / R.totalHeight) * 100)) : 0;
    progEl.style.width = pct + '%';
  }

  function showOverlay(big, small = '') {
    if (big) {
      overlayEl.innerHTML = `<div class="big">${big}</div>${small ? `<div class="small">${small}</div>` : ''}`;
      overlayEl.classList.remove('hidden');
    } else {
      overlayEl.innerHTML = '';
      overlayEl.classList.add('hidden');
    }
  }

  function openTopic(id) {
    const topic = topicsData.find((t) => t.id === id) || topicsData[0];
    if (!topic) return;

    R.topicId = topic.id;
    R.index = topicsData.indexOf(topic);

    recPlayerManager.stopCurrent();
    dictaphone.lastRecording = null;
    dictaphone.updateBadge('ready');

    homeEl.classList.add('hidden');
    readerEl.classList.remove('hidden');

    if (rtitleTextEl) {
      rtitleTextEl.textContent = topic.title;
    } else {
      rtitleEl.textContent = topic.title;
    }
    if (rlvlEl) {
      rlvlEl.textContent = topic.level;
    }

    textEl.innerHTML = renderFormattedText(topic.text);

    startSession();
  }

  async function startSession() {
    const currentSession = ++R.sessionId;
    cancelAnimationFrame(R.rafId);
    R.running = false;
    R.inCountdown = true;
    R.activeSecs = 0;

    finishEl.classList.add('hidden');
    if (finishRecEl) finishRecEl.classList.add('hidden');
    sheetEl.classList.add('hidden');
    pauseBtn.textContent = 'Pauza';
    dictaphone.discard();

    measureLayout();
    R.pos = 0;
    updateScrollPosition();

    // 1. "Speak Fast And Clear" iborasini ko'rsatish va o'qish
    showOverlay('Speak Fast<br>And Clear');
    await speakText('Speak Fast And Clear', 0.95);

    if (currentSession !== R.sessionId) return;

    // 2. 3-2-1 hisoblagich
    const countdown = ['3', '2', '1'];
    for (const num of countdown) {
      showOverlay(num, "Tayyor bo'ling");
      await new Promise((r) => setTimeout(r, 750));
      if (currentSession !== R.sessionId) return;
    }

    showOverlay('');
    R.inCountdown = false;
    // O'qish boshlanishi bilan diktafon ovoz yozishni boshlaydi
    dictaphone.start();
    playScroll();
  }

  function playScroll() {
    if (R.running || R.inCountdown) return;
    measureLayout();
    R.running = true;
    R.lastTime = performance.now();
    pauseBtn.textContent = 'Pauza';
    sheetEl.classList.add('hidden');
    dictaphone.resume();
    R.rafId = requestAnimationFrame(scrollTick);
  }

  function pauseScroll() {
    R.running = false;
    cancelAnimationFrame(R.rafId);
    pauseBtn.textContent = 'Davom etish';
    dictaphone.pause();
  }

  function scrollTick(now) {
    if (!R.running) return;

    const dt = Math.min((now - R.lastTime) / 1000, 0.1);
    R.lastTime = now;
    R.activeSecs += dt;

    // Har bir kadrda joriy tezlikka mutanosib siljish
    const pixelsPerSecond = (R.wpm / 60) * R.pxPerWord;
    R.pos += pixelsPerSecond * dt;

    updateScrollPosition();

    // Matn to'liq o'qib bo'linganligini aniqlash (oxirgi qatordan so'ng biroz vaqt beriladi)
    if (R.pos >= R.totalHeight + 60) {
      finishTopic();
      return;
    }

    R.rafId = requestAnimationFrame(scrollTick);
  }

  async function finishTopic() {
    R.running = false;
    cancelAnimationFrame(R.rafId);

    const s = store.get();
    s.reads += 1;
    s.secs += Math.round(R.activeSecs);
    const curTopic = topicsData.find((t) => t.id === R.topicId) || topicsData[R.index];
    if (curTopic) {
      s.done[curTopic.id] = true;
    }
    store.set(s);
    R.activeSecs = 0;

    const topicTitle = curTopic ? curTopic.title : '';
    fmsgEl.textContent = `"${topicTitle}" matnini muvaffaqiyatli tugatdingiz.`;
    finishEl.classList.remove('hidden');

    // Diktafon ovoz yozuvini to'xtatadi va LocalStorage-ga saqlaydi
    const savedRec = await dictaphone.stop(true, curTopic);
    if (savedRec) {
      renderFinishRecording(savedRec);
    } else if (finishRecEl) {
      finishRecEl.classList.add('hidden');
    }
  }

  async function returnToTopics() {
    R.sessionId++;
    pauseScroll();
    recPlayerManager.stopCurrent();
    if (tts) {
      tts.cancel();
    }

    const curTopic = topicsData.find((t) => t.id === R.topicId) || topicsData[R.index];
    if (dictaphone.elapsedSecs >= 5) {
      await dictaphone.stop(true, curTopic);
    } else {
      dictaphone.discard();
    }

    // O'rtada chiqib ketganda ham mashq vaqtini saqlash
    if (R.activeSecs > 0) {
      const s = store.get();
      s.secs += Math.round(R.activeSecs);
      store.set(s);
      R.activeSecs = 0;
    }

    readerEl.classList.add('hidden');
    homeEl.classList.remove('hidden');
    renderHome();
  }

  /* ---------- Murakkab so'zlar (Hard Words) ---------- */
  function openWordSheet(el) {
    pauseScroll();
    const word = el.dataset.word || el.textContent;
    const uz = el.dataset.uz || '';

    swEl.textContent = word;
    suEl.textContent = uz;
    sheetEl.classList.remove('hidden');

    speakText(word, 0.8);
  }

  textEl.addEventListener('click', (e) => {
    const hw = e.target.closest('.hw');
    if (hw) {
      e.stopPropagation();
      openWordSheet(hw);
    }
  });

  textEl.addEventListener('keydown', (e) => {
    if (e.target.classList.contains('hw') && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      openWordSheet(e.target);
    }
  });

  sListenBtn.addEventListener('click', () => {
    speakText(swEl.textContent, 0.8);
  });

  sGoBtn.addEventListener('click', () => {
    sheetEl.classList.add('hidden');
    playScroll();
  });

  /* ---------- Boshqaruv tugmalari va hodisalar ---------- */
  pauseBtn.addEventListener('click', () => {
    if (R.inCountdown) return;
    if (R.running) {
      pauseScroll();
    } else {
      playScroll();
    }
  });

  restartBtn.addEventListener('click', () => {
    recPlayerManager.stopCurrent();
    dictaphone.discard();
    startSession();
  });

  againBtn.addEventListener('click', () => {
    recPlayerManager.stopCurrent();
    dictaphone.discard();
    startSession();
  });

  backBtn.addEventListener('click', returnToTopics);
  toListBtn.addEventListener('click', returnToTopics);

  // Tezlik boshqaruvi
  speedInput.addEventListener('input', (e) => {
    setSpeed(Number(e.target.value));
  });

  if (speedDownBtn) {
    speedDownBtn.addEventListener('click', () => {
      setSpeed(R.wpm - 10);
    });
  }

  if (speedUpBtn) {
    speedUpBtn.addEventListener('click', () => {
      setSpeed(R.wpm + 10);
    });
  }

  // Tezkor tezlik tugmalari (Presets)
  const presetsEl = $('presets');
  if (presetsEl) {
    presetsEl.addEventListener('click', (e) => {
      const btn = e.target.closest('.preset-btn');
      if (btn && btn.dataset.wpm) {
        setSpeed(Number(btn.dataset.wpm));
      }
    });
  }

  // Diktafon sozlamasi tugmasi
  if (recToggleBtn) {
    recToggleBtn.addEventListener('click', () => {
      dictaphone.toggleEnabled();
    });
  }

  // Yakuniy ekranda ovozli yozuvni tinglash
  if (finishPlayBtn) {
    finishPlayBtn.addEventListener('click', () => {
      if (!dictaphone.lastRecording) return;
      recPlayerManager.play(
        dictaphone.lastRecording.id,
        dictaphone.lastRecording.audioData,
        finishPlayBtn,
        finishRecFillEl,
        finishRecTimeEl,
        dictaphone.lastRecording.duration
      );
    });
  }

  if (finishRecBarEl) {
    finishRecBarEl.addEventListener('click', (e) => {
      if (!recPlayerManager.currentAudio || recPlayerManager.currentId !== dictaphone.lastRecording?.id) return;
      const rect = finishRecBarEl.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const pct = Math.max(0, Math.min(1, clickX / rect.width));
      const dur = recPlayerManager.currentAudio.duration || dictaphone.lastRecording.duration || 1;
      recPlayerManager.currentAudio.currentTime = pct * dur;
    });
  }

  // Bosh sahifadagi ovozli yozuvlar ro'yxati (Eshitish, o'chirish, surish)
  if (recsListEl) {
    recsListEl.addEventListener('click', (e) => {
      const playBtn = e.target.closest('[data-action="play"]');
      const delBtn = e.target.closest('[data-action="delete"]');
      const seekEl = e.target.closest('[data-action="seek"]');
      const card = e.target.closest('.rec-card');
      if (!card) return;

      const recId = Number(card.dataset.recId);
      const recs = store.getRecordings();
      const rec = recs.find((r) => r.id === recId);
      if (!rec) return;

      if (playBtn) {
        const fillEl = card.querySelector('.rec-bar-fill');
        const timeEl = card.querySelector('.rec-time');
        recPlayerManager.play(rec.id, rec.audioData, playBtn, fillEl, timeEl, rec.duration);
        return;
      }

      if (delBtn) {
        if (recPlayerManager.currentId === rec.id) {
          recPlayerManager.stopCurrent();
        }
        store.deleteRecording(rec.id);
        renderRecordingsList();
        return;
      }

      if (seekEl) {
        if (recPlayerManager.currentAudio && recPlayerManager.currentId === rec.id) {
          const rect = seekEl.getBoundingClientRect();
          const clickX = e.clientX - rect.left;
          const pct = Math.max(0, Math.min(1, clickX / rect.width));
          const dur = recPlayerManager.currentAudio.duration || rec.duration || 1;
          recPlayerManager.currentAudio.currentTime = pct * dur;
        }
      }
    });
  }

  // Sichqoncha g'ildiragi orqali o'qish joyini engil surish
  stageEl.addEventListener('wheel', (e) => {
    if (readerEl.classList.contains('hidden')) return;
    if (R.inCountdown) return;
    e.preventDefault();
    R.pos = Math.max(0, Math.min(R.totalHeight + 80, R.pos + e.deltaY * 0.45));
    updateScrollPosition();
  }, { passive: false });

  // Mobil sensorli ekranda surish (Touch swipe)
  let touchStartY = 0;
  let touchStartPos = 0;
  let isTouching = false;

  stageEl.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      touchStartY = e.touches[0].clientY;
      touchStartPos = R.pos;
      isTouching = true;
    }
  }, { passive: true });

  stageEl.addEventListener('touchmove', (e) => {
    if (!isTouching || e.touches.length !== 1 || R.inCountdown) return;
    const dy = touchStartY - e.touches[0].clientY;
    if (Math.abs(dy) > 6) {
      R.pos = Math.max(0, Math.min(R.totalHeight + 80, touchStartPos + dy * 0.85));
      updateScrollPosition();
    }
  }, { passive: true });

  stageEl.addEventListener('touchend', () => {
    isTouching = false;
  }, { passive: true });

  // Matn maydonini bosish orqali to'xtatish/davom ettirish
  stageEl.addEventListener('click', (e) => {
    if (e.target.closest('.hw')) return;
    if (R.inCountdown) return;
    if (!finishEl.classList.contains('hidden')) return;

    if (R.running) {
      pauseScroll();
    } else {
      playScroll();
    }
  });

  // Klaviatura tugmalari (Space, strelkalar va 1-4 raqamlar)
  document.addEventListener('keydown', (e) => {
    if (readerEl.classList.contains('hidden')) return;
    if (e.target.tagName === 'INPUT') return;

    // 1-4 raqamlari orqali tezkor tezlikni tanlash
    if (e.key === '1') { setSpeed(80); return; }
    if (e.key === '2') { setSpeed(110); return; }
    if (e.key === '3') { setSpeed(150); return; }
    if (e.key === '4') { setSpeed(200); return; }

    // Strelkalar orqali tezlikni sozlash
    if (e.code === 'ArrowUp' || e.code === 'ArrowRight') {
      e.preventDefault();
      setSpeed(R.wpm + 5);
      return;
    }
    if (e.code === 'ArrowDown' || e.code === 'ArrowLeft') {
      e.preventDefault();
      setSpeed(R.wpm - 5);
      return;
    }

    if (e.code === 'Space' && !e.target.classList.contains('hw')) {
      e.preventDefault();
      if (R.inCountdown) return;
      if (!finishEl.classList.contains('hidden')) return;

      if (R.running) {
        pauseScroll();
      } else {
        playScroll();
      }
    }
  });

  // Oyna o'lchami o'zgarganda o'qish pozitsiyasini mutanosib saqlash
  window.addEventListener('resize', () => {
    if (readerEl.classList.contains('hidden')) return;
    const fraction = R.totalHeight > 0 ? R.pos / R.totalHeight : 0;
    measureLayout();
    R.pos = fraction * R.totalHeight;
    updateScrollPosition();
  });

  /* ---------- Dasturni ishga tushirish ---------- */
  dictaphone.init();
  updateSpeedDisplay();
  renderHome();

})();
