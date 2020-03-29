import * as Rx from 'rxjs';
import { Game, Score } from './';
import { delay, filter, map, tap } from 'rxjs/operators';
import { getChallenge } from './vietnamese';
import { showDoneButton } from './done';

export const gameStart$ = new Rx.ReplaySubject<Game>();

function isButton(target: unknown | HTMLButtonElement): target is HTMLButtonElement {
  return target && !!(target as HTMLButtonElement).value;
}
const makeButtons = (options: string[]) =>
  options.map(o => `<button value="${o}">${o}</button>`).join('&nbsp;');

export function startGame() {
  console.log(`Starting the game!`);

  const startTime = Date.now();
  const score: Score = { correct: [], incorrect: [], time: 0 };
  let challenge = getChallenge();
  let firstTry = true; // answer is correct when the guess is a first try

  const challengeElement = document.createElement('p');
  const optionsElement = document.createElement('p');
  challengeElement.textContent = challenge.text;
  optionsElement.innerHTML = makeButtons(challenge.options);

  Rx.fromEvent(optionsElement, 'click')
    .pipe(
      map(event => event as MouseEvent),
      filter(({ target }) => isButton(target)),
      map(({ target }) => (target as HTMLButtonElement).value),
      map(guess => {
        if (guess === challenge.answer) {
          challengeElement.textContent = `${challenge.text}: ${challenge.answer} 👍🏻`;
          if (firstTry) {
            score.correct.push(challenge.answer); // FIXME always be vn text
          }
          return () => {
            challenge = getChallenge(challenge);
            challengeElement.textContent = challenge.text;
            optionsElement.innerHTML = makeButtons(challenge.options);
            firstTry = true;
          };
        } else {
          optionsElement.innerHTML = '🚫';
          if (firstTry) {
            score.incorrect.push(challenge.answer); // FIXME always be vn text
          }
          firstTry = false;
          return () => {
            optionsElement.innerHTML = makeButtons(challenge.shuffle());
          };
        }
      }),
      tap(() => {
        score.time = Date.now() - startTime;
      }),
      delay(600),
      map(fn => fn())
    )
    .subscribe();

  const domElement = document.createElement('div');
  domElement.appendChild(challengeElement);
  domElement.appendChild(optionsElement);
  domElement.appendChild(showDoneButton(score));

  gameStart$.next({ domElement });
}
