// Import necessary modules
import React from 'react';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

// Define the type for your GLTF results
type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh;
    Object_3: THREE.Mesh;
    Object_4: THREE.Mesh;
    Object_5: THREE.Mesh;
    Object_6: THREE.Mesh;
    Object_7: THREE.Mesh;
  };
  materials: {
    initialShadingGroup: THREE.MeshStandardMaterial;
  };
};

// Lazy load the Car component
const Car = React.lazy(() => import('./Car'));



// Internal Car component definition
export function CarInternal(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/car.gltf') as GLTFResult;
  useGLTF.preload('/car.gltf');

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        {/* Meshes and materials */}
        <mesh geometry={nodes.Object_2.geometry} material={materials.initialShadingGroup} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.initialShadingGroup} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.initialShadingGroup} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.initialShadingGroup} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.initialShadingGroup} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.initialShadingGroup} />
      </group>
    </group>
  );
}

export default Car;
