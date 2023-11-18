const VERB_DB = [
  {
    type: "u",
    particle: "に/へ",
    dictionary: {
      japanese: "いく",
      romanji: "iku",
      english: "to go",
    },
  },
  {
    type: "u",
    particle: "に/へ",
    dictionary: {
      japanese: "かえる",
      romanji: "kaeru",
      english: "to go back; to return",
    },
  },
  {
    type: "u",
    particle: "を",
    dictionary: {
      japanese: "きく",
      romanji: "kiku",
      english: "to listen; to hear",
    },
  },
  {
    type: "u",
    particle: "を",
    dictionary: {
      japanese: "のむ",
      romanji: "nomu",
      english: "to drink",
    },
  },
  {
    type: "u",
    particle: "を/で",
    dictionary: {
      japanese: "はなす",
      romanji: "hanasu",
      english: "to speak; to talk",
    },
  },
  {
    type: "ru",
    particle: "を",
    dictionary: {
      japanese: "おきる",
      romanji: "okiru",
      english: "to get up",
    },
  },
  {
    type: "ru",
    particle: "を",
    dictionary: {
      japanese: "たべる",
      romanji: "taberu",
      english: "to eat",
    },
  },
  {
    type: "ru",
    particle: "",
    dictionary: {
      japanese: "ねる",
      romanji: "neru",
      english: "to sleep; to go to sleep",
    },
  },
  {
    type: "ru",
    particle: "を",
    dictionary: {
      japanese: "みる",
      romanji: "miru",
      english: "to see; to look at; to watch",
    },
  },
  {
    type: "irregular",
    particle: "に/へ",
    dictionary: {
      japanese: "くる",
      romanji: "kuru",
      english: "to come",
    },
  },
  {
    type: "irregular",
    particle: "を",
    dictionary: {
      japanese: "する",
      romanji: "suru",
      english: "to do",
    },
  },
  {
    type: "irregular",
    particle: "を",
    dictionary: {
      japanese: "べんじょする",
      romanji: "benkyosuru",
      english: "to study",
    },
  },
  {
    type: "u",
    particle: "person に",
    dictionary: {
      japanese: "あう",
      romanji: "au",
      english: "to meet; to see (a person)",
    },
  },
  {
    type: "u",
    particle: "place に thing が",
    dictionary: {
      japanese: "ある",
      romanji: "aru",
      english: "there is...",
    },
  },
  {
    type: "u",
    particle: "を",
    dictionary: {
      japanese: "かう",
      romanji: "kau",
      english: "to buy",
    },
  },
  {
    type: "u",
    particle: "person に thing を",
    dictionary: {
      japanese: "かく",
      romanji: "kaku",
      english: "to write",
    },
  },
  {
    type: "u",
    particle: "を",
    dictionary: {
      japanese: "とる",
      romanji: "toru",
      english: "to take (a picture)",
    },
  },
  {
    type: "u",
    particle: "を",
    dictionary: {
      japanese: "まつ",
      romanji: "matsu",
      english: "to wait",
    },
  },
  {
    type: "u",
    particle: "が",
    dictionary: {
      japanese: "わかる",
      romanji: "wakaru",
      english: "to understand",
    },
  },
  {
    type: "ru",
    particle: "place に thing が",
    dictionary: {
      japanese: "いる",
      romanji: "iru",
      english: "(a person)is in...; stays at...",
    },
  },
  {
    type: "u",
    particle: "",
    dictionary: {
      japanese: "およぐ",
      romanji: "oyogu",
      english: "to swim",
    },
  },
  {
    type: "u",
    particle: "person に",
    dictionary: {
      japanese: "きく",
      romanji: "kiku",
      english: "to ask",
    },
  },
  {
    type: "u",
    particle: "に",
    dictionary: {
      japanese: "のる",
      romanji: "noru",
      english: "to ride; to board",
    },
  },
  {
    type: "u",
    particle: "を",
    dictionary: {
      japanese: "やる",
      romanji: "yaru",
      english: "to do; to perform",
    },
  },
  {
    type: "ru",
    particle: "",
    dictionary: {
      japanese: "どかける",
      romanji: "dokakeru",
      english: "to go out",
    },
  },
  {
    type: "u",
    particle: "",
    dictionary: {
      japanese: "あそぶ",
      romanji: "asobu",
      english: "to play; to spend time pleasantly",
    },
  },
  {
    type: "u",
    particle: "",
    dictionary: {
      japanese: "いそぐ",
      romanji: "isogu",
      english: "to hurry",
    },
  },
  {
    type: "u",
    particle: "person に thing を",
    dictionary: {
      japanese: "かえす",
      romanji: "kaesu",
      english: "to return (a thing)",
    },
  },
  {
    type: "u",
    particle: "を",
    dictionary: {
      japanese: "けす",
      romanji: "kesu",
      english: "to turn off; to erase",
    },
  },
  {
    type: "u",
    particle: "",
    dictionary: {
      japanese: "しね",
      romanji: "shine",
      english: "to die",
    },
  },
  {
    type: "u",
    particle: "seat を",
    dictionary: {
      japanese: "すわる",
      romanji: "suwaru",
      english: "to sit down",
    },
  },
  {
    type: "u",
    particle: "",
    dictionary: {
      japanese: "たつ",
      romanji: "tatsu",
      english: "to stand up",
    },
  },
  {
    type: "u",
    particle: "",
    dictionary: {
      japanese: "たばこをすう",
      romanji: "tabako o suu",
      english: "to smoke",
    },
  },
  {
    type: "u",
    particle: "を",
    dictionary: {
      japanese: "つかう",
      romanji: "tsukau",
      english: "to use",
    },
  },
  {
    type: "u",
    particle: "person/task を",
    dictionary: {
      japanese: "てつだう",
      romanji: "tetsudau",
      english: "to help",
    },
  },
  {
    type: "u",
    particle: "に",
    dictionary: {
      japanese: "はいる",
      romanji: "hairu",
      english: "to enter",
    },
  },
  {
    type: "u",
    particle: "",
    dictionary: {
      japanese: "もつ",
      romanji: "motsu",
      english: "to carry; to hold",
    },
  },
  {
    type: "u",
    particle: "を",
    dictionary: {
      japanese: "やすむ",
      romanji: "yasumu",
      english: "to be absent; to rest",
    },
  },
  {
    type: "ru",
    particle: "を",
    dictionary: {
      japanese: "あける",
      romanji: "akeru",
      english: "to open (something)",
    },
  },
  {
    type: "ru",
    particle: "を",
    dictionary: {
      japanese: "しめる",
      romanji: "shimeru",
      english: "to close (something)",
    },
  },
  {
    type: "ru",
    particle: "person に thing を",
    dictionary: {
      japanese: "おしえる",
      romanji: "oshieru",
      english: "to teach; to instruct",
    },
  },
  {
    type: "ru",
    particle: "を",
    dictionary: {
      japanese: "わすれる",
      romanji: "wasureru",
      english: "to forget; to leave behind",
    },
  },
  {
    type: "ru",
    particle: "を",
    dictionary: {
      japanese: "おりる",
      romanji: "oriru",
      english: "to get off",
    },
  },
  {
    type: "ru",
    particle: "person に thing を",
    dictionary: {
      japanese: "かりる",
      romanji: "kariru",
      english: "to borrow",
    },
  },
  {
    type: "ru",
    particle: "",
    dictionary: {
      japanese: "シャワーをおびる",
      romanji: "shawaa o obiru",
      english: "to take a shower",
    },
  },
  {
    type: "ru",
    particle: "を",
    dictionary: {
      japanese: "つける",
      romanji: "tsukeru",
      english: "to turn on",
    },
  },
  {
    type: "irregular",
    particle: "に",
    dictionary: {
      japanese: "でんわする",
      romanji: "denwasuru",
      english: "to call",
    },
  },
  {
    type: "irregular",
    particle: "を",
    dictionary: {
      japanese: "つれてくる",
      romanji: "tsuretekuru",
      english: "to bring (a person)",
    },
  },
  {
    type: "irregular",
    particle: "を",
    dictionary: {
      japanese: "もってくる",
      romanji: "mottekuru",
      english: "to bring (a thing)",
    },
  },
  {
    type: "u",
    particle: "に",
    dictionary: {
      japanese: "つく",
      romanji: "tsuku",
      english: "to arrive",
    },
  },
  {
    type: "u",
    particle: "を",
    dictionary: {
      japanese: "わたる",
      romanji: "wataru",
      english: "to cross",
    },
  },
];

export default VERB_DB;
