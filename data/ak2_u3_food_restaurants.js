// ============================================================
//  Active Korean 2 — Unit 3: Food & Restaurants
//  File: data/ak2_u3_food_restaurants.js
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
    book:  "Active Korean 2",
    unit:  3,
    title: "Food & Restaurants",

    vocabulary: [
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
      { korean: "요리", english: "dish, cooking", romanization: "yori", tags: ["food"] },
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
      { korean: "짜다", english: "to be salty", romanization: "jjada", example: "국이 짜요.", tags: ["adjective", "food"] }
    ],

    grammar: [
      {
        pattern: "-을/를 주세요",
        explanation: "Please give me ___ (ordering food/items)",
        examples: ["커피를 주세요 - Please give me coffee"]
      }
    ]
  };

  if (!window.KOREAN_UNITS) window.KOREAN_UNITS = [];
  window.KOREAN_UNITS.push(unit);
})();
