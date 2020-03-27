import * as serviceWorker from './serviceWorker';
import { startGame } from './game';

const root = document.getElementById('root') as HTMLDivElement;
startGame().then(game => {
  root.appendChild(game.domElement);
  game.init();
});

// app to work offline and load faster
serviceWorker.register();
