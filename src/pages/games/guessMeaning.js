import VERB_DB from '../../utils/verbs_db';
import GuessingGame from '../../components/guessingGame';
import { isMatch } from '../../utils/functions';
import { Form } from '../../utils/classes/form';

/** @type [Form]*/
const verbArray = VERB_DB.map((verb) => verb.dictionary);

export default function GuessMeaning() {
  /**
   * @param {Form} question
   * @param {String} guess
   */
  function verifyGuess(question, guess) {
    if (guess === null || guess === '') {
      return false;
    }
    return isMatch(question.english, guess);
  }

  /**
   * @param {Form} question
   */
  function getQuestion(question) {
    return (
      <>
        {question.japanese} ({question.romanji})
      </>
    );
  }

  /**
   * @param {Form} question
   */
  function getResponse(question) {
    return <>{question.english}</>;
  }

  //return GuessingGame(verbArray, verifyGuess, getQuestion, getResponse);
  return (
    <>
		<div className='ui one column stackable center aligned page grid'>
			<div className='column twelve wide'>
        <p>Write in english the meaning of the verb</p>
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
