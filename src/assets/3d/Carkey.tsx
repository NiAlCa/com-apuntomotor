import React from 'react';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

// Type for the GLTF model result
type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh;
    Object_6: THREE.Mesh;
    Object_8: THREE.Mesh;
  };
  materials: {
    ['Material.002']: THREE.MeshStandardMaterial;
    ['Material.001']: THREE.MeshStandardMaterial;
    Material: THREE.MeshStandardMaterial;
  };
};

// Dynamic import of the Carkey component using React.lazy
const Carkey = React.lazy(() => import('./Carkey'));



// Internal Carkey component
export function CarkeyInternal(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/carkey.gltf') as GLTFResult;
  useGLTF.preload('/carkey.gltf'); // Preload the model

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.2}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Object_4.geometry} material={materials['Material.002']} position={[0, 0.532, 0]} />
          <mesh geometry={nodes.Object_6.geometry} material={materials['Material.001']} position={[0, 0.532, 0]} />
          <mesh geometry={nodes.Object_8.geometry} material={materials.Material} position={[0, 0.532, 0]} />
        </group>
      </group>
    </group>
  );
}

export default Carkey;
