import { Form } from "../../utils/classes/form";
import Hiragana from "../../utils/table";

/**
 * Replace "ru" with "masu"
 * Ex:
 *  taberu -> tabemasu
 *  neru -> nemasu
 * @param {Verb} verb
 * @return {Form}
 */
function present_RU(verb) {
  let dictionary = verb.dictionary;
  return new Form(
    dictionary.japanese.replace("る", "ます"),
    dictionary.romanji.replace("ru", "masu"),
    dictionary.english,
  );
}

/**
 * Replace "ru" with "masen"
 * Ex:
 *  taberu -> tabemasen
 *  neru -> nemasen
 * @param {Verb} verb
 * @return {Form}
 */
function presentNegative_RU(verb) {
  let dictionary = verb.dictionary;
  return new Form(
    dictionary.japanese.replace("る", "ません"),
    dictionary.romanji.replace("ru", "masen"),
    dictionary.english,
  );
}

/**
 * Replace "u" with "imasu". The "sound" changes from the row "u" to "i" but in the same column. "mu" -> "mi".
 * Ex:
 *  nomu -> nomimasu
 *  hanasu -> hanashimasu
 *  iku -> ikimasu
 * @param {Verb} verb
 * @return {Form}
 */
function present_U(verb) {
  let dictionary = verb.dictionary;

  //get the last sylable
  let sylable = dictionary.japanese.slice(
    dictionary.japanese.length - 1,
    dictionary.japanese.length,
  );

  let column = Hiragana.findColumn(sylable);
  let sylableRomanji = Hiragana.findRomanji(sylable);

  let jp =
    dictionary.japanese.slice(
      0,
      dictionary.japanese.length - 1,
    ) +
    column.i.japanese +
    "ます";
  let rmj =
    dictionary.romanji.slice(
      0,
      dictionary.romanji.length - sylableRomanji.length,
    ) +
    column.i.romanji +
    "masu";

  return new Form(jp, rmj, dictionary.english);
}

/**
 * Replace "u" with "imasen". The "sound" changes from the row "u" to "i" but in the same column. "mu" -> "mi".
 * Ex:
 *  nomu -> nomimasen
 *  hanasu -> hanashimasen
 *  iku -> ikimasen
 * @param {Verb} verb
 * @return {Form}
 */
function presentNegative_U(verb) {
  let dictionary = verb.dictionary;

  //get the last sylable
  let sylable = dictionary.japanese.slice(
    dictionary.japanese.length - 1,
    dictionary.japanese.length,
  );

  let column = Hiragana.findColumn(sylable);
  let sylableRomanji = Hiragana.findRomanji(sylable);

  let jp =
    dictionary.japanese.slice(
      0,
      dictionary.japanese.length - 1,
    ) +
    column.i.japanese +
    "ません";
  let rmj =
    dictionary.romanji.slice(
      0,
      dictionary.romanji.length - sylableRomanji.length,
    ) +
    column.i.romanji +
    "masen";

  return new Form(jp, rmj, dictionary.english);
}

/**
 * Irregular verbs:
 *  suru -> shimasu
 *  kuru -> kimasu
 * @param {Verb} verb
 * @return {Form}
 */
function present_Irregular(verb) {
  let dictionary = verb.dictionary;

  let toAddJP =
    dictionary.japanese.slice(
      dictionary.japanese.length - 2,
      dictionary.japanese.length,
    ) === "する"
      ? "します"
      : "きます";
  let toAddRMJ =
    dictionary.romanji.slice(
      dictionary.romanji.length - 4,
      dictionary.romanji.length,
    ) === "suru"
      ? "shimasu"
      : "kimasu";

  let jp =
    dictionary.japanese.slice(
      0,
      dictionary.japanese.length - 2,
    ) + toAddJP;
  let rmj =
    dictionary.romanji.slice(
      0,
      dictionary.romanji.length - 4,
    ) + toAddRMJ;

  return new Form(jp, rmj, dictionary.english);
}

/**
 * Irregular verbs:
 *  suru -> shimasen
 *  kuru -> kimasen
 * @param {Verb} verb
 * @return {Form}
 */
function presentNegative_Irregular(verb) {
  let dictionary = verb.dictionary;

  let toAddJP =
    dictionary.japanese.slice(
      dictionary.japanese.length - 2,
      dictionary.japanese.length,
    ) === "する"
      ? "しません"
      : "きません";
  let toAddRMJ =
    dictionary.romanji.slice(
      dictionary.romanji.length - 4,
      dictionary.romanji.length,
    ) === "suru"
      ? "shimasen"
      : "kimasen";

  let jp =
    dictionary.japanese.slice(
      0,
      dictionary.japanese.length - 2,
    ) + toAddJP;
  let rmj =
    dictionary.romanji.slice(
      0,
      dictionary.romanji.length - 4,
    ) + toAddRMJ;

  return new Form(jp, rmj, dictionary.english);
}

/**
 * @param {Verb} verb
 * @return {Form}
 */
function present(verb) {
  if (verb.type === "u") {
    return present_U(verb);
  } else if (verb.type === "ru") {
    return present_RU(verb);
  } else {
    return present_Irregular(verb);
  }
}

/**
 * @param {Verb} verb
 * @return {Form}
 */
function presentNegative(verb) {
  if (verb.type === "u") {
    return presentNegative_U(verb);
  } else if (verb.type === "ru") {
    return presentNegative_RU(verb);
  } else {
    return presentNegative_Irregular(verb);
  }
}

const Conjugation = {
  present,
  presentNegative,
};

export default Conjugation;
