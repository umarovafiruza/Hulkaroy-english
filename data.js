/**
 * Speak Fast - Mavzular ma'lumotlari
 * CEFR darajalari: A1 (Oson), A2 (O'rta), B1 (Murakkab).
 * Har bir matnda qiyin so'zlar {word|uzbek translation} ko'rinishida belgilangan.
 */

const TOPICS = [
  /* ---------- A1 DARAJA (Boshlang'ich / Oson) ---------- */
  {
    id: 1,
    level: "A1",
    levelName: "A1 Oson",
    title: "My Morning",
    text: `I wake up at seven o'clock. I {wash|yuvmoq} my face and brush my teeth. Then I go to the kitchen.

I eat breakfast with my family. I like warm bread, cheese, and hot tea. Breakfast is my favorite {meal|ovqat}.

After breakfast, I put on my clothes. I take my bag and walk to the bus stop. The weather is sunny and fresh today. It is a good {start|boshlanish} to my day.`
  },
  {
    id: 2,
    level: "A1",
    levelName: "A1 Oson",
    title: "My Family",
    text: `I have a warm and loving family. There are four people in my home. My father, my mother, my younger sister, and me.

My father is a teacher. He is very {kind|mehribon} and helps people. My mother is a doctor. She cooks delicious food for us every evening.

My sister is eight years old. She likes to play with her {toys|o'yinchoqlar}. We love to spend our weekends {together|birgalikda}.`
  },
  {
    id: 3,
    level: "A1",
    levelName: "A1 Oson",
    title: "My Favorite Food",
    text: `I love good food. In the morning, I always drink clean water and eat eggs. It gives me good {energy|quvvat}.

At noon, I eat lunch with my friends. My favorite dish is plov. It has rice, carrots, and meat. It tastes very {delicious|mazali}.

In the evening, I prefer light food. I eat fresh green {salad|salat} and sweet apples. Eating fresh food keeps me happy and healthy.`
  },
  {
    id: 4,
    level: "A1",
    levelName: "A1 Oson",
    title: "Free Time",
    text: `In my free time, I like to {relax|dam olmoq}. After a busy day, I sit on my sofa and listen to quiet music.

Sometimes I read interesting books. I also enjoy walking in the {park|xiyobon} near my house. The air is clean, and there are many tall trees.

On Saturdays, I play football with my {friends|do'stlar}. We run, laugh, and have a lot of fun.`
  },
  {
    id: 5,
    level: "A1",
    levelName: "A1 Oson",
    title: "My Cat",
    text: `I have a small cat at home. Her name is Bella. She has white fur and big blue eyes.

Bella is very {playful|sho'x}. Every morning, she runs around the room and jumps on my bed to wake me up.

She likes to drink warm milk and sleep in the warm sun. Having a pet brings a lot of {joy|quvonch} and makes my home feel {cozy|shinam}.`
  },

  /* ---------- A2 DARAJA (O'rta-boshlang'ich) ---------- */
  {
    id: 6,
    level: "A2",
    levelName: "A2 O'rta",
    title: "Trip to Mountains",
    text: `Last month, my friends and I decided to take a short trip to the mountains. We left early in the morning by car. The roads were quiet and the air was fresh.

When we arrived, we saw snow on the high peaks. We walked along a small {river|daryo} and took many colorful photos.

At lunchtime, we sat on the grass and had a picnic. It was a wonderful way to escape the busy city and enjoy {nature|tabiat}. Traveling always gives me a feeling of {freedom|erkinlik}.`
  },
  {
    id: 7,
    level: "A2",
    levelName: "A2 O'rta",
    title: "Healthy Habits",
    text: `Staying healthy is not difficult, but it requires daily attention. First of all, drinking plenty of clean water helps your body work properly.

I try to walk at least five thousand steps every afternoon. Walking improves my mood and gives me fresh ideas. I also make sure to sleep eight hours every night so my mind can {recover|tiklanmoq}.

When you take care of your body, you feel more {active|faol} and ready for any daily {task|vazifa}.`
  },
  {
    id: 8,
    level: "A2",
    levelName: "A2 O'rta",
    title: "Learning English",
    text: `Learning a new language is an exciting adventure. I decided to study English because it allows me to communicate with people from different countries.

Every day, I spend twenty minutes listening to simple podcasts and reading texts aloud. At first, speaking was scary because I was afraid of making mistakes.

Now, I understand that making mistakes is a natural part of learning. Regular practice builds real {confidence|ishonch} and opens new {opportunities|imkoniyatlar} for study and {travel|sayohat}.`
  },
  {
    id: 9,
    level: "A2",
    levelName: "A2 O'rta",
    title: "A Good Working Day",
    text: `A productive working day starts with good planning. When I arrive at the office, I write down three main things I need to complete before the evening.

Working in a friendly team makes a big difference. When someone needs help, we share ideas and find solutions together. Good cooperation creates a positive working {environment|muhit}.

Taking short breaks between tasks is also important. It helps you stay focused, avoid feeling {tired|charchagan}, and achieve {success|muvaffaqiyat}.`
  },
  {
    id: 10,
    level: "A2",
    levelName: "A2 O'rta",
    title: "Life in the City",
    text: `Living in a modern city has many advantages. You can easily find good cafes, modern libraries, and public transport that takes you anywhere in minutes.

However, city life can sometimes be loud and crowded. Heavy traffic in the evening can {test|sinamoq} your patience.

That is why I enjoy visiting quiet parks on Sundays. Finding a peaceful balance between the fast city rhythm and quiet rest is essential for a {peaceful|xotirjam} and {happy|baxtli} life.`
  },

  /* ---------- B1 DARAJA (O'rta / Murakkab) ---------- */
  {
    id: 11,
    level: "B1",
    levelName: "B1 Murakkab",
    title: "Technology and Balance",
    text: `Technology changes our lives faster than ever before. Twenty years ago, we needed a paper map to find a place, but today smartphones {guide|yo'l ko'rsatmoq} us everywhere instantly.

I use technology to study, work, and stay in touch with friends across the world. However, constantly checking notifications can become an unhealthy {habit|odat} that harms our {attention|e'tibor}.

Setting boundaries, such as having screen-free mornings, helps us remain {focused|diqqatli}. Technology is an extraordinary tool, but we must learn to {control|boshqarmoq} how we use it.`
  },
  {
    id: 12,
    level: "B1",
    levelName: "B1 Murakkab",
    title: "Pursuing Dreams",
    text: `Everyone has dreams that inspire them. Some people dream of traveling the globe, while others want to build an innovative business or support their local community. A clear dream provides valuable {direction|yo'nalish} when life feels uncertain.

My primary goal is to speak English {fluently|ravon} and pursue higher education abroad. Although the destination feels distant, steady daily effort brings me closer.

I have realized that waiting for the perfect moment is not enough. When you {commit|o'zini bag'ishlamoq} to small, consistent actions, you eventually {achieve|erishmoq} meaningful results.`
  },
  {
    id: 13,
    level: "B1",
    levelName: "B1 Murakkab",
    title: "Protecting Planet",
    text: `Environmental protection is one of the most critical challenges of our time. Small everyday decisions, such as reducing plastic waste and saving electricity, make a significant {impact|ta'sir} when multiplied by millions of people.

I try to carry a reusable water bottle and walk instead of driving short distances. These simple habits require very little effort, yet they {contribute|hissa qo'shmoq} to a cleaner future.

Caring for nature is not an abstract concept. It is a shared {responsibility|mas'uliyat} that ensures future generations inherit a {thriving|gullab-yashnayotgan} planet.`
  },
  {
    id: 14,
    level: "B1",
    levelName: "B1 Murakkab",
    title: "Power of Patience",
    text: `In our fast-paced society, we often expect immediate success and instant gratification. Whether mastering a musical instrument or learning a language, real progress requires immense {patience|sabr}.

Whenever I encounter obstacles, I remind myself that difficulty is a sign of development. Without challenges, we cannot build mental {resilience|bardoshlilik} or discover our true capabilities.

Trusting the process and celebrating small daily victories turns difficult journeys into deeply {rewarding|manfaatli} and transformative experiences.`
  },
  {
    id: 15,
    level: "B1",
    levelName: "B1 Murakkab",
    title: "True Friendship",
    text: `True friendship is one of the most precious treasures in life. A genuine friend does not only celebrate your achievements, but also stands beside you during moments of doubt and {adversity|qiyinchilik}.

Even when life becomes demanding and distance separates us, meaningful connections remain strong. A short message or an honest conversation can instantly restore mutual {trust|ishonch}.

Investing time in sincere relationships creates an enduring {foundation|asos} of emotional safety and lifelong joy.`
  }
];

// Browser global va Node module eksportini qo'llab-quvvatlash
if (typeof window !== 'undefined') {
  window.TOPICS = TOPICS;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TOPICS };
}
