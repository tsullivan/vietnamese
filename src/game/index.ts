import * as THREE from 'three';
import { buffer, debounceTime, map } from 'rxjs/operators';
import { Game } from './game';
import { getChallenge } from './vietnamese';
import { problemObjectFactory } from './text';
import { setup } from './setup';

export async function startGame() {
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  const { camera, scene, keyUp$, resize$ } = setup(renderer);
  resize$.subscribe();

  const game = new Game(renderer, scene, camera);
  const getProblemObject = await problemObjectFactory();

  let { questionText, answerText } = getChallenge();
  let problemBuffer = `${questionText} = ?`;
  let problem = await getProblemObject(problemBuffer);
  scene.add(problem);

  let answerBuffer = '';
  keyUp$
    .pipe(
      map(key => {
        answerBuffer += key;
        scene.remove(problem);
        problem = getProblemObject(`${questionText} = ${answerBuffer}`);
        scene.add(problem);
        return answerBuffer;
      }),
      buffer(keyUp$.pipe(debounceTime(999))),
      map(() => {
        scene.remove(problem);
        if (answerBuffer === answerText) {
          ({ questionText, answerTexts } = getChallenge()); // TODO keep score
          problemBuffer = `${questionText} = ?`;
        }
        problem = getProblemObject(problemBuffer);
        scene.add(problem);
        answerBuffer = '';
      }),
    )
    .subscribe();

  game.update$.subscribe(async () => {
    // animations
  });

  return game;
}
