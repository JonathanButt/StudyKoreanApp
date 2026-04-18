// ============================================================
//  KOREAN PHRASES DATA  —  phrases.js
// ============================================================
//
//  HOW TO ADD PHRASES
//  ------------------
//  1. Find the category you want (or add a new one at the bottom).
//  2. Copy any existing phrase entry and paste it inside that
//     category's "phrases" array.
//  3. Fill in all four fields. The "notes" field is optional.
//  4. Make sure the "id" is unique — use the pattern:
//       "<short_category>_<short_keyword>"   e.g. "food_order_please"
//
//  HOW TO ADD A NEW CATEGORY
//  -------------------------
//  Copy this block and add it to the array at the bottom:
//
//    {
//      category: "My Category Name",
//      phrases: [
//        { id: "mycat_001", korean: "...", english: "...", romanization: "...", notes: "" },
//      ]
//    },
//
// ============================================================

const PHRASES_DATA = [

  // ----------------------------------------------------------
  {
    category: "Greetings",
    phrases: [
      { id: "gr_hello",         korean: "안녕하세요",          english: "Hello (formal)",                   romanization: "annyeonghaseyo",         notes: "Used in most everyday situations" },
      { id: "gr_hi",            korean: "안녕",               english: "Hi / Bye (informal)",              romanization: "annyeong",               notes: "With friends or people younger than you" },
      { id: "gr_bye_leaving",   korean: "안녕히 가세요",        english: "Goodbye (you are leaving)",        romanization: "annyeonghi gaseyo",      notes: "Said to someone who is staying" },
      { id: "gr_bye_staying",   korean: "안녕히 계세요",        english: "Goodbye (you are staying)",        romanization: "annyeonghi gyeseyo",     notes: "Said to someone who is leaving" },
      { id: "gr_nice_meet",     korean: "만나서 반갑습니다",     english: "Nice to meet you (formal)",        romanization: "mannaseo bangapseumnida", notes: "Most formal version" },
      { id: "gr_nice_meet_inf", korean: "만나서 반가워요",       english: "Nice to meet you (polite)",        romanization: "mannaseo bangawoyo",     notes: "Polite but not as stiff" },
      { id: "gr_how_are_you",   korean: "잘 지냈어요?",         english: "Have you been well?",              romanization: "jal jinaesseoyo",        notes: "Used when you haven't seen someone in a while" },
      { id: "gr_ive_been_well", korean: "잘 지냈어요",          english: "I've been well",                   romanization: "jal jinaesseoyo",        notes: "" },
      { id: "gr_been_busy",     korean: "바빴어요",             english: "I've been busy",                   romanization: "babpasseoyo",            notes: "Common response to 잘 지냈어요?" },
      { id: "gr_see_you",       korean: "또 봐요",              english: "See you again",                    romanization: "tto bwayo",              notes: "" },
      { id: "gr_welcome",       korean: "어서 오세요",          english: "Welcome / Come on in",             romanization: "eoseo oseyo",            notes: "Said to customers entering a store" },
    ]
  },

  // ----------------------------------------------------------
  {
    category: "Introductions",
    phrases: [
      { id: "int_my_name",      korean: "제 이름은 ___ 이에요 / 예요", english: "My name is ___",            romanization: "je ireumeun ___ ieyo / yeyo", notes: "이에요 after consonant, 예요 after vowel" },
      { id: "int_i_am",         korean: "저는 ___ 이에요",      english: "I am ___",                         romanization: "jeoneun ___ ieyo",       notes: "" },
      { id: "int_where_from",   korean: "어디에서 왔어요?",       english: "Where are you from?",              romanization: "eodieseo wasseoyo",      notes: "" },
      { id: "int_from_usa",     korean: "미국에서 왔어요",        english: "I'm from the United States",       romanization: "migukeseo wasseoyo",     notes: "Replace 미국 with your country" },
      { id: "int_what_do_you",  korean: "뭐 하세요?",            english: "What do you do? (job)",            romanization: "mwo haseyo",             notes: "Casual way to ask someone's occupation" },
      { id: "int_occupation",   korean: "저는 ___ 이에요",       english: "I am a ___  (job title)",          romanization: "jeoneun ___ ieyo",       notes: "" },
    ]
  },

  // ----------------------------------------------------------
  {
    category: "Classroom & Studying",
    phrases: [
      { id: "class_dont_know",  korean: "모르겠어요",            english: "I don't know / I'm not sure",      romanization: "moreugessseoyo",         notes: "Softer than 몰라요" },
      { id: "class_understand", korean: "알겠어요",              english: "I understand / Got it",             romanization: "algessseoyo",            notes: "" },
      { id: "class_again",      korean: "다시 말해 주세요",       english: "Please say that again",            romanization: "dasi malhae juseyo",     notes: "" },
      { id: "class_slowly",     korean: "천천히 말해 주세요",     english: "Please speak slowly",              romanization: "cheoncheonhi malhae juseyo", notes: "" },
      { id: "class_korean",     korean: "한국어로 뭐예요?",       english: "What is it in Korean?",            romanization: "hangugeollo mwoyeyo",    notes: "" },
      { id: "class_english",    korean: "영어로 뭐예요?",         english: "What is it in English?",           romanization: "yeongeoro mwoyeyo",      notes: "" },
      { id: "class_how_write",  korean: "어떻게 써요?",           english: "How do you write it?",             romanization: "eotteoke sseoyo",        notes: "" },
      { id: "class_how_read",   korean: "어떻게 읽어요?",         english: "How do you read it?",              romanization: "eotteoke ilgeoyo",       notes: "" },
      { id: "class_question",   korean: "질문 있어요",            english: "I have a question",                romanization: "jilmun isseoyo",         notes: "" },
    ]
  },

  // ----------------------------------------------------------
  {
    category: "Shopping",
    phrases: [
      { id: "shop_how_much",    korean: "얼마예요?",             english: "How much is it?",                  romanization: "eolmayeyo",              notes: "" },
      { id: "shop_too_exp",     korean: "너무 비싸요",           english: "It's too expensive",               romanization: "neomu bissayo",          notes: "" },
      { id: "shop_discount",    korean: "좀 깎아 주세요",        english: "Please give me a discount",        romanization: "jom kkakka juseyo",      notes: "" },
      { id: "shop_do_you_have", korean: "___ 있어요?",           english: "Do you have ___?",                 romanization: "___ isseoyo",            notes: "" },
      { id: "shop_just_look",   korean: "그냥 보는 거예요",       english: "I'm just browsing",                romanization: "geunyang boneun geoyeyo", notes: "Use when staff approach you" },
      { id: "shop_give_me",     korean: "이거 주세요",           english: "I'll take this / Give me this",    romanization: "igeo juseyo",            notes: "" },
      { id: "shop_receipt",     korean: "영수증 주세요",          english: "Please give me the receipt",       romanization: "yeongsujeung juseyo",    notes: "" },
      { id: "shop_card",        korean: "카드로 계산할게요",      english: "I'll pay by card",                 romanization: "kadeuro gyesanhalgeyo",  notes: "" },
      { id: "shop_cash",        korean: "현금으로 계산할게요",    english: "I'll pay by cash",                 romanization: "hyeongeumeuro gyesanhalgeyo", notes: "" },
    ]
  },

  // ----------------------------------------------------------
  {
    category: "Restaurant & Food",
    phrases: [
      { id: "food_table_for",   korean: "___ 명이요",            english: "___ people (telling # in your group)", romanization: "___ myeongiyo",     notes: "e.g. 두 명이요 = 2 people" },
      { id: "food_menu",        korean: "메뉴 주세요",           english: "Please give me a menu",            romanization: "menyu juseyo",           notes: "" },
      { id: "food_order",       korean: "주문할게요",             english: "I'd like to order",                romanization: "jumunhalgeyo",           notes: "Said when you're ready to order" },
      { id: "food_recommend",   korean: "뭐가 맛있어요?",        english: "What's good here? / What's delicious?", romanization: "mwoga massisseoyo", notes: "" },
      { id: "food_water",       korean: "물 주세요",             english: "Please give me some water",        romanization: "mul juseyo",             notes: "" },
      { id: "food_refill",      korean: "___ 좀 더 주세요",      english: "Please give me more ___",          romanization: "___ jom deo juseyo",     notes: "e.g. 소금 좀 더 주세요 = more salt please" },
      { id: "food_check",       korean: "계산서 주세요",          english: "Check please / Bill please",       romanization: "gyesanseo juseyo",       notes: "" },
      { id: "food_together",    korean: "같이 계산해 주세요",     english: "Together please (one bill)",       romanization: "gachi gyesanhae juseyo", notes: "" },
      { id: "food_separate",    korean: "따로따로 계산해 주세요", english: "Separately please (split bill)",   romanization: "ttarottaro gyesanhae juseyo", notes: "" },
      { id: "food_delicious",   korean: "맛있어요",              english: "It's delicious",                   romanization: "massisseoyo",            notes: "" },
      { id: "food_spicy",       korean: "덜 맵게 해 주세요",      english: "Please make it less spicy",        romanization: "deol maepge hae juseyo", notes: "" },
      { id: "food_allergy",     korean: "___ 알레르기가 있어요",  english: "I'm allergic to ___",              romanization: "___ allereugi ga isseoyo", notes: "" },
    ]
  },

  // ----------------------------------------------------------
  {
    category: "Transportation",
    phrases: [
      { id: "trans_where_is",   korean: "___ 어디예요?",          english: "Where is ___?",                   romanization: "___ eodiyeyo",           notes: "" },
      { id: "trans_how_get",    korean: "___ 어떻게 가요?",        english: "How do I get to ___?",            romanization: "___ eotteoke gayo",      notes: "" },
      { id: "trans_take_sub",   korean: "지하철 타세요",           english: "Take the subway",                  romanization: "jihacheol taseyo",       notes: "" },
      { id: "trans_transfer",   korean: "___ 에서 갈아타세요",     english: "Transfer at ___",                  romanization: "___ eseo garataaseyo",   notes: "" },
      { id: "trans_how_long",   korean: "얼마나 걸려요?",          english: "How long does it take?",           romanization: "eolmana geollyeoyo",     notes: "" },
      { id: "trans_taxi_go",    korean: "___ 에 가 주세요",        english: "Please take me to ___",            romanization: "___ e ga juseyo",        notes: "For taxis" },
      { id: "trans_here_fine",  korean: "여기서 세워 주세요",      english: "Please stop here",                 romanization: "yeogiseo sewo juseyo",   notes: "For taxis" },
      { id: "trans_lost",       korean: "길을 잃었어요",           english: "I'm lost",                         romanization: "gireul ireosseoyo",      notes: "" },
    ]
  },

  // ----------------------------------------------------------
  {
    category: "Asking for Help",
    phrases: [
      { id: "help_excuse_me",   korean: "실례지만",               english: "Excuse me, but...",                romanization: "sillyejiman",            notes: "Polite way to get attention" },
      { id: "help_sorry",       korean: "죄송합니다",              english: "I'm sorry (formal)",               romanization: "joesonghamnida",         notes: "More formal than 미안해요" },
      { id: "help_sorry_inf",   korean: "미안해요",               english: "I'm sorry (polite)",               romanization: "mianhaeyo",              notes: "" },
      { id: "help_okay",        korean: "괜찮아요",               english: "It's okay / No problem",           romanization: "gwaenchanayo",           notes: "" },
      { id: "help_no_korean",   korean: "한국어를 잘 못해요",      english: "I can't speak Korean well",        romanization: "hangugeoреul jal motaeyo", notes: "" },
      { id: "help_english",     korean: "영어 할 줄 아세요?",      english: "Do you speak English?",            romanization: "yeongeo hal jul aseyo",  notes: "" },
      { id: "help_help_me",     korean: "도와 주세요",             english: "Please help me",                   romanization: "dowa juseyo",            notes: "" },
      { id: "help_repeat",      korean: "다시 한번 말해 주세요",   english: "Please say it one more time",      romanization: "dasi hanbeon malhae juseyo", notes: "" },
    ]
  },

  // ----------------------------------------------------------
  {
    category: "Daily Conversations",
    phrases: [
      { id: "daily_really",     korean: "정말요?",                english: "Really?",                          romanization: "jeongmalyo",             notes: "" },
      { id: "daily_of_course",  korean: "물론이죠",               english: "Of course",                        romanization: "mullonjijyo",            notes: "" },
      { id: "daily_i_see",      korean: "그렇군요",               english: "I see / Is that so",               romanization: "geureokkunyo",           notes: "" },
      { id: "daily_so_so",      korean: "그저 그래요",             english: "So-so",                            romanization: "geujeo geuraeyo",        notes: "" },
      { id: "daily_a_moment",   korean: "잠깐만요",               english: "Just a moment",                    romanization: "jamkkanmanyo",           notes: "" },
      { id: "daily_no_problem", korean: "문제없어요",              english: "No problem",                       romanization: "munjeeopseoyo",          notes: "" },
      { id: "daily_lets_go",    korean: "가자",                   english: "Let's go (informal)",              romanization: "gaja",                   notes: "With close friends" },
      { id: "daily_lets_eat",   korean: "밥 먹자",                english: "Let's eat (informal)",             romanization: "bap meokja",             notes: "" },
      { id: "daily_good_job",   korean: "잘 했어요",              english: "Good job / Well done",             romanization: "jal haesseoyo",          notes: "" },
      { id: "daily_fighting",   korean: "화이팅!",                english: "Fighting! / You've got this!",     romanization: "hwaiting",               notes: "Korean expression of encouragement" },
    ]
  },

  // ----------------------------------------------------------
  {
    category: "Phone Calls",
    phrases: [
      { id: "phone_hello",      korean: "여보세요",               english: "Hello (answering phone)",          romanization: "yeoboseyo",              notes: "Only used on the phone" },
      { id: "phone_who",        korean: "누구세요?",               english: "Who is this?",                     romanization: "nuguseyo",               notes: "" },
      { id: "phone_this_is",    korean: "저는 ___ 이에요",        english: "This is ___",                      romanization: "jeoneun ___ ieyo",       notes: "" },
      { id: "phone_is_there",   korean: "___ 씨 계세요?",         english: "Is ___ there?",                    romanization: "___ ssi gyeseyo",        notes: "" },
      { id: "phone_hold",       korean: "잠깐 기다려 주세요",      english: "Please wait a moment",             romanization: "jamkkan gidaryeo juseyo", notes: "" },
      { id: "phone_call_back",  korean: "나중에 다시 전화할게요",  english: "I'll call back later",             romanization: "najunge dasi jeonhwahalgeyo", notes: "" },
      { id: "phone_wrong",      korean: "잘못 거셨어요",           english: "You have the wrong number",        romanization: "jalmot geosseoyo",       notes: "" },
    ]
  },

  // ----------------------------------------------------------
  {
    category: "Feelings & Reactions",
    phrases: [
      { id: "feel_happy",       korean: "기뻐요",                 english: "I'm happy",                        romanization: "gippeoyo",               notes: "" },
      { id: "feel_sad",         korean: "슬퍼요",                 english: "I'm sad",                          romanization: "seulpeoyo",              notes: "" },
      { id: "feel_tired",       korean: "피곤해요",               english: "I'm tired",                        romanization: "pigonhaeyo",             notes: "" },
      { id: "feel_hungry",      korean: "배고파요",               english: "I'm hungry",                       romanization: "baegopayo",              notes: "" },
      { id: "feel_full",        korean: "배불러요",               english: "I'm full",                         romanization: "baebulreoyo",            notes: "" },
      { id: "feel_hot",         korean: "더워요",                 english: "I'm hot",                          romanization: "deoweoyo",               notes: "" },
      { id: "feel_cold",        korean: "추워요",                 english: "I'm cold",                         romanization: "chuwoyo",                notes: "" },
      { id: "feel_bored",       korean: "심심해요",               english: "I'm bored",                        romanization: "simsimaaeyo",            notes: "" },
      { id: "feel_excited",     korean: "신나요",                 english: "I'm excited",                      romanization: "sinnayo",                notes: "" },
      { id: "feel_surprised",   korean: "놀랐어요",               english: "I'm surprised",                    romanization: "nollasseoyo",            notes: "" },
    ]
  },

  // ----------------------------------------------------------
  {
    category: "Making Plans",
    phrases: [
      { id: "plan_free",        korean: "시간 있어요?",            english: "Are you free? / Do you have time?", romanization: "sigan isseoyo",        notes: "" },
      { id: "plan_when",        korean: "언제 만날까요?",          english: "When shall we meet?",              romanization: "eonje mannalkkayo",      notes: "" },
      { id: "plan_shall_we",    korean: "___ 할까요?",             english: "Shall we ___?",                    romanization: "___ halkkayo",           notes: "e.g. 밥 먹을까요? = Shall we eat?" },
      { id: "plan_sounds_good", korean: "좋아요",                 english: "Sounds good / Okay",               romanization: "joayo",                  notes: "Very versatile — approving a suggestion" },
      { id: "plan_cant",        korean: "그날은 안 돼요",          english: "That day doesn't work for me",     romanization: "geunareun an dwaeyo",    notes: "" },
      { id: "plan_see_you",     korean: "그럼 그때 봐요",          english: "See you then",                     romanization: "geureom geuttae bwayo",  notes: "" },
    ]
  },

  // ----------------------------------------------------------
  // ADD NEW CATEGORIES BELOW THIS LINE
  // ----------------------------------------------------------

];
