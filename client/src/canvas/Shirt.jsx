import React, { useRef } from 'react'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'
import { useFrame, useThree } from '@react-three/fiber'
import { Decal, useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'

import state from '../store'

const Shirt = () => {
  const snap = useSnapshot(state)
  const { nodes, materials } = useGLTF('/shirt_baked.glb')
  const { size } = useThree()

  // I added a reference "meshRef" to the mesh component that represents the t-shirt material
  const meshRef = useRef()

  const logoTexture = useTexture(snap.logoDecal)
  const fullTexture = useTexture(snap.fullDecal)

  useFrame((state, delta) => {
    easing.dampC(materials.lambert1.color, new THREE.Color(0x000000), 0.25, delta)


    // update the color to the material
    meshRef.current.material.color = materials.lambert1.color
    meshRef.current.material.needsUpdate = true

    // Set aoMapIntensity to 0
    materials.lambert1.aoMapIntensity = 0
  })

  const stateString = JSON.stringify(snap)

  const isMobile = size.width < 1250 // Adjust this breakpoint as needed
  const scale = isMobile ? [0.5, 0.5, 0.5] : [1, 1, 1] // Adjust this scale as needed

  const positionMobile = isMobile ? [0, -0.3, 0] : [0, 0, 0] // Adjust this position as needed

  return (
    <group scale={scale}>
      <mesh
        ref={meshRef}
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
        position={positionMobile}
      >
        {snap.isFullTexture && (
          <Decal
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
            map={fullTexture}
          />
        )}

        {snap.isLogoTexture && (
          <Decal
            position={[0, 0.04, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.15}
            map={logoTexture}
            mapAnisotropy={16}
            depthTest={false}
            depthWrite={true}
          />
        )}
      </mesh>
    </group>
  )
}

export default Shirt
