import VERB_DB from '../../utils/verbs_db';
import GuessingGame from '../../components/guessingGame';
import { Verb } from '../../utils/classes/verb';

/** @type [Verb]*/
const verbArray = VERB_DB;

export default function GuessType() {
  /**
   * @param {Verb} question
   * @param {String} guess
   */
  function verifyGuess(question, guess) {
    return question.type === guess;
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
    return <>Type: {question.type}</>;
  }

  return (
    <>
		<div className='ui one column stackable center aligned page grid'>
			<div className='column twelve wide'>
        <p>Write the type of the Verb.</p>
				<p>Use: u, ru or irregular</p>
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
