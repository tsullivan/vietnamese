import * as THREE from 'three';

// FIXME use Henry's font
function loadFont(): Promise<THREE.Font> {
  const loader = new THREE.FontLoader();
  return new Promise((resolve, reject) => {
    loader.load('fonts/optimer_regular.typeface.json', function(response) {
      resolve(response);
    });
  });
}

export async function problemObjectFactory(): Promise<(msg: string) => THREE.Object3D> {
  const font = await loadFont();
  return (message: string) => {
    const textGeo = new THREE.TextGeometry(message, {
      height: 0,
      curveSegments: 4,
      bevelThickness: 4,
      bevelSize: 1,
      bevelEnabled: true,
      size: 80,
      font,
    });

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
