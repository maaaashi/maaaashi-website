import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei'
import BoxComponent from './Box'

function Scene() {
  const args = {
    qiita: {
      position: { x: -1, y: 0.2, z: 0 },
      rotation: 1,
      link: 'qiita',
    },
    about: {
      position: { x: 0, y: -0.2, z: 0 },
      rotation: 2,
      link: 'about-me',
    },
    project: {
      position: { x: 1, y: 1, z: -0.1 },
      rotation: 2,
      link: 'project',
    },
  }
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} intensity={2} />
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <OrbitControls />
      <BoxComponent args={args.qiita} />
      <BoxComponent args={args.about} />
      <BoxComponent args={args.project} />
      <Stars />
    </Canvas>
  )
}

export default Scene
