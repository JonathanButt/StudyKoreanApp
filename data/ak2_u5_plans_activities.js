// ============================================================
//  Active Korean 2 — Unit 5: Plans, Activities & Reasons
//  File: data/ak2_u5_plans_activities.js
//
//  Vocabulary drawn from class notes:
//    수업 4/6/26, 수업 4/13/26, 수업 6/8/26
// ============================================================

(function () {
  const unit = {
    id:    "ak2_u5",
    book:  "Active Korean 2",
    unit:  5,
    title: "Plans, Activities & Reasons",

    vocabulary: [

      // ── Greetings & Expressions ──────────────────────────────
      { korean: "오랜만이에요",    english: "It's been a while / Long time no see",           romanization: "oraenmanieyo",       example: "오랜만이에요! 잘 지냈어요?",                    tags: ["greeting", "expression"] },
      { korean: "오랜만에",        english: "after a long time (time adverbial)",              romanization: "oraenmane",          example: "오늘 친구를 오랜만에 봤어요.",                   tags: ["expression", "time"] },

      // ── Adverbs / Degree words ───────────────────────────────
      { korean: "아주",            english: "very (used with descriptive verbs)",              romanization: "aju",                example: "아주 비싸요.",                                    tags: ["adverb"] },
      { korean: "너무",            english: "too / very (emphatic; can sound negative)",       romanization: "neomu",              example: "너무 매워요.",                                    tags: ["adverb"] },
      { korean: "진짜로",          english: "for real (informal)",                             romanization: "jinjjaro",           example: "진짜로요?",                                       tags: ["adverb", "expression"] },
      { korean: "정말로",          english: "really / for real",                               romanization: "jeongmallo",         example: "정말로 몰랐어요.",                                tags: ["adverb", "expression"] },
      { korean: "많은",            english: "many, a lot of (adjective; before a noun)",       romanization: "manheun",            example: "많은 사람이 왔어요.",                            tags: ["adjective"] },

      // ── Activities & Sports ──────────────────────────────────
      { korean: "파티",            english: "party",                                           romanization: "pati",               example: "파티를 해요?",                                    tags: ["noun", "social"] },
      { korean: "축구",            english: "soccer",                                          romanization: "chukgu",             example: "축구를 좋아해요?",                                tags: ["noun", "sport"] },
      { korean: "미식축구",        english: "American football",                               romanization: "misikchukgu",        example: "미식축구를 봐요.",                                tags: ["noun", "sport"] },
      { korean: "테니스",          english: "tennis",                                          romanization: "teniseu",            example: "테니스를 쳐요.",                                  tags: ["noun", "sport"] },
      { korean: "치다",            english: "to hit; to play (tennis, golf, etc.)",            romanization: "chida",              example: "테니스를 쳐요.",                                  tags: ["verb", "sport"] },

      // ── Events & Scheduling ──────────────────────────────────
      { korean: "생일",            english: "birthday",                                        romanization: "saengil",            example: "오늘은 생일이라서 케이크를 먹어요.",              tags: ["noun", "event"] },
      { korean: "휴가",            english: "vacation, time off",                              romanization: "hyuga",              example: "다음 주에 휴가예요.",                             tags: ["noun", "event"] },
      { korean: "세일",            english: "sale",                                            romanization: "seil",               example: "세일이라서 백화점에 가요.",                       tags: ["noun", "shopping"] },
      { korean: "시험",            english: "exam, test",                                      romanization: "siheom",             example: "월요일에 시험이 있어서 못 가요.",                 tags: ["noun", "school"] },
      { korean: "월급날",          english: "payday",                                          romanization: "wolgeumnal",         example: "오늘 월급날이라서 기분이 좋아요.",                tags: ["noun", "work"] },

      // ── Availability Phrases ─────────────────────────────────
      { korean: "돼요",            english: "it works, it's okay (for scheduling)",            romanization: "dwaeyo",             example: "토요일은 돼요?",                                  tags: ["verb", "phrase"] },
      { korean: "안 돼요",         english: "it doesn't work, it's not okay",                  romanization: "an dwaeyo",          example: "일요일은 안 돼요.",                               tags: ["verb", "phrase"] },
      { korean: "일이 있어서",     english: "because I have something going on / to do",       romanization: "iri isseoseo",        example: "일이 있어서 못 가요.",                            tags: ["phrase"] },

      // ── Verbs ────────────────────────────────────────────────
      { korean: "끝내다",          english: "to finish something (transitive)",                romanization: "kkeunneda",          example: "숙제를 끝냈어요.",                                tags: ["verb"] },
      { korean: "끝나다",          english: "to finish, to end (intransitive)",                romanization: "kkeunnada",          example: "수업이 끝났어요.",                                tags: ["verb"] },
      { korean: "쉬다",            english: "to rest, to take a break",                        romanization: "swida",              example: "집에서 쉬었어요.",                                tags: ["verb"] },
      { korean: "미안하다",        english: "to be sorry",                                     romanization: "mianhada",           example: "미안해요.",                                       tags: ["verb", "expression"] },

      // ── Adjectives ───────────────────────────────────────────
      { korean: "쉽다",            english: "to be easy (ㅂ irregular: 쉬워요)",               romanization: "swipda",             example: "한국어가 쉬워요?",                                tags: ["adjective"] },
      { korean: "시끄럽다",        english: "to be noisy, loud (ㅂ irregular: 시끄러워요)",    romanization: "sikkeuropda",        example: "여기는 시끄러워서 공부 못 해요.",                 tags: ["adjective"] },
      { korean: "복잡하다",        english: "to be crowded, busy; to be complicated",          romanization: "bokjaphada",         example: "길이 복잡해서 늦었어요.",                         tags: ["adjective"] },
      { korean: "피곤하다",        english: "to be tired",                                     romanization: "pigonhada",          example: "피곤해서 못 만났어요.",                           tags: ["adjective"] },

      // ── Cause & Reason ───────────────────────────────────────
      { korean: "때문에",          english: "because of (positive or negative)",               romanization: "ttaemune",           example: "오빠 때문에 늦었어요.",                           tags: ["particle", "grammar"] },
      { korean: "덕분에",          english: "thanks to (positive only)",                       romanization: "deokbune",           example: "사장님 덕분에 성공했어요.",                       tags: ["particle", "grammar"] },

      // ── Particles ────────────────────────────────────────────
      { korean: "(이)나",          english: "or (between nouns; vowel → 나, consonant → 이나)", romanization: "(i)na",             example: "버스나 지하철을 타요.",                           tags: ["particle", "grammar"] },
    ],

    grammar: [
      {
        pattern: "-(이)라서",
        explanation: "Because it is / because I am — used when the reason clause uses the 이다 (be) verb. After vowel: 라서. After consonant: 이라서.",
        examples: [
          "월요일이라서 일 해요. (Because it's Monday, I work.)",
          "선생님이라서 바빠요. (Because I'm a teacher, I'm busy.)",
          "생일이라서 케이크를 먹어요. (Because it's a birthday, we eat cake.)",
          "휴가라서 집에 있어요. (Because it's vacation, I'm at home.)"
        ]
      },
      {
        pattern: "때문에",
        explanation: "Because of + noun. Can be used for positive or negative reasons. Attach directly after the noun.",
        examples: [
          "오빠 때문에 늦었어요. (I was late because of my brother.)",
          "비 때문에 못 나갔어요. (I couldn't go out because of the rain.)"
        ]
      },
      {
        pattern: "덕분에",
        explanation: "Thanks to + noun. Positive situations only.",
        examples: [
          "사장님 덕분에 성공했어요. (Thanks to my boss, I succeeded.)",
          "친구 덕분에 한국어를 배웠어요. (Thanks to my friend, I learned Korean.)"
        ]
      },
      {
        pattern: "(이)나",
        explanation: "Or — connects two nouns as alternatives. After vowel: 나. After consonant: 이나.",
        examples: [
          "콜라나 주스를 마셔요. (I drink cola or juice.)",
          "신문이나 책을 읽어요. (I read a newspaper or a book.)",
          "버스나 지하철을 타요. (I take the bus or the subway.)"
        ]
      },
      {
        pattern: "아주 / 너무 / 많이",
        explanation: "Degree adverbs: 아주 (very) is most standard with descriptive verbs. 너무 (too/very) is emphatic and can imply excess or negative feeling. 많이 (a lot) is used primarily with action verbs.",
        examples: [
          "아주 비싸요. (It's very expensive.)",
          "너무 매워요. (It's too spicy.)",
          "많이 먹었어요. (I ate a lot.)"
        ]
      }
    ]
  };

  if (!window.KOREAN_UNITS) window.KOREAN_UNITS = [];
  window.KOREAN_UNITS.push(unit);
})();
