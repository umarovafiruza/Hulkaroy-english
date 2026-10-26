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

/* ==========================================================================
   READING TOPICS - O'qish va tushunishni tekshirish uchun hikoyalar
   Har bir matnda 3 ta savol va qiyin so'zlar {word|tarjima} belgilanadi.
   ========================================================================== */
const READING_TOPICS = [
/* ==================== 101: The Lost Kitten (A1) ==================== */
  {
    id: 101,
    level: "A1",
    levelName: "A1 Oson",
    title: "The Lost Kitten",
    text: `On a warm sunny afternoon, Tom walked into his garden. He heard a very quiet {sound|tovush} behind the flowers.
    
He looked closely and saw a tiny white kitten. The kitten looked scared and had dirt on its {fur|yungi}. It was cold and hungry.
    
Tom brought a small bowl of warm milk and placed it gently on the grass. The kitten ran forward and drank all of it. Tom decided to {adopt|boqib olmoq} the sweet animal and named her Snow.`,
    questions: [
      { q: "Where did Tom walk on the afternoon?", options: ["Into his garden", "To the local park", "To the pet shop"], answer: 0, evidence: "Tom walked into his garden on a warm sunny afternoon." },
      { q: "What was the weather like when Tom went to the garden?", options: ["Rainy and cold", "Warm and sunny", "Dark and windy"], answer: 1, evidence: "On a warm sunny afternoon, Tom walked into his garden." },
      { q: "What kind of sound did Tom hear?", options: ["A loud barking", "A very quiet sound", "A noisy engine"], answer: 1, evidence: "He heard a very quiet sound behind the flowers." },
      { q: "Where was the sound coming from?", options: ["From inside his house", "From up in a tall tree", "Behind the flowers"], answer: 2, evidence: "He heard a very quiet sound behind the flowers." },
      { q: "What animal was hiding behind the flowers?", options: ["A tiny white kitten", "A brown puppy", "A little rabbit"], answer: 0, evidence: "He looked closely and saw a tiny white kitten." },
      { q: "What color was the kitten's fur?", options: ["Black", "White", "Orange"], answer: 1, evidence: "He looked closely and saw a tiny white kitten." },
      { q: "How did the kitten appear to Tom?", options: ["Angry and wild", "Scared with dirt on its fur", "Sleeping peacefully"], answer: 1, evidence: "The kitten looked scared and had dirt on its fur." },
      { q: "What was on the kitten's fur?", options: ["Dirt", "Water", "Leaves"], answer: 0, evidence: "The kitten looked scared and had dirt on its fur." },
      { q: "How did the kitten feel physically?", options: ["Hot and sleepy", "Cold and hungry", "Thirsty and tired"], answer: 1, evidence: "It was cold and hungry." },
      { q: "What did Tom bring to help the kitten?", options: ["A small bowl of warm milk", "A piece of dry bread", "A bowl of cold water"], answer: 0, evidence: "Tom brought a small bowl of warm milk." },
      { q: "Where did Tom place the bowl of milk?", options: ["On the wooden table", "Gently on the grass", "Inside a box"], answer: 1, evidence: "He placed it gently on the grass." },
      { q: "How did the kitten react to the milk?", options: ["Ran forward and drank all of it", "Walked away into the bushes", "Did not touch it"], answer: 0, evidence: "The kitten ran forward and drank all of it." },
      { q: "How much of the milk did the kitten drink?", options: ["All of it", "Only a little bit", "Half of the bowl"], answer: 0, evidence: "The kitten ran forward and drank all of it." },
      { q: "What decision did Tom make about the kitten?", options: ["To adopt the sweet animal", "To sell it to a neighbor", "To leave it alone"], answer: 0, evidence: "Tom decided to adopt the sweet animal." },
      { q: "What name did Tom choose for the kitten?", options: ["Luna", "Snow", "Bella"], answer: 1, evidence: "Tom decided to adopt the sweet animal and named her Snow." },
      { q: "Why was the name 'Snow' suitable for the kitten?", options: ["Because it had white fur", "Because it was winter", "Because it was found in the snow"], answer: 0, evidence: "He saw a tiny white kitten... and named her Snow." },
      { q: "What part of the day was it in the story?", options: ["Morning", "Afternoon", "Midnight"], answer: 1, evidence: "On a warm sunny afternoon, Tom walked into his garden." },
      { q: "What does the word 'fur' mean in Uzbek?", options: ["Yung", "Quloq", "Oyoq"], answer: 0, evidence: "The text marks {fur|yungi} as kitten's fur." },
      { q: "What does 'adopt' mean in this context?", options: ["Boqib olmoq / o'ziga olmoq", "Sotib yubormoq", "Qo'rqitmoq"], answer: 0, evidence: "Tom decided to {adopt|boqib olmoq} the sweet animal." },
      { q: "Which word best describes Tom's character?", options: ["Selfish and rude", "Kind and caring", "Lazy and careless"], answer: 1, evidence: "Tom brought milk, helped the cold kitten, and adopted her." }
    ]
  },

  /* ==================== 102: Sunday Picnic (A1) ==================== */
  {
    id: 102,
    level: "A1",
    levelName: "A1 Oson",
    title: "Sunday Picnic",
    text: `Last Sunday was a clear and beautiful day. Emma and her parents prepared a large basket with sandwiches, red apples, and orange {juice|sharbat}.
    
They drove their car to a peaceful lake outside the city. The green grass was soft and the water was very {calm|sokin}. Emma and her father threw a ball while her mother read an interesting magazine.
    
In the evening, they watched the orange sunset together. It was a very relaxing and {cheerful|quvnoq} weekend.`,
    questions: [
      { q: "What day of the week was the picnic?", options: ["Sunday", "Friday", "Monday"], answer: 0, evidence: "Last Sunday was a clear and beautiful day." },
      { q: "How was the weather described on Sunday?", options: ["Clear and beautiful", "Stormy and windy", "Rainy and cloudy"], answer: 0, evidence: "Last Sunday was a clear and beautiful day." },
      { q: "Who went on the picnic trip?", options: ["Emma and her parents", "Emma and her teacher", "Only Emma and her brother"], answer: 0, evidence: "Emma and her parents prepared a large basket." },
      { q: "What did the family prepare for their trip?", options: ["A large picnic basket", "A heavy suitcase", "A toolbox"], answer: 0, evidence: "Emma and her parents prepared a large basket." },
      { q: "What food did they put in the basket?", options: ["Sandwiches and red apples", "Hot soup and rice", "Pizza and burgers"], answer: 0, evidence: "A large basket with sandwiches, red apples, and orange juice." },
      { q: "What color were the apples?", options: ["Green", "Yellow", "Red"], answer: 2, evidence: "Prepared a large basket with sandwiches, red apples." },
      { q: "What beverage did they bring?", options: ["Orange juice", "Black coffee", "Cold soda"], answer: 0, evidence: "Sandwiches, red apples, and orange juice." },
      { q: "How did the family travel to the picnic spot?", options: ["They drove their car", "They took the subway", "They walked on foot"], answer: 0, evidence: "They drove their car to a peaceful lake." },
      { q: "Where was the lake located?", options: ["Outside the city", "In the city downtown", "Inside the airport"], answer: 0, evidence: "Drove their car to a peaceful lake outside the city." },
      { q: "How is the lake described in the story?", options: ["Noisy", "Peaceful", "Crowded"], answer: 1, evidence: "They drove their car to a peaceful lake outside the city." },
      { q: "What was the grass like near the lake?", options: ["Soft and green", "Dry and yellow", "Sharp and icy"], answer: 0, evidence: "The green grass was soft." },
      { q: "What was the water like?", options: ["Rough and wavy", "Very calm", "Dirty and dark"], answer: 1, evidence: "The water was very calm." },
      { q: "What game did Emma and her father play?", options: ["They threw a ball", "They played chess", "They played cards"], answer: 0, evidence: "Emma and her father threw a ball." },
      { q: "What was Emma's mother doing by the lake?", options: ["Reading an interesting magazine", "Cooking hot food", "Sleeping in the car"], answer: 0, evidence: "Her mother read an interesting magazine." },
      { q: "What did the family watch together in the evening?", options: ["The orange sunset", "A movie", "Television"], answer: 0, evidence: "In the evening, they watched the orange sunset together." },
      { q: "What color was the sunset?", options: ["Orange", "Blue", "Green"], answer: 0, evidence: "In the evening, they watched the orange sunset together." },
      { q: "How did the family describe their weekend?", options: ["Stressful and tiring", "Very relaxing and cheerful", "Boring and long"], answer: 1, evidence: "It was a very relaxing and cheerful weekend." },
      { q: "What does the word 'calm' mean in the text?", options: ["Sokin va tinch", "Baland va shovqin", "Qorong'i"], answer: 0, evidence: "The text marks {calm|sokin} as peaceful and still." },
      { q: "What does 'cheerful' mean in Uzbek?", options: ["Quvnoq va xursand", "Jiddiy", "G'amgin"], answer: 0, evidence: "The text marks {cheerful|quvnoq} as joyful." },
      { q: "When did the family watch the sunset?", options: ["In the morning", "At noon", "In the evening"], answer: 2, evidence: "In the evening, they watched the orange sunset together." }
    ]
  },

  /* ==================== 103: A Visit to the Library (A1) ==================== */
  {
    id: 103,
    level: "A1",
    levelName: "A1 Oson",
    title: "A Visit to the Library",
    text: `David loves books. Every Wednesday afternoon, he walks to the town library after school.
    
The library is very quiet and clean. Rows of wooden shelves are filled with colorful storybooks. David asked the kind {librarian|kutubxonachi} for a book about wild African animals.
    
The librarian smiled and showed him a large book with pictures of lions and elephants. David sat at a wooden table and read happily for one hour before {borrowing|qarzga olmoq} it to read at home.`,
    questions: [
      { q: "Who is the main character in the story?", options: ["David", "Tom", "Lucas"], answer: 0, evidence: "David loves books. Every Wednesday afternoon, he walks to the town library." },
      { q: "What does David love?", options: ["Books", "Sports cars", "Computer games"], answer: 0, evidence: "David loves books." },
      { q: "Which day does David visit the library?", options: ["Every Wednesday", "Every Friday", "Every Sunday"], answer: 0, evidence: "Every Wednesday afternoon, he walks to the town library." },
      { q: "What time of day does David go to the library?", options: ["In the morning", "In the afternoon after school", "Late at night"], answer: 1, evidence: "Every Wednesday afternoon, he walks to the town library after school." },
      { q: "How does David travel to the library?", options: ["He walks", "He drives a car", "He takes a subway"], answer: 0, evidence: "He walks to the town library after school." },
      { q: "Where is the library located?", options: ["In the town", "At the airport", "Near the forest"], answer: 0, evidence: "He walks to the town library." },
      { q: "How is the library atmosphere described?", options: ["Very quiet and clean", "Loud and noisy", "Crowded and dark"], answer: 0, evidence: "The library is very quiet and clean." },
      { q: "What material are the book shelves made of?", options: ["Wood", "Metal", "Plastic"], answer: 0, evidence: "Rows of wooden shelves are filled with colorful storybooks." },
      { q: "What is on the wooden shelves?", options: ["Colorful storybooks", "Old newspapers only", "Toys"], answer: 0, evidence: "Rows of wooden shelves are filled with colorful storybooks." },
      { q: "Who did David speak to in the library?", options: ["The kind librarian", "His math teacher", "A security guard"], answer: 0, evidence: "David asked the kind librarian for a book." },
      { q: "How is the librarian described?", options: ["Kind and smiling", "Angry and busy", "Strict and silent"], answer: 0, evidence: "David asked the kind librarian... The librarian smiled." },
      { q: "What topic did David want to read about?", options: ["Wild African animals", "Modern fast cars", "Cooking Italian pizza"], answer: 0, evidence: "David asked the kind librarian for a book about wild African animals." },
      { q: "What pictures were in the book the librarian showed him?", options: ["Lions and elephants", "Bears and foxes", "Fish and whales"], answer: 0, evidence: "Showed him a large book with pictures of lions and elephants." },
      { q: "How is the animal book described?", options: ["A large book with pictures", "A tiny pocket notebook", "An audio magazine"], answer: 0, evidence: "Showed him a large book with pictures of lions and elephants." },
      { q: "Where did David sit to read?", options: ["At a wooden table", "On the floor", "Outside on a bench"], answer: 0, evidence: "David sat at a wooden table and read happily." },
      { q: "How long did David read at the library?", options: ["For one hour", "For ten minutes", "For five hours"], answer: 0, evidence: "David sat at a wooden table and read happily for one hour." },
      { q: "How did David feel while reading the book?", options: ["Happily", "Bored", "Angry"], answer: 0, evidence: "David sat at a wooden table and read happily for one hour." },
      { q: "What did David do before going home?", options: ["Borrowed the book to read at home", "Bought the book for cash", "Left without the book"], answer: 0, evidence: "Read happily for one hour before borrowing it to read at home." },
      { q: "What does 'librarian' mean in Uzbek?", options: ["Kutubxonachi", "O'qituvchi", "Yozuvchi"], answer: 0, evidence: "The text translates {librarian|kutubxonachi}." },
      { q: "What does 'borrowing' mean in this story?", options: ["Qarzga/vaqtincha olmoq", "Sotib yubormoq", "Yo'qotib qo'ymoq"], answer: 0, evidence: "The text translates {borrowing|qarzga olmoq}." }
    ]
  },

  /* ==================== 104: The Busy Bakery (A1) ==================== */
  {
    id: 104,
    level: "A1",
    levelName: "A1 Oson",
    title: "The Busy Bakery",
    text: `Near my apartment, there is a small family bakery called Sweet Morning. The baker wakes up at four in the morning to prepare fresh {dough|xamir}.
    
When I open my bedroom window, I can smell sweet vanilla and warm cinnamon. At eight o'clock, neighbors line up to buy hot bread and fruit pies.
    
The baker always smiles and greets everyone warmly. Starting the morning with fresh pastry and tea brings a {delightful|yoqimli} feeling to our whole street.`,
    questions: [
      { q: "Where is the bakery located?", options: ["Near the narrator's apartment", "In another city", "At the train station"], answer: 0, evidence: "Near my apartment, there is a small family bakery." },
      { q: "What is the bakery called?", options: ["Sweet Morning", "Hot Oven", "Daily Bread"], answer: 0, evidence: "A small family bakery called Sweet Morning." },
      { q: "What type of business is Sweet Morning?", options: ["A small family bakery", "A large factory", "A car shop"], answer: 0, evidence: "There is a small family bakery called Sweet Morning." },
      { q: "What time does the baker wake up?", options: ["At four in the morning", "At seven in the morning", "At nine in the morning"], answer: 0, evidence: "The baker wakes up at four in the morning." },
      { q: "Why does the baker wake up so early?", options: ["To prepare fresh dough", "To deliver mail", "To clean the street"], answer: 0, evidence: "The baker wakes up at four in the morning to prepare fresh dough." },
      { q: "What can the narrator smell from the bedroom window?", options: ["Sweet vanilla and warm cinnamon", "Fried onions and meat", "Paint and oil"], answer: 0, evidence: "I can smell sweet vanilla and warm cinnamon." },
      { q: "When do the neighbors line up at the bakery?", options: ["At eight o'clock", "At midnight", "At noon"], answer: 0, evidence: "At eight o'clock, neighbors line up to buy hot bread." },
      { q: "Why do neighbors line up at the bakery?", options: ["To buy hot bread and fruit pies", "To wait for a taxi", "To buy newspapers"], answer: 0, evidence: "Neighbors line up to buy hot bread and fruit pies." },
      { q: "What products are mentioned in the bakery?", options: ["Hot bread and fruit pies", "Burgers and chips", "Ice cream only"], answer: 0, evidence: "Neighbors line up to buy hot bread and fruit pies." },
      { q: "How does the baker greet the customers?", options: ["Smiles and greets everyone warmly", "Looks angry and silent", "Ignores the customers"], answer: 0, evidence: "The baker always smiles and greets everyone warmly." },
      { q: "What does 'dough' mean in Uzbek?", options: ["Xamir", "Shakar", "Tuz"], answer: 0, evidence: "The text translates {dough|xamir}." },
      { q: "What sweet spice is mentioned in the aroma?", options: ["Warm cinnamon", "Black pepper", "Garlic"], answer: 0, evidence: "I can smell sweet vanilla and warm cinnamon." },
      { q: "What feeling does the fresh pastry bring to the street?", options: ["A delightful feeling", "An unpleasant feeling", "A scary feeling"], answer: 0, evidence: "Brings a delightful feeling to our whole street." },
      { q: "What does 'delightful' mean in Uzbek?", options: ["Yoqimli va ajoyib", "Qo'rqinchli", "Achchiq"], answer: 0, evidence: "The text translates {delightful|yoqimli}." },
      { q: "What window does the narrator open in the morning?", options: ["Bedroom window", "Kitchen door", "Office window"], answer: 0, evidence: "When I open my bedroom window, I can smell sweet vanilla." },
      { q: "What drink is paired with the fresh pastry?", options: ["Tea", "Juice", "Soda"], answer: 0, evidence: "Starting the morning with fresh pastry and tea." },
      { q: "How is the bread described when bought?", options: ["Hot", "Cold", "Frozen"], answer: 0, evidence: "Neighbors line up to buy hot bread." },
      { q: "Which word best describes the baker's personality?", options: ["Warm and friendly", "Rude and arrogant", "Lazy"], answer: 0, evidence: "The baker always smiles and greets everyone warmly." },
      { q: "Who lines up at the bakery at eight o'clock?", options: ["Neighbors", "Tourists only", "School teachers only"], answer: 0, evidence: "At eight o'clock, neighbors line up to buy hot bread." },
      { q: "What makes the whole street feel delightful?", options: ["Fresh pastry and tea in the morning", "Loud street music", "Early morning traffic"], answer: 0, evidence: "Starting the morning with fresh pastry and tea brings a delightful feeling." }
    ]
  },

  /* ==================== 105: The Blue Bicycle (A1) ==================== */
  {
    id: 105,
    level: "A1",
    levelName: "A1 Oson",
    title: "The Blue Bicycle",
    text: `For his tenth birthday, Lucas received a wonderful gift from his grandfather: a bright blue bicycle with silver handlebars.
    
Lucas was very excited, but he did not know how to ride without help. His grandfather held the back of the seat and walked {patiently|sabr bilan} behind him in the yard.
    
After three attempts, Lucas found his {balance|muvozanat} and pedaled all the way to the wooden gate by himself. He felt proud and laughed with pure {excitement|hayajon}.`,
    questions: [
      { q: "How old was Lucas turning on his birthday?", options: ["Ten years old", "Eight years old", "Twelve years old"], answer: 0, evidence: "For his tenth birthday, Lucas received a wonderful gift." },
      { q: "Who gave Lucas the wonderful gift?", options: ["His grandfather", "His mother", "His school teacher"], answer: 0, evidence: "Lucas received a wonderful gift from his grandfather." },
      { q: "What gift did Lucas receive?", options: ["A bright blue bicycle", "A toy car", "A skateboard"], answer: 0, evidence: "A bright blue bicycle with silver handlebars." },
      { q: "What color was the bicycle?", options: ["Bright blue", "Dark green", "Red"], answer: 0, evidence: "A bright blue bicycle with silver handlebars." },
      { q: "What color were the handlebars?", options: ["Silver", "Black", "Gold"], answer: 0, evidence: "A bright blue bicycle with silver handlebars." },
      { q: "How did Lucas feel when he saw the gift?", options: ["Very excited", "Bored", "Frightened"], answer: 0, evidence: "Lucas was very excited." },
      { q: "What problem did Lucas face initially?", options: ["He did not know how to ride without help", "The bicycle was broken", "The tires had no air"], answer: 0, evidence: "He did not know how to ride without help." },
      { q: "Where did Lucas practice riding?", options: ["In the yard", "On the main road", "In the school gym"], answer: 0, evidence: "Walked patiently behind him in the yard." },
      { q: "What part of the bicycle did the grandfather hold?", options: ["The back of the seat", "The front wheel", "The silver pedals"], answer: 0, evidence: "His grandfather held the back of the seat." },
      { q: "How did the grandfather walk behind Lucas?", options: ["Patiently", "Angrily", "Carelessly"], answer: 0, evidence: "Walked patiently behind him in the yard." },
      { q: "How many attempts did Lucas take to find balance?", options: ["Three attempts", "One attempt", "Ten attempts"], answer: 0, evidence: "After three attempts, Lucas found his balance." },
      { q: "What did Lucas find after three attempts?", options: ["His balance", "A lost coin", "A flat tire"], answer: 0, evidence: "Lucas found his balance." },
      { q: "Where did Lucas pedal all by himself?", options: ["All the way to the wooden gate", "Into the neighbor's garden", "To the town center"], answer: 0, evidence: "Pedaled all the way to the wooden gate by himself." },
      { q: "What was the gate made of?", options: ["Wood", "Iron", "Stone"], answer: 0, evidence: "Pedaled all the way to the wooden gate." },
      { q: "How did Lucas feel after pedaling alone?", options: ["Proud", "Angry", "Disappointed"], answer: 0, evidence: "He felt proud and laughed with pure excitement." },
      { q: "What did Lucas do when he reached the gate?", options: ["Laughed with pure excitement", "Cried with fear", "Fell on the grass"], answer: 0, evidence: "He felt proud and laughed with pure excitement." },
      { q: "What does 'patiently' mean in Uzbek?", options: ["Sabr bilan", "Tezlik bilan", "Qo'pollik bilan"], answer: 0, evidence: "The text translates {patiently|sabr bilan}." },
      { q: "What does 'balance' mean in this context?", options: ["Muvozanat", "Og'irlik", "Kuch"], answer: 0, evidence: "The text translates {balance|muvozanat}." },
      { q: "What does 'excitement' mean?", options: ["Hayajon / quvonch", "Qayg'u", "Charchoq"], answer: 0, evidence: "The text translates {excitement|hayajon}." },
      { q: "What was the grandfather's attitude toward Lucas?", options: ["Supportive and patient", "Strict and impatient", "Uninterested"], answer: 0, evidence: "Walked patiently behind him and helped him succeed." }
    ]
  },

/* ==================== 106: A Weekend in Samarkand (A2) ==================== */
  {
    id: 106,
    level: "A2",
    levelName: "A2 O'rta",
    title: "A Weekend in Samarkand",
    text: `Last autumn, Malika took the high-speed train from Tashkent to Samarkand for a weekend trip. The journey took just over two hours, and the scenery through the window was breathtaking.
    
Her first stop was the famous Registan square. The majestic blue tiles on the ancient madrasahs glittered under the clear autumn sun. She took many photos and listened to an elderly guide explaining the rich history of the Silk Road.
    
Later in the afternoon, Malika visited the lively Siab Bazaar. She bought sweet dried apricots, fresh almonds, and traditional round bread to bring back to her family. It was an {unforgettable|unutilmas} cultural experience.`,
    questions: [
      { q: "When did Malika travel to Samarkand?", options: ["Last autumn", "Last winter", "Last summer"], answer: 0, evidence: "Last autumn, Malika took the high-speed train from Tashkent to Samarkand." },
      { q: "Where did Malika's trip start from?", options: ["Bukhara", "Tashkent", "Andijan"], answer: 1, evidence: "Malika took the high-speed train from Tashkent to Samarkand." },
      { q: "What was Malika's destination city?", options: ["Khiva", "Nukus", "Samarkand"], answer: 2, evidence: "Malika took the high-speed train from Tashkent to Samarkand for a weekend trip." },
      { q: "How did Malika travel to Samarkand?", options: ["By high-speed train", "By private airplane", "By intercity bus"], answer: 0, evidence: "Malika took the high-speed train from Tashkent to Samarkand." },
      { q: "How long did the train journey take?", options: ["Over five hours", "Just over two hours", "Only thirty minutes"], answer: 1, evidence: "The journey took just over two hours." },
      { q: "What was the purpose of Malika's trip?", options: ["A medical appointment", "A business conference", "A weekend trip"], answer: 2, evidence: "...from Tashkent to Samarkand for a weekend trip." },
      { q: "How was the scenery described during the ride?", options: ["Breathtaking", "Gloomy and dark", "Ordinary and flat"], answer: 0, evidence: "The scenery through the window was breathtaking." },
      { q: "What was Malika's first stop in Samarkand?", options: ["Siab Bazaar", "The famous Registan square", "The railway station hotel"], answer: 1, evidence: "Her first stop was the famous Registan square." },
      { q: "What color were the tiles on the ancient madrasahs?", options: ["Green ceramic", "White marble", "Majestic blue"], answer: 2, evidence: "The majestic blue tiles on the ancient madrasahs glittered." },
      { q: "What were the tiles doing under the autumn sun?", options: ["Glittering", "Cracking", "Fading"], answer: 0, evidence: "The majestic blue tiles on the ancient madrasahs glittered under the clear autumn sun." },
      { q: "What was the weather like at Registan square?", options: ["Rainy and stormy", "Clear autumn sun", "Cold and snowy"], answer: 1, evidence: "...under the clear autumn sun." },
      { q: "What did Malika do at Registan square?", options: ["Bought souvenirs only", "Ate lunch", "Took many photos and listened to an elderly guide"], answer: 2, evidence: "She took many photos and listened to an elderly guide." },
      { q: "Who explained the history to Malika?", options: ["An elderly guide", "A university professor", "Her train conductor"], answer: 0, evidence: "Listened to an elderly guide explaining the rich history of the Silk Road." },
      { q: "What historical topic was the guide explaining?", options: ["Modern architecture", "The rich history of the Silk Road", "Uzbek carpet weaving"], answer: 1, evidence: "Explaining the rich history of the Silk Road." },
      { q: "Which market did Malika visit later in the afternoon?", options: ["Chorsu Bazaar", "Alay Market", "The lively Siab Bazaar"], answer: 2, evidence: "Later in the afternoon, Malika visited the lively Siab Bazaar." },
      { q: "How is Siab Bazaar characterized in the text?", options: ["Lively", "Quiet and deserted", "Small and modern"], answer: 0, evidence: "Malika visited the lively Siab Bazaar." },
      { q: "What dried fruit did Malika purchase at the market?", options: ["Dried cherries", "Sweet dried apricots", "Dried prunes"], answer: 1, evidence: "She bought sweet dried apricots, fresh almonds, and traditional round bread." },
      { q: "What nuts did Malika buy at the bazaar?", options: ["Salted walnuts", "Roasted pistachios", "Fresh almonds"], answer: 2, evidence: "She bought sweet dried apricots, fresh almonds, and traditional round bread." },
      { q: "Who were the gifts and food intended for?", options: ["To bring back to her family", "For herself to eat at the hotel", "To sell in her hometown"], answer: 0, evidence: "...to bring back to her family." },
      { q: "What does the word 'unforgettable' mean in Uzbek?", options: ["Oddiy va sodda", "Unutilmas", "Qo'rqinchli"], answer: 1, evidence: "The text translates {unforgettable|unutilmas}." }
    ]
  },

  /* ==================== 107: The Science Fair (A2) ==================== */
  {
    id: 107,
    level: "A2",
    levelName: "A2 O'rta",
    title: "The Science Fair",
    text: `Every spring, Greenwood High School organizes an annual science fair where students showcase their practical inventions. This year, Kevin and his classmate Maya decided to build a solar water heater using recycled plastic bottles and black copper pipes.
    
They spent two weeks testing their model on the school rooftop. On cloudy days, the water remained lukewarm, but under direct sunlight, it reached forty-five degrees Celsius.
    
The school judges were {impressed|hayratda} by their creativity and environmental awareness. At the closing ceremony, Kevin and Maya were awarded the first prize for the best {sustainable|barqaror} project.`,
    questions: [
      { q: "In which season does Greenwood High School organize its science fair?", options: ["Every spring", "Every autumn", "Every winter"], answer: 0, evidence: "Every spring, Greenwood High School organizes an annual science fair." },
      { q: "What is the name of the school mentioned?", options: ["Oakridge High", "Greenwood High School", "St. Mary's School"], answer: 1, evidence: "Greenwood High School organizes an annual science fair." },
      { q: "How frequently is the science fair held?", options: ["Every month", "Every semester", "Annually (every spring)"], answer: 2, evidence: "Greenwood High School organizes an annual science fair." },
      { q: "What do students showcase at the fair?", options: ["Their practical inventions", "Art paintings only", "Old school books"], answer: 0, evidence: "...where students showcase their practical inventions." },
      { q: "Who were the two students working together?", options: ["Tom and David", "Kevin and his classmate Maya", "Oliver and Alex"], answer: 1, evidence: "Kevin and his classmate Maya decided to build a solar water heater." },
      { q: "What is Maya's relation to Kevin?", options: ["His older sister", "His science teacher", "His classmate"], answer: 2, evidence: "Kevin and his classmate Maya decided..." },
      { q: "What device did Kevin and Maya build?", options: ["A solar water heater", "An electric bicycle", "A wind turbine generator"], answer: 0, evidence: "...decided to build a solar water heater using recycled plastic bottles." },
      { q: "What materials were used to construct the solar water heater?", options: ["Wooden boxes and glass", "Recycled plastic bottles and black copper pipes", "Tin cans and aluminum foil"], answer: 1, evidence: "...using recycled plastic bottles and black copper pipes." },
      { q: "What color were the copper pipes?", options: ["Silver", "Gold", "Black"], answer: 2, evidence: "...and black copper pipes." },
      { q: "Where did they conduct tests on their invention?", options: ["On the school rooftop", "In the chemistry lab", "In Kevin's garden"], answer: 0, evidence: "They spent two weeks testing their model on the school rooftop." },
      { q: "How long did the rooftop testing take?", options: ["Three days", "Two weeks", "Two months"], answer: 1, evidence: "They spent two weeks testing their model on the school rooftop." },
      { q: "What happened to the water on cloudy days?", options: ["It boiled rapidly", "It froze into ice", "It remained lukewarm"], answer: 2, evidence: "On cloudy days, the water remained lukewarm." },
      { q: "What does 'lukewarm' mean?", options: ["Neither hot nor cold (iliq)", "Extremely cold", "Boiling hot"], answer: 0, evidence: "On cloudy days, the water remained lukewarm (iliq)." },
      { q: "What temperature did the water reach under direct sunlight?", options: ["Twenty degrees Celsius", "Forty-five degrees Celsius", "Eighty degrees Celsius"], answer: 1, evidence: "...under direct sunlight, it reached forty-five degrees Celsius." },
      { q: "What natural energy powered their water heater?", options: ["Wind energy", "Geothermal steam", "Sunlight (solar energy)"], answer: 2, evidence: "Build a solar water heater... under direct sunlight." },
      { q: "Who evaluated Kevin and Maya's invention?", options: ["The school judges", "The bus drivers", "The local news reporter"], answer: 0, evidence: "The school judges were impressed by their creativity." },
      { q: "What qualities impressed the school judges?", options: ["The expensive cost", "Their creativity and environmental awareness", "The loud volume"], answer: 1, evidence: "The school judges were impressed by their creativity and environmental awareness." },
      { q: "When were the winners presented with awards?", options: ["On the first day of class", "At the school entrance", "At the closing ceremony"], answer: 2, evidence: "At the closing ceremony, Kevin and Maya were awarded the first prize." },
      { q: "Which prize did Kevin and Maya receive?", options: ["The first prize for the best sustainable project", "Second prize for chemistry", "Third prize for design"], answer: 0, evidence: "...awarded the first prize for the best sustainable project." },
      { q: "What does 'sustainable' mean in Uzbek?", options: ["Vaqtincha", "Barqaror / atrof-muhitga zararsiz", "Qimmatbaho"], answer: 1, evidence: "The text translates {sustainable|barqaror}." }
    ]
  },

  /* ==================== 108: Learning to Cook (A2) ==================== */
  {
    id: 108,
    level: "A2",
    levelName: "A2 O'rta",
    title: "Learning to Cook",
    text: `Until recently, Alex relied entirely on frozen meals and fast food. However, when he moved into his own apartment, he realized that cooking fresh meals at home was both healthier and much more {economical|tejamkor}.
    
He invited two close friends for dinner and decided to prepare a traditional vegetable soup from his grandmother's old recipe book. At first, chopping onions brought tears to his eyes, but simmering carrots, herbs, and potatoes filled the kitchen with an amazing aroma.
    
When his friends tasted the warm soup, they praised his cooking and asked for a second bowl. Alex felt encouraged and decided to master a new recipe every weekend.`,
    questions: [
      { q: "What did Alex primarily eat before moving to his own place?", options: ["Frozen meals and fast food", "Fresh salads from local restaurants", "Home-cooked meals by a chef"], answer: 0, evidence: "Until recently, Alex relied entirely on frozen meals and fast food." },
      { q: "What event made Alex reconsider his eating habits?", options: ["Joining a gym", "Moving into his own apartment", "Starting a new job"], answer: 1, evidence: "However, when he moved into his own apartment, he realized..." },
      { q: "Why did Alex think cooking at home was better?", options: ["It was noisier", "It saved time on washing dishes", "It was healthier and much more economical"], answer: 2, evidence: "...cooking fresh meals at home was both healthier and much more economical." },
      { q: "What does 'economical' mean in Uzbek?", options: ["Tejamkor", "Xarajatli", "Qiyin"], answer: 0, evidence: "The text translates {economical|tejamkor}." },
      { q: "How many friends did Alex invite for dinner?", options: ["Five friends", "Two close friends", "All his coworkers"], answer: 1, evidence: "He invited two close friends for dinner." },
      { q: "Which meal did Alex prepare for his guests?", options: ["Sunday brunch", "Early breakfast", "Dinner"], answer: 2, evidence: "He invited two close friends for dinner." },
      { q: "What dish did Alex choose to cook?", options: ["A traditional vegetable soup", "Spaghetti with meat sauce", "Fried fish with rice"], answer: 0, evidence: "...decided to prepare a traditional vegetable soup." },
      { q: "Where did the soup recipe come from?", options: ["An internet food blog", "His grandmother's old recipe book", "A supermarket flyer"], answer: 1, evidence: "...from his grandmother's old recipe book." },
      { q: "What caused tears in Alex's eyes while preparing food?", options: ["Hot red pepper", "Boiling water steam", "Chopping onions"], answer: 2, evidence: "At first, chopping onions brought tears to his eyes." },
      { q: "What ingredients simmered together in the pot?", options: ["Carrots, herbs, and potatoes", "Tomatoes, noodles, and beef", "Rice, peas, and chicken"], answer: 0, evidence: "...simmering carrots, herbs, and potatoes filled the kitchen with an amazing aroma." },
      { q: "What filled the kitchen as the soup was cooking?", options: ["Black smoke", "An amazing aroma", "A bad smell"], answer: 1, evidence: "...filled the kitchen with an amazing aroma." },
      { q: "What does 'simmering' mean?", options: ["Freezing in the fridge", "Baking in the oven", "Cooking gently just below boiling point"], answer: 2, evidence: "...simmering carrots, herbs, and potatoes." },
      { q: "How did the soup feel when served?", options: ["Warm", "Icy cold", "Burnt"], answer: 0, evidence: "When his friends tasted the warm soup..." },
      { q: "How did Alex's friends react after tasting the soup?", options: ["They did not finish it", "They praised his cooking and asked for a second bowl", "They asked to order takeout"], answer: 1, evidence: "...they praised his cooking and asked for a second bowl." },
      { q: "What did the friends request after eating their first serving?", options: ["A glass of juice", "Dessert menu", "A second bowl of soup"], answer: 2, evidence: "...and asked for a second bowl." },
      { q: "How did Alex feel after hearing his friends' praise?", options: ["Encouraged", "Embarrassed", "Disappointed"], answer: 0, evidence: "Alex felt encouraged and decided to master a new recipe every weekend." },
      { q: "What goal did Alex set for future weekends?", options: ["To eat at restaurants every Saturday", "To master a new recipe every weekend", "To stop cooking vegetable soup"], answer: 1, evidence: "...decided to master a new recipe every weekend." },
      { q: "Whose recipe book did Alex keep?", options: ["His mother's", "His neighbor's", "His grandmother's"], answer: 2, evidence: "...from his grandmother's old recipe book." },
      { q: "Did Alex regret cooking dinner at home?", options: ["No, he felt encouraged and motivated", "Yes, it was too expensive", "He vowed never to cook again"], answer: 0, evidence: "Alex felt encouraged and decided to master a new recipe every weekend." },
      { q: "What is the main takeaway from Alex's cooking story?", options: ["Cooking can be challenging at first, but home-cooked meals are rewarding and healthy", "Fast food is always superior", "Never invite friends to your home"], answer: 0, evidence: "Cooking fresh meals was healthier, economical, and brought joy to his friends." }
    ]
  },

  /* ==================== 109: The Railway Journey (A2) ==================== */
  {
    id: 109,
    level: "A2",
    levelName: "A2 O'rta",
    title: "The Railway Journey",
    text: `Traveling by train offers a rare chance to slow down and observe the world. Last month, Oliver took a six-hour journey across the northern countryside to visit his cousin.
    
Instead of browsing social media on his smartphone, he sat beside the window with a notebook. The train rolled past green rolling pastures, quiet pine forests, and small stone farmhouses.
    
An elderly traveler sitting opposite Oliver shared fresh grapes and told fascinating stories about how the railway was constructed sixty years ago. By the time the train reached the final station, Oliver felt refreshed and inspired by the human connection.`,
    questions: [
      { q: "What mode of transport did Oliver take?", options: ["By train", "By airplane", "By bicycle"], answer: 0, evidence: "Oliver took a six-hour journey across the northern countryside." },
      { q: "How long was Oliver's train ride?", options: ["Two hours", "Six hours", "Ten hours"], answer: 1, evidence: "Oliver took a six-hour journey across the northern countryside." },
      { q: "When did the train trip take place?", options: ["Last year", "Yesterday", "Last month"], answer: 2, evidence: "Last month, Oliver took a six-hour journey..." },
      { q: "Who was Oliver traveling to visit?", options: ["His cousin", "His grandmother", "His college friend"], answer: 0, evidence: "...across the northern countryside to visit his cousin." },
      { q: "What part of the countryside did the train travel across?", options: ["The southern coast", "The northern countryside", "The western desert"], answer: 1, evidence: "...across the northern countryside to visit his cousin." },
      { q: "What did Oliver choose NOT to do during the trip?", options: ["Drink water", "Talk to passengers", "Browse social media on his smartphone"], answer: 2, evidence: "Instead of browsing social media on his smartphone..." },
      { q: "Where did Oliver sit during the journey?", options: ["Beside the window with a notebook", "In the restaurant car booth", "In the luggage compartment"], answer: 0, evidence: "...he sat beside the window with a notebook." },
      { q: "What item did Oliver have with him by the window?", options: ["A laptop", "A notebook", "A camera only"], answer: 1, evidence: "...he sat beside the window with a notebook." },
      { q: "What scenery did the train roll past first?", options: ["Crowded factory complexes", "Dense city skyscrapers", "Green rolling pastures"], answer: 2, evidence: "The train rolled past green rolling pastures..." },
      { q: "What type of forests were seen through the window?", options: ["Quiet pine forests", "Tropical palm jungles", "Dense bamboo woods"], answer: 0, evidence: "...quiet pine forests, and small stone farmhouses." },
      { q: "What were the small farmhouses built of?", options: ["Red clay bricks", "Stone", "Modern aluminum"], answer: 1, evidence: "...and small stone farmhouses." },
      { q: "Who sat directly opposite Oliver?", options: ["A young child", "A ticket inspector", "An elderly traveler"], answer: 2, evidence: "An elderly traveler sitting opposite Oliver..." },
      { q: "What fruit did the elderly traveler share with Oliver?", options: ["Fresh grapes", "Sweet oranges", "Red apples"], answer: 0, evidence: "...shared fresh grapes and told fascinating stories." },
      { q: "What stories did the elderly traveler share?", options: ["Stories of mountain climbing", "Stories of how the railway was constructed sixty years ago", "Stories about city traffic"], answer: 1, evidence: "...told fascinating stories about how the railway was constructed sixty years ago." },
      { q: "How long ago was the railway constructed?", options: ["Twenty years ago", "A hundred years ago", "Sixty years ago"], answer: 2, evidence: "...how the railway was constructed sixty years ago." },
      { q: "How did Oliver feel by the end of the journey?", options: ["Refreshed and inspired", "Exhausted and irritated", "Bored and sleepy"], answer: 0, evidence: "Oliver felt refreshed and inspired by the human connection." },
      { q: "What inspired Oliver most during his travel?", options: ["The speed of the train", "The human connection", "The ticket price"], answer: 1, evidence: "...inspired by the human connection." },
      { q: "According to the story, what rare chance does train travel offer?", options: ["A chance to sleep all day", "A chance to buy cheaper food", "A chance to slow down and observe the world"], answer: 2, evidence: "Traveling by train offers a rare chance to slow down and observe the world." },
      { q: "What does 'fascinating' mean in the text?", options: ["Juda qiziqarli / maftunkor", "Zerikarli", "Qo'rqinchli"], answer: 0, evidence: "...told fascinating (juda qiziqarli) stories." },
      { q: "What is the primary message of this narrative?", options: ["Train rides are too slow", "Meaningful human connections and scenery can enrich travel when we step away from screens", "Never talk to strangers"], answer: 1, evidence: "Disconnecting from smartphones led to inspiration and genuine human connection." }
    ]
  },

  /* ==================== 110: Planting a Tree (A2) ==================== */
  {
    id: 110,
    level: "A2",
    levelName: "A2 O'rta",
    title: "Planting a Tree",
    text: `On a Saturday morning in April, neighbors in the Oakridge district gathered at the community park for an annual greening initiative.
    
Armed with shovels, watering cans, and gardening gloves, adults and children worked side by side. They dug twenty deep holes along the gravel walking path and planted young cherry and maple saplings.
    
A retired gardener named Mr. Harris taught the children how to compress the soil firmly around the roots and apply organic fertilizer. By noon, the barren walkway had been transformed into an avenue of hope that will provide cool shade for generations to come.`,
    questions: [
      { q: "On what day of the week did the neighbors gather?", options: ["Saturday morning", "Sunday afternoon", "Friday evening"], answer: 0, evidence: "On a Saturday morning in April, neighbors in the Oakridge district gathered." },
      { q: "In which month did the greening initiative take place?", options: ["June", "April", "September"], answer: 1, evidence: "On a Saturday morning in April..." },
      { q: "What district did the neighbors live in?", options: ["Greenwood district", "Highland park", "Oakridge district"], answer: 2, evidence: "...neighbors in the Oakridge district gathered at the community park." },
      { q: "Where did the community gathering take place?", options: ["At the community park", "Behind the city hall", "In the school courtyard"], answer: 0, evidence: "...gathered at the community park for an annual greening initiative." },
      { q: "What was the purpose of the neighbors' gathering?", options: ["A car wash event", "An annual greening initiative", "A musical parade"], answer: 1, evidence: "...for an annual greening initiative." },
      { q: "What gardening equipment did the volunteers bring?", options: ["Power saws and ladders", "Paint brushes and buckets", "Shovels, watering cans, and gardening gloves"], answer: 2, evidence: "Armed with shovels, watering cans, and gardening gloves..." },
      { q: "Who participated in the tree planting work?", options: ["Adults and children working side by side", "Only paid municipal workers", "Only senior citizens"], answer: 0, evidence: "...adults and children worked side by side." },
      { q: "How many holes were dug for the trees?", options: ["Ten holes", "Twenty deep holes", "Fifty shallow holes"], answer: 1, evidence: "They dug twenty deep holes along the gravel walking path." },
      { q: "Where were the twenty holes dug?", options: ["Across the soccer field", "Around the parking spaces", "Along the gravel walking path"], answer: 2, evidence: "They dug twenty deep holes along the gravel walking path." },
      { q: "What was the surface material of the walking path?", options: ["Gravel", "Concrete", "Wood chips"], answer: 0, evidence: "...along the gravel walking path." },
      { q: "What species of saplings were planted?", options: ["Pine and birch trees", "Cherry and maple saplings", "Palm and olive trees"], answer: 1, evidence: "...and planted young cherry and maple saplings." },
      { q: "Who was Mr. Harris?", options: ["The district police officer", "The high school teacher", "A retired gardener"], answer: 2, evidence: "A retired gardener named Mr. Harris..." },
      { q: "What skill did Mr. Harris teach the children?", options: ["How to compress soil firmly around roots and apply fertilizer", "How to trim tall tree branches", "How to harvest fruit"], answer: 0, evidence: "Mr. Harris taught the children how to compress the soil firmly around the roots and apply organic fertilizer." },
      { q: "What kind of fertilizer did they apply?", options: ["Chemical synthetic powder", "Organic fertilizer", "Liquid pesticide"], answer: 1, evidence: "...and apply organic fertilizer." },
      { q: "What time was the planting completed?", options: ["Late at sunset", "At dawn", "By noon"], answer: 2, evidence: "By noon, the barren walkway had been transformed..." },
      { q: "How was the walkway described before the planting?", options: ["Barren walkway", "Lush green forest", "Busy paved street"], answer: 0, evidence: "By noon, the barren walkway had been transformed..." },
      { q: "What poetic phrase describes the transformed walkway?", options: ["A path of stones", "An avenue of hope", "A trail of dust"], answer: 1, evidence: "...transformed into an avenue of hope that will provide cool shade." },
      { q: "What long-term benefit will the newly planted trees provide?", options: ["Immediate firewood", "High walls against wind", "Cool shade for generations to come"], answer: 2, evidence: "...that will provide cool shade for generations to come." },
      { q: "What does the word 'sapling' mean in this context?", options: ["Nihol / yosh daraxt", "Quruq shox", "Katta tosh"], answer: 0, evidence: "Young cherry and maple saplings (yosh daraxt ko'chatlari)." },
      { q: "What does 'barren' mean in Uzbek?", options: ["Chiroyli va serhosil", "Unumsiz / bo'sh / daraxtsiz", "Qorong'i"], answer: 1, evidence: "The barren (bo'sh, unumsiz) walkway was transformed." }
    ]
  },

/* ==================== 111: The Digital Detox (B1) ==================== */
  {
    id: 111,
    level: "B1",
    levelName: "B1 Murakkab",
    title: "The Digital Detox",
    text: `Like many contemporary students, Daniel felt overwhelmed by constant notifications, message alerts, and algorithmic feeds. He noticed that his attention span had deteriorated significantly, making it difficult to read a single chapter of a textbook without checking his phone.
    
Determined to regain mental clarity, Daniel decided to undertake a forty-eight-hour digital detox over the weekend. He switched off his smartphone, tucked it inside a bedroom drawer, and informed his closest friends in advance.
    
The initial hours were surprisingly challenging, filled with phantom vibrations and a restless urge to scroll. However, by Sunday morning, an extraordinary sense of calm emerged. He finished an entire novel, took a long solitary hike, and prepared a wholesome dinner. The experiment proved that unplugging is essential for deep {focus|diqqat} and emotional {wellbeing|farovonlik}.`,
    questions: [
      { q: "What was causing Daniel to feel overwhelmed?", options: ["Constant notifications, message alerts, and algorithmic feeds", "Heavy physical labor at work", "Loud construction noise near his house"], answer: 0, evidence: "Daniel felt overwhelmed by constant notifications, message alerts, and algorithmic feeds." },
      { q: "What happened to Daniel's attention span?", options: ["It expanded tremendously", "It had deteriorated significantly", "It stayed unchanged"], answer: 1, evidence: "He noticed that his attention span had deteriorated significantly." },
      { q: "What academic difficulty did Daniel experience due to his phone?", options: ["He forgot his homework deadlines", "He lost his textbooks", "He could not read a single textbook chapter without checking his phone"], answer: 2, evidence: "...making it difficult to read a single chapter of a textbook without checking his phone." },
      { q: "What was Daniel determined to regain?", options: ["Mental clarity", "High social media follower counts", "Faster typing speed"], answer: 0, evidence: "Determined to regain mental clarity, Daniel decided to undertake a forty-eight-hour digital detox." },
      { q: "How long was Daniel's digital detox?", options: ["Twenty-four hours", "Forty-eight hours", "One full week"], answer: 1, evidence: "...undertake a forty-eight-hour digital detox over the weekend." },
      { q: "During which part of the week did the detox happen?", options: ["During weekday exam days", "On a public holiday Monday", "Over the weekend"], answer: 2, evidence: "...digital detox over the weekend." },
      { q: "Where did Daniel place his turned-off smartphone?", options: ["Tucked inside a bedroom drawer", "Inside his car trunk", "In a safe at school"], answer: 0, evidence: "He switched off his smartphone, tucked it inside a bedroom drawer..." },
      { q: "What courtesy did Daniel extend to friends before starting?", options: ["Invited them to his house", "Informed his closest friends in advance", "Blocked them temporarily"], answer: 1, evidence: "...and informed his closest friends in advance." },
      { q: "How were the initial hours of the detox described?", options: ["Completely effortless and peaceful", "Boring and unproductive", "Surprisingly challenging"], answer: 2, evidence: "The initial hours were surprisingly challenging..." },
      { q: "What psychological sensation did Daniel experience early on?", options: ["Phantom vibrations and a restless urge to scroll", "Severe hunger pangs", "Memory loss"], answer: 0, evidence: "...filled with phantom vibrations and a restless urge to scroll." },
      { q: "What restless urge did Daniel feel at the beginning?", options: ["An urge to go shopping", "A restless urge to scroll", "An urge to watch television"], answer: 1, evidence: "...and a restless urge to scroll." },
      { q: "When did an extraordinary sense of calm emerge?", options: ["Immediately on Friday night", "On Saturday afternoon", "By Sunday morning"], answer: 2, evidence: "However, by Sunday morning, an extraordinary sense of calm emerged." },
      { q: "What book milestone did Daniel achieve on Sunday?", options: ["He finished an entire novel", "He wrote a short story", "He read three magazines"], answer: 0, evidence: "He finished an entire novel, took a long solitary hike..." },
      { q: "What outdoor activity did Daniel enjoy during the detox?", options: ["Playing basketball in the park", "A long solitary hike", "Cycling on the highway"], answer: 1, evidence: "...took a long solitary hike, and prepared a wholesome dinner." },
      { q: "What kind of dinner did Daniel prepare?", options: ["Microwaved instant pizza", "Fast food takeaway", "A wholesome dinner"], answer: 2, evidence: "...and prepared a wholesome dinner." },
      { q: "What does the word 'focus' mean in Uzbek?", options: ["Diqqat / fikrni bir joyga jamlash", "Chalg'ish", "Tezkorlik"], answer: 0, evidence: "The text translates {focus|diqqat}." },
      { q: "What does 'wellbeing' mean in Uzbek?", options: ["Kambag'allik", "Farovonlik / jismoniy va ruhiy salomatlik", "Mashhurlik"], answer: 1, evidence: "The text translates {wellbeing|farovonlik}." },
      { q: "What core truth did Daniel's experiment demonstrate?", options: ["Smartphones should be permanently destroyed", "Nobody can survive 48 hours without internet", "Unplugging is essential for deep focus and emotional wellbeing"], answer: 2, evidence: "The experiment proved that unplugging is essential for deep focus and emotional wellbeing." },
      { q: "What does 'contemporary' mean in the opening sentence?", options: ["Zamonaviy / hozirgi kundagi", "Qadimiy", "Yosh bolalar"], answer: 0, evidence: "Like many contemporary (zamonaviy) students..." },
      { q: "What was Daniel's overall transformation after the weekend?", options: ["He felt drained and disconnected", "He regained calm, focus, and mental clarity", "He decided never to study again"], answer: 1, evidence: "By Sunday morning, an extraordinary sense of calm emerged and focus was restored." }
    ]
  },

  /* ==================== 112: Urban Rooftop Gardens (B1) ==================== */
  {
    id: 112,
    level: "B1",
    levelName: "B1 Murakkab",
    title: "Urban Rooftop Gardens",
    text: `In densely populated metropolises, green spaces are often scarce as concrete high-rises dominate the skyline. To combat rising temperatures and food insecurity, innovative architects and environmentalists are transforming barren rooftops into productive agricultural sanctuaries.
    
These elevated micro-farms produce organic leafy greens, herbs, and tomatoes without requiring synthetic pesticides. Furthermore, the layer of vegetation acts as a natural thermal insulator, reducing air conditioning energy consumption during scorching summers by up to twenty percent.
    
Beyond tangible ecological benefits, rooftop gardens offer office workers and residents a peaceful retreat from urban noise. Community members volunteer weekly to cultivate crops and distribute fresh harvests to local food banks, proving that sustainability can thrive even in concrete jungles.`,
    questions: [
      { q: "What feature dominates the skyline of densely populated metropolises?", options: ["Concrete high-rises", "Green mountain ridges", "Open farmlands"], answer: 0, evidence: "...as concrete high-rises dominate the skyline." },
      { q: "What are typically scarce in large modern metropolises?", options: ["Automobiles", "Green spaces", "High-speed networks"], answer: 1, evidence: "In densely populated metropolises, green spaces are often scarce." },
      { q: "What two urban problems are innovators attempting to combat?", options: ["Traffic congestion and smog only", "High parking fees and train delays", "Rising temperatures and food insecurity"], answer: 2, evidence: "To combat rising temperatures and food insecurity..." },
      { q: "What are barren rooftops being converted into?", options: ["Productive agricultural sanctuaries", "Private swimming pools", "Solar panel parking lots"], answer: 0, evidence: "...transforming barren rooftops into productive agricultural sanctuaries." },
      { q: "What crops do these elevated micro-farms produce?", options: ["Cotton, wheat, and sugar beets", "Organic leafy greens, herbs, and tomatoes", "Rice, corn, and potatoes"], answer: 1, evidence: "These elevated micro-farms produce organic leafy greens, herbs, and tomatoes." },
      { q: "What harmful substances are avoided in growing these crops?", options: ["Fresh water", "Organic fertilizers", "Synthetic pesticides"], answer: 2, evidence: "...without requiring synthetic pesticides." },
      { q: "How does the vegetation layer function on the roof?", options: ["As a natural thermal insulator", "As a rainwater drainage pump", "As an electric generator"], answer: 0, evidence: "Furthermore, the layer of vegetation acts as a natural thermal insulator." },
      { q: "By how much can rooftop gardens reduce AC energy consumption in summer?", options: ["By up to five percent", "By up to twenty percent", "By over eighty percent"], answer: 1, evidence: "...reducing air conditioning energy consumption during scorching summers by up to twenty percent." },
      { q: "What kind of summer conditions are described?", options: ["Rainy and humid summers", "Mild and breezy summers", "Scorching summers"], answer: 2, evidence: "...during scorching summers by up to twenty percent." },
      { q: "What does 'scorching' mean in Uzbek?", options: ["Jazirama / o'ta issiq", "Iliq", "Muzdek"], answer: 0, evidence: "Scorching (jazirama, kuydiradigan darajada issiq) summers." },
      { q: "What psychological benefit do rooftop gardens provide to workers?", options: ["Free coffee breaks", "A peaceful retreat from urban noise", "Higher salaries"], answer: 1, evidence: "...rooftop gardens offer office workers and residents a peaceful retreat from urban noise." },
      { q: "How frequently do community volunteers gather to cultivate crops?", options: ["Every month", "Once each semester", "Weekly"], answer: 2, evidence: "Community members volunteer weekly to cultivate crops." },
      { q: "Where do volunteers distribute the fresh harvests?", options: ["To local food banks", "To luxury five-star hotels", "To overseas markets"], answer: 0, evidence: "...and distribute fresh harvests to local food banks." },
      { q: "What is a 'food bank'?", options: ["A financial institution that lends to farmers", "A charity organization providing food to people in need", "A supermarket selling imported goods"], answer: 1, evidence: "Distribute fresh harvests to local food banks for vulnerable communities." },
      { q: "What metaphor is used to describe heavily built modern cities?", options: ["Iron fortresses", "Glass deserts", "Concrete jungles"], answer: 2, evidence: "...proving that sustainability can thrive even in concrete jungles." },
      { q: "What does the word 'scarce' mean?", options: ["Tanqis / yetishmaydigan", "Mo'l-ko'l", "Arzon"], answer: 0, evidence: "Green spaces are often scarce (tanqis, kam)." },
      { q: "Who collaborated on transforming rooftops into gardens?", options: ["Bankers and lawyers", "Innovative architects and environmentalists", "Factory owners and politicians"], answer: 1, evidence: "...innovative architects and environmentalists are transforming barren rooftops." },
      { q: "What is an 'elevated micro-farm'?", options: ["An underground greenhouse", "A small-scale farm built on a high rooftop", "A drone flying over fields"], answer: 1, evidence: "These elevated micro-farms produce organic leafy greens..." },
      { q: "How do rooftop gardens assist environmental sustainability?", options: ["They lower building heat, cut AC usage, and provide fresh organic food", "They eliminate all city traffic", "They produce artificial snow"], answer: 0, evidence: "Thermal insulator reducing AC by 20%, organic produce without pesticides." },
      { q: "What is the primary message of this article?", options: ["Rooftop farming is too expensive for cities", "Cities can integrate nature and agriculture sustainably even in dense environments", "Parks should be replaced with skyscrapers"], answer: 1, evidence: "...proving that sustainability can thrive even in concrete jungles." }
    ]
  },

  /* ==================== 113: The Mystery of the Clock Tower (B1) ==================== */
  {
    id: 113,
    level: "B1",
    levelName: "B1 Murakkab",
    title: "The Mystery of the Clock Tower",
    text: `In the historic center of an alpine village stood a medieval stone clock tower whose bronze bells had remained silent for over thirty years. Several modern technicians had attempted to repair the mechanism, but the intricate gears refused to turn.
    
Last winter, an eighty-year-old retired horologist named Arthur visited the village. Equipped with brass tools and traditional mechanical blueprints, he climbed the narrow spiral stairs each morning.
    
After examining the central pendulum, Arthur discovered that a tiny bent cog had locked the escapement wheel. Rather than replacing it with modern steel, he spent three days hand-filing a custom bronze replacement. When the heavy bells finally chimed at noon on Christmas Eve, the entire village gathered in celebration of timeless craftsmanship.`,
    questions: [
      { q: "Where was the medieval stone clock tower located?", options: ["In the historic center of an alpine village", "In a bustling seaside port", "In a capital city airport"], answer: 0, evidence: "In the historic center of an alpine village stood a medieval stone clock tower." },
      { q: "What material was the historic clock tower made of?", options: ["Red brick", "Stone", "Hardwood timber"], answer: 1, evidence: "...stood a medieval stone clock tower..." },
      { q: "How long had the clock tower's bells remained silent?", options: ["For ten years", "For forty-five years", "For over thirty years"], answer: 2, evidence: "...whose bronze bells had remained silent for over thirty years." },
      { q: "What metal were the historic bells cast from?", options: ["Bronze", "Pure silver", "Cast iron"], answer: 0, evidence: "...whose bronze bells had remained silent for over thirty years." },
      { q: "Why had previous modern technicians failed to fix the clock?", options: ["They could not afford replacement parts", "The intricate gears refused to turn", "They were not allowed inside"], answer: 1, evidence: "Several modern technicians had attempted to repair the mechanism, but the intricate gears refused to turn." },
      { q: "In which season did Arthur visit the alpine village?", options: ["Last spring", "Last autumn", "Last winter"], answer: 2, evidence: "Last winter, an eighty-year-old retired horologist named Arthur visited the village." },
      { q: "How old was Arthur?", options: ["Eighty years old", "Sixty-five years old", "Ninety years old"], answer: 0, evidence: "...an eighty-year-old retired horologist named Arthur..." },
      { q: "What profession was Arthur retired from?", options: ["Ship captain", "Horologist (clockmaker)", "Civil engineer"], answer: 1, evidence: "...an eighty-year-old retired horologist named Arthur..." },
      { q: "What does 'horologist' mean?", options: ["A specialist in timepieces and clockmaking (soatsoz)", "A doctor studying hormones", "A weather forecaster"], answer: 0, evidence: "Horologist is a specialist in the science and craft of making and repairing clocks." },
      { q: "What tools and items did Arthur bring to the tower?", options: ["Electric chainsaws", "Computer diagnostic monitors", "Brass tools and traditional mechanical blueprints"], answer: 2, evidence: "Equipped with brass tools and traditional mechanical blueprints..." },
      { q: "How did Arthur reach the clock chamber every morning?", options: ["He climbed the narrow spiral stairs", "He rode a hydraulic elevator", "He used an external rope"], answer: 0, evidence: "...he climbed the narrow spiral stairs each morning." },
      { q: "Which part of the mechanism did Arthur inspect first?", options: ["The tower roof shingles", "The central pendulum", "The dial face glass"], answer: 1, evidence: "After examining the central pendulum, Arthur discovered..." },
      { q: "What caused the clock mechanism to lock up?", options: ["A rusted iron bell clapper", "A snapped main tension cable", "A tiny bent cog that locked the escapement wheel"], answer: 2, evidence: "...discovered that a tiny bent cog had locked the escapement wheel." },
      { q: "Which wheel was seized by the bent cog?", options: ["The escapement wheel", "The drive pulley", "The balance balance wheel"], answer: 0, evidence: "...had locked the escapement wheel." },
      { q: "Why didn't Arthur use modern steel for the replacement part?", options: ["Steel was unavailable in the village", "He preferred custom bronze to preserve the historic mechanism", "Steel was too heavy for the tower"], answer: 1, evidence: "Rather than replacing it with modern steel, he spent three days hand-filing a custom bronze replacement." },
      { q: "How long did Arthur spend hand-filing the custom cog?", options: ["Two hours", "One full month", "Three days"], answer: 2, evidence: "...he spent three days hand-filing a custom bronze replacement." },
      { q: "On what special day did the bells chime again?", options: ["Christmas Eve", "New Year's Morning", "Thanksgiving Day"], answer: 0, evidence: "When the heavy bells finally chimed at noon on Christmas Eve..." },
      { q: "What time was it when the bells rang out across the village?", options: ["At dawn", "At noon", "At midnight"], answer: 1, evidence: "...chimed at noon on Christmas Eve." },
      { q: "How did the villagers respond to the sound of the bells?", options: ["They stayed indoors fearing noise", "They complained about the volume", "The entire village gathered in celebration of timeless craftsmanship"], answer: 2, evidence: "...the entire village gathered in celebration of timeless craftsmanship." },
      { q: "What core value is highlighted by Arthur's success?", options: ["Patience, specialized traditional skill, and timeless craftsmanship", "The superiority of digital quartz watches", "Fast modern repairs are always best"], answer: 0, evidence: "Arthur's dedication celebrated the value of timeless craftsmanship and patience." }
    ]
  },

  /* ==================== 114: Habits of Lifelong Learners (B1) ==================== */
  {
    id: 114,
    level: "B1",
    levelName: "B1 Murakkab",
    title: "Habits of Lifelong Learners",
    text: `In a rapidly evolving global economy, formal education marks merely the beginning of intellectual growth rather than its culmination. Individuals who maintain intellectual curiosity throughout adulthood possess a distinct advantage in both professional adaptability and cognitive health.
    
Neuroscientific research indicates that engaging in consistent, deliberate learning stimulates neuroplasticity — the brain's ability to forge new neural pathways. Devoting merely twenty minutes each day to reading analytical literature, acquiring a foreign language, or practicing a musical instrument dramatically reinforces working memory.
    
Crucially, lifelong learners cultivate an attitude known as a growth mindset: they perceive errors not as evidence of inadequacy, but as invaluable feedback. By embracing uncertainty and remaining humble students of life, they maintain mental agility well into advanced age.`,
    questions: [
      { q: "What does formal education represent according to the text?", options: ["The final culmination of all knowledge", "Merely the beginning of intellectual growth", "An outdated requirement"], answer: 1, evidence: "Formal education marks merely the beginning of intellectual growth rather than its culmination." },
      { q: "What does the word 'culmination' mean in Uzbek?", options: ["Boshlanish nuqtasi", "Yo'qotish", "Cho'qqi / yakuniy natija"], answer: 2, evidence: "...rather than its culmination (yakuni, cho'qqisi)." },
      { q: "What advantage do adults who stay curious enjoy?", options: ["Professional adaptability and cognitive health", "Guaranteed lottery winnings", "Immunity to all physical injuries"], answer: 0, evidence: "...possess a distinct advantage in both professional adaptability and cognitive health." },
      { q: "What does neuroscience say deliberate learning stimulates?", options: ["Early mental exhaustion", "Neuroplasticity", "Permanent memory loss"], answer: 1, evidence: "...deliberate learning stimulates neuroplasticity." },
      { q: "What is 'neuroplasticity' defined as in the passage?", options: ["A brain disease caused by stress", "An artificial brain implant", "The brain's ability to forge new neural pathways"], answer: 2, evidence: "...neuroplasticity — the brain's ability to forge new neural pathways." },
      { q: "How much daily time is suggested to reinforce working memory?", options: ["Merely twenty minutes each day", "At least four uninterrupted hours", "Only on Saturday afternoons"], answer: 0, evidence: "Devoting merely twenty minutes each day... dramatically reinforces working memory." },
      { q: "Which reading habit is specifically recommended for mental exercise?", options: ["Skimming gossip columns", "Reading analytical literature", "Browsing social media posts"], answer: 1, evidence: "...reading analytical literature, acquiring a foreign language..." },
      { q: "What linguistic activity strengthens working memory?", options: ["Writing short text messages", "Speaking loudly", "Acquiring a foreign language"], answer: 2, evidence: "...acquiring a foreign language, or practicing a musical instrument..." },
      { q: "Which artistic practice is highlighted as beneficial for the brain?", options: ["Practicing a musical instrument", "Watching movies on TV", "Attending concerts passively"], answer: 0, evidence: "...or practicing a musical instrument dramatically reinforces working memory." },
      { q: "What cognitive faculty is specifically reinforced by these daily habits?", options: ["Sense of taste", "Working memory", "Physical stamina"], answer: 1, evidence: "...dramatically reinforces working memory." },
      { q: "What attitude do lifelong learners actively cultivate?", options: ["A fixed mindset", "A skeptical mindset", "A growth mindset"], answer: 2, evidence: "Crucially, lifelong learners cultivate an attitude known as a growth mindset." },
      { q: "How do people with a growth mindset view their personal mistakes?", options: ["As invaluable feedback rather than inadequacy", "As proof of permanent incompetence", "As embarrassing disasters to hide"], answer: 0, evidence: "...they perceive errors not as evidence of inadequacy, but as invaluable feedback." },
      { q: "What does the word 'inadequacy' mean in Uzbek?", options: ["Yuksak mahorat", "Qobiliyatsizlik / yetishmovchilik", "Boylik"], answer: 1, evidence: "Errors not as evidence of inadequacy (qobiliyatsizlik)." },
      { q: "What do lifelong learners embrace instead of fearing?", options: ["Strict rigid routines", "Unnecessary isolation", "Uncertainty"], answer: 2, evidence: "By embracing uncertainty and remaining humble students of life..." },
      { q: "How do lifelong learners perceive their role in the world?", options: ["As humble students of life", "As flawless experts", "As judges of others"], answer: 0, evidence: "...and remaining humble students of life." },
      { q: "What quality do curious adults maintain well into advanced age?", options: ["Mental rigidity", "Mental agility", "Physical speed in running"], answer: 1, evidence: "...they maintain mental agility well into advanced age." },
      { q: "What does 'mental agility' mean?", options: ["Jismoniy charchoq", "Keksalikdagi sustlik", "Aqliy chaqqonlik va ravon fikrlash"], answer: 2, evidence: "...maintain mental agility (aqliy chaqqonlik) well into advanced age." },
      { q: "Why is lifelong learning crucial in modern society?", options: ["Because the global economy is rapidly evolving", "Because jobs are guaranteed for life", "Because books are becoming obsolete"], answer: 0, evidence: "In a rapidly evolving global economy..." },
      { q: "What is 'deliberate learning'?", options: ["Accidentally hearing background noise", "Intentional, focused practice aimed at skill improvement", "Memorizing words without understanding"], answer: 1, evidence: "Consistent, deliberate learning stimulates brain growth." },
      { q: "What is the primary conclusion of the passage?", options: ["Curiosity and consistent daily learning preserve mental faculties and foster lifelong growth", "Learning stops after university", "Only children can form new brain pathways"], answer: 0, evidence: "Lifelong curiosity maintains mental agility and adaptability across a lifetime." }
    ]
  },

  /* ==================== 115: Sustainable Travel (B1) ==================== */
  {
    id: 115,
    level: "B1",
    levelName: "B1 Murakkab",
    title: "Sustainable Travel",
    text: `Mass tourism has brought economic prosperity to many remote destinations, but it has simultaneously placed immense strain on fragile natural habitats and local cultural traditions. Overcrowded mountain trails, discarded plastic refuse, and commercialized sacred sites threaten the authenticity of world wonders.
    
In response, an enlightened movement known as sustainable travel encourages globetrotters to minimize their ecological footprint. Conscious travelers prioritize eco-certified guesthouses, travel by train when feasible, and patronize independent family restaurants rather than multinational chains.
    
Furthermore, responsible travelers invest time in understanding local customs and etiquette before arriving. By treating host communities with profound respect and dignity, travelers ensure that cultural exchanges foster genuine mutual appreciation rather than economic exploitation.`,
    questions: [
      { q: "What positive benefit has mass tourism delivered to remote regions?", options: ["Economic prosperity", "Free airline transportation", "Reduced food prices worldwide"], answer: 0, evidence: "Mass tourism has brought economic prosperity to many remote destinations." },
      { q: "What negative consequence has mass tourism caused at the same time?", options: ["A lack of foreign visitors", "Immense strain on fragile natural habitats and local cultural traditions", "Closing of all international airports"], answer: 1, evidence: "...placed immense strain on fragile natural habitats and local cultural traditions." },
      { q: "What environmental pollution problem is cited on mountain trails?", options: ["Excessive noise from animals", "Fallen leaves in autumn", "Overcrowding and discarded plastic refuse"], answer: 2, evidence: "Overcrowded mountain trails, discarded plastic refuse..." },
      { q: "What happens when sacred sites become overly commercialized?", options: ["Their authenticity is threatened", "They attract fewer domestic travelers", "They are torn down"], answer: 0, evidence: "...and commercialized sacred sites threaten the authenticity of world wonders." },
      { q: "What movement promotes responsible, eco-friendly exploration?", options: ["Extreme luxury tourism", "Sustainable travel", "Fast-track travel"], answer: 1, evidence: "In response, an enlightened movement known as sustainable travel encourages globetrotters..." },
      { q: "What are globetrotters encouraged to minimize?", options: ["Their spending on souvenirs", "Their travel luggage weight", "Their ecological footprint"], answer: 2, evidence: "...encourages globetrotters to minimize their ecological footprint." },
      { q: "What does 'ecological footprint' mean in Uzbek?", options: ["Ekologik iz / tabiatga ko'rsatiladigan salbiy ta'sir", "Sayohatchining poyabzali", "Aviabilet narxi"], answer: 0, evidence: "Ecological footprint (tabiatga ta'sir)." },
      { q: "What kind of lodging do conscious travelers choose?", options: ["Eco-certified guesthouses", "Giant multinational mega-resorts", "Luxury cruise ship cabins"], answer: 0, evidence: "Conscious travelers prioritize eco-certified guesthouses." },
      { q: "What mode of transport is favored when feasible?", options: ["Private jets", "Diesel speedboats", "Train travel"], answer: 2, evidence: "...travel by train when feasible." },
      { q: "Which dining establishments do responsible travelers patronize?", options: ["Independent family restaurants rather than multinational chains", "Fast-food hamburger chains", "Airport snack dispensers only"], answer: 0, evidence: "...and patronize independent family restaurants rather than multinational chains." },
      { q: "What does the word 'patronize' mean here?", options: ["Tanqid qilmoq", "Mijoz bo'lmoq / qo'llab-quvvatlamoq", "Chegirma talab qilmoq"], answer: 1, evidence: "Patronize (do'kon yoki restoranga mijoz bo'lib qo'llab-quvvatlash)." },
      { q: "What should travelers research before arriving at a destination?", options: ["Luxury shopping mall hours", "Local customs and etiquette", "Exchange rates only"], answer: 1, evidence: "...responsible travelers invest time in understanding local customs and etiquette before arriving." },
      { q: "How should host communities be treated by visitors?", options: ["With profound respect and dignity", "With complete indifference", "As photographic backgrounds only"], answer: 0, evidence: "By treating host communities with profound respect and dignity..." },
      { q: "What do respectful cultural exchanges foster?", options: ["Hostile competition", "Genuine mutual appreciation", "Economic dependency"], answer: 1, evidence: "...ensure that cultural exchanges foster genuine mutual appreciation." },
      { q: "What harmful outcome does responsible travel seek to avoid?", options: ["Taking landscape photographs", "Eating local cuisine", "Economic exploitation"], answer: 2, evidence: "...rather than economic exploitation." },
      { q: "What does the word 'fragile' mean?", options: ["Mo'rt / oson shikastlanuvchi", "Qattiq", "Chidamli"], answer: 0, evidence: "Immense strain on fragile (mo'rt, nozik) natural habitats." },
      { q: "What does 'globetrotter' mean?", options: ["Sayyoh / dunyo bo'ylab sayohat qiluvchi", "Xarita chizuvchi", "Mehmonxona egasi"], answer: 0, evidence: "Sustainable travel encourages globetrotters (jahongashta sayohatchilar)." },
      { q: "Why are multinational chains less preferred by sustainable travelers?", options: ["Because supporting local independent businesses keeps money in the community", "Because chains don't accept cards", "Because chains are always closed"], answer: 0, evidence: "Patronize independent family restaurants rather than multinational chains." },
      { q: "What threatens world wonders according to the text?", options: ["Overcrowding, plastic trash, and excessive commercialization", "Too many books written about them", "Electric trains"], answer: 0, evidence: "Overcrowded mountain trails, discarded plastic refuse, and commercialized sacred sites threaten authenticity." },
      { q: "What is the central ethos of sustainable travel?", options: ["Leaving destinations preserved and communities respected for the future", "Visiting as many countries as quickly as possible", "Never staying more than one day in any city"], answer: 0, evidence: "Minimizing footprint and treating host communities with respect and dignity." }
    ]
  }
];

/* ==========================================================================
   LISTENING PRACTICE (Eshitib Tushunish Mashqlari)
   CEFR Darajalari: A1, A2, B1, B2, C1
   Har bir mashqda 8 tadan CEFR/IELTS formatidagi savollar
   ========================================================================== */
// LISTENING_EXERCISES (12 full exercises x 8 questions = 96 questions)
const LISTENING_EXERCISES = [
  /* ==================== Exercise 201 (A1 - Part 1) ==================== */
  {
    id: 201,
    level: "A1",
    levelName: "A1 Beginner",
    part: 1,
    partName: "Part 1 · Everyday Conversations",
    title: "Meeting at the Central Café",
    durationSec: 32,
    audioText: "Hi Anna! Are we still meeting for lunch today? Yes, Mark, let's meet at the Central Café near the bus station. Is twelve thirty good for you? That sounds perfect. I am really hungry! Great. They have delicious vegetable soup and fresh sandwiches today. Let's sit at an outdoor table if it is sunny. See you at twelve thirty then! Bye!",
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        q: "Where do Mark and Anna agree to meet?",
        options: [
          "At the Central Café near the bus station",
          "Inside the city library reading hall",
          "At Mark's office cafeteria downtown",
          "Near the train station flower garden"
        ],
        answer: 0,
        explanation: "Anna explicitly suggests: 'Let's meet at the Central Café near the bus station.'"
      },
      {
        id: 2,
        type: "fill_blank",
        q: "Mark and Anna agree to meet at ______ pm.",
        answer: "12:30",
        acceptedAnswers: ["12:30", "12.30", "12:30 pm", "twelve thirty"],
        explanation: "Mark asks: 'Is twelve thirty good for you?' and Anna confirms: 'See you at twelve thirty then!'"
      },
      {
        id: 3,
        type: "multiple_choice",
        q: "What food is featured on the café's menu today?",
        options: [
          "Vegetable soup and fresh sandwiches",
          "Italian pasta and tomato pizza",
          "Grilled salmon and brown rice",
          "Cheeseburgers and potato fries"
        ],
        answer: 0,
        explanation: "Anna mentions: 'They have delicious vegetable soup and fresh sandwiches today.'"
      },
      {
        id: 4,
        type: "true_false",
        q: "Mark tells Anna that he is not feeling hungry at all.",
        options: ["True", "False"],
        answer: "False",
        explanation: "Mark clearly states: 'That sounds perfect. I am really hungry!'"
      },
      {
        id: 5,
        type: "multiple_choice",
        q: "Where does Anna prefer to sit if the weather is warm and sunny?",
        options: [
          "At an outdoor table",
          "On the rooftop terrace",
          "Next to the ordering counter",
          "In the quiet back room"
        ],
        answer: 0,
        explanation: "Anna says: 'Let's sit at an outdoor table if it is sunny.'"
      },
      {
        id: 6,
        type: "short_answer",
        q: "What transport facility is the Central Café located near?",
        answer: "bus station",
        acceptedAnswers: ["bus station", "the bus station", "near the bus station", "central bus station"],
        explanation: "Anna mentions the café is 'near the bus station.'"
      },
      {
        id: 7,
        type: "true_false",
        q: "Mark and Anna are planning to meet for breakfast.",
        options: ["True", "False"],
        answer: "False",
        explanation: "Mark specifically asks: 'Are we still meeting for lunch today?'"
      },
      {
        id: 8,
        type: "multiple_choice",
        q: "What is Anna's general tone during the brief conversation?",
        options: [
          "Enthusiastic and welcoming",
          "Rude and hurried",
          "Confused about the location",
          "Reluctant to attend"
        ],
        answer: 0,
        explanation: "Anna warmly welcomes Mark's lunch plan, recommends lunch specials, and suggests pleasant outdoor seating."
      }
    ]
  },

  /* ==================== Exercise 202 (A1 - Part 2) ==================== */
  {
    id: 202,
    level: "A1",
    levelName: "A1 Beginner",
    part: 2,
    partName: "Part 2 · Monologue and Information",
    title: "The City Zoo Announcement",
    durationSec: 35,
    audioText: "Attention all visitors. Welcome to the City Zoo! Today, the zoo remains open until six o'clock in the evening. Please note that the elephant feeding show starts at two o'clock at the tropical zone. Tickets for children under five years old are free. For your own safety, please do not feed the monkeys and always stay on the marked walking paths. Souvenirs and cold drinks are available at the gift shop near the exit. Enjoy your visit!",
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        q: "What time does the City Zoo close today?",
        options: [
          "At six o'clock in the evening",
          "At four in the afternoon",
          "At eight o'clock at night",
          "At five o'clock in the afternoon"
        ],
        answer: 0,
        explanation: "The announcement states: 'Today, the zoo remains open until six o'clock in the evening.'"
      },
      {
        id: 2,
        type: "fill_blank",
        q: "The elephant feeding show starts at ______ o'clock in the afternoon.",
        answer: "2",
        acceptedAnswers: ["2", "two", "2:00", "2 pm", "two o'clock"],
        explanation: "'The elephant feeding show starts at two o'clock at the tropical zone.'"
      },
      {
        id: 3,
        type: "multiple_choice",
        q: "In which zoo zone does the elephant feeding show take place?",
        options: [
          "Tropical zone",
          "African savannah zone",
          "Polar pavilion",
          "Desert reptiles zone"
        ],
        answer: 0,
        explanation: "The speaker announces: '...at two o'clock at the tropical zone.'"
      },
      {
        id: 4,
        type: "true_false",
        q: "Children under five years of age must pay full ticket price.",
        options: ["True", "False"],
        answer: "False",
        explanation: "The announcement explicitly confirms: 'Tickets for children under five years old are free.'"
      },
      {
        id: 5,
        type: "multiple_choice",
        q: "Which animals are visitors strictly prohibited from feeding?",
        options: [
          "The monkeys",
          "The giraffes",
          "The sea lions",
          "The elephants"
        ],
        answer: 0,
        explanation: "'For your own safety, please do not feed the monkeys...'"
      },
      {
        id: 6,
        type: "short_answer",
        q: "Where is the gift shop located in the zoo?",
        answer: "near the exit",
        acceptedAnswers: ["near the exit", "exit", "by the exit", "at the exit"],
        explanation: "'Souvenirs and cold drinks are available at the gift shop near the exit.'"
      },
      {
        id: 7,
        type: "true_false",
        q: "Visitors are advised to remain on the marked walking paths.",
        options: ["True", "False"],
        answer: "True",
        explanation: "'...and always stay on the marked walking paths.'"
      },
      {
        id: 8,
        type: "multiple_choice",
        q: "What products are available for purchase at the gift shop?",
        options: [
          "Souvenirs and cold drinks",
          "Binoculars and raincoats",
          "Fresh fruit baskets",
          "Zoo guidebooks only"
        ],
        answer: 0,
        explanation: "'Souvenirs and cold drinks are available at the gift shop near the exit.'"
      }
    ]
  },

  /* ==================== Exercise 203 (A2 - Part 1) ==================== */
  {
    id: 203,
    level: "A2",
    levelName: "A2 Elementary",
    part: 1,
    partName: "Part 1 · Everyday Conversations",
    title: "Buying Train Tickets to Oxford",
    durationSec: 36,
    audioText: "Good morning! How can I help you? Hello, I would like a return ticket to Oxford, please. Are you traveling today? Yes, on the next available train. That will be the ten fifteen express from platform four. A standard return ticket is eighteen pounds, or twenty-four pounds for first class. Standard is fine, thank you. Can I pay with credit card? Certainly. Please insert your card into the reader. Here are your tickets and receipt. Have a pleasant journey to Oxford!",
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        q: "What destination is the customer traveling to?",
        options: [
          "Oxford",
          "Cambridge",
          "Edinburgh",
          "Birmingham"
        ],
        answer: 0,
        explanation: "The customer states: 'I would like a return ticket to Oxford, please.'"
      },
      {
        id: 2,
        type: "multiple_choice",
        q: "What type of train ticket does the customer request?",
        options: [
          "A return ticket",
          "A one-way single ticket",
          "A monthly season ticket",
          "A weekend group pass"
        ],
        answer: 0,
        explanation: "'I would like a return ticket to Oxford, please.'"
      },
      {
        id: 3,
        type: "fill_blank",
        q: "The next available express train departs at ______ from platform four.",
        answer: "10:15",
        acceptedAnswers: ["10:15", "10.15", "10:15 am", "ten fifteen"],
        explanation: "The ticket clerk says: 'That will be the ten fifteen express from platform four.'"
      },
      {
        id: 4,
        type: "short_answer",
        q: "From which platform does the train depart?",
        answer: "Platform 4",
        acceptedAnswers: ["platform 4", "4", "four", "platform four"],
        explanation: "'...the ten fifteen express from platform four.'"
      },
      {
        id: 5,
        type: "multiple_choice",
        q: "What is the price of a standard return ticket?",
        options: [
          "Eighteen pounds",
          "Twenty-four pounds",
          "Fourteen pounds",
          "Twenty pounds"
        ],
        answer: 0,
        explanation: "The clerk explains: 'A standard return ticket is eighteen pounds, or twenty-four pounds for first class.'"
      },
      {
        id: 6,
        type: "true_false",
        q: "The passenger decides to purchase a first-class ticket.",
        options: ["True", "False"],
        answer: "False",
        explanation: "The passenger responds: 'Standard is fine, thank you.'"
      },
      {
        id: 7,
        type: "multiple_choice",
        q: "How does the customer pay for the journey?",
        options: [
          "By credit card",
          "With paper banknotes",
          "Using a mobile travel coupon",
          "With loyalty points"
        ],
        answer: 0,
        explanation: "Customer asks: 'Can I pay with credit card?' Clerk: 'Certainly. Please insert your card into the reader.'"
      },
      {
        id: 8,
        type: "true_false",
        q: "The ticket agent hands the passenger both the travel tickets and a payment receipt.",
        options: ["True", "False"],
        answer: "True",
        explanation: "The clerk concludes: 'Here are your tickets and receipt. Have a pleasant journey to Oxford!'"
      }
    ]
  },

  /* ==================== Exercise 204 (A2 - Part 6) ==================== */
  {
    id: 204,
    level: "A2",
    levelName: "A2 Elementary",
    part: 6,
    partName: "Part 6 · Short Story and Narrative",
    title: "A Rainy Afternoon Adventure",
    durationSec: 38,
    audioText: "Last Tuesday, Liam walked home from college when dark clouds suddenly gathered. Within moments, heavy rain poured across the street. Having forgotten his umbrella, Liam ran into the nearest building, a charming second-hand bookshop called 'The Book Nook'. While waiting for the rain to subside, he browsed the back shelves and discovered an old leather book containing a hand-drawn map of the city from nineteen twenty. The friendly shopkeeper smiled and gifted him the historic map as a keepsake. Liam left feeling delightfully inspired.",
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        q: "On what day did Liam have his unexpected adventure?",
        options: [
          "Last Tuesday",
          "Last Thursday",
          "Last Saturday",
          "Last Monday"
        ],
        answer: 0,
        explanation: "The story opens with: 'Last Tuesday, Liam walked home from college...'"
      },
      {
        id: 2,
        type: "true_false",
        q: "Liam was carrying an umbrella when the rain started.",
        options: ["True", "False"],
        answer: "False",
        explanation: "The narrator explains: 'Having forgotten his umbrella, Liam ran into the nearest building...'"
      },
      {
        id: 3,
        type: "multiple_choice",
        q: "What was the name of the second-hand bookshop?",
        options: [
          "The Book Nook",
          "The Paper Lantern",
          "Vintage Tales",
          "The College Library"
        ],
        answer: 0,
        explanation: "...a charming second-hand bookshop called 'The Book Nook'."
      },
      {
        id: 4,
        type: "fill_blank",
        q: "Inside an old leather book, Liam discovered a hand-drawn ______ of the city.",
        answer: "map",
        acceptedAnswers: ["map", "city map", "hand-drawn map"],
        explanation: "...discovered an old leather book containing a hand-drawn map of the city."
      },
      {
        id: 5,
        type: "short_answer",
        q: "From which historic year was the hand-drawn map?",
        answer: "1920",
        acceptedAnswers: ["1920", "nineteen twenty"],
        explanation: "...a hand-drawn map of the city from nineteen twenty (1920)."
      },
      {
        id: 6,
        type: "ordering",
        q: "Put the events in the order they occurred in Liam's narrative (1 to 4):",
        options: [
          "Dark clouds gathered and heavy rain began pouring",
          "Liam ran into a bookshop called The Book Nook",
          "Liam discovered an old map inside a leather book",
          "The shopkeeper gifted Liam the historic map"
        ],
        answer: [0, 1, 2, 3],
        explanation: "First the rain started, then Liam entered the shop, found the map, and finally received it as a gift."
      },
      {
        id: 7,
        type: "multiple_choice",
        q: "How did Liam acquire the vintage map?",
        options: [
          "The shopkeeper gave it to him as a gift",
          "Liam purchased it for ten pounds",
          "He traded an old magazine for it",
          "He secretly borrowed it without asking"
        ],
        answer: 0,
        explanation: "The friendly shopkeeper smiled and gifted him the historic map as a keepsake."
      },
      {
        id: 8,
        type: "multiple_choice",
        q: "How did Liam feel when leaving the bookshop?",
        options: [
          "Delightfully inspired",
          "Tired and soaking wet",
          "Frustrated by the storm",
          "Bored and anxious"
        ],
        answer: 0,
        explanation: "The story concludes: 'Liam left feeling delightfully inspired.'"
      }
    ]
  },

  /* ==================== Exercise 205 (B1 - Part 2) ==================== */
  {
    id: 205,
    level: "B1",
    levelName: "B1 Intermediate",
    part: 2,
    partName: "Part 2 · Monologue and Information",
    title: "Airport Security and Boarding Call",
    durationSec: 40,
    audioText: "May I have your attention, please. This is an urgent boarding announcement for passengers on flight BA four zero eight to Geneva. The departure gate has been relocated from gate fourteen to gate twenty-two B in the north concourse. Priority boarding is now commencing for families traveling with infants and passengers requiring special assistance. Please ensure all liquids over one hundred milliliters are disposed of prior to entering the jet bridge. Boarding will conclude in fifteen minutes. Please have your boarding passes and passports ready for inspection.",
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        q: "What is the final destination of flight BA 408?",
        options: [
          "Geneva",
          "Vienna",
          "Zurich",
          "Brussels"
        ],
        answer: 0,
        explanation: "...boarding announcement for passengers on flight BA four zero eight to Geneva."
      },
      {
        id: 2,
        type: "fill_blank",
        q: "The announcement is addressed to passengers on flight BA ______ .",
        answer: "408",
        acceptedAnswers: ["408", "BA 408", "four zero eight", "four hundred eight"],
        explanation: "...flight BA four zero eight (408) to Geneva."
      },
      {
        id: 3,
        type: "multiple_choice",
        q: "What new gate has been designated for the departure?",
        options: [
          "Gate 22B in the north concourse",
          "Gate 14 in the central terminal",
          "Gate 12A in the west pier",
          "Gate 34 in the domestic hall"
        ],
        answer: 0,
        explanation: "The departure gate has been relocated from gate fourteen to gate twenty-two B in the north concourse."
      },
      {
        id: 4,
        type: "short_answer",
        q: "What was the original departure gate number before the change?",
        answer: "Gate 14",
        acceptedAnswers: ["gate 14", "14", "fourteen", "gate fourteen"],
        explanation: "...has been relocated from gate fourteen..."
      },
      {
        id: 5,
        type: "multiple_choice",
        q: "Which group of travelers is invited to board first under priority boarding?",
        options: [
          "Families with infants and passengers needing special assistance",
          "First-class passengers with heavy carry-on luggage",
          "Frequent flyer gold members traveling alone",
          "Passengers seated in the front three rows"
        ],
        answer: 0,
        explanation: "Priority boarding is now commencing for families traveling with infants and passengers requiring special assistance."
      },
      {
        id: 6,
        type: "true_false",
        q: "Passengers may bring liquid bottles larger than 100 ml onto the aircraft.",
        options: ["True", "False"],
        answer: "False",
        explanation: "Please ensure all liquids over one hundred milliliters are disposed of prior to entering the jet bridge."
      },
      {
        id: 7,
        type: "fill_blank",
        q: "Boarding for the flight will conclude in ______ minutes.",
        answer: "15",
        acceptedAnswers: ["15", "fifteen", "15 minutes"],
        explanation: "Boarding will conclude in fifteen minutes."
      },
      {
        id: 8,
        type: "multiple_choice",
        q: "What two items must passengers prepare for inspection?",
        options: [
          "Boarding passes and passports",
          "Driver's licenses and baggage tags",
          "Credit cards and printed receipts",
          "Customs forms and hotel confirmations"
        ],
        answer: 0,
        explanation: "Please have your boarding passes and passports ready for inspection."
      }
    ]
  },

  /* ==================== Exercise 206 (B1 - Part 3) ==================== */
  {
    id: 206,
    level: "B1",
    levelName: "B1 Intermediate",
    part: 3,
    partName: "Part 3 · Academic Discussion",
    title: "Biology Project Planning",
    durationSec: 42,
    audioText: "Hey Ryan, have you outlined our marine biology presentation yet? Yes, Chloe. I was thinking we should examine how rising ocean temperatures affect coral bleaching in the Pacific. That's a compelling angle. If you analyze the scientific data and create the slide charts, I can research the conservation initiatives and draft the speaking script. Sounds like a fair division of labor. Professor Miller expects our preliminary draft by next Thursday, so we should meet at the science library on Tuesday afternoon to combine our slides. Perfect, let's aim for two o'clock.",
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        q: "What is the core subject of Chloe and Ryan's biology presentation?",
        options: [
          "How ocean warming causes coral bleaching in the Pacific",
          "The migratory patterns of North Atlantic whales",
          "Microplastics pollution along European coastlines",
          "Deep sea hydrothermal vents and bacterial ecosystems"
        ],
        answer: 0,
        explanation: "...examine how rising ocean temperatures affect coral bleaching in the Pacific."
      },
      {
        id: 2,
        type: "matching",
        q: "Match each student to their agreed project responsibility:",
        options: [
          "Chloe -> Research conservation initiatives and write speaking script",
          "Ryan -> Analyze scientific data and design slide charts"
        ],
        answer: [0, 1],
        explanation: "Chloe says: 'If you analyze the scientific data and create the slide charts, I can research the conservation initiatives and draft the speaking script.'"
      },
      {
        id: 3,
        type: "multiple_choice",
        q: "Who is the professor supervising their academic project?",
        options: [
          "Professor Miller",
          "Professor Evans",
          "Professor Clark",
          "Professor Taylor"
        ],
        answer: 0,
        explanation: "Ryan notes: 'Professor Miller expects our preliminary draft by next Thursday...'"
      },
      {
        id: 4,
        type: "fill_blank",
        q: "Their preliminary draft is due to the professor by next ______ .",
        answer: "Thursday",
        acceptedAnswers: ["Thursday", "next Thursday"],
        explanation: "Professor Miller expects our preliminary draft by next Thursday."
      },
      {
        id: 5,
        type: "multiple_choice",
        q: "Where do Chloe and Ryan plan to convene to merge their slides?",
        options: [
          "At the science library",
          "In the student union café",
          "Inside the biology laboratory",
          "At Chloe's campus apartment"
        ],
        answer: 0,
        explanation: "...we should meet at the science library on Tuesday afternoon to combine our slides."
      },
      {
        id: 6,
        type: "short_answer",
        q: "On what day of the week will the partners meet at the library?",
        answer: "Tuesday",
        acceptedAnswers: ["Tuesday", "Tuesday afternoon", "on Tuesday"],
        explanation: "...meet at the science library on Tuesday afternoon."
      },
      {
        id: 7,
        type: "fill_blank",
        q: "They agree to meet at ______ o'clock in the afternoon.",
        answer: "2",
        acceptedAnswers: ["2", "two", "2:00", "2 pm", "two o'clock"],
        explanation: "Chloe agrees: 'Perfect, let's aim for two o'clock.'"
      },
      {
        id: 8,
        type: "true_false",
        q: "Ryan feels that Chloe's proposal represents an unfair workload for him.",
        options: ["True", "False"],
        answer: "False",
        explanation: "Ryan explicitly replies: 'Sounds like a fair division of labor.'"
      }
    ]
  },

  /* ==================== Exercise 207 (B1 - Part 5) ==================== */
  {
    id: 207,
    level: "B1",
    levelName: "B1 Intermediate",
    part: 5,
    partName: "Part 5 · Opinions and Attitudes",
    title: "Remote Work vs Office Life",
    durationSec: 40,
    audioText: "Sarah, do you really prefer working remotely full-time over coming into the headquarters? Honestly, Jason, cutting out a ninety-minute daily commute has completely transformed my productivity and sleep quality. I can focus deeply without constant office chatter. I acknowledge the commute is dreadful, Sarah, but I find spontaneous brainstorms and whiteboard sessions far more creative in person. Video calls feel somewhat stiff. That's true, Jason. Perhaps a hybrid schedule — two days in the office for team collaboration and three days at home for concentrated tasks — offers the optimal compromise.",
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        q: "How long was Sarah's daily round-trip commute before remote work?",
        options: [
          "Ninety minutes",
          "Forty-five minutes",
          "Two hours",
          "Thirty minutes"
        ],
        answer: 0,
        explanation: "...cutting out a ninety-minute daily commute has completely transformed my productivity."
      },
      {
        id: 2,
        type: "true_false",
        q: "Sarah believes that working from home has improved both her productivity and sleep.",
        options: ["True", "False"],
        answer: "True",
        explanation: "Sarah states it 'has completely transformed my productivity and sleep quality.'"
      },
      {
        id: 3,
        type: "multiple_choice",
        q: "What disturbance does Sarah dislike about working in the physical office?",
        options: [
          "Constant office chatter disrupting deep concentration",
          "Uncomfortable office furniture and lighting",
          "Unreliable office internet connection",
          "Cold temperatures in the meeting rooms"
        ],
        answer: 0,
        explanation: "'I can focus deeply without constant office chatter.'"
      },
      {
        id: 4,
        type: "multiple_choice",
        q: "What valuable aspect of office work does Jason defend?",
        options: [
          "Spontaneous brainstorming and creative in-person sessions",
          "Complimentary cafeteria lunches and coffee",
          "Better physical workout facilities",
          "Access to company printing equipment"
        ],
        answer: 0,
        explanation: "Jason finds 'spontaneous brainstorms and whiteboard sessions far more creative in person.'"
      },
      {
        id: 5,
        type: "fill_blank",
        q: "Jason remarks that online video calls often feel somewhat ______ .",
        answer: "stiff",
        acceptedAnswers: ["stiff", "somewhat stiff", "rigid", "unnatural"],
        explanation: "Jason observes: 'Video calls feel somewhat stiff.'"
      },
      {
        id: 6,
        type: "short_answer",
        q: "What work arrangement does Sarah suggest as the best compromise?",
        answer: "a hybrid schedule",
        acceptedAnswers: ["hybrid schedule", "hybrid", "a hybrid schedule", "hybrid model"],
        explanation: "'Perhaps a hybrid schedule... offers the optimal compromise.'"
      },
      {
        id: 7,
        type: "multiple_choice",
        q: "In the proposed hybrid model, how many days would be spent working from home?",
        options: [
          "Three days",
          "Two days",
          "Four days",
          "One day"
        ],
        answer: 0,
        explanation: "...two days in the office for team collaboration and three days at home for concentrated tasks."
      },
      {
        id: 8,
        type: "true_false",
        q: "Jason thinks daily commuting is an enjoyable experience.",
        options: ["True", "False"],
        answer: "False",
        explanation: "Jason explicitly admits: 'I acknowledge the commute is dreadful...'"
      }
    ]
  },

  /* ==================== Exercise 208 (B2 - Part 3) ==================== */
  {
    id: 208,
    level: "B2",
    levelName: "B2 Upper-Intermediate",
    part: 3,
    partName: "Part 3 · Academic Discussion",
    title: "Analyzing Renewable Energy Solutions",
    durationSec: 44,
    audioText: "In assessing municipal grid decarbonization, offshore wind developments present a higher capacity factor than photovoltaic arrays. However, Professor Henderson argued in seminar that intermittent generation remains problematic without grid-scale battery storage. Indeed, lithium-iron-phosphate battery installations have dropped in cost by forty percent over five years, yet supply chain bottlenecks for critical minerals persist. Furthermore, local maritime communities frequently contest offshore turbine leases due to disrupted commercial fishing lanes. Therefore, sustainable modernization demands not merely engineering innovation, but rigorous socio-ecological stakeholder consensus before capital allocation.",
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        q: "Why does offshore wind possess an operational advantage over solar photovoltaic arrays?",
        options: [
          "It delivers a noticeably higher capacity factor",
          "It requires zero capital investment for transmission lines",
          "It completely avoids all mechanical wear and tear",
          "It can be deployed on agricultural farmland"
        ],
        answer: 0,
        explanation: "'...offshore wind developments present a higher capacity factor than photovoltaic arrays.'"
      },
      {
        id: 2,
        type: "fill_blank",
        q: "Professor Henderson emphasized that ______ generation is problematic without battery storage.",
        answer: "intermittent",
        acceptedAnswers: ["intermittent", "variable", "irregular"],
        explanation: "'...intermittent generation remains problematic without grid-scale battery storage.'"
      },
      {
        id: 3,
        type: "multiple_choice",
        q: "By what percentage have lithium-iron-phosphate battery costs declined across five years?",
        options: [
          "By forty percent",
          "By twenty-five percent",
          "By sixty percent",
          "By fifty percent"
        ],
        answer: 0,
        explanation: "...battery installations have dropped in cost by forty percent over five years."
      },
      {
        id: 4,
        type: "short_answer",
        q: "What obstacle continues to limit battery deployment despite falling prices?",
        answer: "supply chain bottlenecks",
        acceptedAnswers: ["supply chain bottlenecks", "bottlenecks", "critical minerals bottlenecks", "supply chain"],
        explanation: "...yet supply chain bottlenecks for critical minerals persist."
      },
      {
        id: 5,
        type: "multiple_choice",
        q: "Why do local coastal communities frequently object to offshore wind leases?",
        options: [
          "Turbines disrupt commercial fishing lanes",
          "Turbines generate unpleasant low-frequency noise",
          "Underwater cables disrupt coastal tourism hotels",
          "Turbines reduce real estate tax revenue"
        ],
        answer: 0,
        explanation: "...frequently contest offshore turbine leases due to disrupted commercial fishing lanes."
      },
      {
        id: 6,
        type: "true_false",
        q: "The speaker argues that pure engineering ingenuity is enough to successfully modernize the grid.",
        options: ["True", "False"],
        answer: "False",
        explanation: "...demands not merely engineering innovation, but rigorous socio-ecological stakeholder consensus."
      },
      {
        id: 7,
        type: "fill_blank",
        q: "Sustainable modernization requires rigorous socio-ecological ______ consensus before investing.",
        answer: "stakeholder",
        acceptedAnswers: ["stakeholder", "stakeholders"],
        explanation: "...rigorous socio-ecological stakeholder consensus before capital allocation."
      },
      {
        id: 8,
        type: "multiple_choice",
        q: "What is the primary conclusion regarding sustainable energy modernization?",
        options: [
          "Engineering upgrades must be coupled with environmental and communal consensus",
          "Offshore wind must be abandoned in favor of fossil backups",
          "Local fishing communities should have no regulatory power",
          "Battery storage is too unreliable to merit further investment"
        ],
        answer: 0,
        explanation: "The conclusion stresses balancing engineering with stakeholder consensus and ecology."
      }
    ]
  },

  /* ==================== Exercise 209 (B2 - Part 4) ==================== */
  {
    id: 209,
    level: "B2",
    levelName: "B2 Upper-Intermediate",
    part: 4,
    partName: "Part 4 · Lecture or Educational Talk",
    title: "The Psychology of Habit Formation",
    durationSec: 43,
    audioText: "Neurological investigations demonstrate that habitual actions are governed by an automatic cognitive feedback loop consisting of three phases: the cue, the routine, and the reward. When the brain detects a situational trigger, it offloads behavioral control from the prefrontal cortex to the basal ganglia, thereby conserving metabolic energy. Contrary to conventional folklore, instilling a new automatic behavior rarely takes twenty-one days; empirical research suggests an average of sixty-six days depending on complexity. Crucially, sustainable habit transformation succeeds through incremental cue adjustment and immediate intrinsic reward rather than relying upon erratic reserves of conscious willpower.",
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        q: "What three sequential components comprise the cognitive habit loop?",
        options: [
          "The cue, the routine, and the reward",
          "The trigger, the anxiety, and the release",
          "The intention, the effort, and the outcome",
          "The stimulus, the memory, and the regret"
        ],
        answer: 0,
        explanation: "...automatic cognitive feedback loop consisting of three phases: the cue, the routine, and the reward."
      },
      {
        id: 2,
        type: "multiple_choice",
        q: "To which brain structure does cognitive control shift during habitual behavior?",
        options: [
          "The basal ganglia",
          "The prefrontal cortex",
          "The hippocampus",
          "The temporal lobe"
        ],
        answer: 0,
        explanation: "...it offloads behavioral control from the prefrontal cortex to the basal ganglia."
      },
      {
        id: 3,
        type: "fill_blank",
        q: "The brain shifts control to the basal ganglia to conserve metabolic ______ .",
        answer: "energy",
        acceptedAnswers: ["energy", "metabolic energy"],
        explanation: "...offloads behavioral control... thereby conserving metabolic energy."
      },
      {
        id: 4,
        type: "true_false",
        q: "Scientific research validates the popular myth that any habit forms in exactly 21 days.",
        options: ["True", "False"],
        answer: "False",
        explanation: "Contrary to conventional folklore, instilling a new automatic behavior rarely takes twenty-one days..."
      },
      {
        id: 5,
        type: "short_answer",
        q: "What is the average number of days required to establish an automatic behavior?",
        answer: "66",
        acceptedAnswers: ["66", "sixty-six", "66 days"],
        explanation: "...empirical research suggests an average of sixty-six days depending on complexity."
      },
      {
        id: 6,
        type: "ordering",
        q: "Arrange the three phases of the habit loop in their physiological order of execution:",
        options: [
          "Detection of a situational trigger (The Cue)",
          "Performance of the automated behavior (The Routine)",
          "Reception of positive feedback (The Reward)"
        ],
        answer: [0, 1, 2],
        explanation: "The text establishes the clear chronological sequence: cue -> routine -> reward."
      },
      {
        id: 7,
        type: "multiple_choice",
        q: "What approach is recommended for sustainable behavioral change?",
        options: [
          "Incremental cue adjustments and immediate intrinsic rewards",
          "Total reliance on intense conscious willpower",
          "Imposing harsh punishments for any failure",
          "Attempting multiple complex habits simultaneously"
        ],
        answer: 0,
        explanation: "...succeeds through incremental cue adjustment and immediate intrinsic reward rather than relying upon erratic reserves of conscious willpower."
      },
      {
        id: 8,
        type: "true_false",
        q: "The lecturer characterizes conscious willpower as a steady and inexhaustible resource.",
        options: ["True", "False"],
        answer: "False",
        explanation: "The speaker refers to 'erratic reserves of conscious willpower.'"
      }
    ]
  },

  /* ==================== Exercise 210 (B2 - Part 5) ==================== */
  {
    id: 210,
    level: "B2",
    levelName: "B2 Upper-Intermediate",
    part: 5,
    partName: "Part 5 · Opinions and Attitudes",
    title: "Urban Architecture and Public Spaces",
    durationSec: 44,
    audioText: "Elena, municipal councils too frequently prioritize commercial retail developments over green commons when regenerating waterfront districts. Do you concur? Unequivocally, Julian. When open plazas are privatized, security personnel restrict non-commercial gatherings, creating subtle social exclusion. Yet developers argue that premium commercial retail tenants generate the ongoing tax revenue required to maintain public infrastructure and sanitation. True, but public health data proves that accessible urban green corridors deliver massive long-term economic dividends by reducing respiratory ailments and mitigating urban heat islands. Financial return must be balanced against universal civic accessibility.",
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        q: "What common complaint do Julian and Elena share regarding waterfront redevelopments?",
        options: [
          "Councils over-prioritize commercial retail over open green spaces",
          "New pedestrian promenades have excessive vehicle traffic",
          "There is an insufficient number of parking garages",
          "Modern architectural designs look too historical"
        ],
        answer: 0,
        explanation: "...too frequently prioritize commercial retail developments over green commons when regenerating waterfront districts."
      },
      {
        id: 2,
        type: "true_false",
        q: "Elena strongly disagrees with Julian's observation.",
        options: ["True", "False"],
        answer: "False",
        explanation: "Elena responds: 'Unequivocally, Julian.' (Meaning she agrees without doubt)."
      },
      {
        id: 3,
        type: "multiple_choice",
        q: "What social harm occurs when public plazas are privatized?",
        options: [
          "Security guards restrict non-commercial gatherings, causing social exclusion",
          "Surrounding property taxes triple immediately",
          "Bicycle lanes are forced to shut down",
          "Public libraries lose their municipal funding"
        ],
        answer: 0,
        explanation: "...security personnel restrict non-commercial gatherings, creating subtle social exclusion."
      },
      {
        id: 4,
        type: "fill_blank",
        q: "Developers claim that commercial retail tenants produce essential tax ______ .",
        answer: "revenue",
        acceptedAnswers: ["revenue", "revenues", "income"],
        explanation: "...commercial retail tenants generate the ongoing tax revenue required to maintain public infrastructure."
      },
      {
        id: 5,
        type: "short_answer",
        q: "What respiratory benefit do accessible urban green corridors deliver?",
        answer: "reducing respiratory ailments",
        acceptedAnswers: ["reducing respiratory ailments", "respiratory ailments", "lower respiratory illness", "respiratory health"],
        explanation: "...by reducing respiratory ailments and mitigating urban heat islands."
      },
      {
        id: 6,
        type: "multiple_choice",
        q: "What environmental urban challenge is mitigated by green corridors?",
        options: [
          "Urban heat islands",
          "Coastal tidal surges",
          "Excessive ambient fog",
          "Heavy winter snowfall"
        ],
        answer: 0,
        explanation: "...reducing respiratory ailments and mitigating urban heat islands."
      },
      {
        id: 7,
        type: "fill_blank",
        q: "Elena concludes that financial return must be balanced against universal ______ accessibility.",
        answer: "civic",
        acceptedAnswers: ["civic", "public", "community"],
        explanation: "Financial return must be balanced against universal civic accessibility."
      },
      {
        id: 8,
        type: "multiple_choice",
        q: "What is Elena's core philosophy regarding urban planning investments?",
        options: [
          "Public health benefits and civic access yield immense long-term communal value",
          "Immediate commercial rental yields are always paramount",
          "Waterfront regeneration should be suspended permanently",
          "Private companies should own and police all city plazas"
        ],
        answer: 0,
        explanation: "Elena argues that public health dividends and universal civic access must balance financial returns."
      }
    ]
  },

  /* ==================== Exercise 211 (C1 - Part 4) ==================== */
  {
    id: 211,
    level: "C1",
    levelName: "C1 Advanced",
    part: 4,
    partName: "Part 4 · Lecture or Educational Talk",
    title: "Artificial Intelligence in Modern Medicine",
    durationSec: 45,
    audioText: "In contemporary biomedical informatics, deep neural networks have achieved diagnostic parity with senior radiologists in detecting pulmonary nodules and ocular microvascular anomalies. Nonetheless, translating algorithmic efficacy into clinical practice encounters formidable epistemological hurdles. Predominantly, the opacity of multi-layered predictive models — often dubbed the 'black box' conundrum — impedes clinician trust and clouds liability frameworks. When an algorithmic recommendation diverges from medical consensus, clinicians must discern between serendipitous pattern detection and insidious computational artifact. Therefore, the immediate regulatory frontier mandates explainable artificial intelligence alongside comprehensive clinician-in-the-loop oversight rather than uncritical algorithmic deference.",
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        q: "In which diagnostic domains have deep neural networks matched expert radiologists?",
        options: [
          "Detecting pulmonary nodules and ocular microvascular anomalies",
          "Classifying complex pediatric femur fractures exclusively",
          "Monitoring arterial stent elasticity in real time",
          "Evaluating subconscious depressive mental oscillations"
        ],
        answer: 0,
        explanation: "...achieved diagnostic parity with senior radiologists in detecting pulmonary nodules and ocular microvascular anomalies."
      },
      {
        id: 2,
        type: "fill_blank",
        q: "The inherent opacity of deep predictive models is widely known as the '______ box' conundrum.",
        answer: "black",
        acceptedAnswers: ["black", "black box"],
        explanation: "...the opacity of multi-layered predictive models — often dubbed the 'black box' conundrum..."
      },
      {
        id: 3,
        type: "multiple_choice",
        q: "What two critical obstacles are created by model opacity?",
        options: [
          "Erosion of clinician trust and ambiguous legal liability frameworks",
          "Excessive computational electricity bills and heat generation",
          "Slow network image upload speeds across hospital intranets",
          "Incompatibility with standard electronic medical record formats"
        ],
        answer: 0,
        explanation: "...impedes clinician trust and clouds liability frameworks."
      },
      {
        id: 4,
        type: "short_answer",
        q: "What must clinicians discern when an algorithm diverges from established consensus?",
        answer: "computational artifact",
        acceptedAnswers: ["computational artifact", "insidious computational artifact", "artifact vs pattern", "distinguishing pattern from artifact"],
        explanation: "...discern between serendipitous pattern detection and insidious computational artifact."
      },
      {
        id: 5,
        type: "true_false",
        q: "The speaker advocates for replacing human doctors completely with autonomous AI algorithms.",
        options: ["True", "False"],
        answer: "False",
        explanation: "The speaker rejects 'uncritical algorithmic deference' and mandates clinician-in-the-loop oversight."
      },
      {
        id: 6,
        type: "fill_blank",
        q: "Regulatory frameworks mandate explainable AI and clinician-in-the-______ oversight.",
        answer: "loop",
        acceptedAnswers: ["loop", "clinician in the loop", "clinician-in-the-loop"],
        explanation: "...mandates explainable artificial intelligence alongside comprehensive clinician-in-the-loop oversight."
      },
      {
        id: 7,
        type: "multiple_choice",
        q: "What does the term 'diagnostic parity' signify in clinical literature?",
        options: [
          "Achieving an equivalent level of diagnostic accuracy as human experts",
          "Reducing hospital diagnostic operating expenditures by half",
          "Diagnosing twice as many patients per hour of work",
          "Eliminating the necessity for secondary lab validation"
        ],
        answer: 0,
        explanation: "Diagnostic parity means matching the diagnostic accuracy benchmark of specialist doctors."
      },
      {
        id: 8,
        type: "multiple_choice",
        q: "What is the primary thesis articulated by the speaker?",
        options: [
          "Clinical AI integration necessitates explainability, regulatory safeguards, and continuous human oversight",
          "Neural networks are far too inaccurate for medical applications and should be banned",
          "Radiologists should immediately delegate all imaging diagnostics to software",
          "Medical liability should reside exclusively with machine learning software developers"
        ],
        answer: 0,
        explanation: "The speaker synthesizes algorithmic capability with explainability, liability, and clinician-in-the-loop oversight."
      }
    ]
  },

  /* ==================== Exercise 212 (C1 - Part 6) ==================== */
  {
    id: 212,
    level: "C1",
    levelName: "C1 Advanced",
    part: 6,
    partName: "Part 6 · Short Story and Narrative",
    title: "The Forgotten Mountain Expedition",
    durationSec: 45,
    audioText: "At five thousand meters on the eastern spur of Mount Lhotse, our meteorological instruments began registering an abrupt atmospheric pressure plunge. Dense whiteout conditions materialized within twenty minutes, annihilating all terrestrial landmarks and rendering our satellite positioning intermittent. Confronted with plunging sub-zero temperatures and imminent crevasse danger, team leader Marcus made the agonizing decision to abort the summit push and bivouac inside a shallow glacial bergschrund. For eighteen harrowing hours, we anchored our harnesses into brittle blue ice, enduring gale-force gusts exceeding ninety knots. When morning broke with crystalline serenity, survival felt less like an achievement than a profound lesson in humbleness.",
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        q: "At what elevation on Mount Lhotse were the climbers when the crisis erupted?",
        options: [
          "Five thousand meters",
          "Three thousand five hundred meters",
          "Seven thousand two hundred meters",
          "Six thousand meters"
        ],
        answer: 0,
        explanation: "'At five thousand meters on the eastern spur of Mount Lhotse...'"
      },
      {
        id: 2,
        type: "fill_blank",
        q: "The team's scientific instruments detected an abrupt atmospheric ______ plunge.",
        answer: "pressure",
        acceptedAnswers: ["pressure", "atmospheric pressure"],
        explanation: "...instruments began registering an abrupt atmospheric pressure plunge."
      },
      {
        id: 3,
        type: "short_answer",
        q: "How rapidly did dense whiteout conditions engulf the mountain spur?",
        answer: "within 20 minutes",
        acceptedAnswers: ["within 20 minutes", "20 minutes", "twenty minutes", "within twenty minutes"],
        explanation: "Dense whiteout conditions materialized within twenty minutes..."
      },
      {
        id: 4,
        type: "ordering",
        q: "Chronologically sequence the key events in the survival narrative (1 to 4):",
        options: [
          "Meteorological instruments recorded an abrupt atmospheric pressure drop",
          "Whiteout erased landmarks and satellite signals faltered",
          "The team aborted the summit attempt to shelter in a glacial crevice",
          "The team endured eighteen hours anchored to ice during a violent blizzard"
        ],
        answer: [0, 1, 2, 3],
        explanation: "The story follows this exact order: instrument warning -> whiteout -> decision to abort & shelter -> 18-hour storm survival."
      },
      {
        id: 5,
        type: "multiple_choice",
        q: "Where did the expedition team seek shelter during the blizzard?",
        options: [
          "Inside a shallow glacial bergschrund",
          "In a prefabricated aluminum high-altitude hut",
          "Under a natural granite rock overhang",
          "Inside portable double-walled expedition tents"
        ],
        answer: 0,
        explanation: "...bivouac inside a shallow glacial bergschrund."
      },
      {
        id: 6,
        type: "true_false",
        q: "Team leader Marcus insisted on continuing to the summit despite the severe storm.",
        options: ["True", "False"],
        answer: "False",
        explanation: "Marcus made the agonizing decision to 'abort the summit push.'"
      },
      {
        id: 7,
        type: "fill_blank",
        q: "The climbers endured gale-force gusts exceeding ______ knots.",
        answer: "90",
        acceptedAnswers: ["90", "ninety", "90 knots"],
        explanation: "...enduring gale-force gusts exceeding ninety knots."
      },
      {
        id: 8,
        type: "multiple_choice",
        q: "What enduring philosophical lesson did the narrator derive from surviving the ordeal?",
        options: [
          "Survival was a profound lesson in humbleness before nature's power",
          "Extreme weather can be easily predicted with modern technology",
          "Climbing mountains without supplementary oxygen is foolish",
          "Summiting is always worth any personal physical risk"
        ],
        answer: 0,
        explanation: "The story concludes: '...survival felt less like an achievement than a profound lesson in humbleness.'"
      }
    ]
  }
];


// Browser global va Node module eksportini qo'llab-quvvatlash
if (typeof window !== 'undefined') {
  window.TOPICS = TOPICS;
  window.READING_TOPICS = READING_TOPICS;
  window.LISTENING_EXERCISES = LISTENING_EXERCISES;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TOPICS, READING_TOPICS, LISTENING_EXERCISES };
}
