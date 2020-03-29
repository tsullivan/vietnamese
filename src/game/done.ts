import * as Rx from 'rxjs';
import { Game, Score } from './';
import { map, take } from 'rxjs/operators';

export const gameDone$ = new Rx.ReplaySubject<Game>();

const showDonePage = (score: Score) => {
  const p1 = document.createElement('p');
  p1.innerHTML = `Thank you for playing!`;

  const tab = document.createElement('table');
  tab.innerHTML = (() => {
    const correct = `<td>correct: </td><td>${score.correct.join(', ')}</td>`;
    const incorrect = `<td>incorrect: </td><td>${score.incorrect.join(', ')}</td>`;
    const time = `<td>time: </td><td>${score.time}</td>`;

    return `<thead><td><bold>score</bold></td></thead>
    <tbody>
    <tr>${correct}</tr>
    <tr>${incorrect}</tr>
    <tr>${time}</tr>
    </tbody>`;
  })();

  const donePage = document.createElement('div');
  donePage.appendChild(p1);
  donePage.appendChild(tab);
  return { domElement: donePage };
};

export const showDoneButton = (score: Score) => {
  const doneButton = document.createElement('button');
  doneButton.appendChild(document.createTextNode('xong'));
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
