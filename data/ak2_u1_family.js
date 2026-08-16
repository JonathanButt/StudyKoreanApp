// ============================================================
//  Active Korean 2 — Unit 1: Family (가족)
//  File: data/ak2_u1_family.js
//
//  AK2 Textbook Chapter 1 (1과), pages 16–29
//
//  Topics:
//    - Introducing family members
//    - Honorific expressions: N(이)세요, A/V-(으)세요
//    - Interrogative: 누구, 무슨 N
//    - Possessive: N의 N'
//    - Past honorific: A/V-(으)셨어요
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
//    tags          Array of tags, e.g. ["noun", "family"]

(function () {
  const unit = {
    id:    "ak2_u1",
    book:  "Active Korean 2",
    unit:  1,
    title: "Family (가족)",

    vocabulary: [

      // ── Textbook Vocabulary (p.17) ────────────────────────────

      // Family members
      { korean: "가족",             english: "family",                                        romanization: "gajok",           example: "우리 가족은 다섯 명이에요.",     tags: ["family"] },
      { korean: "할아버지",         english: "grandfather",                                   romanization: "harabeoji",        example: "할아버지는 의사세요.",          tags: ["family"] },
      { korean: "할머니",           english: "grandmother",                                   romanization: "halmeoni",         example: "할머니가 계세요?",             tags: ["family"] },
      { korean: "아버지",           english: "father",                                        romanization: "abeoji",           example: "아버지는 회사에 다니세요.",     tags: ["family"] },
      { korean: "어머니",           english: "mother",                                        romanization: "eomeoni",          example: "어머니는 선생님이세요.",        tags: ["family"] },
      { korean: "형",               english: "older brother (male speaker)",                  romanization: "hyeong",           example: "형이 있어요.",                 tags: ["family"] },
      { korean: "누나",             english: "older sister (male speaker)",                   romanization: "nuna",             example: "누나가 예쁘세요.",             tags: ["family"] },
      { korean: "오빠",             english: "older brother (female speaker)",                romanization: "oppa",             example: "오빠랑 같이 살아요.",          tags: ["family"] },
      { korean: "언니",             english: "older sister (female speaker)",                 romanization: "eonni",            example: "언니가 대학생이에요.",         tags: ["family"] },
      { korean: "동생",             english: "younger sibling",                               romanization: "dongsaeng",        example: "남동생이 있어요.",             tags: ["family"] },
      { korean: "남동생",           english: "younger brother",                               romanization: "namdongsaeng",     example: "남동생이 고등학생이에요.",      tags: ["family"] },
      { korean: "여동생",           english: "younger sister",                                romanization: "yeodongsaeng",     example: "여동생이 귀여워요.",           tags: ["family"] },
      { korean: "아들",             english: "son",                                           romanization: "adeul",            example: "아들이 몇 살이에요?",          tags: ["family"] },
      { korean: "딸",               english: "daughter",                                      romanization: "ttal",             example: "딸이 두 명 있어요.",           tags: ["family"] },
      { korean: "남편",             english: "husband",                                       romanization: "nampyeon",         example: "남편은 요리사예요.",           tags: ["family"] },
      { korean: "아내",             english: "wife",                                          romanization: "anae",             example: "아내가 간호사예요.",           tags: ["family"] },

      // Interrogative pronouns
      { korean: "누구",             english: "who",                                           romanization: "nugu",             example: "이분은 누구세요?",             tags: ["question"] },
      { korean: "누가",             english: "who (subject particle form; 누구 + 가 → 누가)", romanization: "nuga",             example: "누가 왔어요?",                 tags: ["question"] },
      { korean: "무슨",             english: "what (kind of); which",                         romanization: "museun",           example: "무슨 일을 하세요?",            tags: ["question"] },

      // Personal pronouns
      { korean: "내",               english: "my (casual, short for 나의)",                   romanization: "nae",              example: "내 친구예요.",                 tags: ["pronoun"] },
      { korean: "제",               english: "my (humble, short for 저의)",                   romanization: "je",               example: "제 아버지예요.",               tags: ["pronoun"] },
      { korean: "우리",             english: "our; my (used possessively for shared things)",  romanization: "uri",              example: "우리 어머니예요.",             tags: ["pronoun"] },
      { korean: "이분",             english: "this person (honorific)",                       romanization: "ibun",             example: "이분은 누구세요?",             tags: ["pronoun", "honorific"] },
      { korean: "그분",             english: "that person near listener (honorific)",          romanization: "geubun",           example: "그분은 교수님이세요.",         tags: ["pronoun", "honorific"] },
      { korean: "저분",             english: "that person over there (honorific)",             romanization: "jeobun",           example: "저분은 선생님이세요.",         tags: ["pronoun", "honorific"] },

      // Others
      { korean: "회사",             english: "company; office",                               romanization: "hoesa",            example: "회사에 다녀요.",               tags: ["noun", "work"] },
      { korean: "도서관",           english: "library",                                       romanization: "doseogwan",        example: "도서관에서 공부해요.",         tags: ["noun", "place"] },
      { korean: "사랑하다",         english: "to love",                                       romanization: "saranghada",       example: "가족을 사랑해요.",             tags: ["verb"] },
      { korean: "결혼하다",         english: "to marry; to get married",                      romanization: "gyeolhonhada",     example: "언제 결혼했어요?",             tags: ["verb"] },
      { korean: "다니다",           english: "to attend; to commute; to work for (a place)",  romanization: "danida",           example: "회사에 다니세요?",             tags: ["verb"] },
      { korean: "아침",             english: "morning; breakfast",                            romanization: "achim",            example: "아침에 일어나요.",             tags: ["noun", "time"] },
      { korean: "맞다",             english: "to be right; correct",                          romanization: "matda",            example: "맞아요!",                      tags: ["adjective"] },
      { korean: "정말",             english: "really; truly",                                 romanization: "jeongmal",         example: "정말이에요?",                  tags: ["adverb"] },
      { korean: "꽃",               english: "flower",                                        romanization: "kkot",             example: "꽃이 예뻐요.",                 tags: ["noun"] },
      { korean: "장미",             english: "rose",                                          romanization: "jangmi",           example: "장미를 좋아해요.",             tags: ["noun"] },
      { korean: "명",               english: "counting unit for people",                      romanization: "myeong",           example: "우리 가족은 네 명이에요.",      tags: ["counter"] },
      { korean: "사진",             english: "photograph; picture",                           romanization: "sajin",            example: "가족 사진이에요.",             tags: ["noun"] },
      { korean: "간호사",           english: "nurse",                                         romanization: "ganhosa",          example: "간호사로 일해요.",             tags: ["noun", "occupation"] },
      { korean: "대학생",           english: "college student; university student",            romanization: "daehaksaeng",      example: "대학생이에요.",                tags: ["noun", "education"] },
      { korean: "예쁘다",           english: "to be pretty (ㅡ irregular: 예뻐요)",            romanization: "yeppeuda",         example: "꽃이 예뻐요.",                 tags: ["adjective"] },
      { korean: "작년",             english: "last year",                                     romanization: "jagnyeon",         example: "작년에 결혼했어요.",           tags: ["time"] },

      // ── Additional Family Vocabulary ──────────────────────────
      { korean: "아빠",             english: "dad (informal)",                                romanization: "appa",             example: "아빠, 어디 가요?",             tags: ["family"] },
      { korean: "엄마",             english: "mom (informal)",                                romanization: "eomma",            example: "엄마가 보고 싶어요.",          tags: ["family"] },
      { korean: "부모님",           english: "parents (honorific)",                           romanization: "bumonim",          example: "부모님께 전화해요.",           tags: ["family", "honorific"] },
      { korean: "부인",             english: "wife (formal/polite)",                          romanization: "buin",             example: "부인께서도 잘 계세요?",        tags: ["family", "formal"] },
      { korean: "자기",             english: "honey; term of endearment for partner",         romanization: "jagi",             example: "자기야, 밥 먹자.",             tags: ["family"] },
      { korean: "여보",             english: "honey/darling (for spouse)",                    romanization: "yeobo",            example: "여보, 왔어요?",                tags: ["family"] },
      { korean: "삼촌",             english: "uncle",                                         romanization: "samchon",          example: "삼촌이 외국에 살아요.",        tags: ["family"] },
      { korean: "조카",             english: "nephew/niece",                                  romanization: "joka",             example: "조카가 귀여워요.",             tags: ["family"] },
      { korean: "아이",             english: "child",                                         romanization: "ai",               example: "아이들이 놀고 있어요.",        tags: ["noun", "family"] },
      { korean: "애들",             english: "kids; children (informal plural)",              romanization: "aedeul",           example: "애들이 귀여워요.",             tags: ["noun", "family"] },
      { korean: "당신",             english: "you (formal; also used between spouses)",       romanization: "dangsin",          example: "당신은 누구예요?",             tags: ["pronoun"] },

      // ── Plain forms (with honorific pairs in Additional Expressions, p.29) ──
      { korean: "이름",   english: "name (plain; honorific = 성함)",      romanization: "ireum",  example: "이름이 뭐예요?",       tags: ["noun"] },
      { korean: "생일",   english: "birthday (plain; honorific = 생신)",   romanization: "saengil", example: "생일이 언제예요?",    tags: ["noun", "time"] },

      // ── Honorific Vocabulary ──────────────────────────────────
      { korean: "성함",             english: "name (honorific for 이름)",                     romanization: "seonham",          example: "성함이 어떻게 되세요?",        tags: ["noun", "honorific"] },
      { korean: "연세",             english: "age (honorific for 나이)",                      romanization: "yeonse",           example: "연세가 어떻게 되세요?",        tags: ["noun", "honorific"] },
      { korean: "나이",             english: "age",                                           romanization: "nai",              example: "나이가 어떻게 돼요?",          tags: ["noun"] },
      { korean: "생신",             english: "birthday (honorific for 생일)",                 romanization: "saengsin",         example: "생신 축하드려요!",             tags: ["noun", "honorific"] },
      { korean: "주무시다",         english: "to sleep (honorific for 자다)",                 romanization: "jumusida",         example: "안녕히 주무세요.",             tags: ["verb", "honorific"] },
      { korean: "드시다",           english: "to eat/drink (honorific for 먹다/마시다)",       romanization: "deusida",          example: "뭐 드실래요?",                 tags: ["verb", "honorific"] },
      { korean: "계시다",           english: "to be/stay at a place (honorific for 있다)",    romanization: "gyesida",          example: "어디에 계세요?",               tags: ["verb", "honorific"] },
      { korean: "말씀하시다",       english: "to speak/say (honorific for 말하다)",           romanization: "malsseumhasida",   example: "선생님이 말씀하셨어요.",       tags: ["verb", "honorific"] },
      { korean: "돌아가시다",       english: "to pass away (honorific for 죽다)",             romanization: "doragasida",       example: "할아버지께서 돌아가셨어요.",   tags: ["verb", "honorific"] },
      { korean: "안녕히 주무세요",  english: "Good night (lit. please sleep peacefully)",     romanization: "annyeonghi jumuseyo", example: "안녕히 주무세요!",           tags: ["expression", "honorific"] },
      { korean: "말",               english: "word; speech; language",                        romanization: "mal",              example: "한국말을 잘 해요.",            tags: ["noun"] },
      { korean: "말씀",             english: "words; speech (honorific for 말)",              romanization: "malsseum",         example: "선생님 말씀이 맞아요.",        tags: ["noun", "honorific"] },
      { korean: "형님",             english: "older brother (formal/respectful address)",     romanization: "hyeongnim",        example: "형님, 오래간만이에요.",        tags: ["family", "honorific"] },
      { korean: "누님",             english: "older sister (formal/respectful address)",      romanization: "nunim",            example: "누님은 잘 지내세요?",          tags: ["family", "honorific"] },
      { korean: "사장님",           english: "boss; CEO (honorific title)",                   romanization: "sajangnim",        example: "사장님 덕분에 성공했어요.",    tags: ["noun", "work", "honorific"] },

      // ── Textbook Unit 1 Additional Vocabulary (pp.22–24) ────────
      { korean: "직업",   english: "job; occupation; profession",      romanization: "jigeop",   example: "직업이 뭐예요?",          tags: ["noun", "work"] },
      { korean: "회사원", english: "office worker; company employee",  romanization: "hoesawon", example: "저는 회사원이에요.",       tags: ["noun", "work", "occupation"] },
      { korean: "기자",   english: "reporter; journalist",             romanization: "gija",     example: "기자로 일하고 있어요.",    tags: ["noun", "occupation"] },
      { korean: "은행원", english: "bank employee; bank teller",       romanization: "eunhaengwon", example: "아버지는 은행원이에요.", tags: ["noun", "occupation"] },

      // ── Expressions ───────────────────────────────────────────
      { korean: "이분은 누구세요?",    english: "Who is this person? (honorific)",            romanization: "ibun-eun nuguseyo",      example: "이분은 누구세요?",       tags: ["expression", "question"] },
      { korean: "이 사람은 누구예요?", english: "Who is this person? (casual)",               romanization: "i sarameun nuguyeyo",    example: "이 사람은 누구예요?",    tags: ["expression", "question"] },
      { korean: "무슨 일을 하세요?",   english: "What do you do for a living?",              romanization: "museun ireul haseyo",    example: "무슨 일을 하세요?",      tags: ["expression"] },
      { korean: "회사에 다녀요",       english: "I work for a company",                       romanization: "hoesae dannyeoyo",       example: "저는 회사에 다녀요.",    tags: ["expression"] },
      { korean: "수고했어요",          english: "Good work! (to a peer/junior)",              romanization: "sugohaesseoyo",          example: "오늘도 수고했어요!",     tags: ["expression"] },
      { korean: "수고하셨어요",        english: "Good work! (honorific, to a senior)",        romanization: "sugohasyeosseoyo",       example: "수고하셨어요, 선생님.",  tags: ["expression", "honorific"] },
      { korean: "고생했어요",          english: "You've worked hard; thank you for your effort", romanization: "gosaenghaesseoyo",    example: "오늘 고생했어요.",       tags: ["expression"] },
      { korean: "별 일 없었어요",      english: "Nothing special; same old same old",         romanization: "byeol il eopseosseoyo", example: "A: 어떻게 지냈어요? B: 별 일 없었어요.", tags: ["expression"] },
    ],

    grammar: [
      {
        pattern: "N의 N'",
        explanation: "Possessive particle 'of / 's' — 의 connects two nouns showing ownership. In spoken Korean, 의 is very often dropped; the connection is implied by word order alone. 나의 → 내 (my, casual); 저의 → 제 (my, humble).",
        examples: [
          "애니 씨의 여동생 → 애니 씨 여동생 — Annie's younger sister",
          "우리 어머니 — my/our mother (우리 used instead of 내/제 for family members)",
          "친구의 가방 — a friend's bag"
        ]
      },
      {
        pattern: "N(이)세요",
        explanation: "Honorific copula — shows respect toward the subject. Combines -이에요/예요 with the honorific -(으)시-. Use 세요 after a vowel, 이세요 after a consonant.",
        examples: [
          "우리 아버지세요. — It's my father. (honorific)",
          "선생님이세요. — She/He is a teacher. (honorific)",
          "이분은 누구세요? — Who is this person?"
        ]
      },
      {
        pattern: "누구 / 누가",
        explanation: "Who — 누구 is the base form. When 누구 takes the subject particle 이/가, it becomes 누가 (NOT 누구가). Use 누구의 for 'whose', 누구를 for 'whom (object)'.",
        examples: [
          "이분은 누구세요? — Who is this person?",
          "누가 전화했어요? — Who called?",
          "누구의 가방이에요? — Whose bag is it?"
        ]
      },
      {
        pattern: "A/V-(으)세요",
        explanation: "Honorific present tense — shows respect to the subject. Vowel stem → 세요; consonant stem → 으세요. Used for both statements ('He does...') and polite requests ('Please do...').",
        examples: [
          "아버지는 회사에 다니세요. — Father works for a company.",
          "어머니는 요리를 잘 하세요. — Mother is good at cooking.",
          "앉으세요. — Please sit down. (request)"
        ]
      },
      {
        pattern: "무슨 N",
        explanation: "'What kind of / which' + noun — 무슨 is a pre-noun modifier used to ask about type or category. It is followed directly by a noun.",
        examples: [
          "무슨 일을 하세요? — What do you do for a living?",
          "무슨 음식을 좋아해요? — What kind of food do you like?",
          "무슨 책을 읽어요? — What kind of book are you reading?"
        ]
      },
      {
        pattern: "A/V-(으)셨어요",
        explanation: "Honorific past tense — past tense of the honorific marker -(으)시-. Vowel stem → 셨어요; consonant stem → 으셨어요.",
        examples: [
          "어디 가셨어요? — Where did you go? (honorific)",
          "뭐 드셨어요? — What did you eat? (honorific)",
          "선생님이 말씀하셨어요. — The teacher said..."
        ]
      }
    ]
  };

  if (!window.KOREAN_UNITS) window.KOREAN_UNITS = [];
  window.KOREAN_UNITS.push(unit);
})();
