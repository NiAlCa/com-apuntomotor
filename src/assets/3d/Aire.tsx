import React, { useRef } from 'react';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Sphere001_sun_0: THREE.Mesh;
    Cloud001__0: THREE.Mesh;
  };
  materials: {
    material: THREE.MeshStandardMaterial;
    ['Cloud.001__0']: THREE.MeshStandardMaterial;
  };
};


const Aire = React.lazy(() => import('./Aire'));




export function  AireInternal(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF('/aire.gltf') as GLTFResult;
  useGLTF.preload('/aire.gltf'); // Preload here


  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="cloudsculpt2_animfbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Sphere001" position={[-900, 350, -1459.237]} rotation={[-Math.PI / 2, 0, 0]} scale={-299.536}>
                  <mesh name="Sphere001_sun_0" geometry={nodes.Sphere001_sun_0.geometry} material={materials.material} />
                </group>
                <group name="Cloud001" position={[-124.104, 49.943, -1076.507]} rotation={[-Math.PI / 2, 0, 1.339]} scale={100}>
                  <mesh name="Cloud001__0" geometry={nodes.Cloud001__0.geometry} material={materials['Cloud.001__0']} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

export default Aire;
