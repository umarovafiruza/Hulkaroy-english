# Speak Fast

Ingliz tilida ovoz chiqarib o'qish va ravon so'zlashuvni o'rganish uchun teleprompter uslubidagi zamonaviy veb-ilova.

Loyihada hech qanday framework yoki backend ishlatilmagan — faqat sof **HTML, CSS va JavaScript**.

---

## Asosiy Imkoniyatlar

1. **CEFR Darajalariga moslangan matnlar**:
   - **A1 Oson (5 ta)**: Kundalik sodda jumlalar va boshlang'ich leksika.
   - **A2 O'rta (5 ta)**: Amaliy mavzular va erkin nutq uchun qulay iboralar.
   - **B1 Murakkab (5 ta)**: Fikr yuritish va boyitilgan so'z boyligi.
   - Bosh sahifada darajalar bo'yicha tezkor filtrlar.

2. **Teleprompter uslubidagi avtomatik surilish**:
   - Tezlikni so'z/daqiqa (WPM) hisobida aniq boshqarish (60–260 so'z/daq).
   - Tezkor tanlovlar (*Sekin 80*, *O'rtacha 110*, *Tez 150*, *Tezkor 200*).
   - O'qish chizig'i markazlashtirilgan, yuqori va pastki qatorlar muloyim gradient bilan xiralashtiriladi.
   - Har bir qatorda 3–5 tagacha so'z joylashishi ta'minlangan (ravon talaffuz uchun qulay).

3. **Murakkab so'zlar (Hard Words) va talaffuz**:
   - Matndagi notanish so'zlar nuqtali chiziq bilan belgilangan.
   - Bosilganda o'qish avtomatik to'xtaydi, so'zning o'zbekcha tarjimasi chiqadi va Web Speech API orqali talaffuz qilib beriladi.

4. **Diktafon (Voice Recorder) va LocalStorage**:
   - O'qish jarayonida foydalanuvchi ovozi diktafon orqali yozib olinadi.
   - Yozilgan audio `localStorage`da saqlanadi (maksimal 3 dona audio, yangisi qo'shilganda eng eskisi o'chadi).
   - "Barakalla" yakuniy ekranida va Bosh sahifada yozuvlarni darhol tinglash (Eshitish/Pauza), o'chirish va siljitish imkoniyati.

5. **Minimalist va Ergonomik Mobil Dizayn**:
   - Oq fon, to'q qora matn va sokin kulrang elementlar.
   - Emojilar va ortiqcha bezaklarsiz sof tipografiya (Inter).
   - Mobil ekranda tugmalar qulay, bir tekis va tartibli joylashgan (Pauza, Boshidan, Yozuv).
   - Sensorli ekranlar va barcha qurilmalarga to'liq moslashuvchan (Responsive).

---

## Fayllar Tuzilmasi

```
Hulkaroy-english/
├── index.html       # Asosiy HTML sahifasi
├── style.css        # Minimalist dizayn va qulay mobil/desktop CSS
├── script.js        # Teleprompter, diktafon va TTS mantiqi
├── data.js          # A1, A2, B1 darajadagi 15 ta matnlar bazasi
└── README.md        # Loyiha haqida to'liq ma'lumot
```

---

## Ishga tushirish

Hech qanday o'rnatish yoki build qilish talab etilmaydi. Shunchaki `index.html` faylini istalgan brauzerda oching.
