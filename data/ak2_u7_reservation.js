// ============================================================
//  Active Korean 2 — Unit 7: Reservation (예약)
//  File: data/ak2_u7_reservation.js
//
//  AK2 Textbook Chapter 5 (5과), pages 70+
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
    unit:  7,
    title: "Reservation (예약)",

    vocabulary: [

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
