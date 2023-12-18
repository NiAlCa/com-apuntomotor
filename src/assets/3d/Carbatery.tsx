/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 carbatery.gltf -t 
Author: matacu.tec (https://sketchfab.com/matacu.tec)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/bateria-auto-low-poly-2bbd4e2da5384ecdb7b68bf0eb7a9318
Title: bateria auto low poly
*/

import * as THREE from 'three'

import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh
  }
  materials: {
    ['Material.001']: THREE.MeshStandardMaterial
  }
}


export function Carbatery(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/carBatery.gltf') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials['Material.001']} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/carbatery.gltf')
