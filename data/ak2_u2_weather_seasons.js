// ============================================================
//  Active Korean 2 — Unit 2: Weather & Seasons
//  File: data/ak2_u2_weather_seasons.js
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
    id:    "ak2_u2",
    book:  "Active Korean 2",
    unit:  2,
    title: "Weather & Seasons",

    vocabulary: [
      { korean: "날씨", english: "weather", romanization: "nalsssi", tags: ["noun", "weather"] },
      { korean: "날씨가 어때요?", english: "How's the weather?", romanization: "nalssiga eottaeyo", tags: ["question", "weather"] },
      { korean: "비", english: "rain", romanization: "bi", tags: ["weather"] },
      { korean: "눈", english: "snow", romanization: "nun", tags: ["weather"] },
      { korean: "비가 오다", english: "to rain", romanization: "biga oda", tags: ["verb", "weather"] },
      { korean: "비가 내리다", english: "to rain (fall)", romanization: "biga naerida", tags: ["verb", "weather"] },
      { korean: "오다", english: "to come", romanization: "oda", tags: ["verb"] },
      { korean: "내리다", english: "to fall, to fall down", romanization: "naerida", tags: ["verb"] },
      { korean: "넘어지다", english: "to fall down (to trip and fall)", romanization: "neomeojida", tags: ["verb"] },
      { korean: "따뜻하다", english: "to be warm (comforting)", romanization: "ttatteukhada", tags: ["adjective", "weather"] },
      { korean: "춥다", english: "to be cold (weather)", romanization: "chubda", tags: ["adjective", "weather"] },
      { korean: "덥다", english: "to be hot (weather)", romanization: "deobda", tags: ["adjective", "weather"] },
      { korean: "시원하다", english: "to be cool (refreshing)", romanization: "siwonhada", tags: ["adjective", "weather"] },
      { korean: "색", english: "color", romanization: "saek", tags: ["noun"] },
      { korean: "색깔", english: "color", romanization: "saekkal", tags: ["noun"] },
      { korean: "빨간색", english: "red", romanization: "ppalgan saek", tags: ["color"] },
      { korean: "주황색", english: "orange", romanization: "juhwang saek", tags: ["color"] },
      { korean: "노란색", english: "yellow", romanization: "noran saek", tags: ["color"] },
      { korean: "초록색", english: "green", romanization: "chorok saek", tags: ["color"] },
      { korean: "녹색", english: "green", romanization: "noksaek", tags: ["color"] },
      { korean: "파란색", english: "blue", romanization: "paran saek", tags: ["color"] },
      { korean: "보라색", english: "purple", romanization: "bora saek", tags: ["color"] },
      { korean: "밤색", english: "brown", romanization: "bamsaek", tags: ["color"] },
      { korean: "갈색", english: "brown", romanization: "galsaek", tags: ["color"] },
      { korean: "하얀색", english: "white", romanization: "hayansaek", tags: ["color"] },
      { korean: "흰색", english: "white", romanization: "hwinsaek", tags: ["color"] },
      { korean: "검정색", english: "black", romanization: "geomjeongsaek", tags: ["color"] },
      { korean: "검은색", english: "black", romanization: "geomeunsaek", tags: ["color"] },
      { korean: "까만색", english: "black (jet black sometimes)", romanization: "kkamansaek", tags: ["color"] },
      { korean: "분홍색", english: "pink", romanization: "bunhongsaek", tags: ["color"] },
      { korean: "핑크색", english: "pink (not for naturally pink things)", romanization: "pingkeu saek", tags: ["color"] },
      { korean: "빛", english: "light", romanization: "bit", tags: ["noun"] },
      { korean: "연", english: "light (not dark in color)", romanization: "yeon", tags: ["adjective"] },
      { korean: "연한", english: "light (in color)", romanization: "yeonhan", tags: ["adjective"] },
      { korean: "짙은", english: "dark (in color)", romanization: "jjitjeun", tags: ["adjective"] },
      { korean: "무슨 색이에요?", english: "What color is it?", romanization: "museun saegieyo", tags: ["question"] },
      { korean: "무슨 색을 좋아해요?", english: "What color do you like?", romanization: "museun saereul johaahaeyo", tags: ["question"] }
    ],

    grammar: [
      {
        pattern: "-다가",
        explanation: "In the middle of this action/interrupting an action",
        examples: []
      },
      {
        pattern: "-지만",
        explanation: "But (to connect two sentences together)",
        examples: ["나는 커피를 좋아하지만 존씨는 안 좋아해요 - I like coffee but Jon doesn't"]
      },
      {
        pattern: "-(으)면",
        explanation: "If, when (conditional)",
        examples: []
      }
    ]
  };

  if (!window.KOREAN_UNITS) window.KOREAN_UNITS = [];
  window.KOREAN_UNITS.push(unit);
})();
