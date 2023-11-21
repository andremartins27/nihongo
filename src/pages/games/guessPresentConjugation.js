import VERB_DB from '../../utils/verbs_db';
import GuessingGame from '../../components/guessingGame';
import { isMatch } from '../../utils/functions';
import { Verb } from '../../utils/classes/verb';
import Conjugation from '../verbs/verb_rules';

/** @type [Verb]*/
const verbArray = VERB_DB;

export default function GuessConjugation() {
  /**
   * @param {Verb} question
   * @param {String} guess
   */
  function verifyGuess(question, guess) {
    if (guess === null || guess === '') {
      return false;
    }
    let present = Conjugation.present(question);
    return isMatch(present.japanese, guess) || isMatch(present.romanji, guess);
  }

  /**
   * @param {Verb} question
   */
  function getQuestion(question) {
    return (
      <>
        {question.dictionary.japanese} ({question.dictionary.romanji})
      </>
    );
  }

  /**
   * @param {Verb} question
   */
  function getResponse(question) {
    let present = Conjugation.present(question);
    return (
      <>
        {present.japanese} ({present.romanji})
      </>
    );
  }

  return (
    <>
		<div className='ui one column stackable center aligned page grid'>
			<div className='column twelve wide'>
        <p>Write with hiragana or romanji the conjungation of the verb in the present tense</p>
      </div>
      </div>
      <div>
        <GuessingGame
          questions={verbArray}
          verifyGuess={verifyGuess}
          questionProvider={getQuestion}
          responseProvider={getResponse}
        />
      </div>
    </>
  );
}
