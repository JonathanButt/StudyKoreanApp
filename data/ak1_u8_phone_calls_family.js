// ============================================================
//  Active Korean 1 — Unit 8: Phone Calls & Family
//  File: data/ak1_u8_phone_calls_family.js
// ============================================================
//
//  HOW TO ADD VOCABULARY
//  ---------------------
//  Copy any entry below and paste it inside the vocabulary array.
//  Fields:
//    korean        Korean text (required)
//    english       English meaning (required)
//    romanization  Pronunciation guide (required)
//    example       Example sentence (optional)
//    tags          Array of tags, e.g. ["noun", "food"]
//
//  HOW TO ADD GRAMMAR
//  ------------------
//  Copy any entry below and paste it inside the grammar array.
//  Fields:
//    pattern      Short name for the rule
//    explanation  Full explanation
//    examples     Array of example strings

(function () {
  const unit = {
    id:    "ak1_u8",
    book:  "Active Korean 1",
    unit:  8,
    title: "Phone Calls & Family",

    vocabulary: [
      { korean: "여보세요", english: "Hello (on the phone)", romanization: "yeoboseyo", tags: ["greeting", "phone"] },
      { korean: "여보", english: "term of endearment for spouse", romanization: "yeobo", tags: ["honorific", "family"] },
      { korean: "여기", english: "here", romanization: "yeogi", tags: ["location"] },
      { korean: "거기", english: "there (close to listener, far from speaker)", romanization: "geogi", tags: ["location"] },
      { korean: "저기", english: "there (far from both)", romanization: "jeogi", tags: ["location"] },
      { korean: "지요", english: "right? (to check/verify information)", romanization: "jiyo", tags: ["grammar", "polite"] },
      { korean: "춥다", english: "to be cold", romanization: "chubda", tags: ["adjective"] },
      { korean: "춥지요?", english: "It's cold, right?", romanization: "chubjiyo", tags: ["phrase"] },
      { korean: "그런데요", english: "That is so/That is correct", romanization: "geureondeyo", tags: ["response"] },
      { korean: "그렇지", english: "That is so/That is correct (sounds like 그치)", romanization: "geureotji", tags: ["response"] },
      { korean: "실례지만", english: "Excuse me, but...", romanization: "sillyeojiman", tags: ["phrase", "polite"] },
      { korean: "실례", english: "an impolite action", romanization: "sillyae", tags: ["noun"] },
      { korean: "누구세요?", english: "Who are you? (polite)", romanization: "nuguseyo", tags: ["question", "polite"] },
      { korean: "누구", english: "who", romanization: "nugu", tags: ["question"] },
      { korean: "살다", english: "to live", romanization: "salda", tags: ["verb"] },
      { korean: "바꾸다", english: "to change; to put someone on the phone", romanization: "bakkuda", tags: ["verb"] },
      { korean: "좀", english: "a little; can soften a request", romanization: "jom", tags: ["adverb"] },
      { korean: "회의하다", english: "to have a business/work meeting", romanization: "hoeuihada", tags: ["verb"] },
      { korean: "화장실", english: "bathroom", romanization: "hwajangsil", tags: ["place"] },
      { korean: "화장실을 쓰다", english: "to use the bathroom", romanization: "hwajangsireul sseuda", tags: ["phrase"] },
      { korean: "노래하다", english: "to sing", romanization: "noraehada", tags: ["verb"] },
      { korean: "노래", english: "song", romanization: "norae", tags: ["noun"] },
      { korean: "그림을 그리다", english: "to draw, to paint", romanization: "geurimeul geurida", tags: ["verb", "phrase"] },
      { korean: "그림", english: "picture", romanization: "geurim", tags: ["noun"] },
      { korean: "크림", english: "cream", romanization: "keurim", tags: ["noun"] },
      { korean: "창문을 열어 주세요", english: "Please open the window", romanization: "changmuneul yeoreo juseyo", tags: ["phrase"] },
      { korean: "문을 닫아 주세요", english: "Please close the door", romanization: "muneul dada juseyo", tags: ["phrase"] },
      { korean: "춤(을) 추다", english: "to dance", romanization: "chum chuda", tags: ["verb"] },
      { korean: "춤 춰 주세요", english: "Please dance for me", romanization: "chum chweo juseyo", tags: ["phrase"] },
      { korean: "가위", english: "scissors", romanization: "gawi", tags: ["noun"] },
      { korean: "바위", english: "rock", romanization: "bawi", tags: ["noun"] },
      { korean: "보", english: "paper", romanization: "bo", tags: ["noun"] },
      { korean: "가족", english: "family", romanization: "gajok", tags: ["family"] },
      { korean: "친구의 가족", english: "my friend's family", romanization: "chingguui gajok", tags: ["family", "phrase"] },
      { korean: "할아버지", english: "grandfather", romanization: "harabeoji", tags: ["family"] },
      { korean: "할머니", english: "grandmother", romanization: "halmeoni", tags: ["family"] },
      { korean: "아버지", english: "father", romanization: "abeoji", tags: ["family"] },
      { korean: "어머니", english: "mother", romanization: "eomeoni", tags: ["family"] },
      { korean: "아빠", english: "dad", romanization: "appa", tags: ["family"] },
      { korean: "엄마", english: "mom", romanization: "eomma", tags: ["family"] },
      { korean: "누나", english: "older sister (for men)", romanization: "nuna", tags: ["family"] },
      { korean: "언니", english: "older sister (for women)", romanization: "eonni", tags: ["family"] },
      { korean: "형", english: "older brother (for men)", romanization: "hyeong", tags: ["family"] },
      { korean: "오빠", english: "older brother (for women)", romanization: "oppa", tags: ["family"] },
      { korean: "동생", english: "younger sibling", romanization: "dongsaeng", tags: ["family"] },
      { korean: "여동생", english: "younger sister", romanization: "yeodongsaeng", tags: ["family"] },
      { korean: "남동생", english: "younger brother", romanization: "namdongsaeng", tags: ["family"] },
      { korean: "아들", english: "son", romanization: "adeul", tags: ["family"] },
      { korean: "딸", english: "daughter", romanization: "ttal", tags: ["family"] },
      { korean: "남편", english: "husband", romanization: "nampyeon", tags: ["family"] },
      { korean: "아내", english: "wife", romanization: "anae", tags: ["family"] },
      { korean: "부인", english: "wife (formal)", romanization: "buin", tags: ["family", "formal"] },
      { korean: "자기", english: "term of endearment for spouse/significant other", romanization: "jagi", tags: ["honorific"] },
      { korean: "삼촌", english: "uncle", romanization: "samchon", tags: ["family"] },
      { korean: "조카", english: "nephew/niece", romanization: "joka", tags: ["family"] },
      { korean: "친구", english: "friend/someone same age", romanization: "chingu", tags: ["relationship"] },
      { korean: "괜찮았어요", english: "It was okay", romanization: "gwaenchanasseyo", tags: ["phrase", "past"] },
      { korean: "그저 그랬어요", english: "It was so-so", romanization: "geujeo geuraesseoyo", tags: ["phrase", "past"] },
      { korean: "잘 지냈어요", english: "I've been well", romanization: "jal jinasseyo", tags: ["greeting", "past"] },
      { korean: "어제", english: "yesterday", romanization: "eoje", tags: ["time"] },
      { korean: "먹다", english: "to eat", romanization: "meokda", tags: ["verb"] },
      { korean: "마시다", english: "to drink", romanization: "masida", tags: ["verb"] },
      { korean: "음식", english: "food", romanization: "eumshik", tags: ["noun"] },
      { korean: "전화를 받다", english: "to pick up the phone, to answer", romanization: "jeonhwareul batda", tags: ["verb", "phone"] },
      { korean: "받다", english: "to receive", romanization: "batda", tags: ["verb"] },
      { korean: "전화를 하다", english: "to make a phone call", romanization: "jeonhwareul hada", tags: ["verb", "phone"] },
      { korean: "전화하다", english: "to call someone, to make a phone call", romanization: "jeonhwahada", tags: ["verb", "phone"] },
      { korean: "가르치다", english: "to teach", romanization: "gareuchida", tags: ["verb"] },
      { korean: "다시", english: "again", romanization: "dasi", example: "다시 전화할게요.", tags: ["adverb"] },
      { korean: "준비하다", english: "to prepare, to get ready", romanization: "junbihada", example: "파티를 준비해요.", tags: ["verb"] },
      { korean: "알겠습니다", english: "I understand, I got it (formal)", romanization: "algesseumnida", example: "네, 알겠습니다.", tags: ["expression", "formal"] },
      { korean: "한테", english: "to (a person) — particle for the recipient of an action", romanization: "hante", example: "친구한테 전화해요.", tags: ["particle"] },
      { korean: "열다", english: "to open", romanization: "yeolda", example: "창문을 열어 주세요.", tags: ["verb"] },
      { korean: "닫다", english: "to close, to shut", romanization: "datda", example: "문을 닫아 주세요.", tags: ["verb"] },
      { korean: "창문", english: "window", romanization: "changmun", example: "창문을 열어요.", tags: ["noun"] },
      { korean: "문", english: "door; gate", romanization: "mun", example: "문을 닫아요.", tags: ["noun"] },
      { korean: "기다리다", english: "to wait", romanization: "gidarida", example: "조금만 기다려 주세요.", tags: ["verb"] },
      { korean: "형님", english: "older brother (formal/respectful address)", romanization: "hyeongnim", example: "형님, 오래간만이에요.", tags: ["family", "formal"] },
      { korean: "누님", english: "older sister (formal/respectful address)", romanization: "nunim", example: "누님은 잘 지내세요?", tags: ["family", "formal"] },
      { korean: "아니면", english: "or (otherwise)", romanization: "animyeon", example: "커피 아니면 차 드실래요?", tags: ["conjunction"] },
      { korean: "장을 보다", english: "to do grocery shopping", romanization: "jangeul boda", example: "마트에서 장을 봐요.", tags: ["phrase", "verb"] },

      // ── Family (extended) ─────────────────────────────────────
      { korean: "부모님",          english: "parents (honorific)",                              romanization: "bumonim",            example: "부모님께 전화해요.",                       tags: ["family", "honorific"] },
      { korean: "아이",            english: "child",                                            romanization: "ai",                 example: "아이들이 놀고 있어요.",                    tags: ["noun", "family"] },
      { korean: "애들",            english: "kids, children (informal plural of 아이)",         romanization: "aedeul",             example: "애들이 재미있어요.",                       tags: ["noun", "family"] },
      { korean: "당신",            english: "you (formal; also used between spouses)",          romanization: "dangsin",            example: "당신은 누구예요?",                         tags: ["pronoun"] },

      // ── Honorific Vocabulary ──────────────────────────────────
      { korean: "성함",            english: "name (honorific for 이름)",                        romanization: "seonham",            example: "성함이 어떻게 되세요?",                    tags: ["noun", "honorific"] },
      { korean: "연세",            english: "age (honorific for 나이)",                          romanization: "yeonse",             example: "연세가 어떻게 되세요?",                    tags: ["noun", "honorific"] },
      { korean: "생신",            english: "birthday (honorific for 생일)",                    romanization: "saengsin",           example: "생신 축하드려요!",                         tags: ["noun", "honorific"] },
      { korean: "주무시다",        english: "to sleep (honorific for 자다)",                    romanization: "jumusida",           example: "안녕히 주무세요.",                         tags: ["verb", "honorific"] },
      { korean: "드시다",          english: "to eat/drink (honorific for 먹다/마시다)",          romanization: "deusida",            example: "뭐 드실래요?",                             tags: ["verb", "honorific"] },
      { korean: "계시다",          english: "to be/stay at a place (honorific for 있다)",       romanization: "gyesida",            example: "어디에 계세요?",                           tags: ["verb", "honorific"] },
      { korean: "말씀하시다",      english: "to speak/say (honorific for 말하다)",              romanization: "malsseumhasida",     example: "선생님이 말씀하셨어요.",                   tags: ["verb", "honorific"] },
      { korean: "돌아가시다",      english: "to pass away (honorific for 죽다)",                romanization: "doragasida",         example: "할아버지께서 돌아가셨어요.",               tags: ["verb", "honorific"] },
      { korean: "안녕히 주무세요", english: "good night (lit. please sleep peacefully)",        romanization: "annyeonghi jumuseyo", example: "안녕히 주무세요!",                       tags: ["expression", "honorific"] },
      { korean: "말",              english: "words; speech; language",                          romanization: "mal",                example: "한국말을 잘 해요.",                        tags: ["noun"] },
      { korean: "말씀",            english: "words, speech (honorific for 말)",                 romanization: "malsseum",           example: "선생님 말씀이 맞아요.",                    tags: ["noun", "honorific"] },
      { korean: "사장님",          english: "boss; CEO (title)",                                romanization: "sajangnim",          example: "사장님 덕분에 성공했어요.",                tags: ["noun", "work", "honorific"] },

      // ── Identity & Age ────────────────────────────────────────
      { korean: "나이",            english: "age",                                              romanization: "nai",                example: "나이가 어떻게 돼요?",                      tags: ["noun"] },
      { korean: "몇년생이에요?",   english: "What year were you born?",                         romanization: "myeongnyeonssaengieyo", example: "몇년생이에요?",                         tags: ["question"] },

      // ── Expressions ───────────────────────────────────────────
      { korean: "수고했어요",      english: "good work (to a peer/junior)",                     romanization: "sugohaesseoyo",      example: "오늘도 수고했어요!",                       tags: ["expression"] },
      { korean: "수고하셨어요",    english: "good work (honorific, to a senior)",               romanization: "sugohasyeosseoyo",   example: "수고하셨어요, 선생님.",                    tags: ["expression", "honorific"] },
      { korean: "고생했어요",      english: "you've been through a lot; thank you for your effort", romanization: "gosaenghaesseoyo", example: "오늘 고생했어요.",                    tags: ["expression"] },
      { korean: "별 일 없었어요",  english: "nothing special; same old same old",               romanization: "byeol il eopseosseoyo", example: "A: 어떻게 지냈어요? B: 별 일 없었어요.", tags: ["expression"] },
      { korean: "방금",            english: "just now; a moment ago",                           romanization: "banggeum",           example: "방금 왔어요.",                             tags: ["adverb", "time"] },
      { korean: "금방",            english: "just now; in a moment",                            romanization: "geumbang",           example: "금방 올게요.",                             tags: ["adverb", "time"] },
      { korean: "같이",            english: "together; with (sounds like 가치)",                romanization: "gachi",              example: "같이 가요.",                               tags: ["adverb"] },
      { korean: "많이",            english: "a lot; much (placed before verb; sounds like 마니)", romanization: "mani",             example: "많이 먹었어요.",                           tags: ["adverb"] },
      { korean: "조금",            english: "a little; a bit",                                  romanization: "jogeum",             example: "조금만 기다려 주세요.",                    tags: ["adverb"] },

      // ── Verbs ─────────────────────────────────────────────────
      { korean: "놀다",            english: "to play; to hang out; to have fun",                romanization: "nolda",              example: "친구랑 놀아요.",                           tags: ["verb"] },
      { korean: "놀러 오다",       english: "to come over to hang out",                         romanization: "nolleo oda",         example: "우리 집에 놀러 와요!",                     tags: ["verb", "phrase"] },
      { korean: "달리다",          english: "to run",                                           romanization: "dallida",            example: "공원에서 달려요.",                         tags: ["verb"] },
      { korean: "뛰다",            english: "to run; to jump",                                  romanization: "ttwida",             example: "빨리 뛰어요!",                             tags: ["verb"] },
      { korean: "앉다",            english: "to sit (down)",                                    romanization: "anda",               example: "앉으세요.",                                tags: ["verb"] },
      { korean: "다니다",          english: "to attend; to commute; to go regularly",           romanization: "danida",             example: "어느 학교에 다녀요?",                      tags: ["verb"] },
      { korean: "말하다",          english: "to speak; to say; to tell",                        romanization: "malhada",            example: "한국어로 말해요.",                         tags: ["verb"] },
      { korean: "죽다",            english: "to die",                                           romanization: "jukda",             example: "꽃이 죽었어요.",                           tags: ["verb"] },
      { korean: "돌아가다",        english: "to go back; to return; also: to pass away (euphemism)", romanization: "doragada",     example: "집에 돌아가요.",                           tags: ["verb"] },
      { korean: "사주다",          english: "to buy something for someone",                     romanization: "sajuda",             example: "친구한테 커피를 사줬어요.",                tags: ["verb"] },
      { korean: "피곤하다",        english: "to be tired",                                      romanization: "pigonhada",          example: "피곤해요.",                                tags: ["adjective"] },
      { korean: "보내다",          english: "to spend (+ time)",                                romanization: "bonaeda",            example: "주말을 어떻게 보냈어요?",                  tags: ["verb", "time"] },

      // ── Hobbies & Activities ──────────────────────────────────
      { korean: "서예",            english: "calligraphy",                                      romanization: "seoye",              example: "서예를 배워요.",                           tags: ["noun", "hobby"] },
      { korean: "러닝",            english: "running (as exercise)",                            romanization: "reuning",            example: "러닝을 해요.",                             tags: ["noun", "exercise"] },

      // ── Education & Occupations ───────────────────────────────
      { korean: "대학교",          english: "university; college",                              romanization: "daehakgyo",          example: "어느 대학교에 다녀요?",                    tags: ["noun", "education"] },
      { korean: "대학생",          english: "university student",                               romanization: "daehaksaeng",        example: "저는 대학생이에요.",                       tags: ["noun", "education"] },
      { korean: "고등학교",        english: "high school",                                      romanization: "godeunghakgyo",      example: "고등학교 때 친구예요.",                    tags: ["noun", "education"] },
      { korean: "중학교",          english: "middle school",                                    romanization: "junghakgyo",         example: "중학교 3학년이에요.",                      tags: ["noun", "education"] },
      { korean: "초등학교",        english: "elementary school",                                romanization: "chodeunghakgyo",     example: "초등학교에서 가르쳐요.",                   tags: ["noun", "education"] },
      { korean: "간호사",          english: "nurse",                                            romanization: "ganhosa",            example: "간호사로 일해요.",                         tags: ["noun", "occupation"] },
      { korean: "의사",            english: "doctor",                                           romanization: "uisa",               example: "의사 선생님이에요.",                       tags: ["noun", "occupation"] },

      // ── Time ─────────────────────────────────────────────────
      { korean: "연말",            english: "end of year",                                      romanization: "yeonmal",            example: "연말에 바빠요.",                           tags: ["time"] },
      { korean: "월 말",           english: "end of month",                                     romanization: "wol mal",            example: "월 말에 월급을 받아요.",                   tags: ["time"] },
      { korean: "작년",            english: "last year",                                        romanization: "jangnyeon",          example: "작년에 한국에 갔어요.",                    tags: ["time"] },
      { korean: "하루 종일",       english: "all day long",                                     romanization: "haru jongil",        example: "하루 종일 집에 있었어요.",                 tags: ["time"] },

      // ── Weather & Seasons ─────────────────────────────────────
      { korean: "날씨",            english: "weather",                                          romanization: "nalssi",             example: "오늘 날씨가 어때요?",                      tags: ["noun", "weather"] },
      { korean: "날씨가 어때요?",  english: "How's the weather?",                               romanization: "nalssiga eottaeyo",  example: "날씨가 어때요?",                           tags: ["question", "weather"] },
      { korean: "비",              english: "rain",                                             romanization: "bi",                 example: "비가 와요.",                               tags: ["weather"] },
      { korean: "눈",              english: "snow (also: eye)",                                 romanization: "nun",                example: "눈이 와요.",                               tags: ["weather"] },
      { korean: "비가 오다",       english: "to rain",                                          romanization: "biga oda",           example: "비가 오면 집에서 쉬어요.",                 tags: ["verb", "weather"] },
      { korean: "비가 내리다",     english: "to rain (fall)",                                   romanization: "biga naerida",       example: "비가 많이 내려요.",                        tags: ["verb", "weather"] },
      { korean: "따뜻하다",        english: "to be warm (comforting)",                          romanization: "ttatteukhada",       example: "봄은 따뜻해요.",                          tags: ["adjective", "weather"] },
      { korean: "덥다",            english: "to be hot — weather (ㅂ irregular: 더워요)",       romanization: "deobda",             example: "여름엔 더워요.",                           tags: ["adjective", "weather"] },
      { korean: "시원하다",        english: "to be cool (refreshing)",                          romanization: "siwonhada",          example: "가을은 시원해요.",                         tags: ["adjective", "weather"] },
      { korean: "나쁘다",          english: "to be bad (ㅡ irregular: 나빠요)",                  romanization: "nappeuda",           example: "날씨가 나빠요.",                           tags: ["adjective"] },

      // ── Colors ───────────────────────────────────────────────
      { korean: "색",              english: "color",                                            romanization: "saek",               example: "무슨 색이에요?",                           tags: ["noun"] },
      { korean: "색깔",            english: "color",                                            romanization: "saekkal",            example: "좋아하는 색깔이 뭐예요?",                  tags: ["noun"] },
      { korean: "빨간색",          english: "red",                                              romanization: "ppalgan saek",       example: "빨간색 옷이에요.",                         tags: ["color"] },
      { korean: "주황색",          english: "orange",                                           romanization: "juhwang saek",       example: "주황색이에요.",                            tags: ["color"] },
      { korean: "노란색",          english: "yellow",                                           romanization: "noran saek",         example: "노란색을 좋아해요.",                       tags: ["color"] },
      { korean: "초록색",          english: "green",                                            romanization: "chorok saek",        example: "초록색 나무예요.",                         tags: ["color"] },
      { korean: "녹색",            english: "green",                                            romanization: "noksaek",            example: "녹색이에요.",                              tags: ["color"] },
      { korean: "파란색",          english: "blue",                                             romanization: "paran saek",         example: "하늘은 파란색이에요.",                     tags: ["color"] },
      { korean: "보라색",          english: "purple",                                           romanization: "bora saek",          example: "보라색을 좋아해요.",                       tags: ["color"] },
      { korean: "밤색",            english: "brown",                                            romanization: "bamsaek",            example: "밤색 가방이에요.",                         tags: ["color"] },
      { korean: "갈색",            english: "brown",                                            romanization: "galsaek",            example: "갈색 머리예요.",                           tags: ["color"] },
      { korean: "하얀색",          english: "white",                                            romanization: "hayansaek",          example: "하얀색 옷이에요.",                         tags: ["color"] },
      { korean: "흰색",            english: "white",                                            romanization: "hwinsaek",           example: "흰색 신발이에요.",                         tags: ["color"] },
      { korean: "검정색",          english: "black",                                            romanization: "geomjeongsaek",      example: "검정색이에요.",                            tags: ["color"] },
      { korean: "검은색",          english: "black",                                            romanization: "geomeunsaek",        example: "검은색 차예요.",                           tags: ["color"] },
      { korean: "까만색",          english: "black (jet black)",                                romanization: "kkamansaek",         example: "까만색 고양이예요.",                       tags: ["color"] },
      { korean: "분홍색",          english: "pink",                                             romanization: "bunhongsaek",        example: "분홍색 꽃이에요.",                         tags: ["color"] },
      { korean: "핑크색",          english: "pink (not for naturally pink things)",             romanization: "pingkeu saek",       example: "핑크색을 좋아해요.",                       tags: ["color"] },
      { korean: "빛",              english: "light",                                            romanization: "bit",                example: "빛이 너무 강해요.",                        tags: ["noun"] },
      { korean: "연한",            english: "light (pale) in color",                            romanization: "yeonhan",            example: "연한 파란색이에요.",                       tags: ["adjective", "color"] },
      { korean: "짙은",            english: "dark (deep) in color",                             romanization: "jiteun",             example: "짙은 녹색이에요.",                         tags: ["adjective", "color"] },
      { korean: "무슨 색이에요?",   english: "What color is it?",                               romanization: "museun saegieyo",    example: "무슨 색이에요?",                           tags: ["question"] },
      { korean: "무슨 색을 좋아해요?", english: "What color do you like?",                     romanization: "museun saekeul joahaeyo", example: "무슨 색을 좋아해요?",                 tags: ["question"] }
    ],

    grammar: [
      {
        pattern: "noun + (이)지요?",
        explanation: "To check/verify information, get the other person to agree. Use 지요 after vowel, 이지요 after consonant",
        examples: ["학생이지요? - You're a student, right?", "라면 좋아하지요? - You like ramen, right?"]
      },
      {
        pattern: "stem + 지요?",
        explanation: "For verbs/adjectives: use 지요 directly after verb stem",
        examples: ["춥지요? - It's cold, right?", "한국어 가르치지요? - You teach Korean, right?"]
      },
      {
        pattern: "ㄴ/은/는데요",
        explanation: "Softens what you're saying; encourages conversation to continue",
        examples: []
      },
      {
        pattern: "verb stem + 는데요",
        explanation: "For action verbs",
        examples: []
      },
      {
        pattern: "descriptive verb stem + ㄴ/은데요",
        explanation: "For descriptive verbs",
        examples: []
      },
      {
        pattern: "요 form + 주세요",
        explanation: "Please do this action for me as a favor/for my benefit",
        examples: ["이 책 사세요 vs 이 책 사 주세요 - Please buy this book (for me)", "읽어 주세요 - Please read (for me)"]
      },
      {
        pattern: "stem + 고 있어요",
        explanation: "Is/am/are + V-ing. Action happening now/in middle of action",
        examples: ["자고 있어요 - I'm sleeping", "먹고 있어요 - I'm eating"]
      },
      {
        pattern: "니다",
        explanation: "Most formal ending",
        examples: ["알겠습니다 - Okay, I understand (especially with people you don't know well)"]
      },
      {
        pattern: "-다가",
        explanation: "In the middle of an action (and then something else happens / interrupting an action). Attach to verb stem.",
        examples: [
          "공부하다가 잠이 들었어요. — I fell asleep in the middle of studying.",
          "걷다가 친구를 만났어요. — I ran into a friend while walking.",
          "밥을 먹다가 전화가 왔어요. — A call came in while I was eating."
        ]
      },
      {
        pattern: "-지만",
        explanation: "But / however — connects two contrasting sentences. Attach to verb/adjective stem.",
        examples: [
          "나는 커피를 좋아하지만 존씨는 안 좋아해요. — I like coffee but Jon doesn't.",
          "비싸지만 좋아요. — It's expensive but I like it.",
          "피곤하지만 가야 돼요. — I'm tired but I have to go."
        ]
      }
    ]
  };

  if (!window.KOREAN_UNITS) window.KOREAN_UNITS = [];
  window.KOREAN_UNITS.push(unit);
})();
