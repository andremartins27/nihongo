import { JapaneseForm } from "./form";

export class Column {
  /**
   * @type JapaneseForm
   */
  a;

  /**
   * @type JapaneseForm
   */
  i;

  /**
   * @type JapaneseForm
   */
  u;

  /**
   * @type JapaneseForm
   */
  e;

  /**
   * @type JapaneseForm
   */
  o;

  /**
   *
   * @param {String} japanese
   * @param {String} romanji
   * @returns {Column} the current instance
   */
  setA(japanese, romanji) {
    this.a = new JapaneseForm(japanese, romanji);
    return this;
  }

  /**
   *
   * @param {String} japanese
   * @param {String} romanji
   * @returns {Column} the current instance
   */
  setI(japanese, romanji) {
    this.i = new JapaneseForm(japanese, romanji);
    return this;
  }

  /**
   *
   * @param {String} japanese
   * @param {String} romanji
   * @returns {Column} the current instance
   */
  setU(japanese, romanji) {
    this.u = new JapaneseForm(japanese, romanji);
    return this;
  }

  /**
   *
   * @param {String} japanese
   * @param {String} romanji
   * @returns {Column} the current instance
   */
  setE(japanese, romanji) {
    this.e = new JapaneseForm(japanese, romanji);
    return this;
  }

  /**
   *
   * @param {String} japanese
   * @param {String} romanji
   * @returns {Column} the current instance
   */
  setO(japanese, romanji) {
    this.o = new JapaneseForm(japanese, romanji);
    return this;
  }
}

export class Table {
  /**
   * @type Column
   */
  vowel;

  /**
   * @type Column
   */
  k;
  
  /**
   * @type Column
   */
  g;

  /**
   * @type Column
   */
  s;

  /**
   * @type Column
   */
  z;

  /**
   * @type Column
   */
  t;

  /**
   * @type Column
   */
  d;

  /**
   * @type Column
   */
  n;

  /**
   * @type Column
   */
  h;

  /**
   * @type Column
   */
  b;

  /**
   * @type Column
   */
  p;

  /**
   * @type Column
   */
  m;

  /**
   * @type Column
   */
  y;

  /**
   * @type Column
   */
  r;

  /**
   * @type Column
   */
  w;
}
