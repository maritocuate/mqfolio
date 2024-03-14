import * as THREE from 'three'
import { RefObject, useEffect, useRef } from 'react'
import { useGLTF, useAnimations, PerspectiveCamera } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

type ModelProps = {
  scroll: RefObject<number>
}

const color = new THREE.Color()

export default function Model({ scroll }: ModelProps) {
  const group = useRef<THREE.Group>(null)
  const model = useGLTF('/model.glb')
  const { actions } = useAnimations<THREE.AnimationClip>(
    model.animations,
    group
  )

  const extras = {
    receiveShadow: true,
    castShadow: true,
    'material-envMapIntensity': 0.2,
  }

  useEffect(() => {
    if (actions && actions['CameraAction.005']) {
      actions['CameraAction.005'].play().paused = true
    }
  }, [actions])

  useFrame(state => {
    if (actions && actions['CameraAction.005'] && group.current) {
      const actionTime = actions['CameraAction.005'].time //0
      const actionDuration = actions['CameraAction.005'].getClip().duration //5.8

      if (scroll.current !== null) {
        const scrollValue = 1 - scroll.current
        actions['CameraAction.005'].time = THREE.MathUtils.lerp(
          actionDuration * scrollValue,
          actionTime,
          0.05
        )
      }

      group.current.children[0].children.forEach((child: any, index) => {
        child.material.color.lerp(color.set(0.1), 0.05)
        const et = state.clock.elapsedTime
        child.rotation.z = Math.sin((et + index * 2000) / 3) / 50
      })
    }
  })

  return (
    <group ref={group} dispose={null}>
      <group position={[0.06, 4.04, 0.35]} scale={[0.25, 0.25, 0.25]}>
        <mesh
          name="Glasses"
          geometry={(model.nodes.Glasses as any).geometry}
          position={[-60, 40, 46]}
          rotation={[-8, 0, 0]}
          material={model.materials.M_Headset}
          {...extras}
        />
        <mesh
          name="Notebook"
          geometry={(model.nodes.Notebook as any).geometry}
          material={model.materials.M_Notebook}
          position={[30, -12, -25]}
          {...extras}
        />
        <mesh
          name="Joystick"
          geometry={(model.nodes.Joystick as any).geometry}
          material={model.materials.M_Table}
          position={[45, 5, 2]}
          rotation={[0.1, 2.5, 0]}
          scale={90}
          {...extras}
        />
      </group>
      <group
        name="Camera"
        position={[-1.78, 2.04, 23.58]}
        rotation={[1.62, 0.01, 0.11]}
      >
        <PerspectiveCamera
          makeDefault
          far={100}
          near={0.1}
          fov={28}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <directionalLight
            castShadow
            position={[10, 20, 15]}
            shadow-camera-right={8}
            shadow-camera-top={8}
            shadow-camera-left={-8}
            shadow-camera-bottom={-8}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            intensity={2}
            shadow-bias={-0.0001}
          />
        </PerspectiveCamera>
      </group>
    </group>
  )
}

useGLTF.preload('/model.glb')
