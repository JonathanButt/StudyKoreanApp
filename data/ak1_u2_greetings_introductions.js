// ============================================================
//  Active Korean 1 — Unit 2: Greetings & Introductions
//  File: data/ak1_u2_greetings_introductions.js
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
    id:    "ak1_u2",
    book:  "Active Korean 1",
    unit:  2,
    title: "Greetings & Introductions",

    vocabulary: [
      { korean: "안녕하세요", english: "Hello (formal greeting)", romanization: "annyeonghaseyo", example: "안녕하세요! - Hello!", tags: ["greeting", "formal"] },
      { korean: "안녕하세요?", english: "Are you well? (traditional meaning)", romanization: "annyeonghaseyo", tags: ["greeting", "formal"] },
      { korean: "안녕히 가세요", english: "Good-bye (when other person is leaving)", romanization: "annyeonghi gaseyo", tags: ["greeting"] },
      { korean: "안녕히 계세요", english: "Good-bye (when other person is staying)", romanization: "annyeonghi gyeseyo", tags: ["greeting"] },
      { korean: "저", english: "I, me (polite version)", romanization: "jeo", tags: ["pronoun"] },
      { korean: "이름", english: "name", romanization: "ireum", tags: ["noun"] },
      { korean: "씨", english: "polite suffix added to names (less formal than 님)", romanization: "ssi", tags: ["honorific"] },
      { korean: "만나서 반가워요", english: "Nice to meet you (informal)", romanization: "mannaseo bangawo", tags: ["greeting"] },
      { korean: "만나서 반갑습니다", english: "Nice to meet you (most formal)", romanization: "mannaseo bangapseumnida", tags: ["greeting", "formal"] },
      { korean: "여기는", english: "This is/Here is (introducing equal person)", romanization: "yeogineun", tags: ["introductory"] },
      { korean: "이분은", english: "This person (introducing someone you respect)", romanization: "ibun-eun", tags: ["introductory", "honorific"] },
      { korean: "의사", english: "doctor", romanization: "uisa", tags: ["occupation"] },
      { korean: "선생님", english: "teacher", romanization: "seonsaengnim", tags: ["occupation", "honorific"] },
      { korean: "학생", english: "student", romanization: "hakssaeng", tags: ["occupation"] },
      { korean: "사람", english: "person", romanization: "saram", tags: ["noun"] },
      { korean: "요리사", english: "chef, cook", romanization: "yorisa", tags: ["occupation"] },
      { korean: "은행원", english: "bank employee", romanization: "eunhaenggwon", tags: ["occupation"] },
      { korean: "회사원", english: "company employee", romanization: "hoesawon", tags: ["occupation"] },
      { korean: "기자", english: "reporter", romanization: "gija", tags: ["occupation"] },
      { korean: "소프트웨어 기술자", english: "software engineer", romanization: "softuweo gisullja", tags: ["occupation"] },
      { korean: "도자기", english: "ceramics (the item)", romanization: "dojagi", tags: ["noun"] },
      { korean: "도공", english: "potter, ceramicist (broad term)", romanization: "dogong", tags: ["occupation"] },
      { korean: "도예가", english: "potter, ceramicist (artistic term)", romanization: "doyega", tags: ["occupation"] },
      { korean: "네", english: "yes", romanization: "ne", tags: ["response"] },
      { korean: "아니요", english: "no", romanization: "aniyo", tags: ["response"] },
      { korean: "중국", english: "China", romanization: "jungguk", tags: ["country"] },
      { korean: "일본", english: "Japan", romanization: "ilbon", tags: ["country"] },
      { korean: "미국", english: "United States", romanization: "miguk", tags: ["country"] },
      { korean: "호주", english: "Australia", romanization: "hoju", tags: ["country"] },
      { korean: "프랑스", english: "France", romanization: "peurangsu", tags: ["country"] },
      { korean: "독일", english: "Germany", romanization: "dogil", tags: ["country"] },
      { korean: "러시아", english: "Russia", romanization: "reosia", tags: ["country"] },
      { korean: "캐나다", english: "Canada", romanization: "kaenada", tags: ["country"] },
      { korean: "인도", english: "India", romanization: "indo", tags: ["country"] }
    ],

    grammar: [
      {
        pattern: "이에요/예요",
        explanation: "To be/am/are. Use 이에요 after consonant, 예요 after vowel. For nouns only.",
        examples: ["저는 학생이에요 - I am a student", "저는 애니예요 - I am Annie", "이름이 뭐예요? - What is your name?"]
      },
      {
        pattern: "은/는 (Topic Particle)",
        explanation: "Marks the topic of the sentence. Use 은 after consonant, 는 after vowel.",
        examples: ["저는 - I (topic)", "김재민은 - Kim Jaemin (topic)", "이것은 - This (topic)"]
      },
      {
        pattern: "noun + 사람",
        explanation: "Forms nationality. country + 사람 = person from that country",
        examples: ["중국 사람 - Chinese person", "미국 사람 - American", "일본 사람 - Japanese person"]
      },
      {
        pattern: "noun + (이)세요",
        explanation: "Honorific form of 이에요/예요. Use with people you respect.",
        examples: ["선생님이세요 - You are a teacher (honorific)", "의사세요 - You are a doctor (honorific)"]
      }
    ]
  };

  if (!window.KOREAN_UNITS) window.KOREAN_UNITS = [];
  window.KOREAN_UNITS.push(unit);
})();
