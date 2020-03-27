import * as Rx from 'rxjs';
import * as THREE from 'three';

export class Game {
  public readonly domElement: HTMLCanvasElement;
  public readonly update$ = new Rx.ReplaySubject();

  constructor(
    private renderer: THREE.WebGLRenderer,
    private scene: THREE.Scene,
    private camera: THREE.Camera
  ) {
    this.domElement = renderer.domElement;
    this.renderer = renderer;
    this.scene = scene;
    this.camera = camera;
  }

  public init() {
    const { renderer, scene, camera, update$ } = this;
    function render<T>(this: Rx.SchedulerAction<T>) {
      update$.next();
      renderer.render(scene, camera);
      this.schedule();
    }
    Rx.animationFrameScheduler.schedule(render, 0, 0);
  }
}


