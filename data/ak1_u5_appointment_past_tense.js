// ============================================================
//  Active Korean 1 — Unit 5: Appointment & Past Tense
//  File: data/ak1_u5_appointment_past_tense.js
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
    id:    "ak1_u5",
    book:  "Active Korean 1",
    unit:  5,
    title: "Appointment & Past Tense",

    vocabulary: [
      { korean: "시간", english: "time", romanization: "sigan", tags: ["noun", "time"] },
      { korean: "시간이 많아요", english: "have a lot of time", romanization: "sigani manayo", tags: ["phrase"] },
      { korean: "약속", english: "appointment, promise, plans", romanization: "yaksok", tags: ["noun"] },
      { korean: "언제", english: "when", romanization: "eonje", tags: ["question", "time"] },
      { korean: "어제", english: "yesterday", romanization: "eoje", tags: ["time"] },
      { korean: "내일", english: "tomorrow", romanization: "naeil", tags: ["time"] },
      { korean: "모레", english: "day after tomorrow", romanization: "moare", tags: ["time"] },
      { korean: "내일 모레", english: "day after tomorrow", romanization: "naeil moare", tags: ["time"] },
      { korean: "오늘", english: "today", romanization: "oneul", tags: ["time"] },
      { korean: "주말", english: "weekend", romanization: "jumal", tags: ["time"] },
      { korean: "월요일", english: "Monday", romanization: "woryoil", tags: ["day"] },
      { korean: "화요일", english: "Tuesday", romanization: "hwayoil", tags: ["day"] },
      { korean: "수요일", english: "Wednesday", romanization: "suyoil", tags: ["day"] },
      { korean: "목요일", english: "Thursday", romanization: "mogyoil", tags: ["day"] },
      { korean: "금요일", english: "Friday", romanization: "geumyoil", tags: ["day"] },
      { korean: "토요일", english: "Saturday", romanization: "toyoil", tags: ["day"] },
      { korean: "일요일", english: "Sunday", romanization: "iryoil", tags: ["day"] },
      { korean: "월", english: "month (Sino-Korean + 월)", romanization: "wol", tags: ["time"] },
      { korean: "일", english: "day/date (Sino-Korean + 일)", romanization: "il", tags: ["time"] },
      { korean: "며칠", english: "what date", romanization: "myeochil", tags: ["question"] },
      { korean: "무슨 요일", english: "what day", romanization: "museun yoil", tags: ["question"] },
      { korean: "오전", english: "AM", romanization: "ojeon", tags: ["time"] },
      { korean: "오후", english: "PM, afternoon", romanization: "ohu", tags: ["time"] },
      { korean: "아침", english: "morning, breakfast", romanization: "achim", tags: ["time", "meal"] },
      { korean: "점심", english: "lunch", romanization: "jeolbjeom", tags: ["meal"] },
      { korean: "저녁", english: "evening, dinner", romanization: "jeonyeok", tags: ["time", "meal"] },
      { korean: "밤", english: "night", romanization: "bam", tags: ["time"] },
      { korean: "새벽", english: "past midnight, early morning", romanization: "saebyeok", tags: ["time"] },
      { korean: "반", english: "half (for time :30)", romanization: "ban", tags: ["time"] },
      { korean: "쯤", english: "about, approximately", romanization: "jjeum", tags: ["time", "approximation"] },
      { korean: "십오분", english: "fifteen minutes", romanization: "sipobun", tags: ["time"] },
      { korean: "이십", english: "twenty (Sino-Korean)", romanization: "isip", tags: ["number"] },
      { korean: "삼십", english: "thirty (Sino-Korean)", romanization: "samsip", tags: ["number"] },
      { korean: "고싶어요", english: "want to (do something)", romanization: "gosipeoyo", tags: ["grammar"] },
      { korean: "만들다", english: "to make", romanization: "mandeulda", tags: ["verb"] },
      { korean: "팔다", english: "to sell", romanization: "palda", tags: ["verb"] },
      { korean: "놀다", english: "to play, to hang out, to spend time for fun", romanization: "nolda", tags: ["verb"] },
      { korean: "산책하다", english: "to take a walk", romanization: "sanchaekha da", tags: ["verb"] },
      { korean: "등산하다", english: "to hike", romanization: "deungsan hada", tags: ["verb"] }
    ],

    grammar: [
      {
        pattern: "stem + ㄹ/을까요?",
        explanation: "Making a suggestion/shall we? Use ㄹ까요 after vowel, 을까요 after consonant",
        examples: ["갈까요? - Shall we go?", "보실까요? - Shall we watch?", "먹을까요? - Shall we eat?"]
      },
      {
        pattern: "Past Tense (-았어요/-었어요)",
        explanation: "Conjugate to 요 form, drop 요, add ㅆ어요",
        examples: ["하다 → 해요 → 했어요", "먹다 → 먹어요 → 먹었어요", "오다 → 와요 → 왔어요"]
      },
      {
        pattern: "noun + (이)라서",
        explanation: "Because it is/I am/she is. Use 라서 after vowel, 이라서 after consonant",
        examples: ["월요일이라서 - because it is Monday", "선생님이라서 - because I am a teacher"]
      },
      {
        pattern: "noun + 때문에",
        explanation: "Because of (noun). Can be positive or negative",
        examples: ["오빠때문에 늦었어요 - I was late because of my brother"]
      },
      {
        pattern: "Dates with Sino-Korean",
        explanation: "month = Sino + 월, date = Sino + 일",
        examples: ["팔월 이십일일 - August 21st", "사월 이십삼일 - April 23rd"]
      },
      {
        pattern: "Time particles: 에 vs 에서",
        explanation: "에 = go, come, be at place. 에서 = action at that place",
        examples: ["극장에 가요 - go to theater", "극장에서 영화를 봐요 - watch movie at theater"]
      },
      {
        pattern: "stem + 고 싶어요",
        explanation: "Want to do something",
        examples: ["놀고 싶어요 - want to play", "한국에 가고 싶어요 - want to go to Korea"]
      }
    ]
  };

  if (!window.KOREAN_UNITS) window.KOREAN_UNITS = [];
  window.KOREAN_UNITS.push(unit);
})();
