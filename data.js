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
  /* ---------- A1 DARAJA (Boshlang'ich / Oson) ---------- */
  {
    id: 101,
    level: "A1",
    levelName: "A1 Oson",
    title: "The Lost Kitten",
    text: `On a warm sunny afternoon, Tom walked into his garden. He heard a very quiet {sound|tovush} behind the flowers.
    
He looked closely and saw a tiny white kitten. The kitten looked scared and had dirt on its {fur|yungi}. It was cold and hungry.
    
Tom brought a small bowl of warm milk and placed it gently on the grass. The kitten ran forward and drank all of it. Tom decided to {adopt|boqib olmoq} the sweet animal and named her Snow.`,
    questions: [
      {
        q: "Where did Tom find the kitten?",
        options: [
          "Behind the flowers in his garden",
          "Under his bed in the bedroom",
          "At the bus stop on the street"
        ],
        answer: 0
      },
      {
        q: "What did Tom give to the kitten?",
        options: [
          "A piece of warm bread",
          "A small bowl of warm milk",
          "A bowl of fresh cold water"
        ],
        answer: 1
      },
      {
        q: "What name did Tom give to his new pet?",
        options: [
          "Bella",
          "Max",
          "Snow"
        ],
        answer: 2
      }
    ]
  },
  {
    id: 102,
    level: "A1",
    levelName: "A1 Oson",
    title: "Sunday Picnic",
    text: `Last Sunday was a clear and beautiful day. Emma and her parents prepared a large basket with sandwiches, red apples, and orange {juice|sharbat}.
    
They drove their car to a peaceful lake outside the city. The green grass was soft and the water was very {calm|sokin}. Emma and her father threw a ball while her mother read an interesting magazine.
    
In the evening, they watched the orange sunset together. It was a very relaxing and {cheerful|quvnoq} weekend.`,
    questions: [
      {
        q: "What did Emma's family put in their picnic basket?",
        options: [
          "Sandwiches, red apples, and orange juice",
          "Hot soup, rice, and black tea",
          "Pizza, chocolate cake, and soda"
        ],
        answer: 0
      },
      {
        q: "Where did the family go for their picnic?",
        options: [
          "To a busy shopping center",
          "To a quiet lake outside the city",
          "To a cinema in the city center"
        ],
        answer: 1
      },
      {
        q: "What did Emma and her father do near the lake?",
        options: [
          "They cooked fish over a fire",
          "They swam across the lake",
          "They threw a ball together"
        ],
        answer: 2
      }
    ]
  },
  {
    id: 103,
    level: "A1",
    levelName: "A1 Oson",
    title: "A Visit to the Library",
    text: `David loves books. Every Wednesday afternoon, he walks to the town library after school.
    
The library is very quiet and clean. Rows of wooden shelves are filled with colorful storybooks. David asked the kind {librarian|kutubxonachi} for a book about wild African animals.
    
The librarian smiled and showed him a large book with pictures of lions and elephants. David sat at a wooden table and read happily for one hour before {borrowing|qarzga olmoq} it to read at home.`,
    questions: [
      {
        q: "How often does David visit the library?",
        options: [
          "Every Wednesday afternoon",
          "Only on Saturday mornings",
          "Once every month"
        ],
        answer: 0
      },
      {
        q: "What kind of book was David looking for?",
        options: [
          "A book about modern fast cars",
          "A book about wild African animals",
          "A storybook about cooking food"
        ],
        answer: 1
      },
      {
        q: "What did the librarian do?",
        options: [
          "Told him the library was closed",
          "Asked him to return tomorrow",
          "Smiled and showed him a book with lions and elephants"
        ],
        answer: 2
      }
    ]
  },
  {
    id: 104,
    level: "A1",
    levelName: "A1 Oson",
    title: "The Busy Bakery",
    text: `Near my apartment, there is a small family bakery called Sweet Morning. The baker wakes up at four in the morning to prepare fresh {dough|xamir}.
    
When I open my bedroom window, I can smell sweet vanilla and warm cinnamon. At eight o'clock, neighbors line up to buy hot bread and fruit pies.
    
The baker always smiles and greets everyone warmly. Starting the morning with fresh pastry and tea brings a {delightful|yoqimli} feeling to our whole street.`,
    questions: [
      {
        q: "What time does the baker wake up to work?",
        options: [
          "At four in the morning",
          "At seven in the morning",
          "At nine in the morning"
        ],
        answer: 0
      },
      {
        q: "What can be smelled from the bakery in the morning?",
        options: [
          "Fried onions and roasted meat",
          "Sweet vanilla and warm cinnamon",
          "Fresh coffee and chocolate ice cream"
        ],
        answer: 1
      },
      {
        q: "Why do neighbors line up at eight o'clock?",
        options: [
          "To buy hot bread and fruit pies",
          "To drink free milk",
          "To wait for the morning bus"
        ],
        answer: 0
      }
    ]
  },
  {
    id: 105,
    level: "A1",
    levelName: "A1 Oson",
    title: "The Blue Bicycle",
    text: `For his tenth birthday, Lucas received a wonderful gift from his grandfather: a bright blue bicycle with silver handlebars.
    
Lucas was very excited, but he did not know how to ride without help. His grandfather held the back of the seat and walked {patiently|sabr bilan} behind him in the yard.
    
After three attempts, Lucas found his {balance|muvozanat} and pedaled all the way to the wooden gate by himself. He felt proud and laughed with pure {excitement|hayajon}.`,
    questions: [
      {
        q: "Who gave Lucas the blue bicycle?",
        options: [
          "His school teacher",
          "His grandfather",
          "His best friend"
        ],
        answer: 1
      },
      {
        q: "What did his grandfather do to help him?",
        options: [
          "He bought him an electric helmet",
          "He held the back of the seat and walked patiently",
          "He showed him an instructional video"
        ],
        answer: 1
      },
      {
        q: "How did Lucas feel when he pedaled to the gate alone?",
        options: [
          "Tired and bored",
          "Angry and confused",
          "Proud and excited"
        ],
        answer: 2
      }
    ]
  },

  /* ---------- A2 DARAJA (O'rta-boshlang'ich) ---------- */
  {
    id: 106,
    level: "A2",
    levelName: "A2 O'rta",
    title: "A Weekend in Samarkand",
    text: `Last autumn, Malika took the high-speed train from Tashkent to Samarkand for a weekend trip. The journey took just over two hours, and the scenery through the window was breathtaking.
    
Her first stop was the famous Registan square. The majestic blue tiles on the ancient madrasahs glittered under the clear autumn sun. She took many photos and listened to an elderly guide explaining the rich history of the Silk Road.
    
Later in the afternoon, Malika visited the lively Siab Bazaar. She bought sweet dried apricots, fresh almonds, and traditional round bread to bring back to her family. It was an {unforgettable|unutilmas} cultural experience.`,
    questions: [
      {
        q: "How did Malika travel to Samarkand?",
        options: [
          "By high-speed train",
          "By an intercity bus",
          "In her own car"
        ],
        answer: 0
      },
      {
        q: "What did Malika do at Registan square?",
        options: [
          "She bought train tickets for Tashkent",
          "She admired the blue tiles and listened to an elderly guide",
          "She attended an evening music festival"
        ],
        answer: 1
      },
      {
        q: "What items did she purchase at Siab Bazaar?",
        options: [
          "Handmade ceramic plates and teapots",
          "Silk scarves and leather shoes",
          "Dried apricots, fresh almonds, and traditional bread"
        ],
        answer: 2
      }
    ]
  },
  {
    id: 107,
    level: "A2",
    levelName: "A2 O'rta",
    title: "The Science Fair",
    text: `Every spring, Greenwood High School organizes an annual science fair where students showcase their practical inventions. This year, Kevin and his classmate Maya decided to build a solar water heater using recycled plastic bottles and black copper pipes.
    
They spent two weeks testing their model on the school rooftop. On cloudy days, the water remained lukewarm, but under direct sunlight, it reached forty-five degrees Celsius.
    
The school judges were {impressed|hayratda} by their creativity and environmental awareness. At the closing ceremony, Kevin and Maya were awarded the first prize for the best {sustainable|barqaror} project.`,
    questions: [
      {
        q: "What project did Kevin and Maya build for the science fair?",
        options: [
          "A solar water heater made with recycled materials",
          "A robot that cleans the school playground",
          "A miniature wind turbine for lighting classrooms"
        ],
        answer: 0
      },
      {
        q: "Where did they test their invention for two weeks?",
        options: [
          "Inside the chemistry laboratory",
          "On the school rooftop",
          "In Kevin's private garage"
        ],
        answer: 1
      },
      {
        q: "What award did the judges give to Kevin and Maya?",
        options: [
          "Third prize in computer programming",
          "A certificate of attendance",
          "First prize for the best sustainable project"
        ],
        answer: 2
      }
    ]
  },
  {
    id: 108,
    level: "A2",
    levelName: "A2 O'rta",
    title: "Learning to Cook",
    text: `Until recently, Alex relied entirely on frozen meals and fast food. However, when he moved into his own apartment, he realized that cooking fresh meals at home was both healthier and much more {economical|tejamkor}.
    
He invited two close friends for dinner and decided to prepare a traditional vegetable soup from his grandmother's old recipe book. At first, chopping onions brought tears to his eyes, but simmering carrots, herbs, and potatoes filled the kitchen with an amazing aroma.
    
When his friends tasted the warm soup, they praised his cooking and asked for a second bowl. Alex felt encouraged and decided to master a new recipe every weekend.`,
    questions: [
      {
        q: "Why did Alex decide to start cooking at home?",
        options: [
          "It was healthier and more economical than eating fast food",
          "He wanted to work as a professional chef in a restaurant",
          "His doctor told him to stop eating vegetables"
        ],
        answer: 0
      },
      {
        q: "What recipe did Alex choose to prepare for his friends?",
        options: [
          "A grandmother's traditional vegetable soup recipe",
          "A spicy Mexican chicken taco recipe",
          "An Italian baked lasagna recipe"
        ],
        answer: 0
      },
      {
        q: "How did Alex's friends react to the soup?",
        options: [
          "They said it was too salty and left early",
          "They praised his cooking and asked for a second bowl",
          "They suggested ordering pizza instead"
        ],
        answer: 1
      }
    ]
  },
  {
    id: 109,
    level: "A2",
    levelName: "A2 O'rta",
    title: "The Railway Journey",
    text: `Traveling by train offers a rare chance to slow down and observe the world. Last month, Oliver took a six-hour journey across the northern countryside to visit his cousin.
    
Instead of browsing social media on his smartphone, he sat beside the window with a notebook. The train rolled past green rolling pastures, quiet pine forests, and small stone farmhouses.
    
An elderly traveler sitting opposite Oliver shared fresh grapes and told fascinating stories about how the railway was constructed sixty years ago. By the time the train reached the final station, Oliver felt refreshed and inspired by the human connection.`,
    questions: [
      {
        q: "How long was Oliver's train journey to visit his cousin?",
        options: [
          "Two hours",
          "Six hours",
          "Twelve hours"
        ],
        answer: 1
      },
      {
        q: "What did Oliver do during the trip instead of using his phone?",
        options: [
          "He sat by the window with a notebook and watched the countryside",
          "He slept through the entire journey",
          "He played video games on his laptop"
        ],
        answer: 0
      },
      {
        q: "What did the elderly traveler share with Oliver?",
        options: [
          "A newspaper and hot coffee",
          "Fresh grapes and historical stories about the railway",
          "A map of the northern mountains"
        ],
        answer: 1
      }
    ]
  },
  {
    id: 110,
    level: "A2",
    levelName: "A2 O'rta",
    title: "Planting a Tree",
    text: `On a Saturday morning in April, neighbors in the Oakridge district gathered at the community park for an annual greening initiative.
    
Armed with shovels, watering cans, and gardening gloves, adults and children worked side by side. They dug twenty deep holes along the gravel walking path and planted young cherry and maple saplings.
    
A retired gardener named Mr. Harris taught the children how to compress the soil firmly around the roots and apply organic fertilizer. By noon, the barren walkway had been transformed into an avenue of hope that will provide cool shade for generations to come.`,
    questions: [
      {
        q: "What event took place at the community park in April?",
        options: [
          "An outdoor art exhibition",
          "An annual tree planting greening initiative",
          "A musical concert for local charities"
        ],
        answer: 1
      },
      {
        q: "What kinds of saplings were planted along the walking path?",
        options: [
          "Cherry and maple saplings",
          "Apple and lemon trees",
          "Tall pine and palm trees"
        ],
        answer: 0
      },
      {
        q: "What did Mr. Harris teach the children?",
        options: [
          "How to build wooden birdhouses",
          "How to paint the garden benches",
          "How to compress the soil and apply organic fertilizer"
        ],
        answer: 2
      }
    ]
  },

  /* ---------- B1 DARAJA (Mustaqil / Murakkab) ---------- */
  {
    id: 111,
    level: "B1",
    levelName: "B1 Murakkab",
    title: "The Digital Detox",
    text: `Like many contemporary students, Daniel felt overwhelmed by constant notifications, message alerts, and algorithmic feeds. He noticed that his attention span had deteriorated significantly, making it difficult to read a single chapter of a textbook without checking his phone.
    
Determined to regain mental clarity, Daniel decided to undertake a forty-eight-hour digital detox over the weekend. He switched off his smartphone, tucked it inside a bedroom drawer, and informed his closest friends in advance.
    
The initial hours were surprisingly challenging, filled with phantom vibrations and a restless urge to scroll. However, by Sunday morning, an extraordinary sense of calm emerged. He finished an entire novel, took a long solitary hike, and prepared a wholesome dinner. The experiment proved that unplugging is essential for deep {focus|diqqat} and emotional {wellbeing|farovonlik}.`,
    questions: [
      {
        q: "Why did Daniel decide to start a digital detox?",
        options: [
          "His smartphone broke and he could not afford a replacement",
          "Constant notifications and feeds deteriorated his attention span",
          "His university professors banned all electronic devices"
        ],
        answer: 1
      },
      {
        q: "What was Daniel's experience during the first few hours?",
        options: [
          "He immediately fell asleep for ten hours",
          "He felt phantom vibrations and a restless urge to scroll",
          "He felt completely peaceful from the very first minute"
        ],
        answer: 1
      },
      {
        q: "What did Daniel achieve by the end of his weekend detox?",
        options: [
          "He finished a novel, went on a hike, and regained mental clarity",
          "He decided to sell his smartphone permanently",
          "He failed the challenge after only three hours"
        ],
        answer: 0
      }
    ]
  },
  {
    id: 112,
    level: "B1",
    levelName: "B1 Murakkab",
    title: "Urban Rooftop Gardens",
    text: `In densely populated metropolises, green spaces are often scarce as concrete high-rises dominate the skyline. To combat rising temperatures and food insecurity, innovative architects and environmentalists are transforming barren rooftops into productive agricultural sanctuaries.
    
These elevated micro-farms produce organic leafy greens, herbs, and tomatoes without requiring synthetic pesticides. Furthermore, the layer of vegetation acts as a natural thermal insulator, reducing air conditioning energy consumption during scorching summers by up to twenty percent.
    
Beyond tangible ecological benefits, rooftop gardens offer office workers and residents a peaceful retreat from urban noise. Community members volunteer weekly to cultivate crops and distribute fresh harvests to local food banks, proving that sustainability can thrive even in concrete jungles.`,
    questions: [
      {
        q: "What primary problem do urban rooftop gardens address?",
        options: [
          "Excess rainfall flooding underground subway stations",
          "Scarcity of green spaces, high temperatures, and urban food access",
          "A shortage of parking spaces in city centers"
        ],
        answer: 1
      },
      {
        q: "How does the layer of rooftop vegetation affect building energy consumption?",
        options: [
          "It increases electricity bills due to heavy irrigation pumps",
          "It acts as a thermal insulator, cutting AC energy usage by up to 20%",
          "It has no measurable effect on indoor temperature"
        ],
        answer: 1
      },
      {
        q: "What do community volunteers do with the fresh harvest?",
        options: [
          "They sell it exclusively to five-star luxury hotels",
          "They export the organic vegetables to foreign countries",
          "They distribute fresh harvests to local community food banks"
        ],
        answer: 2
      }
    ]
  },
  {
    id: 113,
    level: "B1",
    levelName: "B1 Murakkab",
    title: "The Mystery of the Clock Tower",
    text: `In the historic center of an alpine village stood a medieval stone clock tower whose bronze bells had remained silent for over thirty years. Several modern technicians had attempted to repair the mechanism, but the intricate gears refused to turn.
    
Last winter, an eighty-year-old retired horologist named Arthur visited the village. Equipped with brass tools and traditional mechanical blueprints, he climbed the narrow spiral stairs each morning.
    
After examining the central pendulum, Arthur discovered that a tiny bent cog had locked the escapement wheel. Rather than replacing it with modern steel, he spent three days hand-filing a custom bronze replacement. When the heavy bells finally chimed at noon on Christmas Eve, the entire village gathered in celebration of timeless craftsmanship.`,
    questions: [
      {
        q: "For how long had the village clock tower remained silent?",
        options: [
          "For five years",
          "For over thirty years",
          "For more than a century"
        ],
        answer: 1
      },
      {
        q: "What was the actual cause of the clock's failure?",
        options: [
          "A broken main rope that held the heavy pendulum",
          "A lightning strike that melted the bronze bells",
          "A tiny bent cog that locked the escapement wheel"
        ],
        answer: 2
      },
      {
        q: "How did Arthur solve the mechanical problem?",
        options: [
          "He hand-filed a custom bronze cog to match the historic mechanism",
          "He installed an electronic battery-powered motor",
          "He replaced all the internal wooden gears with plastic parts"
        ],
        answer: 0
      }
    ]
  },
  {
    id: 114,
    level: "B1",
    levelName: "B1 Murakkab",
    title: "Habits of Lifelong Learners",
    text: `In a rapidly evolving global economy, formal education marks merely the beginning of intellectual growth rather than its culmination. Individuals who maintain intellectual curiosity throughout adulthood possess a distinct advantage in both professional adaptability and cognitive health.
    
Neuroscientific research indicates that engaging in consistent, deliberate learning stimulates neuroplasticity — the brain's ability to forge new neural pathways. Devoting merely twenty minutes each day to reading analytical literature, acquiring a foreign language, or practicing a musical instrument dramatically reinforces working memory.
    
Crucially, lifelong learners cultivate an attitude known as a growth mindset: they perceive errors not as evidence of inadequacy, but as invaluable feedback. By embracing uncertainty and remaining humble students of life, they maintain mental agility well into advanced age.`,
    questions: [
      {
        q: "What does neuroscientific research reveal about daily deliberate learning?",
        options: [
          "It leads to cognitive fatigue and permanent memory loss",
          "It stimulates neuroplasticity and creates new neural connections",
          "It only benefits children under the age of twelve"
        ],
        answer: 1
      },
      {
        q: "How much daily time is recommended to significantly reinforce working memory?",
        options: [
          "At least three uninterrupted hours",
          "Merely twenty minutes a day",
          "Forty-five minutes every weekend only"
        ],
        answer: 1
      },
      {
        q: "How do individuals with a growth mindset view their personal mistakes?",
        options: [
          "As undeniable proof that they lack natural talent",
          "As dangerous failures that should be concealed from others",
          "As invaluable feedback and opportunities for development"
        ],
        answer: 2
      }
    ]
  },
  {
    id: 115,
    level: "B1",
    levelName: "B1 Murakkab",
    title: "Sustainable Travel",
    text: `Mass tourism has brought economic prosperity to many remote destinations, but it has simultaneously placed immense strain on fragile natural habitats and local cultural traditions. Overcrowded mountain trails, discarded plastic refuse, and commercialized sacred sites threaten the authenticity of world wonders.
    
In response, an enlightened movement known as sustainable travel encourages globetrotters to minimize their ecological footprint. Conscious travelers prioritize eco-certified guesthouses, travel by train when feasible, and patronize independent family restaurants rather than multinational chains.
    
Furthermore, responsible travelers invest time in understanding local customs and etiquette before arriving. By treating host communities with profound respect and dignity, travelers ensure that cultural exchanges foster genuine mutual appreciation rather than economic exploitation.`,
    questions: [
      {
        q: "What negative impact has unregulated mass tourism caused in fragile regions?",
        options: [
          "Severe decrease in international flight prices",
          "Strain on natural habitats, plastic pollution, and cultural erosion",
          "A complete lack of visitors in historic cities"
        ],
        answer: 1
      },
      {
        q: "What is a key practice recommended for sustainable travelers?",
        options: [
          "Staying only at international luxury hotel chains",
          "Prioritizing eco-friendly lodging, train transit, and local businesses",
          "Avoiding all interaction with local residents"
        ],
        answer: 1
      },
      {
        q: "Why is learning local customs before arrival important?",
        options: [
          "It ensures respect and fosters genuine mutual appreciation",
          "It guarantees discounts at souvenir gift shops",
          "It is required by international airline border security"
        ],
        answer: 0
      }
    ]
  }
];

// Browser global va Node module eksportini qo'llab-quvvatlash
if (typeof window !== 'undefined') {
  window.TOPICS = TOPICS;
  window.READING_TOPICS = READING_TOPICS;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TOPICS, READING_TOPICS };
}
