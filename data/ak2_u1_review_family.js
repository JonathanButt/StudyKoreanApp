// ============================================================
//  Active Korean 2 — Unit 1: Review & Family
//  File: data/ak2_u1_review_family.js
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
    id:    "ak2_u1",
    book:  "Active Korean 2",
    unit:  1,
    title: "Review & Family",

    vocabulary: [
      { korean: "연말", english: "end of year", romanization: "yeonmal", tags: ["time", "season"] },
      { korean: "월 말", english: "end of month", romanization: "wol mal", tags: ["time"] },
      { korean: "보내다", english: "to spend (+ time/time expression)", romanization: "bonaeda", tags: ["verb"] },
      { korean: "많이", english: "a lot", romanization: "manhi", tags: ["adverb"] },
      { korean: "조금", english: "a little", romanization: "jogeum", tags: ["adverb"] },
      { korean: "당신", english: "you (formal/to stranger/married couples use with each other)", romanization: "dangsin", tags: ["pronoun"] },
      { korean: "부모님", english: "parents", romanization: "bumonim", tags: ["family"] },
      { korean: "피곤하다", english: "to be tired", romanization: "pigonhada", tags: ["adjective"] },
      { korean: "달리다", english: "to run", romanization: "dallida", tags: ["verb"] },
      { korean: "뛰다", english: "to run", romanization: "ttweuda", tags: ["verb"] },
      { korean: "러닝", english: "running (as exercise)", romanization: "reuning", tags: ["exercise"] },
      { korean: "같아요", english: "sound like (ㅌ sound gets linked)", romanization: "gatayo", tags: ["verb"] },
      { korean: "같이", english: "together, with (ㅊ sound gets linked)", romanization: "gachi", tags: ["adverb"] },
      { korean: "놀러 오다", english: "to come over/visit for fun", romanization: "nolleo oda", tags: ["verb", "phrase"] },
      { korean: "놀다", english: "to play, to hang out, to spend time for fun", romanization: "nolda", tags: ["verb"] },

      // ── Expressions & Greetings ──────────────────────────────
      { korean: "수고했어요", english: "good work, you've worked hard (to a peer/junior)", romanization: "sugohaesseoyo", example: "오늘도 수고했어요!", tags: ["expression"] },
      { korean: "수고하셨어요", english: "good work (to a senior/honorific)", romanization: "sugohasyeosseoyo", example: "수고하셨어요, 선생님.", tags: ["expression", "honorific"] },
      { korean: "고생했어요", english: "you've been through a lot, thank you for your effort", romanization: "gosaenghaesseoyo", example: "오늘 고생했어요.", tags: ["expression"] },
      { korean: "별 일 없었어요", english: "nothing special happened, same old same old", romanization: "byeol il eopseosseoyo", example: "A: 어떻게 지냈어요? B: 별 일 없었어요.", tags: ["expression"] },
      { korean: "방금", english: "just now, a moment ago", romanization: "banggeum", example: "방금 왔어요.", tags: ["adverb", "time"] },
      { korean: "금방", english: "just now; in a moment", romanization: "geumbang", example: "금방 올게요.", tags: ["adverb", "time"] },

      // ── Family (AK2 review) ──────────────────────────────────
      { korean: "아들", english: "son", romanization: "adeul", tags: ["family"] },
      { korean: "딸", english: "daughter", romanization: "ttal", tags: ["family"] },
      { korean: "남편", english: "husband", romanization: "nampyeon", tags: ["family"] },
      { korean: "아내", english: "wife", romanization: "anae", tags: ["family"] },
      { korean: "형님", english: "older brother (formal/respectful address)", romanization: "hyeongnim", tags: ["family", "formal"] },
      { korean: "누님", english: "older sister (formal/respectful address)", romanization: "nunim", tags: ["family", "formal"] },
      { korean: "아이", english: "child (also: 애 informal, 애들 kids/children)", romanization: "ai", example: "아이들이 놀고 있어요.", tags: ["noun"] },
      { korean: "애들", english: "kids, children (informal plural of 아이)", romanization: "aedeul", example: "애들이 재미있어요.", tags: ["noun"] },

      // ── Honorific Vocabulary ─────────────────────────────────
      { korean: "성함", english: "name (honorific for 이름)", romanization: "seonham", example: "성함이 어떻게 되세요?", tags: ["noun", "honorific"] },
      { korean: "연세", english: "age (honorific for 나이)", romanization: "yeonse", example: "연세가 어떻게 되세요?", tags: ["noun", "honorific"] },
      { korean: "생신", english: "birthday (honorific for 생일)", romanization: "saengsin", example: "생신 축하드려요!", tags: ["noun", "honorific"] },
      { korean: "주무시다", english: "to sleep (honorific for 자다)", romanization: "jumusida", example: "안녕히 주무세요.", tags: ["verb", "honorific"] },
      { korean: "드시다", english: "to eat/drink (honorific for 먹다/마시다)", romanization: "deusida", example: "뭐 드실래요?", tags: ["verb", "honorific"] },
      { korean: "계시다", english: "to be/stay at a place (honorific for 있다)", romanization: "gyesida", example: "어디에 계세요?", tags: ["verb", "honorific"] },
      { korean: "말씀하시다", english: "to speak/say (honorific for 말하다)", romanization: "malsseumhasida", example: "선생님이 말씀하셨어요.", tags: ["verb", "honorific"] },
      { korean: "돌아가시다", english: "to pass away (honorific for 죽다)", romanization: "doragasida", example: "할아버지께서 돌아가셨어요.", tags: ["verb", "honorific"] },
      { korean: "안녕히 주무세요", english: "good night (lit. please sleep peacefully)", romanization: "annyeonghi jumuseyo", example: "안녕히 주무세요!", tags: ["expression", "honorific"] },
      { korean: "말", english: "words, speech, language", romanization: "mal", example: "한국말을 잘 해요.", tags: ["noun"] },
      { korean: "말씀", english: "words, speech (honorific for 말)", romanization: "malsseum", example: "선생님 말씀이 맞아요.", tags: ["noun", "honorific"] },
      { korean: "사장님", english: "boss, CEO, company president (title)", romanization: "sajangnim", example: "사장님 덕분에 성공했어요.", tags: ["noun", "work", "honorific"] },

      // ── Age & Identity ───────────────────────────────────────
      { korean: "나이", english: "age", romanization: "nai", example: "나이가 어떻게 돼요?", tags: ["noun"] },
      { korean: "몇년생이에요?", english: "What year were you born? (asking birth year)", romanization: "myeongnyeonssaengieyo", example: "몇년생이에요?", tags: ["question"] },

      // ── Education & Occupations ──────────────────────────────
      { korean: "대학교", english: "university, college", romanization: "daehakgyo", example: "어느 대학교에 다녀요?", tags: ["noun", "education"] },
      { korean: "대학생", english: "university student", romanization: "daehaksaeng", example: "저는 대학생이에요.", tags: ["noun", "education"] },
      { korean: "고등학교", english: "high school", romanization: "godeunghakgyo", example: "고등학교 때 친구예요.", tags: ["noun", "education"] },
      { korean: "중학교", english: "middle school", romanization: "junghakgyo", example: "중학교 3학년이에요.", tags: ["noun", "education"] },
      { korean: "초등학교", english: "elementary school", romanization: "chodeunghakgyo", example: "초등학교에서 가르쳐요.", tags: ["noun", "education"] },
      { korean: "간호사", english: "nurse", romanization: "ganhosa", example: "간호사로 일해요.", tags: ["noun", "occupation"] },
      { korean: "의사", english: "doctor", romanization: "uisa", example: "의사 선생님이에요.", tags: ["noun", "occupation"] },

      // ── Verbs ────────────────────────────────────────────────
      { korean: "앉다", english: "to sit (down)", romanization: "anda", example: "앉으세요.", tags: ["verb"] },
      { korean: "다니다", english: "to attend; to commute; to go regularly", romanization: "danida", example: "어느 학교에 다녀요?", tags: ["verb"] },
      { korean: "말하다", english: "to speak, to say, to tell", romanization: "malhada", example: "한국어로 말해요.", tags: ["verb"] },
      { korean: "죽다", english: "to die", romanization: "jukda", example: "꽃이 죽었어요.", tags: ["verb"] },
      { korean: "돌아가다", english: "to go back, to return; also: to pass away (euphemism)", romanization: "doragada", example: "집에 돌아가요.", tags: ["verb"] },
      { korean: "사주다", english: "to buy something for someone", romanization: "sajuda", example: "친구한테 커피를 사줬어요.", tags: ["verb"] },
      { korean: "서예", english: "calligraphy", romanization: "seoye", example: "서예를 배워요.", tags: ["noun", "hobby"] },

      // ── Time Expressions ─────────────────────────────────────
      { korean: "작년", english: "last year", romanization: "jangnyeon", example: "작년에 한국에 갔어요.", tags: ["time"] },
      { korean: "하루", english: "one day (pure Korean)", romanization: "haru", example: "하루 종일 바빴어요.", tags: ["time"] },
      { korean: "하루 종일", english: "all day long", romanization: "haru jongil", example: "하루 종일 집에 있었어요.", tags: ["time"] }
    ],

    grammar: [
      {
        pattern: "past tense review: -었어요/-았어요",
        explanation: "Conjugate to 요 form, drop 요, add ㅆ어요",
        examples: ["하다 → 해요 → 했어요", "가다 → 가요 → 갔어요"]
      },
      {
        pattern: "-려고 (intent, purpose)",
        explanation: "In order to, to (do something with purpose)",
        examples: []
      },
      {
        pattern: "Honorific verb forms: -(으)세요 / -(으)셨어요",
        explanation: "Show respect to the subject. Present: verb stem + (으)세요. Past: verb stem + (으)셨어요. Special honorific verbs: 자다→주무시다, 먹다→드시다, 있다→계시다, 말하다→말씀하시다, 죽다→돌아가시다.",
        examples: [
          "선생님이 오세요. (The teacher is coming.)",
          "어디에 가세요? (Where are you going? — polite)",
          "할머니가 주무세요. (Grandmother is sleeping. — honorific)",
          "뭐 드세요? (What are you eating/drinking? — honorific)",
          "어디에 계세요? (Where are you? — honorific)"
        ]
      },
      {
        pattern: "Honorific nouns",
        explanation: "Some nouns have special honorific forms used when talking about or to respected people. 이름 → 성함 (name), 나이 → 연세 (age), 생일 → 생신 (birthday), 밥/음식 → 진지 (meal), 말 → 말씀 (words).",
        examples: [
          "성함이 어떻게 되세요? (What is your name? — honorific)",
          "연세가 어떻게 되세요? (How old are you? — honorific)",
          "생신 축하드려요! (Happy birthday! — honorific)"
        ]
      },
      {
        pattern: "-지 않다 (softer negation)",
        explanation: "Formal/softer way to negate. Verb/adjective stem + 지 않아요. More formal than 안 + verb.",
        examples: [
          "먹지 않아요 - I don't eat (slightly more formal than 안 먹어요)",
          "좋지 않아요 - It's not good",
          "비싸지 않아요 - It's not expensive"
        ]
      }
    ]
  };

  if (!window.KOREAN_UNITS) window.KOREAN_UNITS = [];
  window.KOREAN_UNITS.push(unit);
})();
