import * as Rx from 'rxjs';
import { delay, filter, map } from 'rxjs/operators';
import { getChallenge } from './vietnamese';

function isButton(target: unknown | HTMLButtonElement): target is HTMLButtonElement {
  return target && !!(target as HTMLButtonElement).value;
}

const makeButtons = (options: string[]) =>
  options
    .map(o => `<button value="${o}">${o}</button>`)
    .join('&nbsp;');

export function startGame(): { domElement: HTMLDivElement } {
  const challengeElement = document.createElement('p');
  const optionsElement = document.createElement('p');

  let challenge = getChallenge();
  challengeElement.textContent = challenge.text;
  optionsElement.innerHTML = makeButtons(challenge.options);

  const guesses$ = Rx.fromEvent(document, 'click').pipe(
    map(event => event as MouseEvent),
    filter(({ target }) => isButton(target)),
    map(({ target }) => (target as HTMLButtonElement).value),
    map(guess => {
      if (guess === challenge.answer) {
        challenge = getChallenge(challenge);
        challengeElement.textContent = challenge.text;
        optionsElement.innerHTML = makeButtons(challenge.options);
        return true;
      } else {
        optionsElement.innerHTML = '🚫';
        return false;
      }
    }),
    filter(isCorrect => !isCorrect),
    delay(600),
    map(() => {
      optionsElement.innerHTML = makeButtons(challenge.shuffle());
    })
  );

  guesses$.subscribe();

  const domElement = document.createElement('div');
  domElement.appendChild(challengeElement);
  domElement.appendChild(optionsElement);

  return { domElement };
}
