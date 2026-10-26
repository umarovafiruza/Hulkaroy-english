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

  /* Reading bo'limi DOM elementlari */
  const modeTabsEl = $('modeTabs');
  const homeTitleEl = $('homeTitle');
  const homeLeadEl = $('homeLead');
  const readingReaderEl = $('readingReader');
  const readingBackBtn = $('readingBack');
  const rReadingTitleEl = $('rReadingTitle');
  const rReadingLvlEl = $('rReadingLvl');
  const readingTimerEl = $('readingTimer');
  const fontSizeDownBtn = $('fontSizeDown');
  const fontSizeUpBtn = $('fontSizeUp');
  const readingArticleTitleEl = $('readingArticleTitle');
  const readingMetaLineEl = $('readingMetaLine');
  const readingTextEl = $('readingText');
  const readingFinishReadBtn = $('readingFinishReadBtn');
  const readingSpeedBadgeEl = $('readingSpeedBadge');
  const quizSectionEl = $('quizSection');
  const quizListEl = $('quizList');
  const quizResultEl = $('quizResult');
  const quizResultScoreEl = $('quizResultScore');
  const quizResultMsgEl = $('quizResultMsg');
  const quizRetryBtn = $('quizRetryBtn');
  const quizFinishBtn = $('quizFinishBtn');
  const sSaveBtn = $('sSave');

  /* Lug'at (Vocabulary) DOM elementlari */
  const vocabSectionEl = $('vocabSection');
  const vocabCountEl = $('vocabCount');
  const vocabEmptyEl = $('vocabEmpty');
  const vocabListEl = $('vocabList');

  /* Listening bo'limi DOM elementlari */
  const listeningStatsSectionEl = $('listeningStatsSection');
  const statCompletedCountEl = $('statCompletedCount');
  const statAvgScoreEl = $('statAvgScore');
  const statBestScoreEl = $('statBestScore');
  const listeningProgressBadgeEl = $('listeningProgressBadge');

  const listeningReaderEl = $('listeningReader');
  const listeningBackBtn = $('listeningBack');
  const rListeningTitleEl = $('rListeningTitle');
  const rListeningLvlEl = $('rListeningLvl');
  const rListeningPartEl = $('rListeningPart');
  const listeningExerciseTitleEl = $('listeningExerciseTitle');
  const listeningMetaLineEl = $('listeningMetaLine');

  const listeningPlayerCardEl = $('listeningPlayerCard');
  const playerPulseDotEl = $('playerPulseDot');
  const playerStatusTextEl = $('playerStatusText');
  const playerProgressTrackEl = $('playerProgressTrack');
  const playerProgressFillEl = $('playerProgressFill');
  const playerTimeCurEl = $('playerTimeCur');
  const playerTimeDurEl = $('playerTimeDur');
  const listeningPlayBtn = $('listeningPlayBtn');
  const listeningPlayIcon = $('listeningPlayIcon');
  const listeningRestartBtn = $('listeningRestartBtn');
  const listeningSpeedSelectorEl = $('listeningSpeedSelector');
  const listeningVolToggleBtn = $('listeningVolToggle');
  const volIconEl = $('volIcon');

  const listeningQuizSectionEl = $('listeningQuizSection');
  const listeningQuizProgressTextEl = $('listeningQuizProgressText');
  const listeningSubmitQuizBtn = $('listeningSubmitQuizBtn');
  const qStepperEl = $('qStepper');
  const qActiveCardEl = $('qActiveCard');
  const qPrevBtn = $('qPrevBtn');
  const qNextBtn = $('qNextBtn');
  const qNavIndicatorEl = $('qNavIndicator');

  const listeningResultsSectionEl = $('listeningResultsSection');
  const lResultScoreEl = $('lResultScore');
  const lResultPercentEl = $('lResultPercent');
  const lResultHeadlineEl = $('lResultHeadline');
  const lResultFeedbackEl = $('lResultFeedback');
  const lResultPillCorrectEl = $('lResultPillCorrect');
  const lResultPillWrongEl = $('lResultPillWrong');
  const lResultPillUnansEl = $('lResultPillUnans');
  const lToggleTranscriptBtn = $('lToggleTranscriptBtn');
  const lRetryBtn = $('lRetryBtn');
  const lNextExerciseBtn = $('lNextExerciseBtn');
  const lBackToListBtn = $('lBackToListBtn');
  const listeningTranscriptCardEl = $('listeningTranscriptCard');
  const listeningTranscriptTextEl = $('listeningTranscriptText');
  const listeningReviewListEl = $('listeningReviewList');

  const unansweredModalEl = $('unansweredModal');
  const unansweredModalMsgEl = $('unansweredModalMsg');
  const unansweredCancelBtn = $('unansweredCancelBtn');
  const unansweredConfirmBtn = $('unansweredConfirmBtn');

  /* ---------- Ma'lumotlar va Saqlash (LocalStorage) ---------- */
  const topicsData = (typeof TOPICS !== 'undefined') ? TOPICS : (window.TOPICS || []);
  const readingTopicsData = (typeof READING_TOPICS !== 'undefined') ? READING_TOPICS : (window.READING_TOPICS || []);
  const listeningExercisesData = (typeof LISTENING_EXERCISES !== 'undefined') ? LISTENING_EXERCISES : (window.LISTENING_EXERCISES || []);

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
    getReading() {
      try {
        const raw = localStorage.getItem('sf_reading');
        if (raw) return JSON.parse(raw);
      } catch (e) {}
      return { completed: {} };
    },
    saveReadingResult(id, correct, total) {
      try {
        const data = this.getReading();
        if (!data.completed) data.completed = {};
        data.completed[id] = { correct, total, ts: Date.now() };
        localStorage.setItem('sf_reading', JSON.stringify(data));
      } catch (e) {}
    },
    getListening() {
      try {
        const raw = localStorage.getItem('sf_listening');
        if (raw) return JSON.parse(raw);
      } catch (e) {}
      return { completed: {} };
    },
    saveListeningResult(id, score, total) {
      try {
        const data = this.getListening();
        if (!data.completed) data.completed = {};
        data.completed[id] = { score, total, pct: Math.round((score / total) * 100), ts: Date.now() };
        localStorage.setItem('sf_listening', JSON.stringify(data));
      } catch (e) {}
    },
    getListeningStats() {
      const data = this.getListening();
      const records = Object.values(data.completed || {});
      const count = records.length;
      if (count === 0) return { count: 0, avg: 0, best: 0 };
      const totalScore = records.reduce((sum, r) => sum + (r.score || 0), 0);
      const totalPossible = records.reduce((sum, r) => sum + (r.total || 8), 0);
      const avgPct = totalPossible > 0 ? Math.round((totalScore / totalPossible) * 100) : 0;
      const bestPct = Math.max(...records.map((r) => r.pct || 0));
      return { count, avg: avgPct, best: bestPct };
    },
    getVocab() {
      try {
        const raw = localStorage.getItem('sf_vocab');
        if (raw) {
          const arr = JSON.parse(raw);
          if (Array.isArray(arr)) return arr;
        }
      } catch (e) {}
      return [];
    },
    saveVocab(word, uz, topicTitle = '') {
      let list = this.getVocab();
      const existing = list.find((v) => v.word.toLowerCase() === word.toLowerCase());
      if (existing) return list;
      list.unshift({
        id: Date.now() + Math.random().toString(36).slice(2, 6),
        word,
        uz,
        topicTitle,
        date: formatUzDate(new Date())
      });
      try {
        localStorage.setItem('sf_vocab', JSON.stringify(list));
      } catch (e) {}
      return list;
    },
    deleteVocab(id) {
      let list = this.getVocab().filter((v) => v.id !== id);
      try {
        localStorage.setItem('sf_vocab', JSON.stringify(list));
      } catch (e) {}
      return list;
    },
    isVocabSaved(word) {
      if (!word) return false;
      const list = this.getVocab();
      return list.some((v) => v.word.toLowerCase() === word.toLowerCase());
    },
    getReadingFontSize() {
      try {
        const s = Number(localStorage.getItem('sf_reading_fontsize'));
        if (s >= 14 && s <= 28) return s;
      } catch (e) {}
      return 20;
    },
    setReadingFontSize(s) {
      try {
        localStorage.setItem('sf_reading_fontsize', String(s));
      } catch (e) {}
    },
    getReadingQuizCount() {
      try {
        const val = Number(localStorage.getItem('sf_quiz_count'));
        if ([5, 10, 15, 20].includes(val)) return val;
      } catch (e) {}
      return 10;
    },
    setReadingQuizCount(c) {
      try {
        localStorage.setItem('sf_quiz_count', String(c));
      } catch (e) {}
    },
    saveReadingWpm(wpm) {
      try {
        localStorage.setItem('sf_reading_last_wpm', String(wpm));
      } catch (e) {}
    },
    getReadingWpm() {
      try {
        return Number(localStorage.getItem('sf_reading_last_wpm')) || 0;
      } catch (e) {
        return 0;
      }
    },
    getMode() {
      try {
        const m = localStorage.getItem('sf_mode');
        if (m === 'reading' || m === 'speaking' || m === 'listening') return m;
      } catch (e) {}
      return 'speaking';
    },
    setMode(m) {
      try {
        localStorage.setItem('sf_mode', m);
      } catch (e) {}
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
        if (lvl && ['all', 'A1', 'A2', 'B1', 'B2', 'C1'].includes(lvl)) return lvl;
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
  const plainText = (s) => String(s == null ? '' : s).replace(/\{([^|}]+)\|[^}]+\}/g, '$1');
  const countWords = (s) => plainText(s).trim().split(/\s+/).filter(Boolean).length;
  const escapeHtml = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({
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
  let currentMode = store.getMode();
  let currentLevelFilter = store.getLevel();

  function setMode(mode) {
    currentMode = mode;
    store.setMode(mode);
    renderHome();
  }

  if (modeTabsEl) {
    modeTabsEl.addEventListener('click', (e) => {
      const btn = e.target.closest('.mode-btn');
      if (btn && btn.dataset.mode) {
        setMode(btn.dataset.mode);
      }
    });
  }

  function renderHome() {
    // Mode tabs holatini yangilash
    if (modeTabsEl) {
      modeTabsEl.querySelectorAll('.mode-btn').forEach((btn) => {
        btn.classList.toggle('active', btn.dataset.mode === currentMode);
      });
    }

    // Daraja tugmalarining holatini yangilash
    if (levelTabsEl) {
      const tabBtns = levelTabsEl.querySelectorAll('.level-btn');
      tabBtns.forEach((btn) => {
        btn.classList.toggle('active', btn.dataset.lvl === currentLevelFilter);
      });
    }

    if (currentMode === 'listening') {
      // LISTENING REJIMI
      if (homeTitleEl) homeTitleEl.textContent = "Listening Practice";
      if (homeLeadEl) homeLeadEl.textContent = "Improve your English listening skills through realistic audio exercises and comprehension questions.";
      if (recsSectionEl) recsSectionEl.classList.add('hidden');
      if (vocabSectionEl) vocabSectionEl.classList.add('hidden');
      if (listeningStatsSectionEl) listeningStatsSectionEl.classList.remove('hidden');

      const lStore = store.getListening();
      const completed = lStore.completed || {};
      const stats = store.getListeningStats();

      if (statCompletedCountEl) statCompletedCountEl.textContent = `${stats.count} / ${listeningExercisesData.length}`;
      if (statAvgScoreEl) statAvgScoreEl.textContent = `${stats.avg}%`;
      if (statBestScoreEl) statBestScoreEl.textContent = `${stats.best}%`;
      if (listeningProgressBadgeEl) {
        listeningProgressBadgeEl.textContent = `${stats.count} ta bajarildi`;
      }
      statsEl.textContent = '';

      const filtered = (currentLevelFilter === 'all')
        ? listeningExercisesData
        : listeningExercisesData.filter((t) => t.level === currentLevelFilter);

      if (filtered.length === 0) {
        listEl.innerHTML = `
          <div style="grid-column: 1/-1; text-align: center; padding: 48px 20px; color: var(--text-secondary); font-size: 15px;">
            Ushbu daraja uchun listening mashqlari hozircha mavjud emas. Yuqoridagi "Barchasi" yoki boshqa darajani tanlang.
          </div>
        `;
      } else {
        listEl.innerHTML = filtered.map((ex, idx) => {
          const record = completed[ex.id];
          const isDone = Boolean(record);
          const numStr = String(idx + 1).padStart(2, '0');
          const badgeText = isDone
            ? `${record.score}/${record.total} to'g'ri (${record.pct}%)`
            : `${ex.questions.length} savol · Boshlash`;

          const partLabel = ex.partName || `Part ${ex.part}`;
          const durLabel = ex.duration || (ex.durationSec ? formatDuration(ex.durationSec) : '00:35');
          return `
            <button class="topic ${isDone ? 'done' : ''}" data-id="${ex.id}" data-type="listening" type="button">
              <span class="n">${numStr}</span>
              <span class="t">${escapeHtml(ex.title)}</span>
              <span class="lvl">${ex.level}</span>
              <span class="m">${escapeHtml(partLabel)} · ${durLabel} · ${badgeText}</span>
            </button>
          `;
        }).join('');
      }
    } else if (currentMode === 'reading') {
      // READING REJIMI
      if (listeningStatsSectionEl) listeningStatsSectionEl.classList.add('hidden');
      if (homeTitleEl) homeTitleEl.textContent = "Matnlarni o'qing. Tushunish darajangizni sinang.";
      if (homeLeadEl) homeLeadEl.textContent = "Hikoyani diqqat bilan o'qing va matn ostidagi test savollariga javob bering.";
      if (recsSectionEl) recsSectionEl.classList.add('hidden');
      if (vocabSectionEl) vocabSectionEl.classList.remove('hidden');

      const rStore = store.getReading();
      const completed = rStore.completed || {};
      const completedCount = Object.keys(completed).length;
      const lastWpm = store.getReadingWpm();

      let statsText = '';
      if (completedCount > 0) {
        statsText = `Siz ${completedCount} ta matnni o'qib, test savollarini yakunladingiz.`;
        if (lastWpm > 0) {
          statsText += ` · Oxirgi tezlik: ${lastWpm} so'z/daqiqa`;
        }
      } else if (lastWpm > 0) {
        statsText = `Oxirgi o'qish tezligingiz: ${lastWpm} so'z/daqiqa.`;
      } else {
        statsText = "Jami 300 ta savol bazasi: har bir testda 10 tadan 20 tagacha tasodifiy savollar.";
      }
      statsEl.textContent = statsText;

      const filtered = (currentLevelFilter === 'all')
        ? readingTopicsData
        : readingTopicsData.filter((t) => t.level === currentLevelFilter);

      listEl.innerHTML = filtered.map((t, idx) => {
        const record = completed[t.id];
        const isDone = Boolean(record);
        const numStr = String(idx + 1).padStart(2, '0');
        const wCount = countWords(t.text);
        const qCount = t.questions ? t.questions.length : 20;
        const badgeText = isDone
          ? `${record.correct}/${record.total} to'g'ri`
          : `${qCount} savol (10+ test)`;

        return `
          <button class="topic ${isDone ? 'done' : ''}" data-id="${t.id}" data-type="reading" type="button">
            <span class="n">${numStr}</span>
            <span class="t">${escapeHtml(t.title)}</span>
            <span class="lvl">${t.level}</span>
            <span class="m">${wCount} so'z · ${badgeText}</span>
          </button>
        `;
      }).join('');

      renderVocabList();
    } else {
      // SPEAKING REJIMI
      if (listeningStatsSectionEl) listeningStatsSectionEl.classList.add('hidden');
      if (homeTitleEl) homeTitleEl.textContent = "Ovoz chiqarib o'qing. Ravon gapirishni o'rganing.";
      if (homeLeadEl) homeLeadEl.textContent = "Mavzuni tanlang. Matn o'zi sekin yuqoriga suriladi, siz esa uni ovoz chiqarib o'qiysiz.";
      if (recsSectionEl) recsSectionEl.classList.remove('hidden');
      if (vocabSectionEl) vocabSectionEl.classList.add('hidden');

      const s = store.get();
      const mins = Math.round(s.secs / 60);

      if (s.reads > 0 || mins > 0) {
        statsEl.textContent = `Siz ${s.reads} marta mashq qildingiz, jami ${mins} daqiqa.`;
      } else {
        statsEl.textContent = '';
      }

      const filtered = (currentLevelFilter === 'all')
        ? topicsData
        : topicsData.filter((t) => t.level === currentLevelFilter);

      listEl.innerHTML = filtered.map((t, idx) => {
        const isDone = Boolean(s.done[t.id]);
        const numStr = String(idx + 1).padStart(2, '0');
        const wCount = countWords(t.text);

        return `
          <button class="topic ${isDone ? 'done' : ''}" data-id="${t.id}" data-type="speaking" type="button">
            <span class="n">${numStr}</span>
            <span class="t">${escapeHtml(t.title)}</span>
            <span class="lvl">${t.level}</span>
            <span class="m">${wCount} so'z</span>
          </button>
        `;
      }).join('');

      renderRecordingsList();
    }
  }

  /* ---------- Shaxsiy Lug'at (Vocabulary List) ---------- */
  function renderVocabList() {
    if (!vocabSectionEl) return;
    const list = store.getVocab();
    if (vocabCountEl) {
      vocabCountEl.textContent = `${list.length} ta so'z`;
    }

    if (list.length === 0) {
      if (vocabEmptyEl) vocabEmptyEl.classList.remove('hidden');
      if (vocabListEl) vocabListEl.innerHTML = '';
      return;
    }

    if (vocabEmptyEl) vocabEmptyEl.classList.add('hidden');
    if (vocabListEl) {
      vocabListEl.innerHTML = list.map((item) => {
        return `
          <div class="vocab-card" data-id="${item.id}" data-word="${escapeHtml(item.word)}">
            <div class="vocab-card-main">
              <div class="vocab-word">${escapeHtml(item.word)}</div>
              <div class="vocab-uz">${escapeHtml(item.uz)}</div>
              <div class="vocab-meta">${escapeHtml(item.topicTitle || '')} · ${item.date || ''}</div>
            </div>
            <div class="vocab-acts">
              <button class="btn-vocab-play" type="button" data-act="play">Eshitish</button>
              <button class="btn-vocab-del" type="button" data-act="del">O'chirish</button>
            </div>
          </div>
        `;
      }).join('');
    }
  }

  if (vocabListEl) {
    vocabListEl.addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-act]');
      if (!btn) return;
      const card = btn.closest('.vocab-card');
      if (!card) return;
      const id = card.dataset.id;
      const word = card.dataset.word;
      const act = btn.dataset.act;

      if (act === 'play') {
        speakText(word, 0.8);
      } else if (act === 'del') {
        store.deleteVocab(id);
        renderVocabList();
      }
    });
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
    if (!btn) return;
    const id = Number(btn.dataset.id);
    if (isNaN(id)) return;
    const type = btn.dataset.type || currentMode;
    if (type === 'listening') {
      openListeningExercise(id);
    } else if (type === 'reading') {
      openReadingTopic(id);
    } else {
      openTopic(id);
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
    if (!readerEl.classList.contains('hidden')) {
      pauseScroll();
    }
    const word = el.dataset.word || el.textContent;
    const uz = el.dataset.uz || '';

    swEl.textContent = word;
    suEl.textContent = uz;

    if (sSaveBtn) {
      if (store.isVocabSaved(word)) {
        sSaveBtn.textContent = 'Saqlangan';
        sSaveBtn.classList.add('active');
      } else {
        sSaveBtn.textContent = 'Saqlash';
        sSaveBtn.classList.remove('active');
      }
    }

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

  if (readingTextEl) {
    readingTextEl.addEventListener('click', (e) => {
      const hw = e.target.closest('.hw');
      if (hw) {
        e.stopPropagation();
        openWordSheet(hw);
      }
    });

    readingTextEl.addEventListener('keydown', (e) => {
      if (e.target.classList.contains('hw') && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        openWordSheet(e.target);
      }
    });
  }

  sListenBtn.addEventListener('click', () => {
    speakText(swEl.textContent, 0.8);
  });

  if (sSaveBtn) {
    sSaveBtn.addEventListener('click', () => {
      const word = swEl.textContent.trim();
      const uz = suEl.textContent.trim();
      if (!word) return;

      if (store.isVocabSaved(word)) {
        const list = store.getVocab();
        const item = list.find((v) => v.word.toLowerCase() === word.toLowerCase());
        if (item) store.deleteVocab(item.id);
        sSaveBtn.textContent = 'Saqlash';
        sSaveBtn.classList.remove('active');
      } else {
        const topicTitle = currentReadingTopic ? currentReadingTopic.title : '';
        store.saveVocab(word, uz, topicTitle);
        sSaveBtn.textContent = 'Saqlangan';
        sSaveBtn.classList.add('active');
      }
      renderVocabList();
    });
  }

  sGoBtn.addEventListener('click', () => {
    sheetEl.classList.add('hidden');
    if (!readerEl.classList.contains('hidden')) {
      playScroll();
    }
  });

  /* ==========================================================================
     Reading (O'qish, Tezlik, Audio va Comprehension Test) Mantiqi
     ========================================================================== */
  let currentReadingTopic = null;
  let activeReadingQuestions = [];
  let currentQuizQCount = store.getReadingQuizCount();
  let readingAnswers = {};
  let readingStartTime = 0;

  function sampleRandomQuestions(allQuestions, count = 3) {
    if (!Array.isArray(allQuestions) || allQuestions.length === 0) return [];
    if (allQuestions.length <= count) return [...allQuestions];
    const shuffled = [...allQuestions];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, count);
  }
  let readingTimerInterval = null;
  let readingTimerSecs = 0;
  let currentReadingFontSize = store.getReadingFontSize();

  function applyReadingFontSize(size) {
    currentReadingFontSize = size;
    store.setReadingFontSize(size);
    if (readingTextEl) {
      readingTextEl.style.fontSize = `${size}px`;
    }
  }

  function startReadingTimer() {
    stopReadingTimer();
    readingStartTime = Date.now();
    readingTimerSecs = 0;
    if (readingTimerEl) readingTimerEl.textContent = '00:00';
    if (readingFinishReadBtn) readingFinishReadBtn.classList.remove('hidden');
    if (readingSpeedBadgeEl) readingSpeedBadgeEl.classList.add('hidden');

    readingTimerInterval = setInterval(() => {
      readingTimerSecs = Math.floor((Date.now() - readingStartTime) / 1000);
      const mm = String(Math.floor(readingTimerSecs / 60)).padStart(2, '0');
      const ss = String(readingTimerSecs % 60).padStart(2, '0');
      if (readingTimerEl) readingTimerEl.textContent = `${mm}:${ss}`;
    }, 1000);
  }

  function stopReadingTimer() {
    if (readingTimerInterval) {
      clearInterval(readingTimerInterval);
      readingTimerInterval = null;
    }
  }

  function updateQuizCountButtons() {
    const btns = document.querySelectorAll('.quiz-count-btn');
    btns.forEach((b) => {
      const c = Number(b.dataset.count);
      b.classList.toggle('active', c === currentQuizQCount);
    });
  }

  function updateQuizDesc() {
    const descEl = $('quizDesc');
    if (descEl) {
      const totalBank = (currentReadingTopic && currentReadingTopic.questions) ? currentReadingTopic.questions.length : 20;
      if (currentQuizQCount >= totalBank) {
        descEl.textContent = `Mavzudagi barcha ${totalBank} ta savol tasodifiy tartibda berildi.`;
      } else {
        descEl.textContent = `20 ta savollik bazadan tasodifiy ${currentQuizQCount} ta savol tanlandi.`;
      }
    }
  }

  function openReadingTopic(id) {
    const topic = readingTopicsData.find((t) => t.id === id) || readingTopicsData[0];
    if (!topic) return;

    currentReadingTopic = topic;
    readingAnswers = {};
    activeReadingQuestions = sampleRandomQuestions(topic.questions, currentQuizQCount);

    homeEl.classList.add('hidden');
    readerEl.classList.add('hidden');
    readingReaderEl.classList.remove('hidden');

    if (rReadingTitleEl) rReadingTitleEl.textContent = topic.title;
    if (rReadingLvlEl) rReadingLvlEl.textContent = topic.level;

    if (readingArticleTitleEl) readingArticleTitleEl.textContent = topic.title;
    const wCount = countWords(topic.text);
    const totalBank = topic.questions ? topic.questions.length : 20;
    const sessionCount = activeReadingQuestions.length;
    if (readingMetaLineEl) {
      readingMetaLineEl.textContent = `${topic.levelName} · ${wCount} so'z · ${totalBank} ta savoldan tasodifiy ${sessionCount} tasi`;
    }

    updateQuizCountButtons();
    updateQuizDesc();

    readingTextEl.innerHTML = renderFormattedText(topic.text);
    applyReadingFontSize(currentReadingFontSize);

    startReadingTimer();
    renderQuiz();

    const bodyEl = readingReaderEl.querySelector('.reading-body');
    if (bodyEl) bodyEl.scrollTop = 0;
  }

  function renderQuiz() {
    if (!currentReadingTopic || !activeReadingQuestions || activeReadingQuestions.length === 0) return;
    const questions = activeReadingQuestions;

    quizResultEl.classList.add('hidden');

    const letters = ['A', 'B', 'C', 'D'];

    quizListEl.innerHTML = questions.map((qObj, qIdx) => {
      const chosenOpt = readingAnswers[qIdx];
      const isAnswered = chosenOpt !== undefined;
      const isCorrect = isAnswered && chosenOpt === qObj.answer;

      let badgeHtml = `<span class="quiz-badge">${qIdx + 1}-savol</span>`;
      if (isAnswered) {
        if (isCorrect) {
          badgeHtml = `<span class="quiz-badge correct">To'g'ri</span>`;
        } else {
          badgeHtml = `<span class="quiz-badge wrong">Noto'g'ri</span>`;
        }
      }

      const optionsHtml = qObj.options.map((optText, optIdx) => {
        let optClasses = ['quiz-opt'];
        if (isAnswered) {
          if (optIdx === qObj.answer) {
            optClasses.push('correct');
          } else if (optIdx === chosenOpt) {
            optClasses.push('wrong');
          }
        }

        return `
          <button class="${optClasses.join(' ')}" data-q="${qIdx}" data-opt="${optIdx}" ${isAnswered ? 'disabled' : ''} type="button">
            <span class="quiz-opt-letter">${letters[optIdx] || optIdx + 1}</span>
            <span class="quiz-opt-text">${escapeHtml(optText)}</span>
          </button>
        `;
      }).join('');

      let evidenceHtml = '';
      if (isAnswered && qObj.evidence) {
        evidenceHtml = `
          <div class="quiz-evidence">
            <span class="quiz-evidence-label">Matndagi isbot:</span>
            <span class="quiz-evidence-text">"${escapeHtml(qObj.evidence)}"</span>
          </div>
        `;
      }

      return `
        <div class="quiz-card" data-q="${qIdx}">
          <div class="quiz-card-head">
            <div class="quiz-q-text">${qIdx + 1}. ${escapeHtml(qObj.q)}</div>
            ${badgeHtml}
          </div>
          <div class="quiz-options">
            ${optionsHtml}
          </div>
          ${evidenceHtml}
        </div>
      `;
    }).join('');

    checkQuizCompletion();
  }

  function checkQuizCompletion() {
    if (!currentReadingTopic || !activeReadingQuestions || activeReadingQuestions.length === 0) return;
    const questions = activeReadingQuestions;
    const totalQ = questions.length;
    const answeredCount = Object.keys(readingAnswers).length;

    if (answeredCount === totalQ) {
      let correctCount = 0;
      questions.forEach((qObj, qIdx) => {
        if (readingAnswers[qIdx] === qObj.answer) {
          correctCount++;
        }
      });

      quizResultEl.classList.remove('hidden');
      quizResultScoreEl.textContent = `${correctCount} / ${totalQ} to'g'ri javob`;

      if (correctCount === totalQ) {
        quizResultMsgEl.textContent = "Ajoyib natija! Matnni to'liq tushundingiz va barcha savollarga to'g'ri javob berdingiz.";
      } else if (correctCount >= Math.ceil(totalQ / 2)) {
        quizResultMsgEl.textContent = `Yaxshi natija! Siz ${totalQ} ta savoldan ${correctCount} tasiga to'g'ri javob berdingiz.`;
      } else {
        quizResultMsgEl.textContent = "Matnni yana bir bor diqqat bilan o'qib, qayta urinib ko'rishingiz mumkin.";
      }

      store.saveReadingResult(currentReadingTopic.id, correctCount, totalQ);
    }
  }

  quizListEl.addEventListener('click', (e) => {
    const optBtn = e.target.closest('.quiz-opt');
    if (!optBtn) return;
    const qIdx = Number(optBtn.dataset.q);
    const optIdx = Number(optBtn.dataset.opt);
    if (isNaN(qIdx) || isNaN(optIdx)) return;
    if (readingAnswers[qIdx] !== undefined) return;

    readingAnswers[qIdx] = optIdx;
    renderQuiz();
  });

  quizRetryBtn.addEventListener('click', () => {
    readingAnswers = {};
    if (currentReadingTopic && currentReadingTopic.questions) {
      activeReadingQuestions = sampleRandomQuestions(currentReadingTopic.questions, currentQuizQCount);
    }
    renderQuiz();
    quizSectionEl.scrollIntoView({ behavior: 'smooth' });
  });

  const quizCountSelectorEl = $('quizCountSelector');
  if (quizCountSelectorEl) {
    quizCountSelectorEl.addEventListener('click', (e) => {
      const btn = e.target.closest('.quiz-count-btn');
      if (!btn) return;
      const count = Number(btn.dataset.count);
      if (!count || count === currentQuizQCount) return;
      currentQuizQCount = count;
      store.setReadingQuizCount(count);
      updateQuizCountButtons();
      updateQuizDesc();
      readingAnswers = {};
      if (currentReadingTopic && currentReadingTopic.questions) {
        activeReadingQuestions = sampleRandomQuestions(currentReadingTopic.questions, currentQuizQCount);
        const wCount = countWords(currentReadingTopic.text);
        const totalBank = currentReadingTopic.questions.length;
        const sessionCount = activeReadingQuestions.length;
        if (readingMetaLineEl) {
          readingMetaLineEl.textContent = `${currentReadingTopic.levelName} · ${wCount} so'z · ${totalBank} ta savoldan tasodifiy ${sessionCount} tasi`;
        }
      }
      renderQuiz();
    });
  }

  if (readingFinishReadBtn) {
    readingFinishReadBtn.addEventListener('click', () => {
      stopReadingTimer();
      const elapsedSec = Math.max(1, readingTimerSecs);
      const wCount = currentReadingTopic ? countWords(currentReadingTopic.text) : 100;
      const wpm = Math.round((wCount / elapsedSec) * 60);

      store.saveReadingWpm(wpm);

      const mins = Math.floor(elapsedSec / 60);
      const secs = elapsedSec % 60;
      let timeStr = `${elapsedSec} soniya`;
      if (mins > 0) {
        timeStr = `${mins} daqiqa ${secs} soniya`;
      }

      if (readingSpeedBadgeEl) {
        readingSpeedBadgeEl.textContent = `Tezlik: ${wpm} so'z/daqiqa (${timeStr})`;
        readingSpeedBadgeEl.classList.remove('hidden');
      }
      readingFinishReadBtn.classList.add('hidden');

      if (quizSectionEl) {
        quizSectionEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  if (fontSizeDownBtn) {
    fontSizeDownBtn.addEventListener('click', () => {
      const newSize = Math.max(15, currentReadingFontSize - 2);
      applyReadingFontSize(newSize);
    });
  }

  if (fontSizeUpBtn) {
    fontSizeUpBtn.addEventListener('click', () => {
      const newSize = Math.min(26, currentReadingFontSize + 2);
      applyReadingFontSize(newSize);
    });
  }

  function exitReading() {
    stopReadingTimer();
    readingReaderEl.classList.add('hidden');
    homeEl.classList.remove('hidden');
    sheetEl.classList.add('hidden');
    renderHome();
  }

  readingBackBtn.addEventListener('click', exitReading);
  quizFinishBtn.addEventListener('click', exitReading);

  /* ==========================================================================
     Listening (Audio Tinglash, Ovoz, Pleyer va 8 ta Savol) Mantiqi
     ========================================================================== */
  let currentListeningExercise = null;
  let currentQIndex = 0; // 0..7
  let listeningAnswers = {}; // { [qId]: answer }
  let playbackSpeed = 1.0;
  let isMuted = false;
  let audioTimerInterval = null;
  let audioCurrentSec = 0;
  let audioTotalSec = 35;
  let audioState = 'idle'; // 'idle' | 'playing' | 'paused' | 'ended'
  let currentUtterance = null;

  function getNativeFemaleVoice() {
    if (!('speechSynthesis' in window)) return null;
    const voices = window.speechSynthesis.getVoices();
    if (!voices || voices.length === 0) return null;

    const preferred = [
      'Google US English', 'Microsoft Zira', 'Samantha', 'Victoria', 'Karen',
      'Tessa', 'Moira', 'Fiona', 'Veena', 'en-US-Standard-C', 'en-US-Neural2-F'
    ];
    for (const name of preferred) {
      const match = voices.find((v) => v.name.toLowerCase().includes(name.toLowerCase()));
      if (match) return match;
    }

    const enVoices = voices.filter((v) => v.lang && v.lang.startsWith('en'));
    const female = enVoices.find((v) => /female|woman|girl/i.test(v.name));
    if (female) return female;

    const usVoice = voices.find((v) => v.lang === 'en-US');
    if (usVoice) return usVoice;

    return enVoices[0] || voices[0] || null;
  }

  function calculateAudioRate(level, speed) {
    let base = 0.95;
    if (level === 'A1' || level === 'A2') base = 0.88;
    else if (level === 'B1') base = 0.95;
    else if (level === 'B2' || level === 'C1') base = 1.0;
    return Math.max(0.6, Math.min(1.8, base * speed));
  }

  function updatePlayerUI() {
    if (!playerProgressFillEl || !playerTimeCurEl || !playerTimeDurEl) return;
    const pct = audioTotalSec > 0 ? Math.min(100, Math.max(0, (audioCurrentSec / audioTotalSec) * 100)) : 0;
    playerProgressFillEl.style.width = `${pct}%`;
    playerTimeCurEl.textContent = formatDuration(audioCurrentSec);
    playerTimeDurEl.textContent = formatDuration(audioTotalSec);

    if (playerStatusTextEl) {
      if (audioState === 'playing') {
        playerStatusTextEl.textContent = 'Audio tinglanmoqda... (diqqat bilan tinglang)';
      } else if (audioState === 'paused') {
        playerStatusTextEl.textContent = 'Pauzada. Davom ettirish uchun bosing.';
      } else if (audioState === 'ended') {
        playerStatusTextEl.textContent = 'Audio yakunlandi. Quyidagi 8 ta savolga javob bering.';
      } else {
        playerStatusTextEl.textContent = 'Tinglashga tayyor';
      }
    }

    if (playerPulseDotEl) {
      playerPulseDotEl.classList.toggle('playing', audioState === 'playing');
    }

    if (listeningPlayBtn) {
      if (audioState === 'playing') {
        listeningPlayBtn.classList.add('playing');
        listeningPlayBtn.setAttribute('aria-label', 'Pause audio');
        listeningPlayBtn.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="4" width="4" height="16" rx="1"></rect>
            <rect x="14" y="4" width="4" height="16" rx="1"></rect>
          </svg>
        `;
      } else {
        listeningPlayBtn.classList.remove('playing');
        listeningPlayBtn.setAttribute('aria-label', 'Play audio');
        listeningPlayBtn.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        `;
      }
    }
  }

  function startAudioPlayback() {
    if (!currentListeningExercise) return;
    if (!('speechSynthesis' in window)) {
      if (playerStatusTextEl) playerStatusTextEl.textContent = "Brauzeringiz ovoz tizimini qo'llab-quvvatlamaydi.";
      return;
    }

    window.speechSynthesis.cancel();
    audioState = 'playing';
    updatePlayerUI();

    const script = currentListeningExercise.audioScript || currentListeningExercise.audioText || currentListeningExercise.transcript || '';
    const utt = new SpeechSynthesisUtterance(script);
    currentUtterance = utt;

    const femaleVoice = getNativeFemaleVoice();
    if (femaleVoice) utt.voice = femaleVoice;
    utt.lang = 'en-US';
    utt.rate = calculateAudioRate(currentListeningExercise.level, playbackSpeed);
    utt.volume = isMuted ? 0 : 1;

    const estimatedDuration = Math.round((currentListeningExercise.durationSec || 35) / playbackSpeed);
    audioTotalSec = estimatedDuration;
    if (audioCurrentSec >= audioTotalSec) {
      audioCurrentSec = 0;
    }

    const startWallTime = Date.now() - (audioCurrentSec * 1000);

    if (audioTimerInterval) clearInterval(audioTimerInterval);
    audioTimerInterval = setInterval(() => {
      if (audioState !== 'playing') return;
      const elapsed = (Date.now() - startWallTime) / 1000;
      audioCurrentSec = Math.min(audioTotalSec, elapsed);
      updatePlayerUI();
      if (audioCurrentSec >= audioTotalSec) {
        finishAudioPlayback();
      }
    }, 100);

    utt.onend = () => {
      finishAudioPlayback();
    };

    utt.onerror = (e) => {
      console.warn('SpeechSynthesis xatolik:', e);
      finishAudioPlayback();
    };

    window.speechSynthesis.speak(utt);
  }

  function pauseAudioPlayback() {
    audioState = 'paused';
    if (audioTimerInterval) {
      clearInterval(audioTimerInterval);
      audioTimerInterval = null;
    }
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    updatePlayerUI();
  }

  function finishAudioPlayback() {
    audioState = 'ended';
    audioCurrentSec = audioTotalSec;
    if (audioTimerInterval) {
      clearInterval(audioTimerInterval);
      audioTimerInterval = null;
    }
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    updatePlayerUI();
  }

  function restartAudioPlayback() {
    audioCurrentSec = 0;
    startAudioPlayback();
  }

  function openListeningExercise(id) {
    const ex = listeningExercisesData.find((item) => item.id === id) || listeningExercisesData[0];
    if (!ex) return;

    currentListeningExercise = ex;
    currentQIndex = 0;
    listeningAnswers = {};
    audioCurrentSec = 0;
    audioTotalSec = ex.durationSec || 35;
    audioState = 'idle';

    homeEl.classList.add('hidden');
    readerEl.classList.add('hidden');
    readingReaderEl.classList.add('hidden');
    listeningReaderEl.classList.remove('hidden');

    if (rListeningTitleEl) rListeningTitleEl.textContent = ex.title;
    if (rListeningLvlEl) rListeningLvlEl.textContent = ex.level;
    const partLabel = ex.partName || `Part ${ex.part}`;
    const durLabel = ex.duration || (ex.durationSec ? formatDuration(ex.durationSec) : '00:35');
    if (rListeningPartEl) rListeningPartEl.textContent = `Part ${ex.part}`;

    if (listeningExerciseTitleEl) listeningExerciseTitleEl.textContent = ex.title;
    if (listeningMetaLineEl) {
      listeningMetaLineEl.textContent = `${ex.levelName || ex.level} · ${partLabel} · ${durLabel} · 8 ta savol`;
    }

    listeningResultsSectionEl.classList.add('hidden');
    listeningTranscriptCardEl.classList.add('hidden');
    if (lToggleTranscriptBtn) {
      lToggleTranscriptBtn.textContent = "Transkriptni ko'rish (Audio matni)";
    }
    listeningQuizSectionEl.classList.remove('hidden');

    playbackSpeed = 1.0;
    if (listeningSpeedSelectorEl) {
      listeningSpeedSelectorEl.querySelectorAll('.speed-btn').forEach((b) => {
        b.classList.toggle('active', parseFloat(b.dataset.speed) === 1.0);
      });
    }
    updatePlayerUI();

    renderQuestionStepper();
    renderActiveQuestion();

    const bodyEl = listeningReaderEl.querySelector('.listening-body');
    if (bodyEl) bodyEl.scrollTop = 0;

    setTimeout(() => {
      startAudioPlayback();
    }, 350);
  }

  function isQuestionAnswered(qId) {
    if (!currentListeningExercise) return false;
    const q = currentListeningExercise.questions.find((item) => item.id === qId);
    if (!q) return false;
    const ans = listeningAnswers[qId];
    if (ans === undefined || ans === null) return false;

    if (q.type === 'multiple_choice' || q.type === 'true_false') {
      return true;
    }
    if (q.type === 'fill_blank' || q.type === 'short_answer') {
      return typeof ans === 'string' && ans.trim().length > 0;
    }
    if (q.type === 'matching') {
      return ans !== undefined && ans !== null;
    }
    if (q.type === 'ordering') {
      return Array.isArray(ans) && ans.length === (q.options ? q.options.length : 4);
    }
    return false;
  }

  function renderQuestionStepper() {
    if (!qStepperEl || !currentListeningExercise) return;
    const questions = currentListeningExercise.questions;

    qStepperEl.innerHTML = questions.map((q, idx) => {
      const isActive = idx === currentQIndex;
      const isAnswered = isQuestionAnswered(q.id);
      const classes = ['step-dot'];
      if (isActive) classes.push('active');
      if (isAnswered) classes.push('answered');

      return `
        <button class="${classes.join(' ')}" data-idx="${idx}" type="button" aria-label="${idx + 1}-savol">
          ${idx + 1}
        </button>
      `;
    }).join('');

    const answeredCount = questions.filter((q) => isQuestionAnswered(q.id)).length;
    if (listeningQuizProgressTextEl) {
      listeningQuizProgressTextEl.textContent = `${answeredCount} / 8 ta savolga javob berildi`;
    }
    if (qNavIndicatorEl) {
      qNavIndicatorEl.textContent = `Savol: ${currentQIndex + 1} / 8`;
    }
    if (qPrevBtn) {
      qPrevBtn.disabled = (currentQIndex === 0);
    }
    if (qNextBtn) {
      qNextBtn.disabled = (currentQIndex === 7);
    }
  }

  function getQuestionTypeLabel(type) {
    switch (type) {
      case 'multiple_choice': return 'Multiple Choice';
      case 'true_false': return 'True / False';
      case 'fill_blank': return 'Fill in the Blank';
      case 'short_answer': return 'Short Answer';
      case 'matching': return 'Matching';
      case 'ordering': return 'Ordering';
      default: return 'Savol';
    }
  }

  function renderActiveQuestion() {
    if (!currentListeningExercise || !qActiveCardEl) return;
    const q = currentListeningExercise.questions[currentQIndex];
    if (!q) return;

    const letters = ['A', 'B', 'C', 'D'];
    const currentAns = listeningAnswers[q.id];

    let bodyHtml = '';

    if (q.type === 'multiple_choice') {
      bodyHtml = `
        <div class="q-options-grid">
          ${q.options.map((optText, optIdx) => {
            const isSel = currentAns === optIdx;
            return `
              <button class="l-opt-btn ${isSel ? 'selected' : ''}" data-opt="${optIdx}" type="button">
                <span class="l-opt-letter">${letters[optIdx] || optIdx + 1}</span>
                <span class="l-opt-text">${escapeHtml(optText)}</span>
              </button>
            `;
          }).join('')}
        </div>
      `;
    } else if (q.type === 'true_false') {
      bodyHtml = `
        <div class="q-tf-grid">
          <button class="l-tf-btn ${currentAns === 'True' ? 'selected' : ''}" data-val="True" type="button">
            True
          </button>
          <button class="l-tf-btn ${currentAns === 'False' ? 'selected' : ''}" data-val="False" type="button">
            False
          </button>
        </div>
      `;
    } else if (q.type === 'fill_blank') {
      bodyHtml = `
        <div class="l-text-input-wrap">
          <label class="l-input-label">Bo'sh joyga to'g'ri so'z yoki iborani yozing:</label>
          <input type="text" class="l-blank-input" id="lBlankInput" placeholder="${escapeHtml(q.placeholder || 'Javobingizni yozing...')}" value="${escapeHtml(currentAns || '')}" autocomplete="off">
        </div>
      `;
    } else if (q.type === 'short_answer') {
      bodyHtml = `
        <div class="l-text-input-wrap">
          <label class="l-input-label">Savolga qisqa va aniq javob yozing:</label>
          <input type="text" class="l-blank-input" id="lShortInput" placeholder="${escapeHtml(q.placeholder || 'Qisqa javobni yozing...')}" value="${escapeHtml(currentAns || '')}" autocomplete="off">
        </div>
      `;
    } else if (q.type === 'matching') {
      const pairs = (q.options || []).map((opt) => {
        const parts = opt.split('->').map((s) => s.trim());
        return { left: parts[0], right: parts[1] || parts[0] };
      });
      if (!currentAns) {
        listeningAnswers[q.id] = pairs.map((_, i) => i);
      }
      bodyHtml = `
        <div class="l-matching-container">
          <div class="l-ordering-tip">Tegishli ma'lumotlar va vazifalar juftligi:</div>
          ${pairs.map((p) => `
            <div class="l-matching-row">
              <div class="l-match-left"><strong>${escapeHtml(p.left)}</strong></div>
              <div class="l-match-right">${escapeHtml(p.right)}</div>
            </div>
          `).join('')}
        </div>
      `;
    } else if (q.type === 'ordering') {
      let orderArr = currentAns;
      if (!orderArr || !Array.isArray(orderArr)) {
        orderArr = q.options ? q.options.map((_, i) => i) : [0, 1, 2, 3];
        listeningAnswers[q.id] = orderArr;
      }
      bodyHtml = `
        <div class="l-ordering-container">
          <div class="l-ordering-tip">Voqealarni to'g'ri ketma-ketlikda joylashtirish uchun strelkalardan foydalaning:</div>
          ${orderArr.map((optIdx, displayPos) => {
            const optText = (q.options && q.options[optIdx]) ? q.options[optIdx] : `Hodisa ${optIdx + 1}`;
            return `
              <div class="l-order-item" data-pos="${displayPos}">
                <span class="l-order-num">${displayPos + 1}</span>
                <span class="l-order-text">${escapeHtml(optText)}</span>
                <div class="l-order-actions">
                  <button class="l-order-btn btn-up" type="button" data-act="up" ${displayPos === 0 ? 'disabled' : ''} aria-label="Yuqoriga surish">↑</button>
                  <button class="l-order-btn btn-down" type="button" data-act="down" ${displayPos === orderArr.length - 1 ? 'disabled' : ''} aria-label="Pastga surish">↓</button>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `;
    }

    qActiveCardEl.innerHTML = `
      <div class="q-card-head">
        <span class="q-type-badge">${getQuestionTypeLabel(q.type)}</span>
        <span class="q-num-badge">${currentQIndex + 1} / 8</span>
      </div>
      <div class="q-prompt">${escapeHtml(q.q)}</div>
      ${bodyHtml}
    `;

    renderQuestionStepper();
  }

  qActiveCardEl.addEventListener('click', (e) => {
    if (!currentListeningExercise) return;
    const q = currentListeningExercise.questions[currentQIndex];
    if (!q) return;

    const optBtn = e.target.closest('.l-opt-btn');
    if (optBtn) {
      const optIdx = parseInt(optBtn.dataset.opt, 10);
      listeningAnswers[q.id] = optIdx;
      renderActiveQuestion();
      return;
    }

    const tfBtn = e.target.closest('.l-tf-btn');
    if (tfBtn) {
      listeningAnswers[q.id] = tfBtn.dataset.val;
      renderActiveQuestion();
      return;
    }

    const orderBtn = e.target.closest('.l-order-btn');
    if (orderBtn) {
      const orderItem = orderBtn.closest('.l-order-item');
      if (!orderItem) return;
      const act = orderBtn.dataset.act;
      const pos = parseInt(orderItem.dataset.pos, 10);
      let orderArr = [...(listeningAnswers[q.id] || (q.options ? q.options.map((_, i) => i) : [0, 1, 2, 3]))];

      if (act === 'up' && pos > 0) {
        const temp = orderArr[pos];
        orderArr[pos] = orderArr[pos - 1];
        orderArr[pos - 1] = temp;
        listeningAnswers[q.id] = orderArr;
        renderActiveQuestion();
      } else if (act === 'down' && pos < orderArr.length - 1) {
        const temp = orderArr[pos];
        orderArr[pos] = orderArr[pos + 1];
        orderArr[pos + 1] = temp;
        listeningAnswers[q.id] = orderArr;
        renderActiveQuestion();
      }
      return;
    }
  });

  qActiveCardEl.addEventListener('input', (e) => {
    if (!currentListeningExercise) return;
    const q = currentListeningExercise.questions[currentQIndex];
    if (!q) return;
    if (e.target.classList.contains('l-blank-input')) {
      listeningAnswers[q.id] = e.target.value.trim();
      renderQuestionStepper();
    }
  });

  qActiveCardEl.addEventListener('change', (e) => {
    if (!currentListeningExercise) return;
    const q = currentListeningExercise.questions[currentQIndex];
    if (!q) return;
    if (e.target.classList.contains('l-match-select')) {
      const itemId = e.target.dataset.item;
      const val = e.target.value;
      const curMatches = { ...(listeningAnswers[q.id] || {}) };
      curMatches[itemId] = val;
      listeningAnswers[q.id] = curMatches;
      renderQuestionStepper();
    }
  });

  if (qPrevBtn) {
    qPrevBtn.addEventListener('click', () => {
      if (currentQIndex > 0) {
        currentQIndex--;
        renderActiveQuestion();
      }
    });
  }

  if (qNextBtn) {
    qNextBtn.addEventListener('click', () => {
      if (currentQIndex < 7) {
        currentQIndex++;
        renderActiveQuestion();
      }
    });
  }

  if (qStepperEl) {
    qStepperEl.addEventListener('click', (e) => {
      const btn = e.target.closest('.step-dot');
      if (!btn) return;
      const idx = parseInt(btn.dataset.idx, 10);
      if (!isNaN(idx) && idx >= 0 && idx < 8) {
        currentQIndex = idx;
        renderActiveQuestion();
      }
    });
  }

  function getUnansweredQuestionNumbers() {
    if (!currentListeningExercise) return [];
    const unanswered = [];
    currentListeningExercise.questions.forEach((q, idx) => {
      if (!isQuestionAnswered(q.id)) {
        unanswered.push(idx + 1);
      }
    });
    return unanswered;
  }

  if (listeningSubmitQuizBtn) {
    listeningSubmitQuizBtn.addEventListener('click', () => {
      const unanswered = getUnansweredQuestionNumbers();
      if (unanswered.length > 0) {
        if (unansweredModalMsgEl) {
          unansweredModalMsgEl.innerHTML = `Siz 8 ta savoldan quyidagilarga javob bermadingiz: <strong>${unanswered.join(', ')}-savol(lar)</strong>.<br>Testni baribir yakunlab, natijani ko'rmoqchimisiz?`;
        }
        if (unansweredModalEl) {
          unansweredModalEl.classList.remove('hidden');
        }
      } else {
        finishAndGradeListening();
      }
    });
  }

  if (unansweredCancelBtn) {
    unansweredCancelBtn.addEventListener('click', () => {
      if (unansweredModalEl) unansweredModalEl.classList.add('hidden');
      const unanswered = getUnansweredQuestionNumbers();
      if (unanswered.length > 0) {
        currentQIndex = unanswered[0] - 1;
        renderActiveQuestion();
      }
    });
  }

  if (unansweredConfirmBtn) {
    unansweredConfirmBtn.addEventListener('click', () => {
      if (unansweredModalEl) unansweredModalEl.classList.add('hidden');
      finishAndGradeListening();
    });
  }

  function cleanString(str) {
    return String(str || '')
      .trim()
      .toLowerCase()
      .replace(/['".,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
      .replace(/\s+/g, ' ');
  }

  function finishAndGradeListening() {
    if (!currentListeningExercise) return;
    pauseAudioPlayback();

    const questions = currentListeningExercise.questions;
    let correctCount = 0;
    let wrongCount = 0;
    let unansweredCount = 0;
    const gradedResults = [];

    questions.forEach((q, idx) => {
      const userAns = listeningAnswers[q.id];
      const answered = isQuestionAnswered(q.id);

      if (!answered) {
        unansweredCount++;
        gradedResults.push({
          index: idx + 1,
          question: q,
          userAnswer: null,
          isCorrect: false,
          isUnanswered: true
        });
        return;
      }

      let isCorrect = false;
      const targetAns = (q.answer !== undefined) ? q.answer : q.correctAnswer;
      const targetVariants = q.acceptedAnswers || q.acceptedVariants || [];

      if (q.type === 'multiple_choice') {
        isCorrect = (userAns === targetAns);
      } else if (q.type === 'true_false') {
        isCorrect = (String(userAns).toLowerCase() === String(targetAns).toLowerCase());
      } else if (q.type === 'fill_blank' || q.type === 'short_answer') {
        const cleanUser = cleanString(userAns);
        const cleanCorrect = cleanString(targetAns);
        const variants = targetVariants.map(cleanString);
        isCorrect = (cleanUser === cleanCorrect || variants.includes(cleanUser));
      } else if (q.type === 'matching') {
        if (Array.isArray(targetAns)) {
          isCorrect = Array.isArray(userAns) && userAns.every((val, i) => val === targetAns[i]);
        } else {
          isCorrect = Boolean(userAns);
        }
      } else if (q.type === 'ordering') {
        const correctOrder = targetAns || (q.options ? q.options.map((_, i) => i) : [0, 1, 2, 3]);
        isCorrect = Array.isArray(userAns) && userAns.every((val, i) => val === correctOrder[i]);
      }

      if (isCorrect) {
        correctCount++;
      } else {
        wrongCount++;
      }

      gradedResults.push({
        index: idx + 1,
        question: q,
        userAnswer: userAns,
        isCorrect,
        isUnanswered: false
      });
    });

    const total = questions.length;
    const pct = Math.round((correctCount / total) * 100);

    store.saveListeningResult(currentListeningExercise.id, correctCount, total);

    listeningQuizSectionEl.classList.add('hidden');
    listeningResultsSectionEl.classList.remove('hidden');

    if (lResultScoreEl) lResultScoreEl.textContent = `${correctCount} / ${total}`;
    if (lResultPercentEl) lResultPercentEl.textContent = `${pct}%`;

    if (lResultHeadlineEl) {
      if (correctCount === total) lResultHeadlineEl.textContent = "Mukammal natija! (100%)";
      else if (correctCount >= 6) lResultHeadlineEl.textContent = "Ajoyib eshitib tushunish mahorati!";
      else if (correctCount >= 4) lResultHeadlineEl.textContent = "Yaxshi natija, davom eting!";
      else lResultHeadlineEl.textContent = "Yana bir bor tinglab, qayta urinib ko'ring";
    }

    if (lResultFeedbackEl) {
      if (correctCount === total) {
        lResultFeedbackEl.textContent = "Siz audio matndagi barcha faktlar, tafsilotlar va nuqtalarni to'liq eshitib tushundingiz.";
      } else if (correctCount >= 6) {
        lResultFeedbackEl.textContent = "Nutqning asosiy g'oyasi va ko'p detallarini tushundingiz. Noto'g'ri bo'lgan savollarni audio iqtiboslari bilan tahlil qiling.";
      } else if (correctCount >= 4) {
        lResultFeedbackEl.textContent = "Bir nechta savollarda kalit so'zlarni ilg'adingiz. Transkriptni ko'rib chiqib, audio bilan birga qayta eshitish foydali bo'ladi.";
      } else {
        lResultFeedbackEl.textContent = "Bu daraja biroz murakkab tuyulishi mumkin. Audio matnini o'qib chiqing va tushunarsiz so'zlarni o'rganing.";
      }
    }

    if (lResultPillCorrectEl) lResultPillCorrectEl.textContent = `${correctCount} to'g'ri`;
    if (lResultPillWrongEl) lResultPillWrongEl.textContent = `${wrongCount} noto'g'ri`;
    if (lResultPillUnansEl) lResultPillUnansEl.textContent = `${unansweredCount} javobsiz`;

    const transcriptText = currentListeningExercise.transcript || currentListeningExercise.audioText || currentListeningExercise.audioScript || '';
    if (listeningTranscriptTextEl) {
      listeningTranscriptTextEl.innerHTML = transcriptText
        .split(/\n\n+/)
        .map((p) => `<p>${escapeHtml(p)}</p>`)
        .join('');
    }
    listeningTranscriptCardEl.classList.add('hidden');
    if (lToggleTranscriptBtn) {
      lToggleTranscriptBtn.textContent = "Transkriptni ko'rish (Audio matni)";
    }

    renderListeningReview(gradedResults);

    const bodyEl = listeningReaderEl.querySelector('.listening-body');
    if (bodyEl) bodyEl.scrollTop = 0;
  }

  function formatUserAnswer(q, userAns, isUnanswered) {
    if (isUnanswered) return '<span class="review-empty">Javob berilmadi</span>';
    const letters = ['A', 'B', 'C', 'D'];
    if (q.type === 'multiple_choice') {
      const optText = (q.options && q.options[userAns]) ? q.options[userAns] : '';
      return `<strong>${letters[userAns] || ''})</strong> ${escapeHtml(optText)}`;
    }
    if (q.type === 'true_false') {
      return `<strong>${escapeHtml(userAns)}</strong>`;
    }
    if (q.type === 'fill_blank' || q.type === 'short_answer') {
      return `"${escapeHtml(userAns)}"`;
    }
    if (q.type === 'matching') {
      if (Array.isArray(q.options)) {
        return q.options.map((opt) => `<div>• ${escapeHtml(opt)}</div>`).join('');
      }
      return escapeHtml(String(userAns));
    }
    if (q.type === 'ordering') {
      if (Array.isArray(userAns) && Array.isArray(q.options)) {
        return userAns.map((optIdx, pos) => `<div>${pos + 1}. ${escapeHtml(q.options[optIdx])}</div>`).join('');
      }
      return escapeHtml(String(userAns));
    }
    return escapeHtml(String(userAns));
  }

  function formatCorrectAnswer(q) {
    const letters = ['A', 'B', 'C', 'D'];
    const targetAns = (q.answer !== undefined) ? q.answer : q.correctAnswer;
    const targetVariants = q.acceptedAnswers || q.acceptedVariants || [];

    if (q.type === 'multiple_choice') {
      const optText = (q.options && q.options[targetAns]) ? q.options[targetAns] : targetAns;
      return `<strong>${letters[targetAns] || ''})</strong> ${escapeHtml(optText)}`;
    }
    if (q.type === 'true_false') {
      return `<strong>${escapeHtml(targetAns)}</strong>`;
    }
    if (q.type === 'fill_blank' || q.type === 'short_answer') {
      let str = `"${escapeHtml(targetAns)}"`;
      if (targetVariants && targetVariants.length > 0) {
        str += ` (qabul: ${targetVariants.map((v) => `"${escapeHtml(v)}"`).join(', ')})`;
      }
      return str;
    }
    if (q.type === 'matching') {
      if (Array.isArray(q.options)) {
        return q.options.map((opt) => `<div>• ${escapeHtml(opt)}</div>`).join('');
      }
      return escapeHtml(String(targetAns));
    }
    if (q.type === 'ordering') {
      const order = Array.isArray(targetAns) ? targetAns : (q.options ? q.options.map((_, i) => i) : []);
      if (Array.isArray(q.options)) {
        return order.map((optIdx, pos) => `<div>${pos + 1}. ${escapeHtml(q.options[optIdx])}</div>`).join('');
      }
      return escapeHtml(String(targetAns));
    }
    return escapeHtml(String(targetAns));
  }

  function renderListeningReview(results) {
    if (!listeningReviewListEl) return;
    listeningReviewListEl.innerHTML = results.map((res) => {
      const q = res.question;
      let badgeClass = 'correct';
      let badgeText = "To'g'ri";
      if (res.isUnanswered) {
        badgeClass = 'unanswered';
        badgeText = 'Javobsiz';
      } else if (!res.isCorrect) {
        badgeClass = 'wrong';
        badgeText = "Noto'g'ri";
      }

      return `
        <div class="review-card ${badgeClass}">
          <div class="review-card-head">
            <div class="review-q-text">${res.index}. ${escapeHtml(q.q)}</div>
            <span class="review-badge ${badgeClass}">${badgeText}</span>
          </div>
          <div class="review-answers">
            <div class="review-ans-row">
              <span class="review-ans-label">Sizning javobingiz:</span>
              <div class="review-ans-val user-val">${formatUserAnswer(q, res.userAnswer, res.isUnanswered)}</div>
            </div>
            ${!res.isCorrect ? `
              <div class="review-ans-row">
                <span class="review-ans-label">To'g'ri javob:</span>
                <div class="review-ans-val correct-val">${formatCorrectAnswer(q)}</div>
              </div>
            ` : ''}
          </div>
          ${q.audioQuote ? `
            <div class="review-quote">
              <span class="review-quote-label">Audio iqtibos:</span> "${escapeHtml(q.audioQuote)}"
            </div>
          ` : ''}
          ${q.explanation ? `
            <div class="review-expl">
              <span class="review-expl-label">Tushuntirish:</span> ${escapeHtml(q.explanation)}
            </div>
          ` : ''}
        </div>
      `;
    }).join('');
  }

  if (lToggleTranscriptBtn) {
    lToggleTranscriptBtn.addEventListener('click', () => {
      const isHidden = listeningTranscriptCardEl.classList.contains('hidden');
      if (isHidden) {
        listeningTranscriptCardEl.classList.remove('hidden');
        lToggleTranscriptBtn.textContent = 'Transkriptni yashirish';
        listeningTranscriptCardEl.scrollIntoView({ behavior: 'smooth' });
      } else {
        listeningTranscriptCardEl.classList.add('hidden');
        lToggleTranscriptBtn.textContent = "Transkriptni ko'rish (Audio matni)";
      }
    });
  }

  if (lRetryBtn) {
    lRetryBtn.addEventListener('click', () => {
      listeningAnswers = {};
      currentQIndex = 0;
      listeningResultsSectionEl.classList.add('hidden');
      listeningQuizSectionEl.classList.remove('hidden');
      renderQuestionStepper();
      renderActiveQuestion();
      restartAudioPlayback();
      const bodyEl = listeningReaderEl.querySelector('.listening-body');
      if (bodyEl) bodyEl.scrollTop = 0;
    });
  }

  if (lNextExerciseBtn) {
    lNextExerciseBtn.addEventListener('click', () => {
      if (!currentListeningExercise) return;
      const curIdx = listeningExercisesData.findIndex((ex) => ex.id === currentListeningExercise.id);
      const nextIdx = (curIdx + 1) % listeningExercisesData.length;
      const nextEx = listeningExercisesData[nextIdx];
      openListeningExercise(nextEx.id);
    });
  }

  function exitListening() {
    pauseAudioPlayback();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    if (unansweredModalEl) {
      unansweredModalEl.classList.add('hidden');
    }
    listeningReaderEl.classList.add('hidden');
    homeEl.classList.remove('hidden');
    renderHome();
  }

  if (lBackToListBtn) lBackToListBtn.addEventListener('click', exitListening);
  if (listeningBackBtn) listeningBackBtn.addEventListener('click', exitListening);

  if (listeningPlayBtn) {
    listeningPlayBtn.addEventListener('click', () => {
      if (audioState === 'playing') {
        pauseAudioPlayback();
      } else {
        startAudioPlayback();
      }
    });
  }

  if (listeningRestartBtn) {
    listeningRestartBtn.addEventListener('click', () => {
      restartAudioPlayback();
    });
  }

  if (playerProgressTrackEl) {
    playerProgressTrackEl.addEventListener('click', (e) => {
      if (!currentListeningExercise) return;
      const rect = playerProgressTrackEl.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const pct = Math.max(0, Math.min(1, clickX / rect.width));
      audioCurrentSec = Math.round(pct * audioTotalSec);
      updatePlayerUI();
      if (audioState === 'playing') {
        startAudioPlayback();
      }
    });
  }

  if (listeningSpeedSelectorEl) {
    listeningSpeedSelectorEl.addEventListener('click', (e) => {
      const btn = e.target.closest('.speed-btn');
      if (!btn) return;
      const speed = parseFloat(btn.dataset.speed);
      if (!speed) return;
      playbackSpeed = speed;
      listeningSpeedSelectorEl.querySelectorAll('.speed-btn').forEach((b) => {
        b.classList.toggle('active', parseFloat(b.dataset.speed) === playbackSpeed);
      });
      if (audioState === 'playing') {
        startAudioPlayback();
      } else {
        audioTotalSec = Math.round((currentListeningExercise.durationSec || 35) / playbackSpeed);
        updatePlayerUI();
      }
    });
  }

  if (listeningVolToggleBtn) {
    listeningVolToggleBtn.addEventListener('click', () => {
      isMuted = !isMuted;
      listeningVolToggleBtn.classList.toggle('active', isMuted);
      if (volIconEl) {
        if (isMuted) {
          volIconEl.innerHTML = `
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <line x1="23" y1="9" x2="17" y2="15"></line>
            <line x1="17" y1="9" x2="23" y2="15"></line>
          `;
        } else {
          volIconEl.innerHTML = `
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          `;
        }
      }
      if (audioState === 'playing' && currentUtterance) {
        startAudioPlayback();
      }
    });
  }

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
    // Listening ekrani ochiq bo'lsa
    if (listeningReaderEl && !listeningReaderEl.classList.contains('hidden')) {
      if (e.key === 'Escape') {
        if (unansweredModalEl && !unansweredModalEl.classList.contains('hidden')) {
          unansweredModalEl.classList.add('hidden');
        } else {
          exitListening();
        }
        return;
      }
      if (e.code === 'Space' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'SELECT') {
        e.preventDefault();
        if (audioState === 'playing') {
          pauseAudioPlayback();
        } else {
          startAudioPlayback();
        }
        return;
      }
      return;
    }

    // Reading ekrani ochiq bo'lsa
    if (readingReaderEl && !readingReaderEl.classList.contains('hidden')) {
      if (e.key === 'Escape') {
        if (!sheetEl.classList.contains('hidden')) {
          sheetEl.classList.add('hidden');
        } else {
          exitReading();
        }
      }
      return;
    }

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
