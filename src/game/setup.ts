import * as Rx from 'rxjs';
import * as THREE from 'three';
import { debounceTime, map } from 'rxjs/operators';

export function setup(renderer: THREE.Renderer): SetupProps {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xcccccc);

  const frustumSize = 500;
  const aspect = window.innerWidth / window.innerHeight;
  const camera = new THREE.OrthographicCamera(
    (frustumSize * aspect) / -2,
    (frustumSize * aspect) / 2,
    frustumSize / 2,
    frustumSize / -2,
    1,
    1000
  );
  camera.position.set(300, 20, 20);

  const sunLight = new THREE.DirectionalLight(0xffffff, 1);
  sunLight.position.set(-100, 400, 700);
  scene.add(sunLight);

  const keyUp$ = Rx.fromEvent(document, 'keyup').pipe(
    map(event => (event as KeyboardEvent).key)
  );

  const resize$ = Rx.fromEvent(window, 'resize').pipe(
    debounceTime(50),
    map(() => {
      const [canvasWidth, canvasHeight] = [window.innerWidth, window.innerHeight];
      renderer.setSize(canvasWidth, canvasHeight);
      camera.updateProjectionMatrix();
    })
  );

  return { camera, scene, keyUp$, resize$ };
}

interface SetupProps {
  camera: THREE.Camera;
  scene: THREE.Scene;
  keyUp$: Rx.Observable<string>;
  // mouseMove$: Rx.Observable<{ mouseX: number; mouseY: number; }>;
  resize$: Rx.Observable<void>;
}
