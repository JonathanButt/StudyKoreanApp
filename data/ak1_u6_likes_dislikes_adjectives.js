// ============================================================
//  Active Korean 1 — Unit 6: Likes & Dislikes (Adjectives)
//  File: data/ak1_u6_likes_dislikes_adjectives.js
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
    id:    "ak1_u6",
    book:  "Active Korean 1",
    unit:  6,
    title: "Likes & Dislikes (Adjectives)",

    vocabulary: [
      { korean: "좋다", english: "to be good, to like (temporary or permanent)", romanization: "johtda", tags: ["adjective", "verb"] },
      { korean: "좋아요", english: "It's good/okay/sounds good", romanization: "johaayo", tags: ["adjective"] },
      { korean: "좋아하다", english: "to like (permanent liking only)", romanization: "johaahada", tags: ["verb"] },
      { korean: "좋아해요", english: "I like (permanent)", romanization: "johaahaeyo", tags: ["verb"] },
      { korean: "싸다", english: "to be cheap", romanization: "ssada", tags: ["adjective"] },
      { korean: "싸요", english: "It's cheap", romanization: "ssayo", tags: ["adjective"] },
      { korean: "비싸다", english: "to be expensive", romanization: "bissada", tags: ["adjective"] },
      { korean: "비싸요", english: "It's expensive", romanization: "bissayo", tags: ["adjective"] },
      { korean: "맛있다", english: "to be delicious", romanization: "masitda", tags: ["adjective"] },
      { korean: "맛있어요", english: "It's delicious", romanization: "masisseoyo", tags: ["adjective"] },
      { korean: "맛없다", english: "to be not delicious (sounds like 마덥다)", romanization: "maseopda", tags: ["adjective"] },
      { korean: "맛없어요", english: "It's not delicious", romanization: "maseopsseoyo", tags: ["adjective"] },
      { korean: "재미있다", english: "to be fun, interesting, entertaining", romanization: "jjaemiitda", tags: ["adjective"] },
      { korean: "재미있어요", english: "It's fun/interesting", romanization: "jjaemiisseoyo", tags: ["adjective"] },
      { korean: "재미없다", english: "to be not fun/interesting", romanization: "jjaemieopda", tags: ["adjective"] },
      { korean: "재미없어요", english: "It's not fun", romanization: "jjaemieopsseoyo", tags: ["adjective"] },
      { korean: "예쁘다", english: "to be pretty, endearing, sweet", romanization: "yeppeuda", tags: ["adjective"] },
      { korean: "예뻐요", english: "It's pretty", romanization: "yeppeoyo", tags: ["adjective"] },
      { korean: "잘 생겼다", english: "to be handsome, good-looking (formed well)", romanization: "jal saenggyeotda", tags: ["adjective"] },
      { korean: "잘 생겼어요", english: "He's handsome", romanization: "jal saenggyeosseoyo", tags: ["adjective"] },
      { korean: "귀엽다", english: "to be cute (ㅂ irregular: 귀여워요)", romanization: "gwiyeopda", tags: ["adjective"] },
      { korean: "귀여워요", english: "It's cute", romanization: "gwiyeoweoyo", tags: ["adjective"] },
      { korean: "멋있다", english: "to be cool, fashionable, admirable", romanization: "meotitda", tags: ["adjective"] },
      { korean: "멋있어요", english: "She's cool/fashionable", romanization: "meotisseoyo", tags: ["adjective"] },
      { korean: "크다", english: "to be big", romanization: "keuda", tags: ["adjective"] },
      { korean: "커요", english: "It's big", romanization: "keoyeo", tags: ["adjective"] },
      { korean: "작다", english: "to be small", romanization: "jakda", tags: ["adjective"] },
      { korean: "작아요", english: "It's small", romanization: "jag ayao", tags: ["adjective"] },
      { korean: "키가 크다", english: "to be tall (literally height is big, only for people)", romanization: "kiga keuda", tags: ["adjective", "phrase"] },
      { korean: "키가 커요", english: "He's tall", romanization: "kiga keoyeo", tags: ["adjective"] },
      { korean: "키가 작다", english: "to be short (for people only)", romanization: "kiga jakda", tags: ["adjective"] },
      { korean: "키가 작아요", english: "He's short", romanization: "kiga jagayao", tags: ["adjective"] },
      { korean: "춥다", english: "to be cold (weather, surroundings)", romanization: "chubda", tags: ["adjective"] },
      { korean: "추워요", english: "It's cold", romanization: "chuwoyo", tags: ["adjective"] },
      { korean: "덥다", english: "to be hot (weather, surroundings)", romanization: "deobda", tags: ["adjective"] },
      { korean: "더워요", english: "It's hot", romanization: "deoweoyo", tags: ["adjective"] },
      { korean: "따뜻하다", english: "to be warm (comforting, positive)", romanization: "ttatteukhada", tags: ["adjective"] },
      { korean: "따뜻해요", english: "It's warm", romanization: "ttatteukhaeyo", tags: ["adjective"] },
      { korean: "시원하다", english: "to be cool, refreshing", romanization: "siwonhada", tags: ["adjective"] },
      { korean: "시원해요", english: "It's cool/refreshing", romanization: "siwonhaeyo", tags: ["adjective"] },
      { korean: "차갑다", english: "to be cold (to your senses, describing object/feeling)", romanization: "chagapda", tags: ["adjective"] },
      { korean: "차가워요", english: "It's cold (to touch/taste)", romanization: "chagawoyo", tags: ["adjective"] },
      { korean: "뜨겁다", english: "to be hot (to your senses, describing object/feeling)", romanization: "tteugeobda", tags: ["adjective"] },
      { korean: "뜨거워요", english: "It's hot (to touch/taste)", romanization: "tteugeowoyo", tags: ["adjective"] },
      { korean: "바쁘다", english: "to be busy (ㅡ irregular)", romanization: "babbuda", tags: ["adjective"] },
      { korean: "바빠요", english: "I'm busy", romanization: "babbayo", tags: ["adjective"] },
      { korean: "나쁘다", english: "to be bad (ㅡ irregular)", romanization: "nabbuda", tags: ["adjective"] },
      { korean: "나빠요", english: "It's bad", romanization: "nabbayo", tags: ["adjective"] }
    ],

    grammar: [
      {
        pattern: "Descriptive Verbs (Adjectives)",
        explanation: "Korean adjectives conjugate like verbs. Use subject with 이/가",
        examples: ["맛있어요 - It's delicious", "비싸요 - It's expensive", "추워요 - It's cold"]
      },
      {
        pattern: "ㅂ Irregular Verbs",
        explanation: "Drop the ㅂ and add 워요 for present tense",
        examples: ["귀엽다 → 귀여워요", "예쁘다 → 예뻐요", "바쁘다 → 바빠요"]
      },
      {
        pattern: "stem + ㄴ/은 (Attributive Form)",
        explanation: "Use adjective before noun. Use ㄴ after vowel, 은 after consonant",
        examples: ["가방이 비싸요 → 비싼 가방을 샀어요", "신발이 작아요 → 작은 신발"]
      },
      {
        pattern: "좋다 vs 좋아하다",
        explanation: "좋다 = temporary or permanent liking. 좋아하다 = only permanent liking",
        examples: ["이 치마가 좋아요 (at-the-moment)", "사과를 좋아해요 (permanent)"]
      }
    ]
  };

  if (!window.KOREAN_UNITS) window.KOREAN_UNITS = [];
  window.KOREAN_UNITS.push(unit);
})();
