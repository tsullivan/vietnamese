import * as THREE from 'three';

// FIXME use Henry's font
function loadFont(): Promise<THREE.Font> {
  const loader = new THREE.FontLoader();
  return new Promise((resolve, reject) => {
    loader.load('fonts/droid/droid_serif_bold.typeface.json', function(response) {
      resolve(response);
    });
  });
}

const getTextGeometry = (message: string, font: THREE.Font) => {
  return new THREE.TextGeometry(message, {
    height: 0,
    curveSegments: 4,
    bevelThickness: 4,
    bevelSize: 1,
    bevelEnabled: true,
    size: 80,
    font,
  });
};

export async function challengeObjectFactory(): Promise<(msg: string) => THREE.Object3D> {
  const font = await loadFont();
  return (message: string) => {
    const textGeo = getTextGeometry(message, font);

    textGeo.computeBoundingBox();
    textGeo.computeVertexNormals();

    const textMesh1 = new THREE.Mesh(new THREE.BufferGeometry().fromGeometry(textGeo), [
      new THREE.MeshPhongMaterial({ color: 0xffffff, flatShading: true }), // front
      new THREE.MeshPhongMaterial({ color: 0xffffff }), // side
    ]);
    textMesh1.position.z = -100;

    return textMesh1;
  };
}

export async function answersObjectsFactory() {
  const font = await loadFont();
  return (message: string) => {
    const textGeo = getTextGeometry(message, font);

    textGeo.computeBoundingBox();
    textGeo.computeVertexNormals();

    const textMesh1 = new THREE.Mesh(new THREE.BufferGeometry().fromGeometry(textGeo), [
      new THREE.MeshPhongMaterial({ color: 0xffffff, flatShading: true }), // front
    ]);
    textMesh1.position.z = -100;
    textMesh1.position.y = -100;

    return textMesh1;
  };
}
