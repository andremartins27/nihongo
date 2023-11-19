export class Form {
  /**
   * @type String
   */
  japanese;
  /**
   * @type String
   */
  romanji;
  /**
   * @type String
   */
  english;

  constructor(japanese, romanji, english) {
    this.japanese = japanese;
    this.romanji = romanji;
    this.english = english;
  }
}

export class JapaneseForm {
  /**
   * @type String
   */
  japanese;
  /**
   * @type String
   */
  romanji;

  constructor(japanese, romanji) {
    this.japanese = japanese;
    this.romanji = romanji;
  }
}
