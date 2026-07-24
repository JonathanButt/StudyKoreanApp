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
      { korean: "모레", english: "day after tomorrow", romanization: "more", tags: ["time"] },
      { korean: "내일 모레", english: "day after tomorrow", romanization: "naeil more", tags: ["time"] },
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
      { korean: "점심", english: "lunch", romanization: "jeomsim", tags: ["meal"] },
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
      { korean: "산책하다", english: "to take a walk", romanization: "sanchaek hada", tags: ["verb"] },
      { korean: "등산하다", english: "to hike", romanization: "deungsan hada", tags: ["verb"] },
      { korean: "일어나다", english: "to wake up, to get up", romanization: "ireonada", example: "몇 시에 일어나요?", tags: ["verb", "daily-routine"] },
      { korean: "세수하다", english: "to wash one's face", romanization: "sesuhada", example: "아침에 세수해요.", tags: ["verb", "daily-routine"] },
      { korean: "이를 닦다", english: "to brush one's teeth", romanization: "ireul dakda", example: "이를 닦았어요.", tags: ["verb", "daily-routine"] },
      { korean: "이", english: "tooth (pure Korean)", romanization: "i", example: "이가 아파요.", tags: ["noun", "body"] },
      { korean: "닦다", english: "to wipe, to clean, to brush", romanization: "dakda", example: "이를 닦아요.", tags: ["verb"] },
      { korean: "샤워하다", english: "to take a shower", romanization: "syawohada", example: "저녁에 샤워해요.", tags: ["verb", "daily-routine"] },
      { korean: "설거지하다", english: "to wash the dishes", romanization: "seolgeojihada", example: "밥을 먹고 설거지해요.", tags: ["verb", "household"] },
      { korean: "자다", english: "to sleep", romanization: "jada", example: "몇 시에 자요?", tags: ["verb", "daily-routine"] },
      { korean: "일하다", english: "to work", romanization: "ilhada", example: "회사에서 일해요.", tags: ["verb"] },
      { korean: "쇼핑하다", english: "to go shopping", romanization: "syopinghada", example: "주말에 쇼핑했어요.", tags: ["verb"] },
      { korean: "시험을 보다", english: "to take a test/exam", romanization: "siheomeul boda", example: "내일 시험을 봐요.", tags: ["verb", "phrase"] },
      { korean: "시", english: "o'clock (hour counter, pure Korean numbers)", romanization: "si", example: "열 시에 만나요.", tags: ["counter", "time"] },
      { korean: "유월", english: "June (irregular pronunciation of 6월)", romanization: "yuwol", example: "유월에 여행 갔어요.", tags: ["time"] },
      { korean: "시월", english: "October (irregular pronunciation of 10월)", romanization: "siwol", example: "시월에 날씨가 좋아요.", tags: ["time"] },
      { korean: "그제", english: "day before yesterday", romanization: "geuje", example: "그제 뭐 했어요?", tags: ["time"] },
      { korean: "그저께", english: "day before yesterday (alternate form)", romanization: "geujeokke", example: "그저께 친구를 만났어요.", tags: ["time"] },
      { korean: "달리다", english: "to run (steadily)", romanization: "dallida", example: "매일 달려요.", tags: ["verb", "exercise"] },
      { korean: "뛰다", english: "to run, to jump", romanization: "ttwida", example: "빨리 뛰어요!", tags: ["verb", "exercise"] },
      { korean: "면접을 보다", english: "to have a job interview", romanization: "myeonjeobeul boda", example: "어제 면접을 봤어요.", tags: ["verb", "phrase"] },
      { korean: "숙제", english: "homework", romanization: "sukje", example: "숙제를 했어요.", tags: ["noun", "school"] },
      { korean: "하루", english: "one day (pure Korean)", romanization: "haru", example: "하루 종일 공부했어요.", tags: ["time"] },
      { korean: "하루 종일", english: "all day long", romanization: "haru jongil", example: "하루 종일 집에 있었어요.", tags: ["time"] },
      { korean: "작년", english: "last year", romanization: "jangnyeon", example: "작년에 한국에 갔어요.", tags: ["time"] },
      { korean: "동안", english: "for (a duration); during", romanization: "dongan", example: "두 시간 동안 공부했어요.", tags: ["particle", "time"] }
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
      },
      {
        pattern: "stem + -(으)ㄹ 수 있다/없다",
        explanation: "Can / cannot (ability). Vowel stem → ㄹ 수 있다. Consonant stem → 을 수 있다.",
        examples: ["수영할 수 있어요 - I can swim", "한국어를 할 수 있어요 - I can speak Korean", "운전할 수 없어요 - I can't drive"]
      },
      {
        pattern: "-지만",
        explanation: "But / however — contrasts two clauses. Attach 지만 directly to the verb/adjective stem.",
        examples: ["비싸지만 사고 싶어요 - It's expensive but I want to buy it", "한국어가 어렵지만 재미있어요 - Korean is hard but fun", "오늘 많이 걸었지만 안 피곤해요 - I walked a lot today but I'm not tired"]
      }
    ]
  };

  if (!window.KOREAN_UNITS) window.KOREAN_UNITS = [];
  window.KOREAN_UNITS.push(unit);
})();
