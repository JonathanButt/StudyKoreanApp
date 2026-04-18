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
      { korean: "실례지만", english: "Excuse me, but...", romanization: "sillyeejiman", tags: ["phrase", "polite"] },
      { korean: "실례", english: "an impolite action", romanization: "sillyae", tags: ["noun"] },
      { korean: "누구세요?", english: "Who are you? (polite)", romanization: "nuguseyo", tags: ["question", "polite"] },
      { korean: "누구", english: "who", romanization: "nugu", tags: ["question"] },
      { korean: "살다", english: "to live", romanization: "salda", tags: ["verb"] },
      { korean: "바꾸다", english: "to change; to put someone on the phone", romanization: "bakkuda", tags: ["verb"] },
      { korean: "좀", english: "a little; can soften a request", romanization: "jom", tags: ["adverb"] },
      { korean: "회의하다", english: "to have a business/work meeting", romanization: "hoeuihada", tags: ["verb"] },
      { korean: "화장실", english: "bathroom", romanization: "hwajanggsil", tags: ["place"] },
      { korean: "화장실을 쓰다", english: "to use the bathroom", romanization: "hwajanggsireul sseuda", tags: ["phrase"] },
      { korean: "노래하다", english: "to sing", romanization: "noriaehada", tags: ["verb"] },
      { korean: "노래", english: "song", romanization: "norae", tags: ["noun"] },
      { korean: "그림을 그리다", english: "to draw, to paint", romanization: "geurimeul geurida", tags: ["verb", "phrase"] },
      { korean: "그림", english: "picture", romanization: "geurim", tags: ["noun"] },
      { korean: "크림", english: "cream", romanization: "keurim", tags: ["noun"] },
      { korean: "창문을 열어 주세요", english: "Please open the window", romanization: "changmuneul yeoreo juseyo", tags: ["phrase"] },
      { korean: "문을 닫아 주세요", english: "Please close the door", romanization: "muneul dahaa juseyo", tags: ["phrase"] },
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
      { korean: "여동생", english: "younger sister", romanization: "yeodonsaeng", tags: ["family"] },
      { korean: "남동생", english: "younger brother", romanization: "namdonsaeng", tags: ["family"] },
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
      { korean: "그저 그랬어요", english: "It was so-so", romanization: "geojeo geuraeseyo", tags: ["phrase", "past"] },
      { korean: "잘 지냈어요", english: "I've been well", romanization: "jal jinasseyo", tags: ["greeting", "past"] },
      { korean: "어제", english: "yesterday", romanization: "eoje", tags: ["time"] },
      { korean: "먹다", english: "to eat", romanization: "meokda", tags: ["verb"] },
      { korean: "마시다", english: "to drink", romanization: "masida", tags: ["verb"] },
      { korean: "음식", english: "food", romanization: "eumshik", tags: ["noun"] },
      { korean: "전화를 받다", english: "to pick up the phone, to answer", romanization: "jeonhwareul batda", tags: ["verb", "phone"] },
      { korean: "받다", english: "to receive", romanization: "batda", tags: ["verb"] },
      { korean: "전화를 하다", english: "to make a phone call", romanization: "jeonhwareul hada", tags: ["verb", "phone"] },
      { korean: "전화하다", english: "to call someone, to make a phone call", romanization: "jeonhwahada", tags: ["verb", "phone"] },
      { korean: "가르치다", english: "to teach", romanization: "gareuchida", tags: ["verb"] }
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
      }
    ]
  };

  if (!window.KOREAN_UNITS) window.KOREAN_UNITS = [];
  window.KOREAN_UNITS.push(unit);
})();
