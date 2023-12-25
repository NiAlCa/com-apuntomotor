import React from 'react';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh;
  };
  materials: {
    ['Material.001']: THREE.MeshStandardMaterial;
  };
};

// Dynamic import of the Carbatery component using React.lazy
const LazyCarbatery = React.lazy(() => import('./Carbatery'));



// The internal Carbatery component
export function CarbateryInternal(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/carBatery.gltf') as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials['Material.001']} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  );
}

export default LazyCarbatery;

