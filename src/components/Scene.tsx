import React, { useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  Box,
  Sphere,
  OrbitControls,
  PerspectiveCamera,
  Stars,
} from '@react-three/drei'
import { TextureLoader } from 'three'

function TexturedBox() {
  const texture = useMemo(() => {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')!
    canvas.width = 256
    canvas.height = 256
    context.fillStyle = 'white'
    context.fillRect(0, 0, canvas.width, canvas.height)
    context.fillStyle = 'black'
    context.font = '48px sans-serif'
    context.textAlign = 'center'
    context.textBaseline = 'middle'
    context.fillText('Hello', canvas.width / 2, canvas.height / 2)
    return new TextureLoader().load(canvas.toDataURL())
  }, [])

  return (
    <Box>
      <meshBasicMaterial map={texture} />
    </Box>
  )
}

function Scene() {
  return (
    <Canvas>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} />
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <OrbitControls />
      {/* <Box position={[0, 0, 0]}>
        <meshStandardMaterial color='orange' />
      </Box> */}
      <TexturedBox />
      {/* <Sphere position={[1.2, 0, 0]}>
        <meshStandardMaterial color='lightblue' />
      </Sphere> */}
      <Stars />
    </Canvas>
  )
}

export default Scene
