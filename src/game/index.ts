import * as THREE from 'three';
import { answersObjectsFactory, challengeObjectFactory } from './text';
import { Game } from './game';
import { getChallenge } from './vietnamese';
import { map } from 'rxjs/operators';
import { setup } from './setup';

export async function startGame() {
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  const { camera, scene, keyUp$, resize$ } = setup(renderer);
  resize$.subscribe();

  const game = new Game(renderer, scene, camera);
  const getChallengeObject = await challengeObjectFactory();
  const getAnswersObjects = await answersObjectsFactory();

  const { questionText, answerTexts } = getChallenge();
  let problem = getChallengeObject(questionText);
  let answers = getAnswersObjects(answerTexts.join(' - '));

  scene.add(problem);
  scene.add(answers);

  keyUp$
    .pipe(
      map(key => {
        // switch the answers left/right or submit
        if (key === 'enter') {
          // new challenge
          problem = getChallengeObject(questionText);
          answers = getAnswersObjects(answerTexts.join(' - '));
          scene.remove(problem);
          scene.remove(answers);

          scene.add(problem);
          scene.add(answers);
        }
      })
    )
    .subscribe();

  game.update$.subscribe(async () => {
    // animations
  });

  return game;
}
