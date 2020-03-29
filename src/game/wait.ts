import * as Rx from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Game } from './';
import { startGame } from './game';

export function showWait(): Game {
  Rx.fromEvent(document, 'click')
    .pipe(
      take(1),
      map(startGame)
    )
    .subscribe();

  const domElement = document.createElement('div');
  domElement.innerHTML = `<p>bắt đầu</p>`;
  return { domElement };
}


