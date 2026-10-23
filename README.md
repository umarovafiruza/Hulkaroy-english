# Speak Fast

Ingliz tilida ovoz chiqarib o'qish (Speaking) va matnni o'qib tushunish (Reading Comprehension) uchun zamonaviy veb-ilova.

Loyihada hech qanday framework yoki backend ishlatilmagan — faqat sof **HTML, CSS va JavaScript**.

---

## Asosiy Bo'limlar va Imkoniyatlar

### 1. Speaking Bo'limi (Ravon gapirish)
- **Teleprompter uslubidagi avtomatik surilish**: Tezlikni so'z/daqiqa (WPM) hisobida aniq boshqarish (60–260 so'z/daq) va tezkor tugmalar (*Sekin 80*, *O'rtacha 110*, *Tez 150*, *Tezkor 200*).
- **Diktafon (Ovoz yozib olish)**: Mashq davomida foydalanuvchi ovozi yozib olinadi va `localStorage`da saqlanadi (maksimal 3 dona audio FIFO prinsipi asosida).
- **Darajalar**: A1, A2, B1 darajalarida 15 ta matn.
- **Audio tinglash**: Har bir audio yozuvni darhol saytda tinglash (Eshitish/Pauza) va boshqarish imkoniyati.

### 2. Reading Bo'limi (O'qib tushunish va Tahlil)
- **Hikoyalar va maqolalar**: A1, A2, B1 darajalarida 15 ta alohida qiziqarli hikoyalar.
- **O'qish tezligi (WPM) va Taymer**: Foydalanuvchi matnni o'qish vaqtini o'lchaydi va "O'qib bo'ldim" tugmasini bosganda uning shaxsiy WPM (daqiqa/so'z) tezligini avtomatik hisoblab ko'rsatadi.
- **Shaxsiy Lug'at Daftari (Saved Vocabulary)**: Notanish so'zni bosganda "Saqlash" tugmasi orqali o'z shaxsiy lug'atiga qo'shish, Bosh sahifada saqlangan so'zlarni tinglash va o'rganish imkoniyati.
- **Shrift o'lchamini sozlash (`A−` va `A+`)**: O'qish qulayligi uchun matn shriftini kattalashtirish yoki kichiklashtirish.
- **Tushunish darajasini tekshirish (Quiz)**: Har bir matn ostida 3 tadan comprehension savollari.
- **Tezkor fikr-mulohaza va Matndan isbot (Evidence)**: Variant tanlanganda to'g'ri/noto'g'rilik bilan birga to'g'ri javob matnning qaysi qismida keltirilgani ko'rsatiladi.
- **Natija va hisobot**: Barcha savollar bajarilgach, umumiy ball (masalan, *3/3 to'g'ri javob*) va xulosaviy tavsiya ko'rsatiladi.
- **Qayta ishlash**: Testni istalgan vaqtda qayta yechish imkoniyati.

### 3. Umumiy Imkoniyatlar
- **Murakkab so'zlar (Hard Words) va Talaffuz**: Barcha matnlarda notanish so'zlar nuqtali chiziq bilan belgilangan. Bosilganda o'zbekcha tarjimasi chiqadi va Web Speech API orqali talaffuz qilib beriladi.
- **Minimalist va Ergonomik Mobil Dizayn**: Oq-qora-kulrang palitra, nozik chiziqlar, ortiqcha bezak va emojilarsiz toza Inter tipografiyasi.
- **Boshqaruv navigatsiyasi**: Yuqoridagi minimalist Tab orqali Speaking va Reading rejimlari o'rtasida bir bosish bilan o'tish.

---

## Fayllar Tuzilmasi

```
Hulkaroy-english/
├── index.html       # Asosiy HTML sahifasi (Speaking va Reading interfeysi)
├── style.css        # Minimalist dizayn, quiz va moslashuvchan CSS
├── script.js        # Teleprompter, quiz, diktafon va TTS mantiqi
├── data.js          # Speaking va Reading uchun A1, A2, B1 matnlar bazasi
└── README.md        # Loyiha haqida to'liq ma'lumot
```

---

## Ishga tushirish

Hech qanday o'rnatish yoki build qilish talab etilmaydi. Shunchaki `index.html` faylini istalgan zamonaviy brauzerda oching.
