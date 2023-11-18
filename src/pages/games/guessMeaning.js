import VERB_DB from "../../utils/verbs_db";
import {useState} from "react";

const maxSize = VERB_DB.length;
function randomNumber() {
	return Math.floor(Math.random() * maxSize);
}

class GameState {
	correct;
	wrong;
	total;
	
	constructor(total) {
		this.correct = 0;
		this.wrong = 0;
		this.total = total;
	}
}

export default function GuessMeaning() {
	const [/** @type {Form}*/ word, setWord] = useState(null);
	const [/** @type String*/ guess, setGuess] = useState('')
	const [guessed, setGuessed] = useState(false);
	const [game, setGame] = useState(new GameState(maxSize));
	
	/** @type [number]*/
	let usedIndexes = []
	function randomWord(){
		if (maxSize === usedIndexes.length) {
			usedIndexes = [];
		}
		
		let idx = randomNumber();
		while (usedIndexes.includes(idx)) {
			idx = randomNumber();
		}
		usedIndexes.push(idx);
		return VERB_DB[randomNumber()].dictionary;
	}
	
	function startGame() {
		setWord(randomWord());
	}
	
	function guessWord() {
		let aux = game;
		if (isCorrect()) {
			game.correct++;
		} else {
			game.wrong++;
		}
		setGame(aux);
		setGuessed(true);
	}
	
	function nextWord() {
		setGuessed(false);
		setGuess('');
		setWord(randomWord());
	}
	
	function isCorrect() {
		return guess !== '' && word.english.includes(guess);
	}

	function handleEnter(e) {
		if (e.key === 'Enter' && guess !== '') {
			guessed ? nextWord() : guessWord()
		}
	}
	function CardHeader() {
		if(guessed) {
			return <div className="header">{word.english}</div>
		} else if (word !== null) {
			return(<div className="header">{word.japanese} ({word.romanji})</div>);
		} else {
			return(<div className="header">?</div>);
		}
	}
	function Button() {
		if (guessed) {
			return (
				<div className={`ui ${isCorrect() ? 'green-opaque' : 'red-opaque'} bottom attached button`} onClick={nextWord}>
					<i className={`icon ${isCorrect() ? 'check' : 'x'}`}></i>
					Next
				</div>
			);
		} else if (word !== null) {
			return(<div className="ui bottom attached button" onClick={guessWord}>
				<i className="question icon"></i>
				Guess
			</div>);
		} else {
			return(<div className="ui bottom attached button" onClick={startGame}>
				Start
			</div>);
		}
	}
	
	return(
		<div className="ui one column stackable center aligned page grid">
			<div className="column twelve wide">
				<div className="ui centered card">
					<div className="content">
						<div className="header">
							Correct: {game.correct}<br/>
							Wrong: {game.wrong}
						</div>
					</div>
				</div>
				<div className="ui centered card">
					<div className="content">
						<CardHeader/>
						<div className="description">
							<div className="ui fluid input">
								<input type="text" disabled={ word === null || guessed}
									onChange={e => setGuess(e.target.value)} value={guess}
									onKeyDown={handleEnter}
									></input>
							</div>
						</div>
					</div>
					<Button/>
				</div>
			</div>
		</div>
	);
	
}