export interface GameThing {
  animate: () => void;
  getObject: () => Three.Object3D;
}
