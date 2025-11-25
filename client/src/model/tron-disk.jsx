import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function TronDisk(props) {
  const group = useRef()
  const modelRef = useRef()
  const { nodes, materials, animations } = useGLTF('/models/tron-disk.glb')
  const { actions } = useAnimations(animations, group)

  // Animate rotation
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.007
    }
  })

  return (
    <group ref={group} {...props} dispose={null}
      scale={[3.0, 3.0, 3.0]}
      position={[0, -2, 0]}
      rotation={[0, -2.5, 0.2]}
    >
      <group name="Sketchfab_Scene">
        <group name="GLTF_SceneRootNode">
          <group
            ref={modelRef} // Attach the ref here!
            name="Disc_2"
            position={[0, 0.653, 0]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <mesh
              name="Object_4"
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials.Metal}
            />
            <mesh
              name="Object_5"
              castShadow
              receiveShadow
              geometry={nodes.Object_5.geometry}
              material={materials.Leed}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/tron-disk.glb')
