import React from 'react';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    defaultMaterial: THREE.Mesh;
  };
  materials: {
    DefaultMaterial: THREE.MeshStandardMaterial;
  };
};

// Dynamic import using React.lazy for the Itv component
const Itv = React.lazy(() => import('./Itv'));


// Itv component definition
export function ItvInternal(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/itv.gltf') as GLTFResult;
  useGLTF.preload('/itv.gltf'); // Preload the model

  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.009, 0]} rotation={[-0.368, 0.182, -0.201]}>
        <mesh geometry={nodes.defaultMaterial.geometry} material={materials.DefaultMaterial} rotation={[Math.PI / 2, 0, 0]} />
      </group>
    </group>
  );
}

export default Itv;
