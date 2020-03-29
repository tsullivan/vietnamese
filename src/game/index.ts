export { gameDone$ } from './done';
export { gameStart$ } from './game';
export { showWait } from './wait';

export interface Game {
  domElement: HTMLDivElement;
}

export interface Score {
  correct: string[];
  incorrect: string[];
}
