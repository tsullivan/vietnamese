import * as Rx from 'rxjs';
import { Game, Score } from './';
import { map, take } from 'rxjs/operators';

export const gameDone$ = new Rx.ReplaySubject<Game>();

const showDonePage = (score: Score) => {
  const doneElement = document.createElement('p');
  doneElement.innerHTML = `Thank you for playing.`;

  console.log(JSON.stringify({ score }));

  const donePage = document.createElement('div');
  donePage.appendChild(doneElement);

  return { domElement: doneElement };
};

export const showDoneButton = (score: Score) => {
  const doneButton = document.createElement('button');
  doneButton.appendChild(document.createTextNode('hoàn thành'));
  Rx.fromEvent(doneButton, 'click')
    .pipe(
      take(1),
      map(() => {
        gameDone$.next(showDonePage(score));
      })
    )
    .subscribe();

  const doneContainer = document.createElement('p');
  doneContainer.appendChild(document.createElement('br'));
  doneContainer.appendChild(document.createElement('br'));
  doneContainer.appendChild(document.createElement('br'));
  doneContainer.appendChild(doneButton);
  return doneContainer;
};
