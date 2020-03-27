import * as serviceWorker from './serviceWorker';
import { startGame } from './game';

const root = document.getElementById('root') as HTMLDivElement;
const game = startGame();
root.appendChild(game.domElement);

// app to work offline and load faster
serviceWorker.register();
