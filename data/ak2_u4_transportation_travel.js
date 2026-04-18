// ============================================================
//  Active Korean 2 — Unit 4: Transportation & Travel
//  File: data/ak2_u4_transportation_travel.js
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
    id:    "ak2_u4",
    book:  "Active Korean 2",
    unit:  4,
    title: "Transportation & Travel",

    vocabulary: [
      { korean: "타다", english: "to ride, to take (transportation)", romanization: "tada", tags: ["verb", "transportation"] },
      { korean: "을/를 타다", english: "to ride/take + transportation", romanization: "eul/reul tada", tags: ["verb", "transportation"] },
      { korean: "지하철", english: "subway", romanization: "jihacheol", tags: ["transportation"] },
      { korean: "버스", english: "bus", romanization: "beoseu", tags: ["transportation"] },
      { korean: "기차", english: "train", romanization: "gicha", tags: ["transportation"] },
      { korean: "비행기", english: "airplane", romanization: "bihaenggi", tags: ["transportation"] },
      { korean: "배", english: "boat, ship; stomach; Korean pears", romanization: "bae", tags: ["transportation", "food"] },
      { korean: "배가 고프다", english: "to be hungry", romanization: "baega goproda", tags: ["phrase"] },
      { korean: "택시", english: "taxi", romanization: "taeksi", tags: ["transportation"] },
      { korean: "차", english: "car", romanization: "cha", tags: ["transportation"] },
      { korean: "자전거", english: "bicycle", romanization: "jajeongeeo", tags: ["transportation"] },
      { korean: "자전거를 타다", english: "to ride a bike", romanization: "jajeongeoreul tada", tags: ["phrase"] },
      { korean: "내리다", english: "to get off (transportation); to lower/come down", romanization: "naerida", tags: ["verb", "transportation"] },
      { korean: "역", english: "station", romanization: "yeok", tags: ["place", "transportation"] },
      { korean: "어디", english: "where", romanization: "eodi", tags: ["question"] },
      { korean: "어떻게", english: "how", romanization: "eotteohke", tags: ["question"] },
      { korean: "갈아타다", english: "to transfer", romanization: "galaatada", tags: ["verb", "transportation"] },
      { korean: "갈아입다", english: "to change clothes", romanization: "galaaipda", tags: ["verb"] },
      { korean: "갈아신다", english: "to change shoes/socks", romanization: "galasinda", tags: ["verb"] },
      { korean: "신다", english: "to wear shoes/socks", romanization: "sinda", tags: ["verb"] },
      { korean: "호선", english: "subway line", romanization: "hoseon", tags: ["transportation"] },
      { korean: "고속터미널", english: "express terminal", romanization: "gosok terminal", tags: ["place", "transportation"] },
      { korean: "고속", english: "high speed", romanization: "gosok", tags: ["noun"] },
      { korean: "고속도로", english: "highway", romanization: "gosokmdo ro", tags: ["place"] },
      { korean: "타고 가다", english: "to go by + transportation", romanization: "tago gada", tags: ["verb", "phrase"] },
      { korean: "타고 오다", english: "to come by + transportation", romanization: "tago oda", tags: ["verb", "phrase"] },
      { korean: "걷다", english: "to walk", romanization: "geotda", tags: ["verb"] },
      { korean: "걸어(서) 가다", english: "to walk somewhere, to go by foot", romanization: "georeoseo gada", tags: ["verb", "phrase"] },
      { korean: "걸어(서) 오다", english: "to come by foot", romanization: "georeoseo oda", tags: ["verb", "phrase"] },
      { korean: "걸어요", english: "walk (ㄷ irregular: drop ㄷ, use ㄹ)", romanization: "georeoyeo", tags: ["verb"] },
      { korean: "운전하다", english: "to drive", romanization: "unjeohada", tags: ["verb"] },
      { korean: "운전해서 가다", english: "to go by driving", romanization: "unjeohhaeseo gada", tags: ["verb", "phrase"] },
      { korean: "차로 가다", english: "to go by car", romanization: "charo gada", tags: ["verb", "phrase"] },
      { korean: "차로 오다", english: "to come by car", romanization: "charo oda", tags: ["verb", "phrase"] },
      { korean: "공항", english: "airport", romanization: "gonghang", tags: ["place"] },
      { korean: "걸리다", english: "to take (an amount of time)", romanization: "geollida", tags: ["verb"] },
      { korean: "걸려요", english: "it takes (time)", romanization: "geollyeyo", tags: ["verb"] },
      { korean: "얼마나", english: "how long", romanization: "eolmana", tags: ["question"] },
      { korean: "얼마나 걸려요?", english: "How long does it take?", romanization: "eolmana geollyeyo", tags: ["question"] },
      { korean: "까지", english: "to, until", romanization: "kkaji", tags: ["particle"] },
      { korean: "___ 에서 ___ 까지", english: "from (place) to (place)", romanization: "eseo kkaji", tags: ["phrase"] },
      { korean: "분", english: "minutes", romanization: "bun", tags: ["time"] },
      { korean: "시간", english: "hour(s)", romanization: "sigan", tags: ["time"] }
    ],

    grammar: [
      {
        pattern: "-아/어서",
        explanation: "And (connecting actions); because (reason for action)",
        examples: []
      },
      {
        pattern: "-고",
        explanation: "And (connecting verbs/sentences)",
        examples: []
      }
    ]
  };

  if (!window.KOREAN_UNITS) window.KOREAN_UNITS = [];
  window.KOREAN_UNITS.push(unit);
})();
