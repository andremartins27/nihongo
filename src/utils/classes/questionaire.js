import { randomNumber } from "../functions";

export default class Questionaire {
  correct;
  wrong;

  /** @type []*/
  questions;
  question;
  
  guessed;

  /** @type [number]*/
  usedQuestionsIdx;

  constructor(arg) {
    if (arg !== null && arg instanceof Questionaire) {
      this.correct = arg.correct;
      this.wrong = arg.wrong;

      this.questions = arg.questions;
      this.question = arg.question;

      this.guessed = arg.guessed;

      this.usedQuestionsIdx = arg.usedQuestionsIdx;
    } else {
      this.correct = 0;
      this.wrong = 0;

      this.questions = arg;
      this.question = null;

      this.guessed = false;

      this.usedQuestionsIdx = [];
    }
    
  }
  isFinished() {
    return this.correct + this.wrong === this.questions.length;
  }

  newQuestion() {
    let idx = randomNumber(this.questions.length);
    while (this.usedQuestionsIdx.includes(idx)) {
      idx = randomNumber(this.questions.length);
    }
    this.usedQuestionsIdx.push(idx);
    this.question = this.questions[idx];
  }

  clearGuess() {
    this.guessed = false;
  }
}