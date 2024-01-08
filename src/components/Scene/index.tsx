import React from 'react'
import { Canvas } from '@react-three/fiber'
import {
  OrbitControls,
  PerspectiveCamera,
  Stars,
  Text,
} from '@react-three/drei'
import BoxComponent from '../Box'

interface Position {
  x: number
  y: number
  z: number
}

function Scene() {
  let position: { qiita: Position; about: Position; project: Position }
  let size: { qiita: number; about: number; project: number }

  if (window.innerWidth < 767) {
    position = {
      qiita: {
        x: -0.7,
        y: 0,
        z: 0,
      },
      about: { x: 0, y: 0, z: 0 },
      project: { x: 0.7, y: 0, z: 0 },
    }
    size = {
      qiita: 0.4,
      about: 0.4,
      project: 0.4,
    }
  } else {
    position = {
      qiita: {
        x: -2,
        y: -0.3,
        z: 0,
      },
      about: { x: 0, y: -0.3, z: 0 },
      project: { x: 2, y: -0.3, z: 0 },
    }
    size = {
      qiita: 1,
      about: 1,
      project: 1,
    }
  }

  const args = {
    qiita: {
      position: position.qiita,
      rotation: 1,
      link: 'qiita',
      size: size.qiita,
      boxColor: {
        normal: 'white',
        hover: '#1fac1f',
      },
    },
    about: {
      position: position.about,
      rotation: 2,
      link: 'about-me',
      size: size.about,
      boxColor: {
        normal: 'white',
        hover: '#af8b16',
      },
    },
    project: {
      position: position.project,
      rotation: 2,
      link: 'catalog',
      size: size.project,
      boxColor: {
        normal: 'white',
        hover: '#2667d7',
      },
    },
  }
  return (
    <Canvas className='webkit-fill-available'>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <OrbitControls />
      <BoxComponent args={args.qiita} />
      <BoxComponent args={args.about} />
      <BoxComponent args={args.project} />
      <Text position={[0, 2, -1]} fontSize={0.4} color='white'>
        {'Welcome'}
      </Text>
      <Text position={[0, 1.5, -1]} fontSize={0.4} color='white'>
        {"Maaaashi's"}
      </Text>
      <Text position={[0, 1, -1]} fontSize={0.4} color='white'>
        {'Website'}
      </Text>
      <Stars />
    </Canvas>
  )
}

export default Scene
