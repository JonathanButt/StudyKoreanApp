// ============================================================
//  Active Korean 1 — Unit 7: Locations & Directions
//  File: data/ak1_u7_locations_directions.js
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
    id:    "ak1_u7",
    book:  "Active Korean 1",
    unit:  7,
    title: "Locations & Directions",

    vocabulary: [
      { korean: "위", english: "on, above", romanization: "wi", tags: ["preposition", "location"] },
      { korean: "아래", english: "under, beneath", romanization: "arae", tags: ["preposition", "location"] },
      { korean: "밑", english: "under, beneath", romanization: "mit", tags: ["preposition", "location"] },
      { korean: "앞", english: "in front of, front", romanization: "ap", tags: ["preposition", "location"] },
      { korean: "뒤", english: "behind, back", romanization: "dwi", tags: ["preposition", "location"] },
      { korean: "옆", english: "next to, beside", romanization: "yeop", tags: ["preposition", "location"] },
      { korean: "안", english: "in, inside", romanization: "an", tags: ["preposition", "location"] },
      { korean: "밖", english: "out, outside", romanization: "bak", tags: ["preposition", "location"] },
      { korean: "사이", english: "between", romanization: "sai", tags: ["preposition", "location"] },
      { korean: "근처", english: "nearby", romanization: "geuncheo", tags: ["preposition", "location"] },
      { korean: "이 근처", english: "near here", romanization: "i geuncheo", tags: ["phrase"] },
      { korean: "층", english: "floor (counter for which floor)", romanization: "cheung", tags: ["counter", "building"] },
      { korean: "몇 층", english: "what floor", romanization: "myeot cheung", tags: ["question"] },
      { korean: "왼쪽", english: "left side", romanization: "wenjjok", tags: ["direction"] },
      { korean: "오른쪽", english: "right side", romanization: "oreunjjok", tags: ["direction"] },
      { korean: "쭉", english: "straight, keep going", romanization: "jjuk", tags: ["direction"] },
      { korean: "야채", english: "vegetable", romanization: "yachae", tags: ["food"] },
      { korean: "과일", english: "fruit", romanization: "gwail", tags: ["food"] },
      { korean: "생선", english: "fish (food)", romanization: "saengseon", tags: ["food"] },
      { korean: "술", english: "alcohol", romanization: "sul", tags: ["beverage"] },
      { korean: "쌀", english: "uncooked rice", romanization: "ssal", tags: ["food"] },
      { korean: "우체국", english: "post office", romanization: "ucheguk", tags: ["place"] },
      { korean: "병원", english: "hospital", romanization: "byeongwon", tags: ["place"] },
      { korean: "은행", english: "bank", romanization: "eunhaeng", tags: ["place"] },
      { korean: "시청", english: "City Hall", romanization: "sicheong", tags: ["place"] },
      { korean: "극장", english: "theater, cinema", romanization: "geukjang", tags: ["place"] },
      { korean: "영화관", english: "movie theater", romanization: "yeonghwagwan", tags: ["place"] },
      { korean: "백화점", english: "department store", romanization: "baekhwajeom", tags: ["place", "shopping"] },
      { korean: "마트", english: "grocery store, supermarket", romanization: "mateu", tags: ["place", "shopping"] },
      { korean: "시장", english: "open market", romanization: "sijang", tags: ["place", "shopping"] },
      { korean: "책방", english: "bookstore", romanization: "chaekbang", tags: ["place"] },
      { korean: "서점", english: "bookstore", romanization: "seojeom", tags: ["place"] },
      { korean: "문구점", english: "stationery store", romanization: "mungujeom", tags: ["place"] },
      { korean: "노래방", english: "karaoke", romanization: "noraebang", tags: ["place", "entertainment"] },
      { korean: "PC방", english: "PC bang (internet cafe)", romanization: "PC bang", tags: ["place"] },
      { korean: "카페", english: "cafe", romanization: "kape", tags: ["place"] },
      { korean: "커피숍", english: "coffee shop", romanization: "keopisyop", tags: ["place"] },
      { korean: "식당", english: "restaurant", romanization: "sikdang", tags: ["place"] },
      { korean: "약국", english: "pharmacy", romanization: "yakkuk", tags: ["place"] },
      { korean: "육교", english: "overpass", romanization: "yukkyo", tags: ["place"] },
      { korean: "건너다", english: "to cross", romanization: "geonneda", tags: ["verb"] },
      { korean: "길을 건너다", english: "to cross the street", romanization: "gireul geonneda", tags: ["phrase", "verb"] },
      { korean: "횡단보도", english: "crosswalk", romanization: "hoengdanbodo", tags: ["place"] },
      { korean: "지하도", english: "underpass", romanization: "jihado", tags: ["place"] },
      { korean: "지하", english: "underground", romanization: "jiha", tags: ["place"] },
      { korean: "지하실", english: "basement (room)", romanization: "jihasil", tags: ["place"] },
      { korean: "첫 번째", english: "first", romanization: "cheot beonjjae", tags: ["ordinal"] },
      { korean: "두 번째", english: "second", romanization: "du beonjjae", tags: ["ordinal"] },
      { korean: "세 번째", english: "third", romanization: "se beonjjae", tags: ["ordinal"] },
      { korean: "사거리", english: "intersection", romanization: "sageori", tags: ["place"] },
      { korean: "건너편", english: "across, across the street", romanization: "geonneopyeon", tags: ["location"] },
      { korean: "아저씨", english: "older man", romanization: "ajeossi", tags: ["noun"] },
      { korean: "공원", english: "park", romanization: "gongwon", example: "공원에서 산책해요.", tags: ["place"] },
      { korean: "학교", english: "school", romanization: "hakgyo", example: "학교에 가요.", tags: ["place"] },
      { korean: "집", english: "house, home", romanization: "jip", example: "집에 있어요.", tags: ["place"] },
      { korean: "산", english: "mountain", romanization: "san", example: "산에 올라가요.", tags: ["place", "nature"] },
      { korean: "길", english: "road, street, way", romanization: "gil", example: "이 길로 가세요.", tags: ["noun", "place"] },
      { korean: "길을 잃었어요", english: "I'm lost!", romanization: "gireul ireosseoyo", example: "길을 잃었어요. 도와주세요!", tags: ["phrase"] },
      { korean: "영화", english: "movie, film", romanization: "yeonghwa", example: "영화를 봐요.", tags: ["noun", "entertainment"] },
      { korean: "좌회전", english: "left turn (while driving)", romanization: "jwahoejeon", example: "저기서 좌회전하세요.", tags: ["direction"] },
      { korean: "우회전", english: "right turn (while driving)", romanization: "uhoejeon", example: "다음 신호에서 우회전하세요.", tags: ["direction"] },
      { korean: "똑바로", english: "straight, directly (not crooked)", romanization: "ttokbaro", example: "똑바로 가세요.", tags: ["direction"] },
      { korean: "모르다", english: "to not know", romanization: "moreuda", example: "모르겠어요.", tags: ["verb"] },
      { korean: "약", english: "medicine", romanization: "yak", example: "약을 먹어요.", tags: ["noun"] },
      { korean: "아마도", english: "probably, perhaps", romanization: "amado", example: "아마도 거기 있을 거예요.", tags: ["adverb"] },
      { korean: "장을 보다", english: "to go grocery shopping", romanization: "jangeul boda", example: "마트에서 장을 봐요.", tags: ["phrase", "verb"] }
    ],

    grammar: [
      {
        pattern: "(으)로: to, toward",
        explanation: "Used when changing locations/giving directions. Use 로 after vowel or ㄹ, 으로 after consonant",
        examples: ["왼쪽으로 가세요 - Go left", "앞으로 가세요 - Go straight ahead", "뒤로 가세요 - Go back"]
      },
      {
        pattern: "Location + preposition + 에 있어요",
        explanation: "To say where something is. Subject + Location Preposition + 에 있어요",
        examples: ["책이 책상 위에 있어요 - The book is on the desk", "고양이가 의자 밑에 있어요 - The cat is under the chair"]
      },
      {
        pattern: "noun + 하고 + noun + 사이에",
        explanation: "Between ___ and ___",
        examples: ["한국 식당이 도서관하고 은행 사이에 있어요 - Korean restaurant is between library and bank"]
      },
      {
        pattern: "Sine Korean + 층에 있어요",
        explanation: "What floor is ___ on?",
        examples: ["삼 층에 있어요 - It's on the third floor", "식당이 몇 층에 있어요? - What floor is the restaurant on?"]
      }
    ]
  };

  if (!window.KOREAN_UNITS) window.KOREAN_UNITS = [];
  window.KOREAN_UNITS.push(unit);
})();
