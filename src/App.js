import logo from "./logo.svg";
import "./App.css";

import VERB_DB from "./utils/verbs_db";
import Conjugation from "./pages/verbs/verb_rules";


/**
 * @type {Form}
 * @return {String}
 */
function printForm(form) {
  return `${form.japanese} (${form.romanji})`
}

function App() {
  return (
    <div className="ui container" style={{padding: '1em'}}>
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
          {VERB_DB.map(
            /** @type {Verb} */ (verb) => {
              let dictionary = verb.dictionary;
              let present = Conjugation.present(verb);
              let presentNegative = Conjugation.presentNegative(verb);
              return (<tr key={dictionary.english}>
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

export default App;
