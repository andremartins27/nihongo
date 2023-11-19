import VERB_DB from "../../utils/verbs_db";
import GuessingGame from "../../components/guessingGame";
import {isMatch} from "../../utils/functions";
import {Verb} from "../../utils/classes/verb"
import Conjugation from "../verbs/verb_rules";

/** @type [Verb]*/
const verbArray = VERB_DB;

export default function GuessConjugation() {

	/**
   * @param {Verb} question
	 * @param {String} guess
   */
	function verifyGuess(question, guess) {
		let present = Conjugation.present(question);
		return isMatch(present.japanese, guess) || isMatch(present.romanji, guess);
	}

	/**
   * @param {Verb} question
   */
	function getQuestion(question) {
		return (<>{question.dictionary.japanese} ({question.dictionary.romanji})</>);
	}

	/**
   * @param {Verb} question
   */
	function getResponse(question) {
		let present = Conjugation.present(question);
		return (<>{present.japanese} ({present.romanji})</>);
	}

	return GuessingGame(verbArray, verifyGuess, getQuestion, getResponse);

}