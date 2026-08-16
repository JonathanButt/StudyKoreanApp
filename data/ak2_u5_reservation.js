// ============================================================
//  Active Korean 2 — Unit 5: Reservations (예약)
//  File: data/ak2_u5_reservation.js
//
//  AK2 Textbook Chapter 5 (5과), pages 68–81
//  Class notes: 수업 7/20/26, 수업 7/24/26, 수업 7/29/26
//
//  Topics:
//    - Can/cannot: stem + -(으)ㄹ 수 있다/없다
//    - Background/softening: -는데요 / -ㄴ/은데요
//    - Wanting: -고 싶다 / -기 싫어요
//    - Duration: N + 동안
//    - 의 possessive particle
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
//    tags          Array of tags, e.g. ["noun", "verb"]

(function () {
  const unit = {
    id:    "ak2_u7",
    book:  "Active Korean 2",
    unit:  5,
    title: "Reservations (예약)",

    vocabulary: [

      // ── Textbook Vocabulary (p.69) ────────────────────────────
      { korean: "예약하다",        english: "to make a reservation; to book",                   romanization: "yeyakhada",          example: "호텔을 예약할 거예요.",                            tags: ["verb", "reservation"] },
      { korean: "요금",            english: "fare; charge; fee",                                romanization: "yogeum",             example: "요금이 어떻게 돼요?",                              tags: ["noun", "reservation"] },
      { korean: "온돌방",          english: "ondol room (traditional heated floor room)",        romanization: "ondolbang",          example: "온돌방으로 예약할게요.",                           tags: ["noun", "reservation"] },
      { korean: "도착하다",        english: "to arrive",                                        romanization: "dochakhada",         example: "언제 도착할 거예요?",                              tags: ["verb"] },
      { korean: "전화번호",        english: "telephone number; phone number",                   romanization: "jeonhwabeonho",      example: "전화번호가 뭐예요?",                               tags: ["noun"] },
      { korean: "출발하다",        english: "to depart; to leave",                              romanization: "chulbalhada",        example: "몇 시에 출발해요?",                                tags: ["verb"] },
      { korean: "침대 방",         english: "room with a (western) bed",                        romanization: "chimdae bang",       example: "침대 방 있어요?",                                  tags: ["noun", "reservation"] },
      { korean: "출발",            english: "departure",                                        romanization: "chulbal",            example: "출발 시간이 언제예요?",                            tags: ["noun"] },
      { korean: "기차표",          english: "train ticket",                                     romanization: "gichapyo",           example: "기차표를 예약할 거예요.",                          tags: ["noun", "transportation"] },
      { korean: "바쁘다",          english: "to be busy (ㅡ irregular: 바빠요)",                romanization: "bappeuda",           example: "요즘 바빠요.",                                     tags: ["adjective"] },
      { korean: "재미없다",        english: "to be uninteresting; boring",                      romanization: "jaemieopda",         example: "이 영화는 재미없어요.",                            tags: ["adjective"] },
      { korean: "공",              english: "ball; also 0/zero (in phone numbers)",              romanization: "gong",               example: "전화번호: 010-공일공-공공공공",                    tags: ["noun"] },
      { korean: "결혼",            english: "marriage; wedding",                                romanization: "gyeolhon",           example: "결혼 기념일이에요.",                               tags: ["noun", "event"] },
      { korean: "이메일",          english: "e-mail",                                           romanization: "imeil",              example: "이메일로 보낼게요.",                               tags: ["noun"] },
      { korean: "음악",            english: "music",                                            romanization: "eumak",              example: "음악을 듣고 싶어요.",                              tags: ["noun", "hobby"] },
      { korean: "손님",            english: "customer; guest",                                  romanization: "sonnim",             example: "손님 한 분이세요?",                                tags: ["noun"] },
      { korean: "직원",            english: "staff; employee",                                  romanization: "jigwon",             example: "직원한테 물어보세요.",                             tags: ["noun", "work"] },
      { korean: "시내",            english: "downtown; city center",                            romanization: "sinae",              example: "시내에서 만나요.",                                 tags: ["noun", "place"] },
      { korean: "인천공항",        english: "Incheon Airport",                                  romanization: "incheon gonghang",   example: "인천공항으로 갈 거예요.",                          tags: ["noun", "place"] },
      { korean: "여행하다",        english: "to travel",                                        romanization: "yeohaenghada",       example: "한국에 여행할 거예요.",                            tags: ["verb"] },
      { korean: "피우다",          english: "to smoke (a cigarette)",                           romanization: "piuda",              example: "담배를 피우면 안 돼요.",                           tags: ["verb"] },
      { korean: "담배를 피우다",   english: "to smoke a cigarette",                             romanization: "dambaereul piuda",   example: "여기서 담배를 피우면 안 돼요.",                    tags: ["phrase"] },

      // ── Name of cities (textbook p.69) ───────────────────────
      { korean: "런던",            english: "London",                                           romanization: "reondeon",           example: "런던에 가고 싶어요.",                              tags: ["noun", "place"] },
      { korean: "도쿄",            english: "Tokyo",                                            romanization: "dokyo",              example: "도쿄로 여행을 갈 거예요.",                         tags: ["noun", "place"] },
      { korean: "파리",            english: "Paris",                                            romanization: "pari",               example: "파리에 가고 싶어요.",                              tags: ["noun", "place"] },
      { korean: "베이징",          english: "Beijing",                                          romanization: "beijing",            example: "베이징으로 출발해요.",                             tags: ["noun", "place"] },
      { korean: "뉴욕",            english: "New York",                                         romanization: "nyuyok",             example: "뉴욕에서 왔어요.",                                 tags: ["noun", "place"] },
      { korean: "방콕",            english: "Bangkok",                                          romanization: "bangkok",            example: "방콕으로 여행을 갈 거예요.",                       tags: ["noun", "place"] },
      { korean: "로마",            english: "Rome",                                             romanization: "roma",               example: "로마에서 공연을 봐요.",                            tags: ["noun", "place"] },
      { korean: "마드리드",        english: "Madrid",                                           romanization: "madeurideu",         example: "마드리드에 가 봤어요?",                            tags: ["noun", "place"] },

      // ── Reservations & Places ────────────────────────────────
      { korean: "자리",            english: "seat; spot; place",                               romanization: "jari",               example: "이 자리 있어요?",                                  tags: ["noun"] },

      // ── Descriptive Verbs / Adjectives ───────────────────────
      { korean: "완벽하다",        english: "to be perfect",                                   romanization: "wanbyeokhada",       example: "완벽해요!",                                        tags: ["adjective"] },
      { korean: "길다",            english: "to be long (ㄹ irregular: 길어요)",               romanization: "gilda",              example: "이 영화는 너무 길어요.",                           tags: ["adjective"] },

      // ── Action Verbs ─────────────────────────────────────────
      { korean: "나오다",          english: "to come out; to appear",                          romanization: "naoda",              example: "이 배우가 영화에 조금만 나와요.",                  tags: ["verb"] },
      { korean: "원하다",          english: "to want + noun (noun 을/를 + 원하다)",             romanization: "wonhada",            example: "뭘 원해요?",                                       tags: ["verb"] },

      // ── Frequency / Time ─────────────────────────────────────
      { korean: "매일",            english: "every day",                                        romanization: "maeil",              example: "매일 한국어를 공부해요.",                          tags: ["adverb", "time"] },
      { korean: "자주",            english: "often; frequently",                                romanization: "jaju",               example: "자주 만나요?",                                     tags: ["adverb"] },

      // ── Sports & Activities ──────────────────────────────────
      { korean: "달리기",          english: "running; jogging",                                 romanization: "dalligi",            example: "달리기를 해요.",                                   tags: ["noun", "sport"] },
      { korean: "달리기를 하다",   english: "to go running; to jog",                            romanization: "dalligireul hada",   example: "아침에 달리기를 해요.",                            tags: ["verb", "sport"] },
      { korean: "도예",            english: "pottery making; the art of making pottery",        romanization: "doye",               example: "주말에 도예를 배워요.",                            tags: ["noun", "hobby"] },

      // ── Food ─────────────────────────────────────────────────
      { korean: "초밥",            english: "sushi",                                            romanization: "chobap",             example: "초밥을 좋아해요?",                                 tags: ["noun", "food"] },
      { korean: "회",              english: "raw fish; sashimi",                                romanization: "hoe",                example: "회를 먹어 봤어요?",                                tags: ["noun", "food"] },

      // ── Events & Expressions ─────────────────────────────────
      { korean: "결혼식",          english: "wedding; wedding ceremony",                        romanization: "gyeolhonsik",        example: "다음 주에 결혼식이 있어요.",                       tags: ["noun", "event"] },
      { korean: "잘 생겼어요",     english: "he/she is handsome; good-looking (fixed expression)", romanization: "jal saenggyeosseoyo", example: "저 배우 잘 생겼어요.",                     tags: ["expression", "adjective"] },

      // ── Textbook Vocabulary (p.69) — additional ──────────────
      { korean: "계시다",          english: "to be; to stay (honorific form of 있다)",          romanization: "gyesida",            example: "얼마 동안 계실 거예요?",                          tags: ["verb", "honorific"] },
      { korean: "성함",            english: "name (honorific form of 이름)",                    romanization: "seonghom",           example: "성함이 어떻게 되세요?",                           tags: ["noun", "honorific"] },
      { korean: "운전하다",        english: "to drive",                                         romanization: "unjeonhada",         example: "몇 살부터 운전할 수 있어요?",                     tags: ["verb"] },
      { korean: "투표하다",        english: "to vote",                                          romanization: "tupyohada",          example: "몇 살부터 투표할 수 있어요?",                     tags: ["verb"] },
      { korean: "투표",            english: "voting; a vote",                                   romanization: "tupyo",              example: "투표를 할 수 있어요?",                            tags: ["noun"] },
      { korean: "하루",            english: "one day (pure Korean counter)",                    romanization: "haru",               example: "하루에 오만 원이에요.",                           tags: ["noun", "time", "counter"] },
      { korean: "살",              english: "years old; age counter (pure Korean: 열여덟 살 = 18 years old)", romanization: "sal", example: "열여덟 살부터 운전할 수 있어요.",              tags: ["counter", "age"] },
      { korean: "년",              english: "year (Sino-Korean counter: 일 년 = 1 year)",       romanization: "nyeon",              example: "2011년에 한국에 왔어요.",                          tags: ["noun", "time", "counter"] },
      { korean: "담배",            english: "cigarette; tobacco",                               romanization: "dambae",             example: "담배를 피우면 안 돼요.",                          tags: ["noun"] },
      { korean: "결혼하다",        english: "to get married",                                   romanization: "gyeolhonhada",       example: "몇 살부터 결혼할 수 있어요?",                     tags: ["verb", "event"] },

      // ── Useful Phrases (from dialogues) ──────────────────────
      { korean: "잠깐만 기다리세요", english: "Please wait a moment",                           romanization: "jamkkanman gidariseyo", example: "잠깐만 기다리세요. 오전 열 시 비행기가 있어요.", tags: ["phrase"] },
      { korean: "하루에",          english: "per day; per one day",                             romanization: "harue",              example: "하루에 오만 원이에요.",                           tags: ["phrase", "time"] },

      // ── Additional Expressions (p.81) — Types of tickets ────
      { korean: "왕복",            english: "round trip",                                       romanization: "wangbok",            example: "왕복 표 두 장 주세요.",                           tags: ["noun", "transportation"] },
      { korean: "편도",            english: "one way (ticket)",                                 romanization: "pyeondo",            example: "편도로 예약할 거예요.",                           tags: ["noun", "transportation"] },

      // ── Additional Expressions (p.81) — Types of rooms ──────
      { korean: "일 인실",         english: "single room (room for one person)",                romanization: "il insil",           example: "일 인실 있어요?",                                 tags: ["noun", "reservation"] },
      { korean: "이 인실",         english: "double room (room for two people)",                romanization: "i insil",            example: "이 인실로 예약할게요.",                           tags: ["noun", "reservation"] },

      // ── Additional Expressions (p.81) — Changing/Refunding ──
      { korean: "환불해 주세요",   english: "I'd like to get a refund, please",                romanization: "hwanbulhae juseyo",  example: "이 표 환불해 주세요.",                            tags: ["phrase", "reservation"] },
      { korean: "환불하다",        english: "to refund; to get a refund",                       romanization: "hwanbulhada",        example: "표를 환불할 수 있어요?",                          tags: ["verb", "reservation"] },
      { korean: "바꿔 주세요",     english: "please change this (for me)",                      romanization: "bakkwo juseyo",      example: "8시 표로 바꿔 주세요.",                           tags: ["phrase", "reservation"] },
      { korean: "바꾸다",          english: "to change; to switch; to exchange",                romanization: "bakkuda",            example: "표를 바꿀 수 있어요?",                            tags: ["verb"] },
    ],

    grammar: [
      {
        pattern: "stem + -(으)ㄹ 수 있다/없다",
        explanation: "Can / cannot — expresses ability or possibility. Vowel stem → ㄹ 수 있다. Consonant stem → 을 수 있다. For cannot: -(으)ㄹ 수 없어요 (pure ability, sounds more formal) or 못 + verb (more conversational). Note: 못 is more common for pure ability in everyday speech.",
        examples: [
          "같이 갈 수 있어요? — Can we go together?",
          "소고기를 먹을 수 있어요? — Can you eat beef?",
          "아니요, 소고기를 못 먹는데요. — No, I can't eat beef (softened refusal).",
          "한국어 책을 읽을 수 있어요. — I can read a Korean book.",
          "바다에서 수영할 수 있어요. — I can swim in the ocean.",
          "내일 만날 수 있어요. — I can meet tomorrow."
        ]
      },
      {
        pattern: "V-는데요 / A-ㄴ/은데요",
        explanation: "Softening/background-setting ending — makes statements sound softer and more polite, or provides background context that invites the listener to respond. Action verbs → 는데요. Descriptive verbs → ㄴ/은데요 (vowel stem: ㄴ데요; consonant stem: 은데요). ㅂ irregular → drop ㅂ, add 운데요. 있다/없다 → 는데요.",
        examples: [
          "먹는데요 (action: 먹다)",
          "비싼데요 (descriptive, vowel: 비싸다)",
          "읽는데요 (action: 읽다)",
          "추운데요 (ㅂ irregular: 춥다)",
          "재미있는데요 (있다 → 는데요)",
          "아니요, 소고기를 못 먹는데요. — No, I can't eat beef (softened).",
          "캠핑을 안 좋아하는데요. — I don't like camping (giving background reason)."
        ]
      },
      {
        pattern: "V-고 싶다",
        explanation: "Want to + verb — attach 고 싶다 to the verb stem. 싶다 conjugates as a descriptive verb (싶어요, 싶은데요, etc.). For 'don't want to': -기 싫어요 is most natural/conversational; -고 싶지 않아요 is more respectful/formal.",
        examples: [
          "책을 읽고 싶어요. — I want to read a book.",
          "음악을 듣고 싶어요. — I want to listen to music.",
          "불고기를 먹고 싶어요. — I want to eat bulgogi.",
          "옷을 사고 싶어요. — I want to buy clothes.",
          "달리기를 하고 싶어요. — I want to go running.",
          "책을 읽기 싫어요. — I don't want to read a book. (conversational)",
          "책을 읽고 싶지 않아요. — I don't want to read a book. (formal/dignified)"
        ]
      },
      {
        pattern: "N + 동안",
        explanation: "For (a period of time) / during — follows a length of time to mean 'for X amount of time.' Often combined with 부터…까지 (from…to).",
        examples: [
          "오일동안 여행했어요. — I traveled for five days.",
          "일주일동안 공부했어요. — I studied for one week.",
          "한달동안 한국에 있었어요. — I was in Korea for one month.",
          "이주일동안 프랑스에 갈 거예요. — I'm going to France for two weeks.",
          "삼일동안 시카고에 있을 거예요. — I'll be in Chicago for three days."
        ]
      },
      {
        pattern: "N부터 / N까지",
        explanation: "'부터' marks the starting point of time ('from / starting from'). '까지' marks the ending point ('until / to'). Used together: 부터…까지 = from…to/until.",
        examples: [
          "오월 십일부터 삼 일 동안 있을 거예요. — I'll be there for 3 days starting from May 10.",
          "1월부터 3월까지 한국어를 배울 거예요. — I'll study Korean from January to March.",
          "6시부터 9시까지 영화를 봐요. — I watch movies from 6 to 9.",
          "월요일부터 금요일까지 미국을 여행해요. — I travel the US from Monday to Friday.",
          "열여덟 살부터 운전할 수 있어요. — You can drive starting from 18 years old."
        ]
      },
      {
        pattern: "N의",
        explanation: "Possessive particle 'of / 's' — added to the noun that owns or modifies. In spoken Korean, 의 is very often dropped; the connection is implied by word order alone.",
        examples: [
          "존의 컵 — Jon's cup",
          "존의 가방 — Jon's bag",
          "우리의 약속 — our promise",
          "한국의 음식 — Korean food (food of Korea)"
        ]
      }
    ]
  };

  if (!window.KOREAN_UNITS) window.KOREAN_UNITS = [];
  window.KOREAN_UNITS.push(unit);
})();
