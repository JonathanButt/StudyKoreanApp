// ============================================================
//  Active Korean 2 — Unit 6: Etiquette (예의)
//  File: data/ak2_u6_etiquette.js
//
//  Textbook pages 82–95
//
//  Topics:
//    - Expressing permissions  허가 표현하기  (V-아/어도 돼요)
//    - Expressing prohibitions 금지 표현하기  (V-면 안 돼요)
//    - Expressing a point of time 발생 시점 표현하기  (-(으)ㄹ 때)
// ============================================================

(function () {
  const unit = {
    id:    "ak2_u8",
    book:  "Active Korean 2",
    unit:  6,
    title: "Etiquette (예의)",

    vocabulary: [

      // ── Expressions (p.83) ───────────────────────────────────
      { korean: "그럼요",            english: "Of course; Certainly; Sure",                       romanization: "geureomyo",          example: "A: 여기서 사진 찍어도 돼요? B: 그럼요!",           tags: ["expression"] },
      { korean: "물론이지요",        english: "Certainly; Of course (slightly more formal)",       romanization: "mullonijiyo",        example: "물론이지요, 어서 오세요.",                         tags: ["expression"] },
      { korean: "저기요",            english: "Excuse me (to get attention)",                      romanization: "jeogiyo",            example: "저기요, 여기서 담배 피우면 안 돼요.",               tags: ["expression"] },
      { korean: "안 되는데요",       english: "That's not alright; That's not okay (soft refusal)", romanization: "an doendeyo",        example: "여기서 흡연하시면 안 되는데요.",                    tags: ["expression"] },
      { korean: "그래요? 몰랐어요",  english: "Is that so? I didn't know",                        romanization: "geuraeyo? mollasseoyo", example: "그래요? 몰랐어요. 죄송합니다.",                  tags: ["expression"] },

      // ── Places (p.83) ────────────────────────────────────────
      { korean: "주차장",            english: "parking lot; car park",                            romanization: "juchajang",          example: "주차장에 차를 세웠어요.",                          tags: ["noun", "place"] },
      { korean: "기숙사",            english: "dormitory",                                        romanization: "gisuksa",            example: "기숙사에서 살아요.",                               tags: ["noun", "place"] },

      // ── Emotions (p.83) ──────────────────────────────────────
      { korean: "심심하다",          english: "to be bored; to have nothing to do",               romanization: "simsimhada",         example: "심심해서 한국어를 공부해요.",                      tags: ["adjective", "emotion"] },

      // ── Verbs (p.83) ─────────────────────────────────────────
      { korean: "이야기하다",        english: "to talk; to converse; to chat",                    romanization: "iyagihada",          example: "친구하고 이야기해요.",                             tags: ["verb"] },
      { korean: "쓰다",              english: "to wear / put on (a hat); also: to write; to use", romanization: "sseuda",             example: "모자를 써도 돼요?",                                tags: ["verb"] },
      { korean: "드시다",            english: "to eat; to drink (honorific of 먹다/마시다)",       romanization: "deusida",            example: "어서 드세요.",                                     tags: ["verb", "honorific"] },
      { korean: "벗다",              english: "to take off (clothing, shoes)",                    romanization: "beotda",             example: "신발을 벗어야 돼요.",                              tags: ["verb"] },
      { korean: "악수하다",          english: "to shake hands",                                   romanization: "aksuhada",           example: "만나면 악수해요.",                                 tags: ["verb"] },
      { korean: "사용하다",          english: "to use; to make use of",                           romanization: "sayonghada",         example: "휴대 전화를 사용하면 안 돼요.",                    tags: ["verb"] },

      // ── Nouns (p.83) ─────────────────────────────────────────
      { korean: "신발",              english: "shoes; footwear",                                  romanization: "sinbal",             example: "신발을 벗어요.",                                   tags: ["noun", "clothing"] },
      { korean: "뒷사람",            english: "person behind; the person at the back",            romanization: "dwitssaram",         example: "뒷사람을 생각해요.",                               tags: ["noun"] },
      { korean: "이용",              english: "use; utilization",                                 romanization: "iyong",              example: "이용해 주셔서 감사합니다.",                        tags: ["noun"] },
      { korean: "기분",              english: "feeling; mood",                                    romanization: "gibun",              example: "기분이 좋아요.",                                   tags: ["noun", "emotion"] },
      { korean: "아기",              english: "baby; infant",                                     romanization: "agi",                example: "아기가 자고 있어요.",                              tags: ["noun"] },
      { korean: "안내",              english: "information; guidance; directions",                 romanization: "annae",              example: "안내를 받았어요.",                                 tags: ["noun"] },
      { korean: "고등학생",          english: "high school student",                              romanization: "godeunghaksaeng",    example: "고등학생부터 운전할 수 있어요?",                   tags: ["noun", "education"] },
      { korean: "아이",              english: "child; kid",                                       romanization: "ai",                 example: "아이들이 놀아요.",                                 tags: ["noun"] },
      { korean: "밖",                english: "outside; outdoors",                                romanization: "bak",                example: "밖에 나가도 돼요?",                                tags: ["noun", "location"] },

      // ── Others (p.83) ────────────────────────────────────────
      { korean: "그런데",            english: "but; by the way; however",                         romanization: "geureonde",          example: "그런데 여기서 담배를 피우면 안 돼요.",             tags: ["conjunction"] },
      { korean: "다른",              english: "other; different; another",                        romanization: "dareun",             example: "다른 자리에 앉아요.",                              tags: ["adjective"] },

      // ── Words that go together (p.83) ────────────────────────
      { korean: "기분이 좋다",       english: "to feel good; to be in a good mood",               romanization: "gibuni jota",        example: "오늘 기분이 좋아요!",                              tags: ["phrase", "emotion"] },
      { korean: "기분이 나쁘다",     english: "to feel bad; to be in a bad mood",                 romanization: "gibuni nappeuda",    example: "기분이 나빠서 집에 있어요.",                       tags: ["phrase", "emotion"] },

    ],

    grammar: [
      {
        pattern: "V-아/어도 돼요",
        explanation: "Permission — 'You may / It's okay to V.' Conjugate the verb to its 아/어 form, then add 도 돼요. To ask permission: V-아/어도 돼요? (May I V? / Is it okay to V?). To deny permission: V-면 안 돼요.",
        examples: [
          "여기서 담배를 피워도 돼요? — May I smoke here?",
          "사진을 찍어도 돼요. — You may take a picture.",
          "들어가도 돼요? — May I come in?",
          "여기 앉아도 돼요. — You may sit here."
        ]
      },
      {
        pattern: "V-면 안 돼요",
        explanation: "Prohibition — 'You must not V / You cannot V.' Conjugate to the 면 conditional form, then add 안 돼요. This is a rule or prohibition, stronger than 지 마세요 (please don't).",
        examples: [
          "여기서 담배를 피우면 안 돼요. — You must not smoke here.",
          "신발을 신고 들어가면 안 돼요. — You must not enter with shoes on.",
          "여기서 사진을 찍으면 안 돼요. — You must not take photos here.",
          "늦으면 안 돼요. — You must not be late."
        ]
      },
      {
        pattern: "V/A-(으)ㄹ 때",
        explanation: "Point of time — 'when V / at the time of V.' Expresses the time or occasion when something happens. Verb/adjective stem ending with a vowel → ㄹ 때. Stem ending with a consonant → 을 때.",
        examples: [
          "한국에 올 때 뭐 사 왔어요? — What did you buy when you came to Korea?",
          "밥을 먹을 때 이야기하면 안 돼요. — You should not talk while eating.",
          "바쁠 때 전화하지 마세요. — Don't call when I'm busy.",
          "들어갈 때 신발을 벗어야 돼요. — You must take off your shoes when entering."
        ]
      }
    ]
  };

  if (!window.KOREAN_UNITS) window.KOREAN_UNITS = [];
  window.KOREAN_UNITS.push(unit);
})();
