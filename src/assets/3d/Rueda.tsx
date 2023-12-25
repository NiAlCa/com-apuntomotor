// RuedaComponent.tsx
import React from 'react';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';


type GLTFResult = GLTF & {
  nodes: {
    brake_bolt_car_base_dark_0: THREE.Mesh
    brake_ceramic_graptine001_0: THREE.Mesh
    porsche_logo_PNG4_porsche_logo_PNG4_0: THREE.Mesh
    brake_part_car_base_0: THREE.Mesh
    brake_body_car_base001_0: THREE.Mesh
    brake_disk_brake_disk_inside001_0: THREE.Mesh
    brake_disk_brake_cercular001_0: THREE.Mesh
    rim_body_bolt_brake_disk001_0: THREE.Mesh
    rim_body_metall001_0: THREE.Mesh
    rim_disk_metall001_0: THREE.Mesh
    tyre_rubber_rubber_protector_0: THREE.Mesh
    tyre_rubber_rubbe_sidewall_0: THREE.Mesh
    rim_body_bolt003_brake_disk001_0: THREE.Mesh
    rim_body003_metall001_0: THREE.Mesh
    rim_disk001_metall001_0: THREE.Mesh
    tyre_rubber003_rubber_protector_0: THREE.Mesh
    tyre_rubber003_rubbe_sidewall_0: THREE.Mesh
    rim_body_bolt004_brake_disk001_0: THREE.Mesh
    rim_body004_metall001_0: THREE.Mesh
    rim_disk002_metall001_0: THREE.Mesh
    tyre_rubber004_rubber_protector_0: THREE.Mesh
    tyre_rubber004_rubbe_sidewall_0: THREE.Mesh
    rim_body_bolt005_brake_disk001_0: THREE.Mesh
    rim_body005_metall001_0: THREE.Mesh
    rim_disk005_metall001_0: THREE.Mesh
    tyre_rubber005_rubber_protector_0: THREE.Mesh
    tyre_rubber005_rubbe_sidewall_0: THREE.Mesh
  }
  materials: {
    car_base_dark: THREE.MeshStandardMaterial
    ['graptine.001']: THREE.MeshStandardMaterial
    porsche_logo_PNG4: THREE.MeshStandardMaterial
    car_base: THREE.MeshStandardMaterial
    ['car_base.001']: THREE.MeshStandardMaterial
    ['brake_disk_inside.001']: THREE.MeshStandardMaterial
    ['brake_cercular.001']: THREE.MeshStandardMaterial
    ['brake_disk.001']: THREE.MeshStandardMaterial
    ['metall.001']: THREE.MeshStandardMaterial
    rubber_protector: THREE.MeshStandardMaterial
    rubbe_sidewall: THREE.MeshStandardMaterial
  }
}

const Rueda = React.lazy(() => import('./Rueda')); // Dynamic import


// Rueda.tsx
export function RuedaInternal(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/rueda.gltf') as GLTFResult;
  useGLTF.preload('/rueda.gltf'); // Preload here

  return (
    <group {...props} dispose={null}>
      <group position={[-0.05, -31.136, 7.389]} rotation={[-0.007, 1.05, -1.12]} scale={[102.121, 102.121, 163.394]}>
        <group rotation={[1.571, 1.464, 1.571]} scale={[0.612, 0.979, 0.979]}>
          <group rotation={[0.162, -1.571, 0]}>
            <mesh geometry={nodes.brake_part_car_base_0.geometry} material={materials.car_base} />
            <mesh geometry={nodes.porsche_logo_PNG4_porsche_logo_PNG4_0.geometry} material={materials.porsche_logo_PNG4} rotation={[Math.PI, 0, -0.051]} scale={0.012} />
          </group>
          <mesh geometry={nodes.brake_body_car_base001_0.geometry} material={materials['car_base.001']} />
          <mesh geometry={nodes.brake_bolt_car_base_dark_0.geometry} material={materials.car_base_dark} />
          <mesh geometry={nodes.brake_ceramic_graptine001_0.geometry} material={materials['graptine.001']} rotation={[0.002, 0, 0]} />
        </group>
        <group rotation={[0, -Math.PI / 2, 0]} scale={[0.612, 0.979, 0.979]}>
          <mesh geometry={nodes.brake_disk_brake_disk_inside001_0.geometry} material={materials['brake_disk_inside.001']} />
          <mesh geometry={nodes.brake_disk_brake_cercular001_0.geometry} material={materials['brake_cercular.001']} />
        </group>
        <group scale={[0.979, 0.979, 0.612]}>
          <mesh geometry={nodes.rim_body_metall001_0.geometry} material={materials['metall.001']} />
          <mesh geometry={nodes.rim_body_bolt_brake_disk001_0.geometry} material={materials['brake_disk.001']} scale={1.1} />
        </group>
        <mesh geometry={nodes.tyre_rubber_rubber_protector_0.geometry} material={materials.rubber_protector} />
        <mesh geometry={nodes.tyre_rubber_rubbe_sidewall_0.geometry} material={materials.rubbe_sidewall} />
        <mesh geometry={nodes.rim_disk_metall001_0.geometry} material={materials['metall.001']} scale={[0.979, 0.979, 0.671]} />
      </group>
      <group position={[-24.904, -46.124, -64.671]} rotation={[-1.569, 0.029, 1.847]} scale={[102.121, 102.121, 163.394]}>
        <group scale={[0.979, 0.979, 0.612]}>
          <mesh geometry={nodes.rim_body003_metall001_0.geometry} material={materials['metall.001']} />
          <mesh geometry={nodes.rim_body_bolt003_brake_disk001_0.geometry} material={materials['brake_disk.001']} scale={1.1} />
        </group>
        <mesh geometry={nodes.tyre_rubber003_rubber_protector_0.geometry} material={materials.rubber_protector} />
        <mesh geometry={nodes.tyre_rubber003_rubbe_sidewall_0.geometry} material={materials.rubbe_sidewall} />
        <mesh geometry={nodes.rim_disk001_metall001_0.geometry} material={materials['metall.001']} scale={[0.979, 0.979, 0.671]} />
      </group>
      <group position={[-20.996, -13.62, -64.49]} rotation={[1.574, -0.029, -1.137]} scale={[102.121, 102.121, 163.394]}>
        <group scale={[0.979, 0.979, 0.612]}>
          <mesh geometry={nodes.rim_body004_metall001_0.geometry} material={materials['metall.001']} />
          <mesh geometry={nodes.rim_body_bolt004_brake_disk001_0.geometry} material={materials['brake_disk.001']} scale={1.1} />
        </group>
        <mesh geometry={nodes.tyre_rubber004_rubber_protector_0.geometry} material={materials.rubber_protector} />
        <mesh geometry={nodes.tyre_rubber004_rubbe_sidewall_0.geometry} material={materials.rubbe_sidewall} />
        <mesh geometry={nodes.rim_disk002_metall001_0.geometry} material={materials['metall.001']} scale={[0.979, 0.979, 0.671]} />
      </group>
      <group position={[-23.243, 30.22, -64.408]} rotation={[-0.173, -1.543, 1.822]} scale={[102.121, 102.121, 163.394]}>
        <group scale={[0.979, 0.979, 0.612]}>
          <mesh geometry={nodes.rim_body005_metall001_0.geometry} material={materials['metall.001']} />
          <mesh geometry={nodes.rim_body_bolt005_brake_disk001_0.geometry} material={materials['brake_disk.001']} scale={1.1} />
        </group>
        <mesh geometry={nodes.tyre_rubber005_rubber_protector_0.geometry} material={materials.rubber_protector} />
        <mesh geometry={nodes.tyre_rubber005_rubbe_sidewall_0.geometry} material={materials.rubbe_sidewall} />
        <mesh geometry={nodes.rim_disk005_metall001_0.geometry} material={materials['metall.001']} scale={[0.979, 0.979, 0.671]} />
      </group>
    </group>
  )
}
export default Rueda;
