import * as Rx from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { getChallenge } from './vietnamese';

function isButton(target: unknown | HTMLButtonElement): target is HTMLButtonElement {
  return target && !!(target as HTMLButtonElement).value;
}

const makeButtons = (options: string[]) => options.map(o => {
  return `<button value="${o}">${o}</button>`;
}).join();

export function startGame(): { domElement: HTMLDivElement } {
  const clickButton$ = Rx.fromEvent(document, 'click').pipe(
    map(event => (event as MouseEvent)),
    filter(({ target }) => isButton(target)),
    map(({ target }) => (target as HTMLButtonElement).value)
  );

  const domElement = document.createElement('div');
  const challengeElement = document.createElement('p');
  const optionsElement = document.createElement('p');

  let { text, answer, options } = getChallenge();
  challengeElement.textContent = text;
  optionsElement.innerHTML = makeButtons(options);

  domElement.appendChild(challengeElement);
  domElement.appendChild(optionsElement);

  const getNext$ = clickButton$
    .pipe(
      map(value => {
        if (value === answer) {
          ({ text, answer, options } = getChallenge()); // FIXME no repeats
          challengeElement.textContent = text;
          optionsElement.innerHTML = makeButtons(options);
        }

      })
    );

  getNext$.subscribe();

  return { domElement };
}
