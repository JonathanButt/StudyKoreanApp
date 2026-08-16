// ============================================================
//  Active Korean 1 — Unit 9: Phone Call (전화)
//  File: data/ak1_u9_phone_call.js
//
//  AK1 Textbook Chapter 9 (9과), pages 130–141
//
//  Topics:
//    - Making and receiving phone calls
//    - V-고 있다 (action in progress)
//    - N(이)지요? (confirmation / right?)
//    - V-아/어 주세요 (please do X for me)
//    - 니다 formal speech level
//    - -다가 (interrupting an action)
//    - -지만 (but/however)
//
//  Note: Family & honorific vocabulary is in AK2 Unit 1 (Family).
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
//    tags          Array of tags, e.g. ["noun", "phone"]

(function () {
  const unit = {
    id:    "ak1_u8",
    book:  "Active Korean 1",
    unit:  9,
    title: "Phone Call (전화)",

    vocabulary: [

      // ── Textbook Vocabulary (p.131) ───────────────────────────
      { korean: "여보세요",         english: "Hello (on the phone)",                                romanization: "yeoboseyo",         example: "여보세요, 거기 소피아 씨 집이지요?",    tags: ["greeting", "phone"] },
      { korean: "실례지만",         english: "Excuse me, but... (polite opener)",                   romanization: "sillyeojiman",       example: "실례지만 누구세요?",                   tags: ["phrase", "polite"] },
      { korean: "누구세요?",        english: "Who is this? / Who is it? (polite)",                  romanization: "nuguseyo",           example: "실례지만 누구세요?",                   tags: ["question", "phone"] },
      { korean: "바꾸다",           english: "to switch; to put someone on the phone",              romanization: "bakkuda",            example: "소피아 씨 좀 바꿔 주세요.",            tags: ["verb", "phone"] },
      { korean: "잠깐만요",         english: "Just a moment! (casual); please hold on",            romanization: "jamkkanmanyo",         example: "잠깐만요, 지금 바빠요.",              tags: ["expression", "phone"] },
      { korean: "알겠습니다",       english: "I understand; I see (formal)",                        romanization: "algesseumnida",      example: "네, 알겠습니다. 안녕히 계세요.",       tags: ["expression", "formal"] },
      { korean: "전화하다",         english: "to call someone; to make a phone call",               romanization: "jeonhwahada",        example: "나중에 전화할게요.",                   tags: ["verb", "phone"] },
      { korean: "지금",             english: "now; at the moment",                                  romanization: "jigeum",             example: "지금 자고 있어요.",                    tags: ["adverb", "time"] },
      { korean: "샤워하다",         english: "to take a shower",                                    romanization: "syawohada",          example: "지금 샤워하고 있어요.",                tags: ["verb"] },
      { korean: "숙제하다",         english: "to do homework",                                      romanization: "sukjehada",          example: "지금 숙제하고 있어요.",                tags: ["verb"] },

      // ── Phone Call Vocabulary ─────────────────────────────────
      { korean: "여기",             english: "here",                                                romanization: "yeogi",              example: "여기는 소피아 씨 집이에요.",           tags: ["location"] },
      { korean: "거기",             english: "there (close to listener)",                           romanization: "geogi",              example: "거기 피터 씨 집이지요?",              tags: ["location"] },
      { korean: "저기",             english: "over there (far from both speakers)",                 romanization: "jeogi",              example: "저기는 어디예요?",                    tags: ["location"] },
      { korean: "지요",             english: "right? (to confirm/verify — tag question marker)",    romanization: "jiyo",               example: "거기 소피아 씨 집이지요?",            tags: ["grammar", "polite"] },
      { korean: "그런데요",         english: "That is so; that is correct",                         romanization: "geureondeyo",        example: "네, 그런데요.",                        tags: ["response"] },
      { korean: "그렇지",           english: "That's right; correct (sounds like 그치)",            romanization: "geureotji",          example: "그렇지, 맞아요.",                     tags: ["response"] },
      { korean: "실례",             english: "an impolite action; rudeness",                        romanization: "sillyae",            example: "실례가 되다.",                        tags: ["noun"] },
      { korean: "살다",             english: "to live; to reside",                                  romanization: "salda",              example: "어디에 살아요?",                      tags: ["verb"] },
      { korean: "받다",             english: "to receive; to get",                                  romanization: "batda",              example: "전화를 받았어요.",                    tags: ["verb"] },
      { korean: "전화를 받다",      english: "to answer the phone; to pick up",                     romanization: "jeonhwareul batda",  example: "전화를 받으세요.",                    tags: ["phrase", "phone"] },
      { korean: "전화를 하다",      english: "to make a phone call",                                romanization: "jeonhwareul hada",   example: "친구한테 전화를 해요.",               tags: ["phrase", "phone"] },
      { korean: "한테",             english: "to (a person) — particle for recipient of action",    romanization: "hante",              example: "친구한테 전화해요.",                  tags: ["particle"] },
      { korean: "다시",             english: "again",                                               romanization: "dasi",               example: "다시 전화할게요.",                    tags: ["adverb"] },

      // ── Actions (used with -고 있어요 in phone dialogues) ─────
      { korean: "노래하다",         english: "to sing",                                             romanization: "noraehada",          example: "노래하고 있어요.",                    tags: ["verb"] },
      { korean: "노래",             english: "song",                                                romanization: "norae",              example: "노래를 잘 해요.",                     tags: ["noun"] },
      { korean: "그림을 그리다",    english: "to draw; to paint",                                   romanization: "geurimeul geurida",  example: "그림을 그리고 있어요.",               tags: ["phrase", "verb"] },
      { korean: "그림",             english: "drawing; picture; painting",                          romanization: "geurim",             example: "그림이 예뻐요.",                      tags: ["noun"] },
      { korean: "춤(을) 추다",      english: "to dance",                                            romanization: "chum chuda",         example: "춤을 추고 있어요.",                   tags: ["verb"] },
      { korean: "열다",             english: "to open",                                             romanization: "yeolda",             example: "창문을 열어 주세요.",                 tags: ["verb"] },
      { korean: "닫다",             english: "to close; to shut",                                   romanization: "datda",              example: "문을 닫아 주세요.",                   tags: ["verb"] },
      { korean: "창문",             english: "window",                                              romanization: "changmun",           example: "창문을 열어요.",                      tags: ["noun"] },
      { korean: "문",               english: "door; gate",                                          romanization: "mun",                example: "문을 닫아요.",                        tags: ["noun"] },
      { korean: "창문을 열어 주세요", english: "Please open the window",                            romanization: "changmuneul yeoreo juseyo", example: "창문을 열어 주세요.",           tags: ["phrase"] },
      { korean: "문을 닫아 주세요", english: "Please close the door",                               romanization: "muneul dada juseyo", example: "문을 닫아 주세요.",                   tags: ["phrase"] },
      { korean: "춤 춰 주세요",     english: "Please dance for me",                                 romanization: "chum chweo juseyo",  example: "춤 춰 주세요!",                       tags: ["phrase"] },

      // ── Textbook Vocabulary (p.131) — Additional ─────────────
      { korean: "케이크",           english: "cake",                                                romanization: "keikeu",             example: "생일 케이크예요.",                    tags: ["noun", "food"] },
      { korean: "음식",             english: "food, dish",                                          romanization: "eumsik",             example: "한국 음식을 좋아해요.",               tags: ["noun", "food"] },
      { korean: "부엌",             english: "kitchen",                                             romanization: "bueok",              example: "부엌에서 요리해요.",                  tags: ["noun", "place"] },
      { korean: "아직",             english: "(not) yet; still",                                    romanization: "ajik",               example: "아직 안 왔어요.",                     tags: ["adverb"] },
      { korean: "빨리",             english: "quickly, fast, hurry",                                romanization: "ppalli",             example: "빨리 오세요!",                        tags: ["adverb"] },
      { korean: "만들다",           english: "to make, to create",                                  romanization: "mandeulda",          example: "케이크를 만들어요.",                  tags: ["verb"] },

      // ── Additional Expressions (p.141) ───────────────────────
      { korean: "전화번호",         english: "phone number",                                        romanization: "jeonhwabeonho",      example: "전화번호가 뭐예요?",                  tags: ["noun", "phone"] },
      { korean: "괜찮다",           english: "to be okay, to be alright, to be fine",               romanization: "gwaenchantta",       example: "지금 전화 괜찮아요?",                 tags: ["adjective"] },

      // ── Rock Paper Scissors ───────────────────────────────────
      { korean: "가위바위보",       english: "rock paper scissors (game)",                          romanization: "gawibawibo",         example: "가위바위보!",                         tags: ["noun", "game"] },
      { korean: "가위",             english: "scissors (rock-paper-scissors)",                      romanization: "gawi",               example: "가위바위보!",                         tags: ["noun"] },
      { korean: "바위",             english: "rock (rock-paper-scissors); boulder",                 romanization: "bawi",               example: "가위바위보!",                         tags: ["noun"] },
      { korean: "보",               english: "paper (rock-paper-scissors)",                         romanization: "bo",                 example: "가위바위보!",                         tags: ["noun"] },

      // ── General Verbs ─────────────────────────────────────────
      { korean: "회의하다",         english: "to have a meeting; to be in a meeting",               romanization: "hoeuihada",          example: "지금 회의하고 있어요.",               tags: ["verb", "work"] },
      { korean: "화장실",           english: "bathroom; restroom",                                  romanization: "hwajangsil",         example: "화장실에 있어요.",                    tags: ["noun", "place"] },
      { korean: "가르치다",         english: "to teach",                                            romanization: "gareuchida",         example: "한국어를 가르쳐요.",                  tags: ["verb"] },
      { korean: "준비하다",         english: "to prepare; to get ready",                            romanization: "junbihada",          example: "파티를 준비해요.",                    tags: ["verb"] },
      { korean: "아니면",           english: "or; otherwise",                                       romanization: "animyeon",           example: "커피 아니면 차 드실래요?",            tags: ["conjunction"] },
      { korean: "장을 보다",        english: "to do grocery shopping",                              romanization: "jangeul boda",       example: "마트에서 장을 봐요.",                 tags: ["phrase", "verb"] },
      { korean: "크림",             english: "cream",                                               romanization: "keurim",             example: "크림 주세요.",                        tags: ["noun"] },
      { korean: "놀다",             english: "to play; to hang out; to have fun",                   romanization: "nolda",              example: "친구랑 놀아요.",                      tags: ["verb"] },
      { korean: "놀러 오다",        english: "to come over to hang out",                            romanization: "nolleo oda",         example: "우리 집에 놀러 와요!",                tags: ["verb", "phrase"] },
      { korean: "달리다",           english: "to run",                                              romanization: "dallida",            example: "공원에서 달려요.",                    tags: ["verb"] },
      { korean: "뛰다",             english: "to run; to jump",                                     romanization: "ttwida",             example: "빨리 뛰어요!",                        tags: ["verb"] },
      { korean: "말하다",           english: "to speak; to say; to tell",                           romanization: "malhada",            example: "한국어로 말해요.",                    tags: ["verb"] },
      { korean: "죽다",             english: "to die",                                              romanization: "jukda",              example: "꽃이 죽었어요.",                      tags: ["verb"] },
      { korean: "돌아가다",         english: "to go back; to return; also: to pass away (euphemism)", romanization: "doragada",         example: "집에 돌아가요.",                      tags: ["verb"] },
      { korean: "사주다",           english: "to buy something for someone",                        romanization: "sajuda",             example: "친구한테 커피를 사줬어요.",           tags: ["verb"] },
      { korean: "피곤하다",         english: "to be tired",                                         romanization: "pigonhada",          example: "피곤해요.",                           tags: ["adjective"] },
      { korean: "보내다",           english: "to spend (+ time); to send",                          romanization: "bonaeda",            example: "주말을 어떻게 보냈어요?",             tags: ["verb"] },

      // ── Adverbs & Conjunctions ────────────────────────────────
      { korean: "같이",             english: "together; with (sounds like 가치)",                   romanization: "gachi",              example: "같이 가요.",                          tags: ["adverb"] },
      { korean: "많이",             english: "a lot; much (sounds like 마니)",                      romanization: "mani",               example: "많이 먹었어요.",                      tags: ["adverb"] },
      { korean: "조금",             english: "a little; a bit",                                     romanization: "jogeum",             example: "조금만 기다려 주세요.",               tags: ["adverb"] },
      { korean: "방금",             english: "just now; a moment ago",                              romanization: "banggeum",           example: "방금 왔어요.",                        tags: ["adverb", "time"] },
      { korean: "금방",             english: "just now; in a moment (soon)",                        romanization: "geumbang",           example: "금방 올게요.",                        tags: ["adverb", "time"] },

      // ── Expressions ───────────────────────────────────────────
      { korean: "괜찮았어요",       english: "It was okay; it was fine",                            romanization: "gwaenchanasseyo",    example: "어땠어요? 괜찮았어요.",               tags: ["phrase", "past"] },
      { korean: "그저 그랬어요",    english: "It was so-so; nothing special",                       romanization: "geujeo geuraesseoyo", example: "주말이 어땠어요? 그저 그랬어요.",   tags: ["phrase", "past"] },
      { korean: "잘 지냈어요",      english: "I've been well; I've been doing well",                romanization: "jal jinasseyo",      example: "잘 지냈어요?",                        tags: ["greeting", "past"] },
      { korean: "어제",             english: "yesterday",                                           romanization: "eoje",               example: "어제 뭐 했어요?",                     tags: ["time"] },
      { korean: "먹다",             english: "to eat",                                              romanization: "meokda",             example: "밥을 먹어요.",                        tags: ["verb"] },
      { korean: "마시다",           english: "to drink",                                            romanization: "masida",             example: "물을 마셔요.",                        tags: ["verb"] },

      // ── Education ─────────────────────────────────────────────
      { korean: "대학교",           english: "university; college",                                 romanization: "daehakgyo",          example: "어느 대학교에 다녀요?",               tags: ["noun", "education"] },
      { korean: "고등학교",         english: "high school",                                         romanization: "godeunghakgyo",      example: "고등학교 때 친구예요.",               tags: ["noun", "education"] },
      { korean: "중학교",           english: "middle school",                                       romanization: "junghakgyo",         example: "중학교 3학년이에요.",                 tags: ["noun", "education"] },
      { korean: "초등학교",         english: "elementary school",                                   romanization: "chodeunghakgyo",     example: "초등학교에서 가르쳐요.",              tags: ["noun", "education"] },
      { korean: "의사",             english: "doctor; physician",                                   romanization: "uisa",               example: "의사 선생님이에요.",                  tags: ["noun", "occupation"] },

      // ── Time ─────────────────────────────────────────────────
      { korean: "연말",             english: "end of year",                                         romanization: "yeonmal",            example: "연말에 바빠요.",                      tags: ["time"] },
      { korean: "월 말",            english: "end of month",                                        romanization: "wol mal",            example: "월 말에 월급을 받아요.",              tags: ["time"] },
      { korean: "하루 종일",        english: "all day long",                                        romanization: "haru jongil",        example: "하루 종일 집에 있었어요.",            tags: ["time"] },

      // ── Hobbies & Activities ──────────────────────────────────
      { korean: "서예",             english: "calligraphy",                                         romanization: "seoye",              example: "서예를 배워요.",                      tags: ["noun", "hobby"] },
      { korean: "러닝",             english: "running (as exercise)",                               romanization: "reuning",            example: "러닝을 해요.",                        tags: ["noun", "exercise"] },

      // ── Weather ───────────────────────────────────────────────
      { korean: "날씨",             english: "weather",                                             romanization: "nalssi",             example: "오늘 날씨가 어때요?",                 tags: ["noun", "weather"] },
      { korean: "날씨가 어때요?",   english: "How's the weather?",                                  romanization: "nalssiga eottaeyo",  example: "날씨가 어때요?",                      tags: ["question", "weather"] },
      { korean: "비",               english: "rain",                                                romanization: "bi",                 example: "비가 와요.",                          tags: ["weather"] },
      { korean: "눈",               english: "snow (also: eye)",                                    romanization: "nun",                example: "눈이 와요.",                          tags: ["weather"] },
      { korean: "비가 오다",        english: "to rain",                                             romanization: "biga oda",           example: "비가 오면 집에서 쉬어요.",            tags: ["verb", "weather"] },
      { korean: "비가 내리다",      english: "to rain (fall down)",                                 romanization: "biga naerida",       example: "비가 많이 내려요.",                   tags: ["verb", "weather"] },
      { korean: "춥다",             english: "to be cold (ㅂ irregular: 추워요)",                   romanization: "chubda",             example: "오늘 추워요.",                        tags: ["adjective", "weather"] },
      { korean: "따뜻하다",         english: "to be warm (comforting)",                             romanization: "ttatteukhada",       example: "봄은 따뜻해요.",                     tags: ["adjective", "weather"] },
      { korean: "덥다",             english: "to be hot — weather (ㅂ irregular: 더워요)",          romanization: "deobda",             example: "여름엔 더워요.",                      tags: ["adjective", "weather"] },
      { korean: "시원하다",         english: "to be cool (refreshing)",                             romanization: "siwonhada",          example: "가을은 시원해요.",                    tags: ["adjective", "weather"] },
      { korean: "나쁘다",           english: "to be bad (ㅡ irregular: 나빠요)",                    romanization: "nappeuda",           example: "날씨가 나빠요.",                      tags: ["adjective"] },

      // ── Colors ───────────────────────────────────────────────
      { korean: "색",               english: "color",                                               romanization: "saek",               example: "무슨 색이에요?",                      tags: ["noun"] },
      { korean: "색깔",             english: "color",                                               romanization: "saekkal",            example: "좋아하는 색깔이 뭐예요?",             tags: ["noun"] },
      { korean: "빨간색",           english: "red",                                                 romanization: "ppalgan saek",       example: "빨간색 옷이에요.",                    tags: ["color"] },
      { korean: "주황색",           english: "orange",                                              romanization: "juhwang saek",       example: "주황색이에요.",                       tags: ["color"] },
      { korean: "노란색",           english: "yellow",                                              romanization: "noran saek",         example: "노란색을 좋아해요.",                  tags: ["color"] },
      { korean: "초록색",           english: "green",                                               romanization: "chorok saek",        example: "초록색 나무예요.",                    tags: ["color"] },
      { korean: "녹색",             english: "green",                                               romanization: "noksaek",            example: "녹색이에요.",                         tags: ["color"] },
      { korean: "파란색",           english: "blue",                                                romanization: "paran saek",         example: "하늘은 파란색이에요.",                tags: ["color"] },
      { korean: "보라색",           english: "purple",                                              romanization: "bora saek",          example: "보라색을 좋아해요.",                  tags: ["color"] },
      { korean: "갈색",             english: "brown",                                               romanization: "galsaek",            example: "갈색 머리예요.",                      tags: ["color"] },
      { korean: "하얀색",           english: "white",                                               romanization: "hayansaek",          example: "하얀색 옷이에요.",                    tags: ["color"] },
      { korean: "흰색",             english: "white",                                               romanization: "hwinsaek",           example: "흰색 신발이에요.",                    tags: ["color"] },
      { korean: "검정색",           english: "black",                                               romanization: "geomjeongsaek",      example: "검정색이에요.",                       tags: ["color"] },
      { korean: "분홍색",           english: "pink",                                                romanization: "bunhongsaek",        example: "분홍색 꽃이에요.",                    tags: ["color"] },
      { korean: "연한",             english: "light (pale) in color",                               romanization: "yeonhan",            example: "연한 파란색이에요.",                  tags: ["adjective", "color"] },
      { korean: "짙은",             english: "dark (deep) in color",                                romanization: "jiteun",             example: "짙은 녹색이에요.",                    tags: ["adjective", "color"] },
      { korean: "무슨 색이에요?",   english: "What color is it?",                                   romanization: "museun saegieyo",    example: "무슨 색이에요?",                      tags: ["question"] },

      // ── Workbook Unit 9 New Words ──────────────────────────────
      { korean: "많다",             english: "to be many; to be a lot (adjective: 많은, adverb: 많이)", romanization: "manta",            example: "사람이 많아요.",                      tags: ["adjective"] },
      { korean: "편지",             english: "letter (written correspondence)",                          romanization: "pyeonji",           example: "편지를 써요.",                        tags: ["noun"] },
      { korean: "들어가다",         english: "to go in; to enter",                                       romanization: "deureogada",        example: "극장 안으로 들어가요.",               tags: ["verb"] },
      { korean: "이제",             english: "now; from now on; at this point",                          romanization: "ije",               example: "이제 영화가 시작해요.",               tags: ["adverb", "time"] },
      { korean: "시작하다",         english: "to start; to begin",                                       romanization: "sijakada",          example: "영화가 시작해요.",                    tags: ["verb"] },
    ],

    grammar: [
      {
        pattern: "noun + (이)지요?",
        explanation: "Tag question — used to check or verify information, seeking agreement. Use 지요 after a vowel ending, 이지요 after a consonant.",
        examples: [
          "거기 소피아 씨 집이지요? — That is Sophia's house, right?",
          "학생이지요? — You're a student, right?",
          "라면 좋아하지요? — You like ramen, right?"
        ]
      },
      {
        pattern: "stem + 지요? (verbs/adjectives)",
        explanation: "For verbs and adjectives, attach 지요 directly to the verb/adjective stem (formal). Colloquially spoken as 죠.",
        examples: [
          "춥지요? — It's cold, right?",
          "한국어 가르치지요? — You teach Korean, right?",
          "좋지요? — It's good, right?"
        ]
      },
      {
        pattern: "ㄴ/은/는데요",
        explanation: "Softening/background ending — makes a statement softer or provides background context that invites a response. Action verbs → 는데요; descriptive verbs → ㄴ/은데요.",
        examples: [
          "먹는데요 (action: 먹다)",
          "비싼데요 (descriptive, vowel stem: 비싸다)",
          "아니요, 소고기를 못 먹는데요. — No, I can't eat beef (softened)."
        ]
      },
      {
        pattern: "V-아/어 주세요",
        explanation: "Please do (verb) for me / as a favor. The 주세요 indicates the action benefits the speaker.",
        examples: [
          "창문을 열어 주세요. — Please open the window (for me).",
          "커피를 사 주세요. — Please buy coffee (for me).",
          "노래해 주세요. — Please sing (for me)."
        ]
      },
      {
        pattern: "stem + 고 있어요",
        explanation: "Is/am/are + V-ing — ongoing action at the moment of speaking. Attach 고 있어요 to the verb stem.",
        examples: [
          "지금 자고 있어요. — He is sleeping now.",
          "지금 사워하고 있어요. — He is taking a shower now.",
          "지금 회의하고 있어요. — She is in a meeting right now.",
          "먹고 있어요. — I'm eating."
        ]
      },
      {
        pattern: "니다 / 습니다",
        explanation: "Most formal (formal polite) speech level — used in formal settings, announcements, or with people you don't know well. Statements end in -습니다 (consonant) or -ㅂ니다 (vowel). Questions end in -습니까? / -ㅂ니까?",
        examples: [
          "알겠습니다. — I understand. (formal)",
          "안녕히 계세요. — Good-bye. (formal polite)"
        ]
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
