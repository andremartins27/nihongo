import VERB_DB from "../../utils/verbs_db";
import Conjugation from "../../pages/verbs/verb_rules";

/**
 * @type {Form}
 * @return {String}
 */
function printForm(form) {
  return `${form.japanese} (${form.romanji})`;
}

function getColor(type) {
  if (type === "u") {
    return "blue-opaque";
  } else if (type === "ru") {
    return "green-opaque";
  } else if (type === "irregular") {
    return "red-opaque";
  }
  return "";
}

function Verbs() {
  return (
    <div className="ui container" style={{ padding: "1em" }}>
      <div>
        <div className="ui blue-opaque label">U Verb</div>
        <div className="ui green-opaque label">RU Verb</div>
        <div className="ui red-opaque label">Irregular Verb</div>
      </div>
      <table className="ui selectable celled table">
        <thead>
          <tr>
            <th>English</th>
            <th>Dictionary</th>
            <th>Present</th>
            <th>Present Negative</th>
          </tr>
        </thead>
        <tbody>
          {VERB_DB.sort((verb1, verb2) => {
            return verb1.dictionary.english.localeCompare(
              verb2.dictionary.english,
            );
          }).map(
            /** @type {Verb} */ (verb) => {
              let dictionary = verb.dictionary;
              let present = Conjugation.present(verb);
              let presentNegative = Conjugation.presentNegative(verb);
              return (
                <tr key={dictionary.english} className={getColor(verb.type)}>
                  <td>{dictionary.english}</td>
                  <td>{printForm(dictionary)}</td>
                  <td>{printForm(present)}</td>
                  <td>{printForm(presentNegative)}</td>
                </tr>
              );
            },
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Verbs;
