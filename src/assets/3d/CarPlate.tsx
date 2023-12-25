import React from 'react';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh;
    Object_5: THREE.Mesh;
  };
  materials: {
    plate: THREE.MeshStandardMaterial;
    Material: THREE.MeshStandardMaterial;
  };
};

// Lazy load the CarPlate component
const CarPlate = React.lazy(() => import('./CarPlate'));



// CarPlate component
export function CarPlateInternal(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/carPlate.gltf') as GLTFResult;
  useGLTF.preload('/carPlate.gltf'); // Preload the GLTF file

  return (
    <group {...props} dispose={null}>
      <group scale={2.781}>
        <mesh geometry={nodes.Object_4.geometry} material={materials.plate} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.Material} />
      </group>
    </group>
  );
}

export default CarPlate;
