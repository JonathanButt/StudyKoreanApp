// ============================================================
//  Active Korean 2 — Unit 2: Transportation & Travel
//  File: data/ak2_u2_transportation_travel.js
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
    unit:  2,
    title: "Transportation & Travel",

    vocabulary: [

      // ── Textbook Vocabulary (p.31) ────────────────────────────
      { korean: "번",              english: "number (counter for buses/lines: 몇 번 버스? which number bus?)", romanization: "beon", example: "몇 번 버스를 타야 돼요?", tags: ["counter", "transportation"] },
      { korean: "여자",            english: "woman; female",                                romanization: "yeoja",              example: "저 여자는 누구예요?",                              tags: ["noun"] },
      { korean: "남대문시장",      english: "Namdaemun Market",                             romanization: "namdaemun sijang",   example: "남대문시장에 어떻게 가요?",                        tags: ["place"] },
      { korean: "인사동",          english: "Insadong (traditional street in Seoul)",        romanization: "insadong",           example: "인사동에 가 봤어요?",                              tags: ["place"] },
      { korean: "코엑스몰",        english: "COEX Mall",                                    romanization: "koekseu mol",        example: "코엑스몰에서 쇼핑해요.",                           tags: ["place"] },
      { korean: "명동",            english: "Myeongdong (shopping district in Seoul)",       romanization: "myeongdong",         example: "명동에서 쇼핑해요.",                               tags: ["place"] },
      { korean: "예술의 전당",     english: "Seoul Arts Center",                            romanization: "yesurui jeondang",   example: "예술의 전당에서 공연을 봐요.",                     tags: ["place"] },
      { korean: "롯데월드",        english: "Lotte World (theme park in Seoul)",             romanization: "rotde woldeu",       example: "롯데월드에 가고 싶어요.",                          tags: ["place"] },

      { korean: "타다", english: "to ride, to take (transportation)", romanization: "tada", tags: ["verb", "transportation"] },
      { korean: "을/를 타다", english: "to ride/take + transportation", romanization: "eul/reul tada", tags: ["verb", "transportation"] },
      { korean: "지하철", english: "subway", romanization: "jihacheol", tags: ["transportation"] },
      { korean: "버스", english: "bus", romanization: "beoseu", tags: ["transportation"] },
      { korean: "기차", english: "train", romanization: "gicha", tags: ["transportation"] },
      { korean: "비행기", english: "airplane", romanization: "bihaenggi", tags: ["transportation"] },
      { korean: "배", english: "boat, ship; stomach; Korean pears", romanization: "bae", tags: ["transportation", "food"] },
      { korean: "배가 고프다", english: "to be hungry", romanization: "baega gopeuda", tags: ["phrase"] },
      { korean: "택시", english: "taxi", romanization: "taeksi", tags: ["transportation"] },
      { korean: "차", english: "car", romanization: "cha", tags: ["transportation"] },
      { korean: "자전거", english: "bicycle", romanization: "jajeongeo", tags: ["transportation"] },
      { korean: "자전거를 타다", english: "to ride a bike", romanization: "jajeongeoreul tada", tags: ["phrase"] },
      { korean: "내리다", english: "to get off (transportation); to lower/come down", romanization: "naerida", tags: ["verb", "transportation"] },
      { korean: "역", english: "station", romanization: "yeok", tags: ["place", "transportation"] },
      { korean: "어디", english: "where", romanization: "eodi", tags: ["question"] },
      { korean: "어떻게", english: "how", romanization: "eotteoke", tags: ["question"] },
      { korean: "갈아타다", english: "to transfer", romanization: "garatada", tags: ["verb", "transportation"] },
      { korean: "갈아입다", english: "to change clothes", romanization: "garaipda", tags: ["verb"] },
      { korean: "갈아신다", english: "to change shoes/socks", romanization: "garasinda", tags: ["verb"] },
      { korean: "신다", english: "to wear shoes/socks", romanization: "sinda", tags: ["verb"] },
      { korean: "호선", english: "subway line", romanization: "hoseon", tags: ["transportation"] },
      { korean: "고속터미널", english: "express terminal", romanization: "gosok terminal", tags: ["place", "transportation"] },
      { korean: "고속", english: "high speed", romanization: "gosok", tags: ["noun"] },
      { korean: "고속도로", english: "highway", romanization: "gosokdoro", tags: ["place"] },
      { korean: "타고 가다", english: "to go by + transportation", romanization: "tago gada", tags: ["verb", "phrase"] },
      { korean: "타고 오다", english: "to come by + transportation", romanization: "tago oda", tags: ["verb", "phrase"] },
      { korean: "걷다", english: "to walk", romanization: "geotda", tags: ["verb"] },
      { korean: "걸어(서) 가다", english: "to walk somewhere, to go by foot", romanization: "georeoseo gada", tags: ["verb", "phrase"] },
      { korean: "걸어(서) 오다", english: "to come by foot", romanization: "georeoseo oda", tags: ["verb", "phrase"] },
      { korean: "걸어요", english: "walk (ㄷ irregular: drop ㄷ, use ㄹ)", romanization: "georeoyo", tags: ["verb"] },
      { korean: "운전하다", english: "to drive", romanization: "unjeonhada", tags: ["verb"] },
      { korean: "운전해서 가다", english: "to go by driving", romanization: "unjeonhaeseo gada", tags: ["verb", "phrase"] },
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
      { korean: "시간", english: "hour(s)", romanization: "sigan", tags: ["time"] },

      // ── New vocabulary from class notes ──────────────────────
      { korean: "듣다", english: "to listen, to hear (ㄷ irregular: 들어요)", romanization: "deutda", example: "음악을 들어요.", tags: ["verb"] },
      { korean: "들어요", english: "listens, hears (ㄷ irregular form of 듣다)", romanization: "deuroyo", example: "한국어를 들어요.", tags: ["verb"] },
      { korean: "고장나다", english: "to break down, to be broken (machine/vehicle)", romanization: "gojangnada", example: "버스가 고장났어요.", tags: ["verb"] },
      { korean: "고치다", english: "to fix, to repair", romanization: "gochida", example: "차를 고쳤어요.", tags: ["verb"] },
      { korean: "볼일을 보다", english: "to take care of errands/business", romanization: "borireul boda", example: "볼일을 봐야 돼요.", tags: ["verb", "phrase"] },
      { korean: "들어가다", english: "to go in, to enter", romanization: "deureogada", example: "안에 들어가요.", tags: ["verb"] },
      { korean: "들어오다", english: "to come in, to enter (toward speaker)", romanization: "deureooda", example: "들어오세요!", tags: ["verb"] },
      { korean: "세우다", english: "to stop (a vehicle); to pull over", romanization: "seuda", example: "여기서 세워 주세요.", tags: ["verb", "transportation"] },
      { korean: "세워 주세요", english: "please stop here (asking driver to pull over)", romanization: "seweo juseyo", example: "저기서 세워 주세요.", tags: ["phrase", "transportation"] },
      { korean: "내려 주세요", english: "please drop me off here", romanization: "naeryeo juseyo", example: "여기서 내려 주세요.", tags: ["phrase", "transportation"] },
      { korean: "혼내다", english: "to scold, to give someone a piece of your mind", romanization: "honaeda", example: "친구를 혼냈어요.", tags: ["verb"] },
      { korean: "어떻게 해야 돼요?", english: "What should I do? What am I supposed to do?", romanization: "eotteoke haeya dwaeyo", example: "길을 잃었어요. 어떻게 해야 돼요?", tags: ["phrase"] },
      { korean: "방학", english: "school break, vacation (for students)", romanization: "banghak", example: "여름 방학에 여행해요.", tags: ["noun", "time"] },
      { korean: "수영", english: "swimming", romanization: "suyeong", example: "수영을 배워요.", tags: ["noun", "sport"] },

      { korean: "같이", english: "together; with (someone)",             romanization: "gachi",  example: "같이 가요!",        tags: ["adverb"] },

      // ── Subway Stations (p.31) ───────────────────────────────
      { korean: "회현역",         english: "Hoehyeon Station (Line 4)",                    romanization: "hoehyeon-nyeok",          tags: ["place", "transportation"] },
      { korean: "시청역",         english: "City Hall Station (Lines 1, 2)",               romanization: "sicheong-nyeok",          tags: ["place", "transportation"] },
      { korean: "안국역",         english: "Anguk Station (Line 3)",                       romanization: "angung-nyeok",            tags: ["place", "transportation"] },
      { korean: "교대역",         english: "Seoul Nat'l Univ. of Education Station (Line 2, 3)", romanization: "gyodae-nyeok",     tags: ["place", "transportation"] },
      { korean: "삼성역",         english: "Samseong Station (Line 2)",                    romanization: "samseong-nyeok",          tags: ["place", "transportation"] },
      { korean: "잠실역",         english: "Jamsil Station (Lines 2, 8)",                  romanization: "jamsil-lyeok",            tags: ["place", "transportation"] },
      { korean: "사당역",         english: "Sadang Station (Lines 2, 4)",                  romanization: "sadang-nyeok",            tags: ["place", "transportation"] },
      { korean: "고속터미널역",   english: "Express Bus Terminal Station (Lines 3, 7, 9)", romanization: "gosok teo-mi-nel-lyeok",  tags: ["place", "transportation"] },
      { korean: "동대문운동장역", english: "Dongdaemun Stadium Station (Lines 2, 4, 5)",   romanization: "dongdaemun undongjang-nyeok", tags: ["place", "transportation"] },
      { korean: "명동역",         english: "Myeongdong Station (Line 4)",                  romanization: "myeongdong-nyeok",        tags: ["place", "transportation"] },
      { korean: "충무로역",       english: "Chungmuro Station (Lines 3, 4)",               romanization: "chungmuro-nyeok",         tags: ["place", "transportation"] },
      { korean: "서울대입구역",   english: "Seoul Nat'l Univ. Station (Line 2)",           romanization: "seoul-dae-igu-nyeok",     tags: ["place", "transportation"] },
      { korean: "을지로3가역",    english: "Euljiro 3-ga Station (Lines 2, 3)",            romanization: "euljiro samga-nyeok",     tags: ["place", "transportation"] },
      { korean: "남부터미널역",   english: "Nambu Bus Terminal Station (Line 3)",          romanization: "nambu teo-mi-nel-lyeok",  tags: ["place", "transportation"] },

      // ── Famous Places (p.31) ─────────────────────────────────
      { korean: "경주", english: "Gyeongju (ancient capital city)", romanization: "gyeongju", tags: ["noun", "place"] },
      { korean: "부산", english: "Busan (Korea's second city)", romanization: "busan", tags: ["noun", "place"] },
      { korean: "제주도", english: "Jeju Island", romanization: "jejudo", tags: ["noun", "place"] },

      // ── Additional Expressions (p.43) — Taxi Phrases ─────────
      { korean: "똑바로 가 주세요", english: "Go straight, please", romanization: "ttokbaro ga juseyo", tags: ["phrase", "transportation"] },
      { korean: "좌회전해 주세요", english: "Turn left, please", romanization: "jwahoejeonhae juseyo", tags: ["phrase", "transportation"] },
      { korean: "우회전해 주세요", english: "Turn right, please", romanization: "uhoejeonhae juseyo", tags: ["phrase", "transportation"] },

      // ── Additional Expressions (p.43) — Types of Trains ──────
      { korean: "고속전철", english: "KTX (Korea Train Express) — fastest train, up to 300km/h", romanization: "gosokjeonchul", tags: ["noun", "transportation"] },
      { korean: "새마을호", english: "Saemaeul — second fastest intercity train", romanization: "saemaulho", tags: ["noun", "transportation"] },
      { korean: "무궁화호", english: "Mugunghwa — regular intercity train, one level below Saemaeul", romanization: "mugunghwaho", tags: ["noun", "transportation"] }
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
      },
      {
        pattern: "-(아/어)야 되다/돼요",
        explanation: "Have to, must, need to. Used almost exclusively with action verbs. Conjugate to 아/어 form, add 야 되다. Negative: -(아/어)야 하다/돼요.",
        examples: [
          "기다려야 돼요. (I have to wait.)",
          "병원에 가야 돼요. (I have to go to the hospital.)",
          "들어야 돼요. (I have to listen.)",
          "어떻게 해야 돼요? (What should I do?)"
        ]
      },
      {
        pattern: "V요 form + 주세요",
        explanation: "Please do this action for me (as a favor/for my benefit). Attach 주세요 after the 요 form (drop 요 first, or just use the stem).",
        examples: [
          "세워 주세요 — Please stop (the car) for me",
          "내려 주세요 — Please drop me off",
          "기다려 주세요 — Please wait for me",
          "읽어 주세요 — Please read it (for me)"
        ]
      }
    ]
  };

  if (!window.KOREAN_UNITS) window.KOREAN_UNITS = [];
  window.KOREAN_UNITS.push(unit);
})();
