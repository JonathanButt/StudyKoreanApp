// ============================================================
//  Active Korean 1 — Unit 3: Daily Life (Objects & Existence)
//  File: data/ak1_u3_daily_life_objects_existence.js
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
    id:    "ak1_u3",
    book:  "Active Korean 1",
    unit:  3,
    title: "Daily Life (Objects & Existence)",

    vocabulary: [
      { korean: "있어요", english: "have/has; exist; is at a place", romanization: "isseoyo", tags: ["verb", "common"] },
      { korean: "없어요", english: "not have/don't have; don't exist", romanization: "eopseyo", tags: ["verb", "negative"] },
      { korean: "시계", english: "watch, clock", romanization: "sigye", tags: ["noun", "object"] },
      { korean: "우산", english: "umbrella", romanization: "usan", tags: ["noun", "object"] },
      { korean: "휴대폰", english: "cell phone, mobile phone", romanization: "hyudaepon", tags: ["noun", "electronics"] },
      { korean: "핸드폰", english: "cell phone (informal)", romanization: "haendeupon", tags: ["noun", "electronics"] },
      { korean: "폰", english: "phone (informal short form)", romanization: "pon", tags: ["noun", "electronics"] },
      { korean: "볼펜", english: "ballpoint pen", romanization: "bolpen", tags: ["noun", "stationery"] },
      { korean: "연필", english: "pencil", romanization: "yeonpil", tags: ["noun", "stationery"] },
      { korean: "책", english: "book", romanization: "chaek", tags: ["noun", "object"] },
      { korean: "사전", english: "dictionary", romanization: "sajeon", tags: ["noun", "object"] },
      { korean: "공책", english: "notebook", romanization: "gongchaek", tags: ["noun", "stationery"] },
      { korean: "한국어", english: "Korean language", romanization: "hangugeo", tags: ["noun"] },
      { korean: "이거", english: "this thing/object (close to speaker)", romanization: "igeo", tags: ["demonstrative"] },
      { korean: "그거", english: "that thing/object (far from speaker, close to listener)", romanization: "geugeo", tags: ["demonstrative"] },
      { korean: "저거", english: "that thing/object (far from both)", romanization: "jeogeo", tags: ["demonstrative"] },
      { korean: "이", english: "this (demonstrative before noun)", romanization: "i", tags: ["demonstrative"] },
      { korean: "그", english: "that (demonstrative before noun)", romanization: "geu", tags: ["demonstrative"] },
      { korean: "저", english: "that (far, demonstrative before noun)", romanization: "jeo", tags: ["demonstrative"] },
      { korean: "것", english: "thing", romanization: "geot", tags: ["noun"] },
      { korean: "제", english: "my (with those you respect)", romanization: "je", tags: ["possessive"] },
      { korean: "의", english: "possessive ('s), pronounced 에", romanization: "ui", tags: ["particle", "possessive"] },
      { korean: "우리", english: "we, our; my (family, house, work title, pets)", romanization: "uri", tags: ["possessive"] },
      { korean: "내", english: "my (with friends/younger people)", romanization: "nae", tags: ["possessive"] }
    ],

    grammar: [
      {
        pattern: "이/가 (Subject Particle)",
        explanation: "Marks subject of sentence, emphasizes subject. Use 이 after consonant, 가 after vowel.",
        examples: ["책이 있어요 - (There is) a book", "시계가 있어요 - (There is) a watch"]
      },
      {
        pattern: "은/는 (Topic Particle)",
        explanation: "Marks topic of sentence, stresses rest of sentence rather than subject",
        examples: ["제 이름은 ___ 이에요 - My name is ___"]
      },
      {
        pattern: "__이/가 있어요/없어요",
        explanation: "To have or not have (with possessive subject). Subject + 이/가 + 있어요/없어요",
        examples: ["시계가 있어요? - Do you have a watch?", "책이 없어요 - I don't have a book"]
      },
      {
        pattern: "이 + noun = this ___",
        explanation: "Demonstrative adjective for objects close to speaker",
        examples: ["이 책 - this book", "이 펜 - this pen"]
      },
      {
        pattern: "그 + noun = that ___",
        explanation: "Demonstrative adjective for objects far from speaker but close to listener",
        examples: ["그 책 - that book", "그 치마 - that skirt"]
      },
      {
        pattern: "저 + noun = that ___ (far)",
        explanation: "Demonstrative adjective for objects far from both speaker and listener",
        examples: ["저 바지 - those pants (far away)"]
      }
    ]
  };

  if (!window.KOREAN_UNITS) window.KOREAN_UNITS = [];
  window.KOREAN_UNITS.push(unit);
})();
