import { useState } from 'react';
import Questionaire from '../utils/classes/questionaire';

function StartGame({ onStart }) {
  return (
    <div className='ui centered card'>
      <div
        className='ui bottom attached button'
        onClick={onStart}
      >
        Start
      </div>
    </div>
  );
}

function QuestionGuess({ question, onGuess }) {
  const [guess, setGuess] = useState('');

  function getGuess() {
    return guess.trim();
  }
  function handleEnter(e) {
    if (e.key === 'Enter' && getGuess() !== '') {
      onGuess(getGuess());
    }
  }

  return (
    <div className='ui centered card'>
      <div className='content'>
        <div className='header'>{question}</div>
        <div className='description'>
          <div className='ui fluid input'>
            <input
              type='text'
              value={guess}
              onKeyDown={handleEnter}
              onChange={(e) => setGuess(e.target.value)}
              autoFocus
            ></input>
          </div>
        </div>
      </div>
      <div
        className='ui bottom attached button'
        onClick={() => {
          if (guess !== '') {
            onGuess(getGuess());
          }
        }}
      >
        <i className='question icon'></i>
        Guess
      </div>
    </div>
  );
}

function QuestionResponse({ guess, response, correct, nextQuestion, finished }) {
  const [currGuess, setCurrGuess] = useState(/** @type {String}*/ guess);

  function handleEnter(e) {
    if (e.key === 'Enter') {
      nextQuestion();
    }
  }

  return (
    <div className='ui centered card'>
      <div className={`${correct ? 'green-half' : 'red-half'} content`}>
        <div className='header'>{response}</div>
        <div className='description'>
          <div className='ui fluid input'>
            <input
              type='text'
              value={currGuess}
              onKeyDown={handleEnter}
              autoFocus
              onChange={(e) => setCurrGuess(e.target.value)}
            ></input>
          </div>
        </div>
      </div>
      <div
        className={`ui ${correct ? 'green-half' : 'red-half'} bottom attached button`}
        onClick={nextQuestion}
      >
        <i className={`icon ${correct ? 'check' : 'x'}`}></i>
        {finished ? 'New Game' : 'Next'}
      </div>
    </div>
  );
}
/**
 * @param {Questionaire} game
 */
function GameStatus({ game }) {
  if (game === null) {
    return <></>;
  }
  return (
    <div className='ui centered card'>
      <div className='content'>
        <div className='header'>
          Correct: {game.correct}
          <br />
          Wrong: {game.wrong}
        </div>
      </div>
    </div>
  );
}

export default function GuessingGame({ questions, verifyGuess, questionProvider, responseProvider }) {
  const [/** @type {Questionaire} */ game, setGame] = useState(null);
  const [/** @type {Questionaire} */ currGuess, setCurrGuess] = useState('');

  function updateState() {
    setGame(new Questionaire(game));
  }
  function isCorrect(guess) {
    return verifyGuess(game.question, guess ? guess : currGuess);
  }

  function guessWord(guess) {
    setCurrGuess(guess);
    if (isCorrect(guess)) {
      game.correct++;
    } else {
      game.wrong++;
    }
    game.guessed = true;
    updateState();
  }

  function nextWord() {
    if (game.isFinished()) {
      newGame();
    } else {
      setCurrGuess('');
      game.clearGuess();
      game.newQuestion();
      updateState();
    }
  }

  function newGame() {
    let g = new Questionaire(questions, setGame, verifyGuess);
    g.newQuestion();
    setGame(g);
  }

  function QuestionOrResponse(g) {
    if (g !== null) {
      return g.guessed ? (
        <QuestionResponse
          guess={currGuess}
          response={responseProvider(g.question)}
          correct={isCorrect()}
          finished={g.isFinished()}
          nextQuestion={nextWord}
        />
      ) : (
        <QuestionGuess
          question={questionProvider(g.question)}
          onGuess={guessWord}
        />
      );
    } else {
      return <StartGame onStart={newGame} />;
    }
  }

  return (
    <div className='ui one column stackable center aligned page grid'>
      <div className='column twelve wide'>
        <GameStatus game={game} />
        {QuestionOrResponse(game)}
      </div>
    </div>
  );
}
