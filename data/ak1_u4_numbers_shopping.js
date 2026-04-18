// ============================================================
//  Active Korean 1 — Unit 4: Numbers & Shopping
//  File: data/ak1_u4_numbers_shopping.js
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
    id:    "ak1_u4",
    book:  "Active Korean 1",
    unit:  4,
    title: "Numbers & Shopping",

    vocabulary: [
      { korean: "하나", english: "one (pure Korean, not always used with counters)", romanization: "hana", tags: ["number", "pure-korean"] },
      { korean: "한", english: "one (with counters)", romanization: "han", tags: ["number", "pure-korean", "counter"] },
      { korean: "둘", english: "two (pure Korean)", romanization: "dul", tags: ["number", "pure-korean"] },
      { korean: "두", english: "two (with counters)", romanization: "du", tags: ["number", "pure-korean", "counter"] },
      { korean: "셋", english: "three (pure Korean)", romanization: "set", tags: ["number", "pure-korean"] },
      { korean: "세", english: "three (with counters)", romanization: "se", tags: ["number", "pure-korean", "counter"] },
      { korean: "넷", english: "four (pure Korean)", romanization: "net", tags: ["number", "pure-korean"] },
      { korean: "네", english: "four (with counters)", romanization: "ne", tags: ["number", "pure-korean", "counter"] },
      { korean: "다섯", english: "five", romanization: "daseot", tags: ["number", "pure-korean"] },
      { korean: "여섯", english: "six", romanization: "yeoseot", tags: ["number", "pure-korean"] },
      { korean: "일곱", english: "seven", romanization: "ilgop", tags: ["number", "pure-korean"] },
      { korean: "여덟", english: "eight", romanization: "yeodeol", tags: ["number", "pure-korean"] },
      { korean: "아홉", english: "nine", romanization: "ahop", tags: ["number", "pure-korean"] },
      { korean: "열", english: "ten", romanization: "yeol", tags: ["number", "pure-korean"] },
      { korean: "스물", english: "twenty", romanization: "seumulll", tags: ["number", "pure-korean"] },
      { korean: "스무", english: "twenty (with counters)", romanization: "sseumu", tags: ["number", "pure-korean", "counter"] },
      { korean: "서른", english: "thirty", romanization: "seoreun", tags: ["number", "pure-korean"] },
      { korean: "마흔", english: "forty", romanization: "maheun", tags: ["number", "pure-korean"] },
      { korean: "쉰", english: "fifty", romanization: "swin", tags: ["number", "pure-korean"] },
      { korean: "일", english: "one (Sino-Korean)", romanization: "il", tags: ["number", "sino-korean"] },
      { korean: "이", english: "two (Sino-Korean)", romanization: "i", tags: ["number", "sino-korean"] },
      { korean: "삼", english: "three (Sino-Korean)", romanization: "sam", tags: ["number", "sino-korean"] },
      { korean: "사", english: "four (Sino-Korean)", romanization: "sa", tags: ["number", "sino-korean"] },
      { korean: "오", english: "five (Sino-Korean)", romanization: "o", tags: ["number", "sino-korean"] },
      { korean: "육", english: "six (Sino-Korean)", romanization: "yuk", tags: ["number", "sino-korean"] },
      { korean: "칠", english: "seven (Sino-Korean)", romanization: "chil", tags: ["number", "sino-korean"] },
      { korean: "팔", english: "eight (Sino-Korean)", romanization: "pal", tags: ["number", "sino-korean"] },
      { korean: "구", english: "nine (Sino-Korean)", romanization: "gu", tags: ["number", "sino-korean"] },
      { korean: "십", english: "ten (Sino-Korean)", romanization: "sip", tags: ["number", "sino-korean"] },
      { korean: "백", english: "hundred", romanization: "baek", tags: ["number", "sino-korean"] },
      { korean: "천", english: "thousand", romanization: "cheon", tags: ["number", "sino-korean"] },
      { korean: "만", english: "ten thousand", romanization: "man", tags: ["number", "sino-korean"] },
      { korean: "백만", english: "million", romanization: "baengman", tags: ["number", "sino-korean"] },
      { korean: "원", english: "Korean won (currency)", romanization: "won", tags: ["currency"] },
      { korean: "불", english: "dollar (when giving price)", romanization: "bul", tags: ["currency"] },
      { korean: "달러", english: "dollar (currency name)", romanization: "dalleo", tags: ["currency"] },
      { korean: "개", english: "counter for objects", romanization: "gae", tags: ["counter"] },
      { korean: "명", english: "counter for people", romanization: "myeong", tags: ["counter"] },
      { korean: "잔", english: "counter for cups/glasses", romanization: "jan", tags: ["counter"] },
      { korean: "병", english: "counter for bottles", romanization: "byeong", tags: ["counter"] },
      { korean: "장", english: "counter for sheets/papers/photographs", romanization: "jang", tags: ["counter"] },
      { korean: "권", english: "counter for books", romanization: "gwon", tags: ["counter"] },
      { korean: "송이", english: "counter for flowers", romanization: "songyi", tags: ["counter"] },
      { korean: "마리", english: "counter for animals", romanization: "mari", tags: ["counter"] },
      { korean: "벌", english: "counter for clothing, complete outfits", romanization: "beol", tags: ["counter"] },
      { korean: "켤레", english: "counter for pairs (socks, shoes)", romanization: "kyelrae", tags: ["counter"] },
      { korean: "대", english: "counter for machines/appliances (cars, computers, TVs)", romanization: "dae", tags: ["counter"] },
      { korean: "얼마예요?", english: "How much is it?", romanization: "eolmayeyo", tags: ["question"] },
      { korean: "하나에", english: "for one", romanization: "hanae", tags: ["phrase"] },
      { korean: "너무 비싸요", english: "It's too expensive", romanization: "neomu bissayo", tags: ["phrase"] },
      { korean: "좀 깎아 주세요", english: "Please give me a discount", romanization: "jom kkakka juseyo", tags: ["phrase", "shopping"] },
      { korean: "깎다", english: "to cut (price), to discount", romanization: "kkakda", tags: ["verb"] },
      { korean: "1인분", english: "one person portion", romanization: "1infun", tags: ["food"] },
      { korean: "2인분", english: "two person portion", romanization: "2infun", tags: ["food"] }
    ],

    grammar: [
      {
        pattern: "Pure Korean Numbers vs Sino-Korean Numbers",
        explanation: "Pure Korean: for smaller numbers, age, hour. Sino-Korean: for larger numbers, minutes, phone numbers, math",
        examples: ["하나 (pure Korean) vs 일 (Sino)", "열 세 명 (pure) vs 13분 (Sino)"]
      },
      {
        pattern: "noun + counter + 주세요",
        explanation: "Used when ordering. [Quantity] [Counter] 주세요",
        examples: ["커피 한 잔 주세요 - Please give me a cup of coffee", "맥주 두 병 주세요 - Please give me two bottles of beer"]
      },
      {
        pattern: "quantity + 에 + 얼마예요?",
        explanation: "How much for [quantity]?",
        examples: ["이 사과 두 개에 얼마예요? - How much for these two apples?"]
      },
      {
        pattern: "Counters with Numbers",
        explanation: "When using counters, numbers change: 하나→한, 둘→두, 셋→세, 넷→네, 스물→스무",
        examples: ["한 개 (one item)", "두 명 (two people)", "세 잔 (three cups)"]
      }
    ]
  };

  if (!window.KOREAN_UNITS) window.KOREAN_UNITS = [];
  window.KOREAN_UNITS.push(unit);
})();
