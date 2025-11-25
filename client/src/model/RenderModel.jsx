import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function RenderModel(props) {
  const { nodes, materials } = useGLTF('/models/scene-transformed.glb')
  return (
    <group {...props}
      position={[0, -3, 0]}
      rotation={[0, 68.6, 0]}
      scale={[1.65, 1.55, 1.55]}
      dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wheel003_gls_kaki104_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.903, 0.327, -1.613]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[-1.032, 1.032, 1.032]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.gls_doorpanel_FR_vstav_carbon002_gls_wood_black001_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.718, 1.025, 0.442]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.gls_int_vstav_carbon002_gls_carbonn005_0.geometry}
        material={materials.PaletteMaterial002}
        position={[-0.001, 0.946, -1.063]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.gls_tailgatelight_R002_gls_run001_0.geometry}
        material={materials.PaletteMaterial003}
        position={[-0.553, 1.042, -2.601]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.gls_headlight_L002_lsiggls001_0.geometry}
        material={materials.PaletteMaterial004}
        position={[0.686, 0.83, 2.04]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.gls_sunroof002_gls_carbonn005_0.geometry}
        material={materials.PaletteMaterial002}
        position={[0, 1.433, -1.351]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/models/scene-transformed.glb')
