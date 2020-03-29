/*
 * Author: Tim Sullivan
 * Mar 28 2020
 */

import * as serviceWorker from './serviceWorker';
import { gameDone$, gameStart$, showWait } from './game';

const root = document.getElementById('root') as HTMLDivElement;
const wait = showWait();
root.appendChild(wait.domElement);

gameStart$.subscribe(game => {
  root.innerText = '';
  root.appendChild(game.domElement);
});
gameDone$.subscribe(done => {
  root.innerText = '';
  root.appendChild(done.domElement);
});


// app to work offline and load faster
serviceWorker.register();
