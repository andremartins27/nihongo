import VERB_DB from "../../utils/verbs_db";
import GuessingGame from "../../components/guessingGame";
import {isMatch} from "../../utils/functions";
import {Form} from "../../utils/classes/form"

/** @type [Form]*/
const verbArray = VERB_DB.map(verb => verb.dictionary);

export default function GuessMeaning() {
	
	/**
   * @param {Form} question
	 * @param {String} guess
   */
	function verifyGuess(question, guess) {
		return isMatch(question.english, guess)
	}

	/**
   * @param {Form} question
   */
	function getQuestion(question) {
		return (<>{question.japanese} ({question.romanji})</>);
	}

	/**
   * @param {Form} question
   */
	function getResponse(question) {
		return (<>{question.english}</>)
	}
	
	return GuessingGame(verbArray, verifyGuess, getQuestion, getResponse);
	
}