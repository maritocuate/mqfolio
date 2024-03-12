import { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import Overlay from './Overlay'

export default function MainScene() {
  const overlay = useRef<HTMLDivElement | null>(null)
  const caption = useRef<HTMLSpanElement | null>(null)
  const scroll = useRef<number>(0)

  return (
    <>
      <Canvas shadows eventPrefix="client">
        <ambientLight intensity={1} />
      </Canvas>
      <Overlay ref={overlay} caption={caption} scroll={scroll.current} />
    </>
  )
}
