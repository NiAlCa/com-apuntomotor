import React from 'react';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

// Define the GLTFResult type for type-checking
type GLTFResult = GLTF & {
  nodes: {
    model_default007_0: THREE.Mesh;
  };
  materials: {
    ['default.007']: THREE.MeshStandardMaterial;
  };
};

// Lazy load the Toolbox component
const LazyToolbox = React.lazy(() => import('./Toolbox'));


// Internal Toolbox component
export function ToolboxInternal(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/toolbox.gltf') as GLTFResult;
  useGLTF.preload('/toolbox.gltf'); // Preload the GLTF model

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.model_default007_0.geometry}
        material={materials['default.007']}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

export default LazyToolbox;
