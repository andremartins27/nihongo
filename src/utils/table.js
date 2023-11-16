import { Table, Column } from "./classes/table";

const vowel = new Column()
  .setA("あ", "a")
  .setI("い", "i")
  .setU("う", "u")
  .setE("え", "e")
  .setO("お", "o");

const k = new Column()
  .setA("か", "ka")
  .setI("き", "ki")
  .setU("く", "ku")
  .setE("け", "ke")
  .setO("こ", "ko");

const g = new Column()
  .setA("が", "ga")
  .setI("ぎ", "gi")
  .setU("ぐ", "gu")
  .setE("げ", "ge")
  .setO("ご", "go");

const s = new Column()
  .setA("さ", "sa")
  .setI("し", "shi")
  .setU("す", "su")
  .setE("せ", "se")
  .setO("そ", "so");

const z = new Column()
  .setA("ざ", "za")
  .setI("じ", "ji")
  .setU("ず", "zu")
  .setE("ぜ", "ze")
  .setO("ぞ", "zo");

const t = new Column()
  .setA("た", "ta")
  .setI("ち", "chi")
  .setU("つ", "tsu")
  .setE("て", "te")
  .setO("と", "to");

const d = new Column().setA("だ", "da").setE("で", "de").setO("ど", "do");

const n = new Column()
  .setA("な", "na")
  .setI("に", "ni")
  .setU("ぬ", "nu")
  .setE("ね", "ne")
  .setO("の", "no");

const h = new Column()
  .setA("は", "ha")
  .setI("ひ", "hi")
  .setU("ふ", "fu")
  .setE("へ", "he")
  .setO("ほ", "ho");

const b = new Column()
  .setA("ば", "ba")
  .setI("び", "bi")
  .setU("ぶ", "bu")
  .setE("べ", "be")
  .setO("ぼ", "bo");

const p = new Column()
  .setA("ぱ", "pa")
  .setI("ぴ", "pi")
  .setU("ぷ", "pu")
  .setE("ぺ", "pe")
  .setO("ぽ", "po");

const m = new Column()
  .setA("ま", "ma")
  .setI("み", "mi")
  .setU("む", "mu")
  .setE("め", "me")
  .setO("も", "mo");

const y = new Column().setA("や", "ya").setU("ゆ", "yu").setO("よ", "yo");

const r = new Column()
  .setA("ら", "ra")
  .setI("り", "ri")
  .setU("る", "ru")
  .setE("れ", "re")
  .setO("ろ", "ro");

const w = new Column().setA("わ", "wa").setU("ん", "n").setO("を", "wo");

const table = new Table();
table.vowel = vowel;
table.k = k;
table.g = g;
table.s = s;
table.z = z;
table.t = t;
table.d = d;
table.n = n;
table.h = h;
table.b = b;
table.p = p;
table.m = m;
table.y = y;
table.r = r;
table.w = w;

/**
 * @param {String} japanese
 * @return {Column}
 */
function findColumn(japanese) {
  for (const column in table) {
    for (const r in table[column]) {
      if (table[column][r].japanese === japanese) {
        return table[column];
      }
    }
  }
  return null;
}

/**
 * @param {String} japanese
 * @return {String}
 */
function findRomanji(japanese) {
  for (const column in table) {
    for (const r in table[column]) {
      if (table[column][r].japanese === japanese) {
        return table[column][r].romanji;
      }
    }
  }
  return null;
}

const Hiragana = {
  table: table,
  findColumn,
  findRomanji,
};

export default Hiragana;
