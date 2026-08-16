// ============================================================
//  Active Korean 1 — Unit 3: Restaurant (식당)
//  File: data/ak_food_restaurants.js
//
//  AK1 Textbook Chapter 3 (3과), pages 50–61
//
//  Topics:
//    - Ordering food at a restaurant
//    - Native Korean numbers + counting units (병, 개, 잔)
//    - V-(으)세요 (polite requests)
//    - N 주세요 (please give me N)
//    - N하고 N (and)
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
    id:    "ak2_u3",
    book:  "Active Korean 1",
    unit:  3,
    title: "Restaurant (식당)",

    vocabulary: [

      // ── Textbook Vocabulary (p.51) ────────────────────────────

      // Verbs
      { korean: "주다",       english: "to give",                                   romanization: "juda",       example: "커피 주세요.",            tags: ["verb"] },
      { korean: "가다",       english: "to go",                                     romanization: "gada",       example: "식당에 가요.",            tags: ["verb"] },
      { korean: "읽다",       english: "to read",                                   romanization: "ikda",       example: "메뉴를 읽어요.",          tags: ["verb"] },
      { korean: "오다",       english: "to come",                                   romanization: "oda",        example: "이리 오세요.",            tags: ["verb"] },
      { korean: "앉다",       english: "to sit (down)",                             romanization: "anda",       example: "앉으세요.",               tags: ["verb"] },
      { korean: "쉬다",       english: "to rest; to take a break",                  romanization: "swida",      example: "잠깐 쉬세요.",            tags: ["verb"] },
      { korean: "쓰다",       english: "to write",                                  romanization: "sseuda",     example: "이름을 쓰세요.",          tags: ["verb"] },

      // Food (textbook p.51)
      { korean: "햄버거",     english: "hamburger",                                 romanization: "haembeogeo", example: "햄버거 두 개 주세요.",    tags: ["food"] },

      // Drinks (textbook p.51)
      { korean: "홍차",       english: "black tea",                                 romanization: "hongcha",    example: "홍차 한 잔 주세요.",      tags: ["beverage"] },

      // Numbers — Native Korean (textbook p.51)
      { korean: "하나",       english: "one (native Korean)",                       romanization: "hana",       example: "하나 주세요.",            tags: ["number"] },
      { korean: "둘",         english: "two (native Korean)",                       romanization: "dul",        example: "둘 주세요.",              tags: ["number"] },
      { korean: "셋",         english: "three (native Korean)",                     romanization: "set",        example: "셋 주세요.",              tags: ["number"] },
      { korean: "넷",         english: "four (native Korean)",                      romanization: "net",        example: "넷 주세요.",              tags: ["number"] },
      { korean: "다섯",       english: "five (native Korean)",                      romanization: "daseot",     example: "다섯 명이에요.",          tags: ["number"] },
      { korean: "여섯",       english: "six (native Korean)",                       romanization: "yeoseot",    example: "여섯 개 주세요.",         tags: ["number"] },
      { korean: "일곱",       english: "seven (native Korean)",                     romanization: "ilgop",      example: "일곱 잔이에요.",          tags: ["number"] },
      { korean: "여덟",       english: "eight (native Korean)",                     romanization: "yeodeol",    example: "여덟 개 있어요.",         tags: ["number"] },
      { korean: "아홉",       english: "nine (native Korean)",                      romanization: "ahop",       example: "아홉 명이에요.",          tags: ["number"] },
      { korean: "열",         english: "ten (native Korean)",                       romanization: "yeol",       example: "열 개 주세요.",           tags: ["number"] },
      { korean: "한",         english: "one (short form, used before counters)",    romanization: "han",        example: "커피 한 잔 주세요.",      tags: ["number"] },
      { korean: "두",         english: "two (short form, used before counters)",    romanization: "du",         example: "맥주 두 병 주세요.",      tags: ["number"] },
      { korean: "세",         english: "three (short form, used before counters)",  romanization: "se",         example: "김밥 세 개 주세요.",      tags: ["number"] },
      { korean: "네",         english: "four (short form, used before counters)",   romanization: "ne",         example: "냉면 네 개 주세요.",      tags: ["number"] },

      // Counting units (textbook p.51)
      { korean: "병",         english: "bottle (counting unit for bottled drinks)", romanization: "byeong",     example: "맥주 두 병 주세요.",      tags: ["counter"] },
      { korean: "개",         english: "(general item counter — inanimate objects)", romanization: "gae",       example: "사과 세 개 주세요.",      tags: ["counter"] },
      { korean: "잔",         english: "cup; glass (counting unit for drinks)",     romanization: "jan",        example: "커피 한 잔 주세요.",      tags: ["counter"] },

      // Others (textbook p.51)
      { korean: "메뉴",       english: "menu",                                      romanization: "menyu",      example: "메뉴 주세요.",            tags: ["noun", "restaurant"] },
      { korean: "좀",         english: "a little; please (softens a request)",      romanization: "jom",        example: "물 좀 주세요.",           tags: ["adverb"] },
      { korean: "더",         english: "more",                                      romanization: "deo",        example: "물 좀 더 주세요.",        tags: ["adverb"] },
      { korean: "몇",         english: "how many; several",                         romanization: "myeot",      example: "몇 개 드릴까요?",         tags: ["question"] },
      { korean: "잠깐만 기다리세요", english: "Just a moment, please (polite)", romanization: "jamkkanman gidariseyo", example: "잠깐만 기다리세요.", tags: ["expression", "restaurant"] },

      // ── Main Restaurant Vocabulary ────────────────────────────
      { korean: "밥", english: "rice (cooked), meal", romanization: "bap", tags: ["food"] },
      { korean: "반찬", english: "side dishes", romanization: "banchan", tags: ["food"] },
      { korean: "생선", english: "fish (food)", romanization: "saengseon", tags: ["food"] },
      { korean: "물고기", english: "fish (animal)", romanization: "mulgogi", tags: ["animal"] },
      { korean: "고기", english: "meat", romanization: "gogi", tags: ["food"] },
      { korean: "돼지고기", english: "pork", romanization: "dwaeji gogi", tags: ["food"] },
      { korean: "돼지", english: "pig", romanization: "dwaeji", tags: ["animal"] },
      { korean: "소고기", english: "beef", romanization: "so gogi", tags: ["food"] },
      { korean: "쇠고기", english: "beef", romanization: "soe gogi", tags: ["food"] },
      { korean: "소", english: "cow", romanization: "so", tags: ["animal"] },
      { korean: "닭고기", english: "chicken", romanization: "dak gogi", tags: ["food"] },
      { korean: "닭", english: "chicken (animal)", romanization: "dak", tags: ["animal"] },
      { korean: "치킨", english: "chicken (fried chicken)", romanization: "chikin", tags: ["food"] },
      { korean: "된장찌개", english: "soybean paste stew", romanization: "doenjangjjigae", tags: ["food"] },
      { korean: "된장", english: "soybean paste", romanization: "doenjang", tags: ["food"] },
      { korean: "찌개", english: "stew", romanization: "jjigae", tags: ["food"] },
      { korean: "국", english: "soup, broth", romanization: "guk", tags: ["food"] },
      { korean: "간장", english: "soy sauce", romanization: "ganjang", tags: ["seasoning"] },
      { korean: "고추장", english: "red pepper paste", romanization: "gochujang", tags: ["seasoning"] },
      { korean: "소금", english: "salt", romanization: "sogeum", tags: ["seasoning"] },
      { korean: "소금 좀 더 주세요", english: "Please give me a little more salt", romanization: "sogeum jom deo juseyo", tags: ["phrase"] },
      { korean: "음식", english: "food", romanization: "eumshik", tags: ["food"] },
      { korean: "한국 음식", english: "Korean food", romanization: "hanguk eumshik", tags: ["food"] },
      { korean: "한식", english: "Korean food", romanization: "hansik", tags: ["food"] },
      { korean: "일본 음식", english: "Japanese food", romanization: "ilbon eumshik", tags: ["food"] },
      { korean: "일식", english: "Japanese food", romanization: "ilshik", tags: ["food"] },
      { korean: "중국 음식", english: "Chinese food", romanization: "jungguk eumshik", tags: ["food"] },
      { korean: "중식", english: "Chinese food", romanization: "jungsik", tags: ["food"] },
      { korean: "양식", english: "Western food", romanization: "yangsik", tags: ["food"] },
      { korean: "해물", english: "seafood", romanization: "haemul", tags: ["food"] },
      { korean: "라면", english: "ramen", romanization: "ramyeon", tags: ["food"] },
      { korean: "냉면", english: "cold noodles", romanization: "naeng-myeon", tags: ["food"] },
      { korean: "비빔밥", english: "mixed rice with vegetables", romanization: "bibimbap", tags: ["food"] },
      { korean: "김밥", english: "kimbap (seaweed rice roll)", romanization: "gimbap", tags: ["food"] },
      { korean: "불고기", english: "bulgogi (marinated grilled meat)", romanization: "bulgogi", tags: ["food"] },
      { korean: "소파", english: "sofa", romanization: "sofa", tags: ["furniture"] },
      { korean: "침대", english: "bed", romanization: "chimdae", tags: ["furniture"] },
      { korean: "옷장", english: "closet", romanization: "ot jang", tags: ["furniture"] },
      { korean: "책장", english: "bookcase", romanization: "chaek jang", tags: ["furniture"] },
      { korean: "책꽂이", english: "bookshelf", romanization: "chaekkkoji", tags: ["furniture"] },
      { korean: "책상", english: "desk, table", romanization: "chaeksang", tags: ["furniture"] },
      { korean: "의자", english: "chair", romanization: "uija", tags: ["furniture"] },
      { korean: "냉장고", english: "refrigerator", romanization: "naengjanggo", tags: ["appliance"] },
      { korean: "요리하다", english: "to cook", romanization: "yorihada", tags: ["verb"] },
      { korean: "요리사", english: "chef, cook", romanization: "yorisa", tags: ["occupation"] },
      { korean: "뭐 드릴까요?", english: "What would you like? (What can I get you?)", romanization: "mwo deulilkkayo", tags: ["phrase", "restaurant"] },
      { korean: "어서 오세요", english: "Welcome, Come on in", romanization: "eoseo oseyo", tags: ["greeting"] },

      // ── Drinks & Common Foods ────────────────────────────────
      { korean: "커피", english: "coffee", romanization: "keopi", example: "커피 한 잔 주세요.", tags: ["beverage"] },
      { korean: "차", english: "tea", romanization: "cha", example: "따뜻한 차를 마셔요.", tags: ["beverage"] },
      { korean: "녹차", english: "green tea", romanization: "nokcha", example: "녹차가 건강에 좋아요.", tags: ["beverage"] },
      { korean: "맥주", english: "beer", romanization: "maekju", example: "맥주 두 병 주세요.", tags: ["beverage", "alcohol"] },
      { korean: "우유", english: "milk", romanization: "uyu", example: "우유를 마셔요.", tags: ["beverage"] },
      { korean: "물", english: "water", romanization: "mul", example: "물 한 잔 주세요.", tags: ["beverage"] },
      { korean: "콜라", english: "cola", romanization: "kolla", example: "콜라를 마셔요.", tags: ["beverage"] },
      { korean: "주스", english: "juice", romanization: "juseu", example: "오렌지 주스를 마셔요.", tags: ["beverage"] },

      // ── Fruits ──────────────────────────────────────────────
      { korean: "과일", english: "fruit", romanization: "gwail", tags: ["food", "produce"] },
      { korean: "사과", english: "apple", romanization: "sagwa", example: "사과 두 개 주세요.", tags: ["food", "fruit"] },
      { korean: "오렌지", english: "orange", romanization: "orenji", example: "오렌지를 먹어요.", tags: ["food", "fruit"] },
      { korean: "포도", english: "grapes", romanization: "podo", example: "포도가 달아요.", tags: ["food", "fruit"] },
      { korean: "바나나", english: "banana", romanization: "banana", example: "바나나를 좋아해요.", tags: ["food", "fruit"] },

      // ── Bread & Western food ─────────────────────────────────
      { korean: "빵", english: "bread", romanization: "ppang", example: "빵을 먹어요.", tags: ["food"] },
      { korean: "파스타", english: "pasta", romanization: "peusta", example: "파스타를 먹어요.", tags: ["food"] },
      { korean: "피자", english: "pizza", romanization: "pija", example: "피자를 주문해요.", tags: ["food"] },
      { korean: "샌드위치", english: "sandwich", romanization: "saendeuwich", example: "샌드위치를 사요.", tags: ["food"] },
      { korean: "김치", english: "kimchi (fermented vegetables)", romanization: "gimchi", example: "김치가 매워요.", tags: ["food", "korean"] },
      { korean: "포도주", english: "wine (lit. grape wine)", romanization: "podoju", example: "포도주를 마셔요.", tags: ["beverage", "alcohol"] },
      { korean: "와인", english: "wine", romanization: "wain", example: "와인 한 잔 마셔요.", tags: ["beverage", "alcohol"] },
      { korean: "야채", english: "vegetable", romanization: "yachae", tags: ["food", "produce"] },
      { korean: "채소", english: "vegetable (more formal)", romanization: "chaeso", tags: ["food", "produce"] },

      // ── Utensils & Dishes ────────────────────────────────────
      { korean: "컵", english: "cup", romanization: "keop", example: "컵을 주세요.", tags: ["noun", "utensil"] },
      { korean: "접시", english: "plate, dish", romanization: "jeopsi", example: "접시에 담아 주세요.", tags: ["noun", "utensil"] },
      { korean: "숟가락", english: "spoon", romanization: "sutgarak", example: "숟가락으로 밥을 먹어요.", tags: ["noun", "utensil"] },
      { korean: "젓가락", english: "chopsticks", romanization: "jeotgarak", example: "젓가락을 써요.", tags: ["noun", "utensil"] },

      // ── Dining Phrases ───────────────────────────────────────
      { korean: "여기요", english: "Excuse me! (to get a server's attention)", romanization: "yeogiyo", example: "여기요! 물 주세요.", tags: ["expression", "restaurant"] },
      { korean: "잠깐만요", english: "just a moment, one second please", romanization: "jamkkanmanyo", example: "잠깐만요!", tags: ["expression"] },
      { korean: "기다리다", english: "to wait", romanization: "gidarida", example: "조금만 기다려 주세요.", tags: ["verb"] },
      { korean: "여기 있어요", english: "here it is, here you go", romanization: "yeogi isseoyo", example: "주문하신 거 여기 있어요.", tags: ["expression"] },
      { korean: "맛", english: "taste, flavor", romanization: "mat", example: "맛이 어때요?", tags: ["noun"] },
      { korean: "맛있게 드세요", english: "enjoy your meal (honorific)", romanization: "masitge deuseyo", example: "맛있게 드세요!", tags: ["expression", "honorific"] },
      { korean: "맵다", english: "to be spicy (ㅂ irregular: 매워요)", romanization: "maepda", example: "김치가 매워요.", tags: ["adjective", "food"] },
      { korean: "달다", english: "to be sweet (ㄹ irregular: 달아요)", romanization: "dalda", example: "이 케이크가 달아요.", tags: ["adjective", "food"] },
      { korean: "짜다", english: "to be salty", romanization: "jjada", example: "국이 짜요.", tags: ["adjective", "food"] },

      // ── Workbook Unit 3 New Words ──────────────────────────────
      { korean: "공부하다", english: "to study", romanization: "gongbuhada", example: "한국어를 공부해요.", tags: ["verb"] },
      { korean: "일하다", english: "to work", romanization: "ilhada", example: "회사에서 일해요.", tags: ["verb"] },
      { korean: "보다", english: "to see; to watch; to look at", romanization: "boda", example: "영화를 봐요.", tags: ["verb"] },
      { korean: "양고기", english: "mutton; lamb (meat)", romanization: "yanggogi", example: "양고기를 좋아해요.", tags: ["food", "meat"] }
    ],

    grammar: [
      {
        pattern: "V-(으)세요",
        explanation: "Polite request or suggestion — attach to verb stem. Vowel stem + 세요; consonant stem + 으세요. Also used to make polite statements about what someone (honorific subject) does.",
        examples: [
          "가다 → 가세요 — Please go / Go (politely)",
          "앉다 → 앉으세요 — Please sit down",
          "읽다 → 읽으세요 — Please read",
          "오다 → 오세요 — Please come"
        ]
      },
      {
        pattern: "N 주세요",
        explanation: "Please give me [N] — the simplest way to order at a restaurant. The noun takes 을/를 (optional in spoken Korean). The politeness comes from 주세요 (주다 + 세요).",
        examples: [
          "불고기 주세요. — Please give me bulgogi.",
          "커피 두 잔 주세요. — Please give me two cups of coffee.",
          "냉면하고 콜라 주세요. — Naengmyeon and cola, please."
        ]
      },
      {
        pattern: "하나, 둘, 셋, 넷... (Native Korean numbers)",
        explanation: "Native Korean numbers (1–10) are used for counting people and general items. They pair with native counters like 개, 잔, 병. Note: before a counter word, 하나→한, 둘→두, 셋→세, 넷→네.",
        examples: [
          "불고기 하나 주세요. — One bulgogi, please.",
          "커피 한 잔 주세요. — One cup of coffee, please. (한 = 하나 before counter)",
          "맥주 두 병 주세요. — Two bottles of beer, please.",
          "냉면 세 그릇 주세요. — Three bowls of naengmyeon, please."
        ]
      },
      {
        pattern: "병 / 개 / 잔 (Counting units)",
        explanation: "Korean uses specific counters that follow the number: 병 for bottles, 잔 for cups/glasses, 개 for general inanimate items (things you can count). With native numbers, the counter follows directly.",
        examples: [
          "맥주 한 병 주세요. — One bottle of beer, please.",
          "오렌지 두 개 주세요. — Two oranges, please.",
          "녹차 세 잔 주세요. — Three cups of green tea, please."
        ]
      },
      {
        pattern: "N하고 N'",
        explanation: "'And' connecting two nouns — 하고 links nouns together in a list. More casual than 과/와. Often used when ordering at a restaurant.",
        examples: [
          "불고기하고 맥주 주세요. — Bulgogi and beer, please.",
          "콜라 한 병하고 햄버거 두 개 주세요. — One cola and two hamburgers, please.",
          "커피하고 녹차 있어요? — Do you have coffee and green tea?"
        ]
      }
    ]
  };

  if (!window.KOREAN_UNITS) window.KOREAN_UNITS = [];
  window.KOREAN_UNITS.push(unit);
})();
