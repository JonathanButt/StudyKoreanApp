// ============================================================
//  Active Korean 2 — Unit 1: Review & Family
//  File: data/ak2_u1_review_family.js
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
    id:    "ak2_u1",
    book:  "Active Korean 2",
    unit:  1,
    title: "Review & Family",

    vocabulary: [
      { korean: "연말", english: "end of year", romanization: "yeonmal", tags: ["time", "season"] },
      { korean: "월 말", english: "end of month", romanization: "wol mal", tags: ["time"] },
      { korean: "보내다", english: "to spend (+ time/time expression)", romanization: "bonaeda", tags: ["verb"] },
      { korean: "많이", english: "a lot", romanization: "manhi", tags: ["adverb"] },
      { korean: "조금", english: "a little", romanization: "jogeum", tags: ["adverb"] },
      { korean: "당신", english: "you (formal/to stranger/married couples use with each other)", romanization: "dangsin", tags: ["pronoun"] },
      { korean: "부모님", english: "parents", romanization: "bumonim", tags: ["family"] },
      { korean: "피곤하다", english: "to be tired", romanization: "pikonhada", tags: ["adjective"] },
      { korean: "달리다", english: "to run", romanization: "dallida", tags: ["verb"] },
      { korean: "뛰다", english: "to run", romanization: "ttweuda", tags: ["verb"] },
      { korean: "러닝", english: "running (as exercise)", romanization: "reuning", tags: ["exercise"] },
      { korean: "같아요", english: "sound like (ㅌ sound gets linked)", romanization: "gataayo", tags: ["verb"] },
      { korean: "같이", english: "together, with (ㅊ sound gets linked)", romanization: "gachi", tags: ["adverb"] },
      { korean: "놀러 오다", english: "to come over/visit for fun", romanization: "nolleo oda", tags: ["verb", "phrase"] },
      { korean: "놀다", english: "to play, to hang out, to spend time for fun", romanization: "nolda", tags: ["verb"] }
    ],

    grammar: [
      {
        pattern: "past tense review: -었어요/-았어요",
        explanation: "Conjugate to 요 form, drop 요, add ㅆ어요",
        examples: ["하다 → 해요 → 했어요", "가다 → 가요 → 갔어요"]
      },
      {
        pattern: "-려고 (intent, purpose)",
        explanation: "In order to, to (do something with purpose)",
        examples: []
      }
    ]
  };

  if (!window.KOREAN_UNITS) window.KOREAN_UNITS = [];
  window.KOREAN_UNITS.push(unit);
})();
