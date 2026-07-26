const GRAMMAR = [
  {
    hangul: "은/는",
    romanisation: "eun/neun",
    use: "Topic particle. Use 는 after nouns ending in a vowel and 은 after nouns ending in a consonant.",
    forms: [
      {
        condition: "After consonant",
        form: "은",
      },
      {
        condition: "After vowel",
        form: "는",
      },
    ],
    example: {
      hangul: "저는 학생입니다.",
      romanisation: "Jeoneun haksaengimnida.",
      translation: "I am a student.",
    },
  },
  {
    hangul: "이/가",
    romanisation: "i/ga",
    use: "Subject particle. Use 가 after vowels and 이 after consonants.",
    forms: [
      {
        condition: "After consonant",
        form: "이",
      },
      {
        condition: "After vowel",
        form: "가",
      },
    ],
    example: {
      hangul: "고양이가 귀여워요.",
      romanisation: "Goyangiga gwiyeowoyo.",
      translation: "The cat is cute.",
    },
  },
  {
    hangul: "을/를",
    romanisation: "eul/reul",
    use: "Object particle. Use 를 after vowels and 을 after consonants.",
    forms: [
      {
        condition: "After consonant",
        form: "을",
      },
      {
        condition: "After vowel",
        form: "를",
      },
    ],
    example: {
      hangul: "사과를 먹어요.",
      romanisation: "Sagwareul meogeoyo.",
      translation: "I eat an apple.",
    },
  },
  {
    hangul: "아요/어요",
    romanisation: "ayo/eoyo",
    use: "Present tense polite ending.",
    forms: [
      {
        condition: "Stem vowel is ㅏ or ㅗ",
        form: "아요",
      },
      {
        condition: "Other vowels",
        form: "어요",
      },
      {
        condition: "하다 verbs",
        form: "해요",
      },
    ],
    example: {
      hangul: "한국어를 공부해요.",
      romanisation: "Hangug-eoreul gongbuhaeyo.",
      translation: "I study Korean.",
    },
  },
  {
    hangul: "았/었어요",
    romanisation: "ass/eosseoyo",
    use: "Past tense polite ending.",
    forms: [
      {
        condition: "Stem vowel is ㅏ or ㅗ",
        form: "았어요",
      },
      {
        condition: "Other vowels",
        form: "었어요",
      },
      {
        condition: "하다 verbs",
        form: "했어요",
      },
    ],
    example: {
      hangul: "어제 영화를 봤어요.",
      romanisation: "Eoje yeonghwareul bwasseoyo.",
      translation: "I watched a movie yesterday.",
    },
  },
  {
    hangul: "고",
    romanisation: "go",
    use: "Connects verbs or adjectives meaning 'and'.",
    forms: [
      {
        condition: "Attach to verb or adjective stem",
        form: "고",
      },
    ],
    example: {
      hangul: "먹고 자요.",
      romanisation: "Meokgo jayo.",
      translation: "Eat and sleep.",
    },
  },
  {
    hangul: "지만",
    romanisation: "jiman",
    use: "Expresses contrast, meaning 'but'.",
    forms: [
      {
        condition: "Attach to verb or adjective stem",
        form: "지만",
      },
    ],
    example: {
      hangul: "비싸지만 좋아요.",
      romanisation: "Bissajiman joayo.",
      translation: "It's expensive, but it's good.",
    },
  },
  {
    hangul: "(으)면",
    romanisation: "(eu)myeon",
    use: "Conditional expression meaning 'if' or 'when'.",
    forms: [
      {
        condition: "After consonant",
        form: "으면",
      },
      {
        condition: "After vowel",
        form: "면",
      },
    ],
    example: {
      hangul: "시간이 있으면 만나요.",
      romanisation: "Sigani isseumyeon mannayo.",
      translation: "If you have time, let's meet.",
    },
  },
  {
    hangul: "(으)려고 하다",
    romanisation: "(eu)ryeogo hada",
    use: "Expresses intention or plan to do something.",
    forms: [
      {
        condition: "After consonant",
        form: "으려고 하다",
      },
      {
        condition: "After vowel",
        form: "려고 하다",
      },
    ],
    example: {
      hangul: "한국에 가려고 해요.",
      romanisation: "Hangug-e garyeogo haeyo.",
      translation: "I plan to go to Korea.",
    },
  },
  {
    hangul: "(으)ㄴ/는 것 같다",
    romanisation: "(eu)n/neun geot gatda",
    use: "Expresses a guess or assumption, meaning 'seems like'.",
    forms: [
      {
        condition: "Adjective",
        form: "은 것 같다",
      },
      {
        condition: "Present verb",
        form: "는 것 같다",
      },
      {
        condition: "Past verb",
        form: "은 것 같다",
      },
    ],
    example: {
      hangul: "비가 오는 것 같아요.",
      romanisation: "Biga oneun geot gatayo.",
      translation: "It seems like it's raining.",
    },
  },
];
