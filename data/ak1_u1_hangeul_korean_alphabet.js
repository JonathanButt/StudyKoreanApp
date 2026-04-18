// ============================================================
//  Active Korean 1 — Unit 1: Hangeul (Korean Alphabet)
//  File: data/ak1_u1_hangeul_korean_alphabet.js
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
    id:    "ak1_u1",
    book:  "Active Korean 1",
    unit:  1,
    title: "Hangeul (Korean Alphabet)",

    vocabulary: [
      { korean: "ㄱ", english: "g/k consonant", romanization: "gieuk", tags: ["alphabet", "consonant"] },
      { korean: "ㄴ", english: "n consonant", romanization: "nieun", tags: ["alphabet", "consonant"] },
      { korean: "ㄷ", english: "d/t consonant", romanization: "digeut", tags: ["alphabet", "consonant"] },
      { korean: "ㄹ", english: "r/l consonant", romanization: "rieul", tags: ["alphabet", "consonant"] },
      { korean: "ㅁ", english: "m consonant", romanization: "mieum", tags: ["alphabet", "consonant"] },
      { korean: "ㅂ", english: "b/p consonant", romanization: "bieup", tags: ["alphabet", "consonant"] },
      { korean: "ㅅ", english: "s/sh consonant", romanization: "siot", tags: ["alphabet", "consonant"] },
      { korean: "ㅇ", english: "silent (top position) or ng (bottom position)", romanization: "ieung", tags: ["alphabet", "consonant"] },
      { korean: "ㅈ", english: "j/ch consonant", romanization: "jieut", tags: ["alphabet", "consonant"] },
      { korean: "ㅊ", english: "ch consonant (with air)", romanization: "chieut", tags: ["alphabet", "consonant"] },
      { korean: "ㅋ", english: "k consonant (with air)", romanization: "khieuk", tags: ["alphabet", "consonant"] },
      { korean: "ㅌ", english: "t consonant (with air)", romanization: "thieut", tags: ["alphabet", "consonant"] },
      { korean: "ㅍ", english: "p consonant (with air)", romanization: "phieup", tags: ["alphabet", "consonant"] },
      { korean: "ㅎ", english: "h consonant", romanization: "hieuh", tags: ["alphabet", "consonant"] },
      { korean: "ㅏ", english: "ah vowel", romanization: "a", tags: ["alphabet", "vowel"] },
      { korean: "ㅑ", english: "yah vowel", romanization: "ya", tags: ["alphabet", "vowel"] },
      { korean: "ㅓ", english: "uh vowel (open long)", romanization: "eo", tags: ["alphabet", "vowel"] },
      { korean: "ㅕ", english: "yuh vowel (open long)", romanization: "yeo", tags: ["alphabet", "vowel"] },
      { korean: "ㅗ", english: "oh vowel (no w sound at end)", romanization: "o", tags: ["alphabet", "vowel"] },
      { korean: "ㅛ", english: "yoh vowel", romanization: "yo", tags: ["alphabet", "vowel"] },
      { korean: "ㅜ", english: "ooh vowel", romanization: "u", tags: ["alphabet", "vowel"] },
      { korean: "ㅠ", english: "yoo vowel", romanization: "yu", tags: ["alphabet", "vowel"] },
      { korean: "ㅡ", english: "euh vowel (closed mouth, smile)", romanization: "eu", tags: ["alphabet", "vowel"] },
      { korean: "ㅣ", english: "ee vowel", romanization: "i", tags: ["alphabet", "vowel"] },
      { korean: "개미", english: "ant", romanization: "gaemi", tags: ["animal"] },
      { korean: "얘기", english: "talking, speech", romanization: "yaegi", tags: ["noun"] },
      { korean: "가게", english: "store", romanization: "gage", tags: ["place"] },
      { korean: "과자", english: "crunchy snack", romanization: "gwaja", tags: ["food"] },
      { korean: "돼지", english: "pig", romanization: "dwaeji", tags: ["animal"] },
      { korean: "회사", english: "company", romanization: "hoesa", tags: ["place"] },
      { korean: "가구", english: "furniture", romanization: "gagu", tags: ["noun"] },
      { korean: "라디오", english: "radio", romanization: "radio", tags: ["electronics"] },
      { korean: "바나나", english: "banana", romanization: "banana", tags: ["fruit"] },
      { korean: "바지", english: "pants", romanization: "baji", tags: ["clothing"] },
      { korean: "호수", english: "lake", romanization: "hosu", tags: ["place"] },
      { korean: "이름", english: "name", romanization: "ireum", tags: ["noun"] },
      { korean: "화장실", english: "bathroom", romanization: "hwajangsil", tags: ["place"] },
      { korean: "도서관", english: "library", romanization: "doseogwan", tags: ["place"] }
    ],

    grammar: [
      {
        pattern: "Double Consonants - No Air",
        explanation: "ㄲ (kk), ㄸ (tt), ㅃ (pp), ㅉ (jj) - pronounced with no air/pressure",
        examples: ["ski - no air (ㄲ)", "star - no air (ㄸ)", "spa - no air (ㅃ)"]
      },
      {
        pattern: "Double Consonants with Air",
        explanation: "ㅋ (k with air), ㅌ (t with air), ㅍ (p with air), ㅊ (ch with air)",
        examples: ["key - a lot of air (ㅋ)", "tar - a lot of air (ㅌ)", "pa - a lot of air (ㅍ)"]
      },
      {
        pattern: "Combination Vowels",
        explanation: "Two vowels combine to create new sounds",
        examples: ["ㅏ + ㅣ = ㅐ (eh)", "ㅓ + ㅣ = ㅔ (eh)", "ㅗ + ㅏ = ㅘ (wa)"]
      },
      {
        pattern: "Bottom Consonants (Batchim)",
        explanation: "Consonants placed at the bottom of a syllable change pronunciation",
        examples: ["갇 (gat)", "닭 (dak)", "옷 (os)"]
      },
      {
        pattern: "ㅎ as Batchim",
        explanation: "Silent when followed by vowel sound; adds air to consonant when followed by consonant",
        examples: ["좋다 sounds like 조타", "좋고 sounds like 조코", "좋아 sounds like 조아"]
      }
    ]
  };

  if (!window.KOREAN_UNITS) window.KOREAN_UNITS = [];
  window.KOREAN_UNITS.push(unit);
})();
