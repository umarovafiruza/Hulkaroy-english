# Speak Fast & English Mastery Platform

Ingliz tilini har tomonlama o'rganish uchun zamonaviy va professional veb-platforma: **Shadowing** (Ravon gapirish), **Reading** (Matnni tushunish va tahlil qilish) hamda **Listening** (Audio tinglash va CEFR/IELTS uslubidagi tushunish mashqlari).

Loyihada hech qanday framework yoki backend ishlatilmagan — faqat sof **HTML, CSS va JavaScript**.

---

## Asosiy Bo'limlar va Imkoniyatlar

### 1. Shadowing Bo'limi (Ravon gapirish)
- **Teleprompter uslubidagi avtomatik surilish**: Tezlikni so'z/daqiqa (WPM) hisobida aniq boshqarish (60–260 so'z/daq) va tezkor tugmalar (*Sekin 80*, *O'rtacha 110*, *Tez 150*, *Tezkor 200*).
- **Diktafon (Ovoz yozib olish)**: Mashq davomida foydalanuvchi ovozi yozib olinadi va `localStorage`da saqlanadi (maksimal 3 dona audio FIFO prinsipi asosida).
- **Darajalar**: A1, A2, B1 darajalarida 15 ta matn.
- **Audio tinglash**: Har bir audio yozuvni darhol saytda tinglash (Eshitish/Pauza) va boshqarish imkoniyati.

### 2. Reading Bo'limi (O'qib tushunish va Tahlil)
- **Hikoyalar va maqolalar**: A1, A2, B1 darajalarida 15 ta alohida qiziqarli hikoyalar.
- **300 ta Savoldan iborat Katta Baza**: Har bir matnda 20 tadan, jami **300 ta comprehension savollari**.
- **Moslashuvchan Savollar Generatori (10 ta, 15 ta, 20 ta)**: Har bir mashg'ulotda standart 10 ta savol beriladi. Foydalanuvchi o'z xohishiga ko'ra test boshidagi selektor orqali 5 ta, 10 ta, 15 ta yoki barcha 20 ta savolni tanlab yechishi mumkin. "Qayta ishlash" bosilganda bazadan yangi tasodifiy savollar generatsiya qilinadi.
- **O'qish tezligi (WPM) va Taymer**: Foydalanuvchi matnni o'qish vaqtini o'lchaydi va "O'qib bo'ldim" tugmasini bosganda uning shaxsiy WPM (daqiqa/so'z) tezligini avtomatik hisoblab ko'rsatadi.
- **Shaxsiy Lug'at Daftari (Saved Vocabulary)**: Notanish so'zni bosganda "Saqlash" tugmasi orqali o'z shaxsiy lug'atiga qo'shish, Bosh sahifada saqlangan so'zlarni tinglash va o'rganish imkoniyati.
- **Shrift o'lchamini sozlash (`A−` va `A+`)**: O'qish qulayligi uchun matn shriftini kattalashtirish yoki kichiklashtirish.
- **Tezkor fikr-mulohaza va Matndan isbot (Evidence)**: Variant tanlanganda to'g'ri/noto'g'rilik bilan birga to'g'ri javob matnning qaysi qismida keltirilgani ko'rsatiladi.

### 3. Listening Bo'limi (Professional Audio Practice & Comprehension)
- **CEFR Darajalari bo'yicha Tizimlashtirilgan**: A1 (Beginner), A2 (Elementary), B1 (Intermediate), B2 (Upper-Intermediate) va C1 (Advanced) darajalaridagi 12 ta to'liq audio mashq.
- **6 ta Realistik Mashq Formati (Part 1–6)**:
  - *Part 1 — Everyday Conversations*: Kundalik suhbatlar (uchrashuv vaqtlari, yo'nalishlar, xaridlar).
  - *Part 2 — Monologue and Information*: E'lonlar, xizmat ko'rsatish va yo'riqnomalar.
  - *Part 3 — Academic Discussion*: Talabalar va ustozlar o'rtasidagi loyiha va vazifa muhokamalari.
  - *Part 4 — Lecture or Educational Talk*: Ilmiy va ta'limiy qisqa ma'ruzalar.
  - *Part 5 — Opinions and Attitudes*: Suhbatdoshlarning munosabati va qarashlarini solishtirish.
  - *Part 6 — Narrative and Story*: Qiziqarli shaxsiy hikoya va voqealar ketma-ketligi.
- **Professional Audio Pleer**:
  - Play / Pause, qayta tinglash (Restart), ovoz balandligi va mute boshqaruvi.
  - Interaktiv va seekable progress bar (istalgan soniyaga o'tish).
  - Jonli animatsiyali Waveform indikatori.
  - Tezlikni boshqarish: `0.8x`, `1.0x`, `1.2x`.
  - Tabiiy native ayol ovozida o'qish (Web Speech API).
- **Har bir Mashqda Aniq 8 ta Savol (Jami 96 ta savol)**:
  - Multiple Choice (A, B, C, D)
  - True / False
  - Fill in the Blank (bo'sh o'rinni to'ldirish)
  - Short Answer (qisqa yozma javob)
  - Matching (juftliklarni moslashtirish)
  - Ordering (voqealar ketma-ketligini joylashtirish uchun ↑ va ↓ strelkali boshqaruv)
- **Test Davomida Transkript Yashirinligi**: Eshitib tushunishni to'liq rivojlantirish uchun audio matni test vaqtida ko'rinmaydi.
- **Javobsiz Savollarni Aniqlash Modali**: Testni yakunlashdan avval javob berilmagan savollar raqamlari ko'rsatilib, foydalanuvchiga davom etish yoki yakunlash imkoni beriladi.
- **Batafsil Natijalar va Tahlil**:
  - Umumiy ball (masalan: `7 / 8`), foiz (`88%`) va darajaga mos xulosa.
  - To'g'ri, noto'g'ri va javobsiz savollar bo'yicha ko'rsatkichlar.
  - Transkriptni ko'rish/yashirish tugmasi (`Show Transcript`).
  - Har bir savol bo'yicha audio iqtibosi (`Audio iqtibos`) va tushuntirish (`Tushuntirish`).
  - Qayta urinish, Keyingi mashqqa o'tish va Mavzular ro'yxatiga qaytish.
- **Progress Tracking**: Bajarilgan mashqlar natijalari `localStorage`da saqlanadi va Bosh sahifadagi stat kartalarda avtomatik yangilanadi.

### 4. Umumiy Imkoniyatlar
- **Minimalist va Ergonomik Apple Dizayn Tizimi**: Oq-qora-kulrang palitra, nozik chegaralar, ortiqcha emojilarsiz toza Inter tipografiyasi.
- **3 Rejimli Boshqaruv Navigatsiyasi**: Yuqoridagi minimalist Tab orqali Shadowing, Reading va Listening rejimlari o'rtasida bir bosish bilan o'tish.
- **Mobil va Desktop Moslashuvchanligi**: Har bir element sensorli ekranlarda va barcha zamonaviy qurilmalarda qulay ishlaydi.

---

## Fayllar Tuzilmasi

```
Hulkaroy-english/
├── index.html       # Asosiy HTML (Shadowing, Reading va Listening interfeysi)
├── style.css        # Minimalist dizayn, audio pleer, stepper va moslashuvchan CSS
├── script.js        # Teleprompter, Audio Engine, quiz, diktafon va natijalar mantiqi
├── data.js          # Shadowing, Reading (300 savol) va Listening (96 savol) ma'lumotlar bazasi
└── README.md        # Loyiha haqida to'liq texnik hujjat
```

---

## Ishga tushirish

Hech qanday o'rnatish yoki build qilish talab etilmaydi. Shunchaki `index.html` faylini istalgan zamonaviy brauzerda oching.

---

## Ishga tushirish

Hech qanday o'rnatish yoki build qilish talab etilmaydi. Shunchaki `index.html` faylini istalgan zamonaviy brauzerda oching.
