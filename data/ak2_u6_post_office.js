// ============================================================
//  Active Korean 2 — Unit 4: Post Office (우체국)
//  File: data/ak2_u6_post_office.js
//
//  Textbook pages 56–67
//  Class notes: 수업 6/12/26, 수업 6/17/26
//
//  Topics:
//    - Talking about future plans (-(으)ㄹ 거예요)
//    - Talking about means or methods (N(으)로)
//    - Telling what's inside (N이/가 들었어요)
//    - Talking about conditions (A/V-(으)면)
//    - Indicating the receiver (N한테)
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
//    tags          Array of tags, e.g. ["noun", "mail"]

(function () {
  const unit = {
    id:    "ak2_u6",
    book:  "Active Korean 2",
    unit:  6,
    title: "Post Office (우체국)",

    vocabulary: [

      // ── Post Office Vocabulary ────────────────────────────────
      { korean: "우체국",          english: "post office",                                      romanization: "ucheguk",            example: "우체국에서 소포를 보냈어요.",                       tags: ["noun", "place", "mail"] },
      { korean: "보내다",          english: "to send; to mail",                                 romanization: "bonaeda",            example: "캐나다로 보낼 거예요.",                            tags: ["verb", "mail"] },
      { korean: "소포",            english: "parcel; package",                                  romanization: "sopo",               example: "소포를 미국으로 보낼 거예요.",                     tags: ["noun", "mail"] },
      { korean: "부치다",          english: "to send/mail (letter or parcel via post)",         romanization: "buchida",            example: "편지를 부쳐요.",                                   tags: ["verb", "mail"] },
      { korean: "편지",            english: "letter (written)",                                 romanization: "pyeonji",            example: "친구한테 편지를 보냈어요.",                        tags: ["noun", "mail"] },
      { korean: "엽서",            english: "postcard",                                         romanization: "yeopseo",            example: "여행에서 엽서를 부쳤어요.",                        tags: ["noun", "mail"] },
      { korean: "우표",            english: "stamp (postage)",                                  romanization: "upyo",               example: "편지에 우표를 붙여요.",                            tags: ["noun", "mail"] },
      { korean: "우편번호",        english: "zip code; postal code",                            romanization: "upyeonbeonho",       example: "우편번호가 뭐예요?",                               tags: ["noun", "mail"] },
      { korean: "보내는 사람",     english: "sender; addresser",                                romanization: "bonaeneun saram",    example: "보내는 사람 이름을 써요.",                         tags: ["noun", "mail"] },
      { korean: "받는 사람",       english: "recipient; addressee",                             romanization: "batneun saram",      example: "받는 사람 주소를 써요.",                           tags: ["noun", "mail"] },

      // ── Items & Instruments (used with N(으)로) ───────────────
      { korean: "숟가락",          english: "spoon",                                            romanization: "sutgarak",           example: "숟가락으로 밥을 먹어요.",                          tags: ["noun", "utensil"] },
      { korean: "젓가락",          english: "chopsticks",                                       romanization: "jeotgarak",          example: "젓가락으로 음식을 먹어요.",                        tags: ["noun", "utensil"] },
      { korean: "포크",            english: "fork",                                             romanization: "pok",                example: "포크로 샐러드를 먹어요.",                          tags: ["noun", "utensil"] },
      { korean: "손",              english: "hand",                                             romanization: "son",                example: "손으로 빵을 먹어요.",                              tags: ["noun", "body"] },
      { korean: "연필",            english: "pencil",                                           romanization: "yeonpil",            example: "연필로 그림을 그려요.",                            tags: ["noun", "stationery"] },
      { korean: "지갑",            english: "wallet",                                           romanization: "jigap",              example: "지갑이 없어요.",                                   tags: ["noun"] },
      { korean: "신용카드",        english: "credit card",                                      romanization: "sinyong kadeu",      example: "신용카드로 계산해요.",                             tags: ["noun", "payment"] },
      { korean: "휴대 전화",       english: "mobile phone; cell phone",                         romanization: "hyudae jeonhwa",     example: "휴대 전화로 친구한테 전화해요.",                   tags: ["noun"] },

      // ── Contents (N이/가 들었어요) ────────────────────────────
      { korean: "들다",            english: "to be contained (inside); to hold/carry",          romanization: "deulda",             example: "가방에 책이 들었어요.",                            tags: ["verb"] },
      { korean: "안에 뭐가 들었어요?", english: "What's inside? / What's in it?",              romanization: "ane mwoga deureosseoyo", example: "A: 안에 뭐가 들었어요? B: 책이 들었어요.",    tags: ["phrase", "mail"] },
      { korean: "우산",            english: "umbrella",                                         romanization: "usan",               example: "우산이 들었어요.",                                 tags: ["noun"] },
      { korean: "모자",            english: "hat; cap",                                         romanization: "moja",               example: "모자가 들었어요.",                                 tags: ["noun", "clothing"] },
      { korean: "구두",            english: "dress shoes; formal shoes",                        romanization: "gudu",               example: "구두가 들었어요.",                                 tags: ["noun", "clothing"] },
      { korean: "시계",            english: "clock; watch",                                     romanization: "sigye",              example: "시계가 들었어요.",                                 tags: ["noun"] },

      // ── Continents & Countries ────────────────────────────────
      { korean: "유럽",            english: "Europe",                                           romanization: "yureop",             example: "유럽으로 여행을 갈 거예요.",                       tags: ["noun", "geography"] },
      { korean: "베트남",          english: "Vietnam",                                          romanization: "beteunam",           example: "베트남으로 소포를 보낼 거예요.",                   tags: ["noun", "geography"] },
      { korean: "말레이시아",      english: "Malaysia",                                         romanization: "malleisia",          example: "말레이시아에 가 본 적 있어요?",                    tags: ["noun", "geography"] },
      { korean: "브라질",          english: "Brazil",                                           romanization: "beurajil",           example: "브라질로 보내면 얼마예요?",                        tags: ["noun", "geography"] },
      { korean: "아프리카",        english: "Africa",                                           romanization: "apeurika",           example: "아프리카로 보내면 한 달쯤 걸려요.",               tags: ["noun", "geography"] },
      { korean: "호주",            english: "Australia",                                        romanization: "hoju",               example: "호주로 비행기로 보내면 얼마예요?",                 tags: ["noun", "geography"] },
      { korean: "인도",            english: "India",                                            romanization: "indo",               example: "인도로 소포를 보낼 거예요.",                       tags: ["noun", "geography"] },

      // ── Time Counters (Term / Period) ─────────────────────────
      { korean: "일",              english: "day (as a Sino-Korean counter: 일, 이일, 삼일...)", romanization: "il",                example: "5일쯤 걸려요.",                                    tags: ["noun", "time", "counter"] },
      { korean: "주일",            english: "week (일주일 = one week)",                         romanization: "juil",               example: "일주일쯤 걸려요.",                                 tags: ["noun", "time", "counter"] },
      { korean: "달",              english: "month (한 달 = one month)",                        romanization: "dal",                example: "한 달쯤 걸려요.",                                  tags: ["noun", "time"] },
      { korean: "하루",            english: "one day (pure Korean counter)",                    romanization: "haru",               example: "하루 만에 도착했어요.",                            tags: ["noun", "time", "counter"] },
      { korean: "이틀",            english: "two days (pure Korean counter)",                   romanization: "iteul",              example: "이틀 후에 와요.",                                  tags: ["noun", "time", "counter"] },
      { korean: "사흘",            english: "three days (pure Korean counter)",                 romanization: "saheul",             example: "사흘 동안 여행했어요.",                            tags: ["noun", "time", "counter"] },
      { korean: "나흘",            english: "four days (pure Korean counter)",                  romanization: "naheul",             example: "나흘 후에 도착해요.",                              tags: ["noun", "time", "counter"] },
      { korean: "닷새",            english: "five days (pure Korean counter)",                  romanization: "datsae",             example: "닷새 걸려요.",                                     tags: ["noun", "time", "counter"] },
      { korean: "열흘",            english: "ten days (pure Korean counter)",                   romanization: "yeolheul",           example: "열흘 동안 여행했어요.",                            tags: ["noun", "time", "counter"] },
      { korean: "보름",            english: "fifteen days (pure Korean counter)",               romanization: "boreum",             example: "보름쯤 걸려요.",                                   tags: ["noun", "time", "counter"] },

      // ── Weather (used in conditional sentences) ───────────────
      { korean: "비",              english: "rain",                                             romanization: "bi",                 example: "비가 와요.",                                       tags: ["noun", "weather"] },
      { korean: "눈",              english: "snow (also means: eye)",                           romanization: "nun",                example: "눈이 많이 와요.",                                  tags: ["noun", "weather"] },
      { korean: "눈사람",          english: "snowman",                                          romanization: "nunsaram",           example: "눈이 오면 눈사람을 만들어요.",                     tags: ["noun", "weather"] },
      { korean: "비가 오다",       english: "to rain (lit. rain comes)",                        romanization: "biga oda",           example: "비가 오면 집에서 쉬어요.",                         tags: ["phrase", "weather"] },
      { korean: "눈이 오다",       english: "to snow (lit. snow comes)",                        romanization: "nuni oda",           example: "눈이 오면 눈사람을 만들어요.",                     tags: ["phrase", "weather"] },

      // ── Other Useful Nouns & Expressions ─────────────────────
      { korean: "여행",            english: "trip; travel",                                     romanization: "yeohaeng",           example: "다음 주에 여행을 갈 거예요.",                      tags: ["noun"] },
      { korean: "여행을 가다",     english: "to go on a trip",                                  romanization: "yeohaengeul gada",   example: "한국에 여행을 갈 거예요.",                         tags: ["phrase"] },
      { korean: "한복",            english: "hanbok (traditional Korean costume)",               romanization: "hanbok",             example: "설날에 한복을 입어요.",                            tags: ["noun", "culture"] },
      { korean: "괜찮다",          english: "to be alright; fine; okay",                        romanization: "gwaenchanta",        example: "괜찮아요.",                                        tags: ["adjective", "expression"] },
      { korean: "배고프다",        english: "to be hungry",                                     romanization: "baegopeuda",         example: "배고프면 뭐 먹어요?",                              tags: ["adjective"] },
      { korean: "사전",            english: "dictionary",                                       romanization: "sajeon",             example: "사전으로 단어를 찾아요.",                          tags: ["noun"] },
      { korean: "한 달쯤 걸려요",  english: "It takes about a month",                           romanization: "han daljjeum geollyeyo", example: "미국까지 한 달쯤 걸려요.",                  tags: ["phrase", "time"] },
      { korean: "다 팔았어요",     english: "Did you sell everything? / All sold out",          romanization: "da parasseoyo",      example: "다 팔았어요?",                                     tags: ["phrase"] },

      // ── Age Counters ─────────────────────────────────────────
      { korean: "세",              english: "age counter (Sino-Korean, slightly more formal: 삼십육세 = 36 years old)", romanization: "se", example: "삼십 세예요.",                    tags: ["counter", "age"] },
      { korean: "살",              english: "age counter (pure Korean, most common: 서른 여섯 살)", romanization: "sal", example: "서른 살이에요.",                                      tags: ["counter", "age"] },
      { korean: "후에",            english: "after; in (from now)", romanization: "hue",        example: "일년 후에 한국에 갈 거예요.",                                                    tags: ["particle", "time"] },
      { korean: "무슨",            english: "what (kind of); which — used before a noun", romanization: "museun", example: "무슨 요일이에요? / 무슨 색이에요?",                          tags: ["question"] },

      // ── Vocabulary from July notes ───────────────────────────
      { korean: "독립",            english: "independence", romanization: "dongnip",             example: "독립 기념일이에요.",                                                             tags: ["noun", "culture"] },
      { korean: "기념일",          english: "anniversary, commemorative day", romanization: "ginyeomil", example: "결혼 기념일이에요.",                                                  tags: ["noun", "time"] },
      { korean: "독립 기념일",     english: "Independence Day", romanization: "dongnip ginyeomil", example: "7월 4일은 독립 기념일이에요.",                                              tags: ["noun", "culture"] },
      { korean: "이사하다",        english: "to move (residence), to relocate", romanization: "isahada", example: "내년에 한국으로 이사할 거예요.",                                        tags: ["verb"] },
      { korean: "벌다",            english: "to earn (money)", romanization: "beolda",           example: "일하면 돈을 벌어요.",                                                            tags: ["verb"] },
      { korean: "인연",            english: "a fated connection, a tie between people", romanization: "inyeon", example: "우리는 인연이에요.",                                           tags: ["noun", "culture"] },
      { korean: "운명",            english: "destiny, fate", romanization: "unmyeong",           example: "운명이에요!",                                                                    tags: ["noun", "culture"] },
      { korean: "슬프다",          english: "to be sad (ㅡ irregular: 슬퍼요)", romanization: "seulpeuda", example: "슬프면 울어요.",                                                    tags: ["adjective", "emotion"] },
      { korean: "예약하다",        english: "to make a reservation; to book", romanization: "yeyakhada", example: "호텔을 예약할 거예요.",                                                 tags: ["verb"] },
      { korean: "바다",            english: "ocean, sea", romanization: "bada",                  example: "여름에 바다에 갈 거예요.",                                                       tags: ["noun", "nature"] },
      { korean: "사진을 찍다",     english: "to take a photo/picture", romanization: "sajineul jjikda", example: "바다에서 사진을 찍을 거예요.",                                         tags: ["phrase", "verb"] },
    ],

    grammar: [
      {
        pattern: "V-(으)ㄹ 거예요",
        explanation: "Future tense — expresses the subject's future plans, intentions, or predictions (things already decided). Verb stem ending with a vowel → ㄹ 거예요. Verb stem ending with a consonant → 을 거예요. Informal: 거야.",
        examples: [
          "가다 → 갈 거예요 (I'm going to go.)",
          "자다 → 잘 거예요 (I'm going to sleep.)",
          "보다 → 볼 거예요 (I'm going to watch.)",
          "먹다 → 먹을 거예요 (I'm going to eat.)",
          "입다 → 입을 거예요 (I'm going to wear.)",
          "캐나다로 보낼 거예요. (I'm going to send it to Canada.)",
          "내일 시장에 가면 소고기를 살 거예요. (If I go to the market tomorrow, I'll buy beef.)"
        ]
      },
      {
        pattern: "V-(으)ㄹ게요",
        explanation: "Future tense — expresses promises, at-the-moment decisions, or offers to do something for someone. Different from -(으)ㄹ 거예요 which states pre-existing plans. Vowel stem → ㄹ게요. Consonant stem → 을게요.",
        examples: [
          "연락할게요. (I'll contact you.)",
          "제가 할게요. (I'll do it.)",
          "빨리 갈게요. (I'll go quickly.)",
          "내일 연락할게요. (I'll contact you tomorrow.)"
        ]
      },
      {
        pattern: "N(으)로",
        explanation: "Particle meaning 'by means of / using / with / via.' Indicates the instrument or method. Nouns ending in a vowel → 로. Nouns ending in a consonant → 으로. Nouns ending in ㄹ → 로 (same as vowel).",
        examples: [
          "비행기로 보내 주세요. (Please send it by airplane.)",
          "숟가락으로 밥을 먹어요. (I eat rice with a spoon.)",
          "젓가락으로 → 젓가락으로 (chopsticks→ by chopsticks)",
          "연필로 그림을 그려요. (I draw with a pencil.)",
          "지하철로 → 지하철로 (ㄹ ending → just 로)",
          "컴퓨터로 일해요. (I work by computer.)",
          "휴대 전화로 친구한테 전화해요. (I call my friend by mobile phone.)"
        ]
      },
      {
        pattern: "A/V-(으)면",
        explanation: "Conditional — means 'if' or 'when.' Used for real conditions that are true in the present or future. Verb/adjective stem ending with a vowel → 면. Stem ending with a consonant → 으면. ㅂ irregular verbs → drop ㅂ, add 우면.",
        examples: [
          "비행기로 보내면 일주일쯤 걸려요. (If you send by plane, it takes about a week.)",
          "커피를 많이 마시면 못 자요. (If I drink a lot of coffee, I can't sleep.)",
          "추우면 코트를 입어요. (If it's cold, I wear a coat.)",
          "비가 오면 집에서 쉬어요. (If it rains, I rest at home.)",
          "돈이 없으면 밥을 못 먹어요. (If I don't have money, I can't eat.)",
          "배고프면 뭐 먹어요? (What do you eat when you're hungry?)"
        ]
      },
      {
        pattern: "N한테",
        explanation: "Particle meaning 'to (a person)' — indicates the receiver of an action. Used with people only (use 에 for places/things). In formal/written language, 에게 is used instead.",
        examples: [
          "누구한테 이 소포를 보낼 거예요? (To whom are you going to send this parcel?)",
          "동생한테 보낼 거예요. (I'm going to send it to my younger sibling.)",
          "친구한테 꽃을 줘요. (I give flowers to my friend.)",
          "선생님한테 전화해요. (I call my teacher.)"
        ]
      },
      {
        pattern: "N이/가 들었어요",
        explanation: "Pattern used to say what is inside something. The contents take the subject particle 이/가, and 들었어요 means 'is contained inside.' Question form: 안에 뭐가 들었어요? (What's inside?)",
        examples: [
          "안에 뭐가 들었어요? (What's inside?)",
          "책이 들었어요. (There are books inside.)",
          "옷이 들었어요. (There are clothes inside.)",
          "우산이 들었어요. (There is an umbrella inside.)"
        ]
      }
    ]
  };

  if (!window.KOREAN_UNITS) window.KOREAN_UNITS = [];
  window.KOREAN_UNITS.push(unit);
})();
