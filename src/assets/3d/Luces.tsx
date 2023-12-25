

import React, { useRef } from 'react';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Light_bulb_glass_0: THREE.Mesh;
    Light_bulb_Light_bulb001_0: THREE.Mesh;
    Light_bulb_Light_bulb_0: THREE.Mesh;
    Light_bulb_Lamp_accesses_0: THREE.Mesh;
    Light_bulb_issuer_0: THREE.Mesh;
    light_bulb_Light_bulb_0: THREE.Mesh;
    Light_bulb001_Lamp_accesses_0: THREE.Mesh;
    Light_bulb001_Light_bulb001_0: THREE.Mesh;
    Light_bulb001_Light_bulb_0: THREE.Mesh;
    Light_bulb001_issuer_0: THREE.Mesh;
    Light_bulb002_glass_0: THREE.Mesh;
    Light_bulb002_Light_bulb001_0: THREE.Mesh;
    Light_bulb002_Light_bulb_0: THREE.Mesh;
    Light_bulb002_Lamp_accesses_0: THREE.Mesh;
    Light_bulb002_issuer_0: THREE.Mesh;
  };
  materials: {
    glass: THREE.MeshPhysicalMaterial;
    ['Light_bulb.001']: THREE.MeshStandardMaterial;
    Light_bulb: THREE.MeshStandardMaterial;
    Lamp_accesses: THREE.MeshStandardMaterial;
    issuer: THREE.MeshStandardMaterial;
  };
};

// Dynamic import of Luces component
const LucesLazy = React.lazy(() => import('./Luces'));



export function Luces(props: JSX.IntrinsicElements['group']) {

  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF('/luces.gltf') as GLTFResult;
  useGLTF.preload('/luces.gltf'); // Preload here




  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[0.118, 3.947, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <group position={[0, 0, -0.171]}>
            <mesh geometry={nodes.Light_bulb_glass_0.geometry} material={materials.glass} />
            <mesh geometry={nodes.Light_bulb_Light_bulb001_0.geometry} material={materials['Light_bulb.001']} />
            <mesh geometry={nodes.Light_bulb_Light_bulb_0.geometry} material={materials.Light_bulb} />
            <mesh geometry={nodes.Light_bulb_Lamp_accesses_0.geometry} material={materials.Lamp_accesses} />
            <mesh geometry={nodes.Light_bulb_issuer_0.geometry} material={materials.issuer} />
          </group>
          <mesh geometry={nodes.light_bulb_Light_bulb_0.geometry} material={materials.Light_bulb} />
        </group>
        <group position={[-9.794, -13.178, -24.262]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Light_bulb001_Lamp_accesses_0.geometry} material={materials.Lamp_accesses} />
          <mesh geometry={nodes.Light_bulb001_Light_bulb001_0.geometry} material={materials['Light_bulb.001']} />
          <mesh geometry={nodes.Light_bulb001_Light_bulb_0.geometry} material={materials.Light_bulb} />
          <mesh geometry={nodes.Light_bulb001_issuer_0.geometry} material={materials.issuer} />
        </group>
        <group position={[19.602, -13.178, -38.569]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Light_bulb002_glass_0.geometry} material={materials.glass} />
          <mesh geometry={nodes.Light_bulb002_Light_bulb001_0.geometry} material={materials['Light_bulb.001']} />
          <mesh geometry={nodes.Light_bulb002_Light_bulb_0.geometry} material={materials.Light_bulb} />
          <mesh geometry={nodes.Light_bulb002_Lamp_accesses_0.geometry} material={materials.Lamp_accesses} />
          <mesh geometry={nodes.Light_bulb002_issuer_0.geometry} material={materials.issuer} />
        </group>
      </group>
    </group>
  )
}


export default LucesLazy;
