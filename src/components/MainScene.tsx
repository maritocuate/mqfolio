import { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import Overlay from './Overlay'
import { Environment } from '@react-three/drei'
import Model from './Model'

export default function MainScene() {
  const overlay = useRef<HTMLDivElement | null>(null)
  const scroll = useRef<number>(0)

  return (
    <>
      <Canvas shadows eventPrefix="client">
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <Model scroll={scroll} />
          <Environment preset="apartment" blur={0.07} background />
        </Suspense>
      </Canvas>

      <Overlay ref={overlay} scroll={scroll} />
    </>
  )
}
