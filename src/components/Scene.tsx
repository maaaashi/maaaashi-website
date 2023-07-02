import React from 'react'
import { Canvas } from '@react-three/fiber'
import {
  OrbitControls,
  PerspectiveCamera,
  Stars,
  Text,
} from '@react-three/drei'
import BoxComponent from './Box'

interface Position {
  x: number
  y: number
  z: number
}

function Scene() {
  let position: { qiita: Position; about: Position; project: Position }
  let size: { qiita: number; about: number; project: number }
  if (window.innerWidth < 600) {
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
        y: 1,
        z: -1,
      },
      about: { x: 1, y: 1, z: 1 },
      project: { x: 0, y: 0, z: 0 },
    }
    size = {
      qiita: 0.5,
      about: 0.5,
      project: 0.5,
    }
  }

  const args = {
    qiita: {
      position: position.qiita,
      rotation: 1,
      link: 'qiita',
      size: size.qiita,
      boxColor: {
        normal: '#157615',
        hover: '#0c430c',
      },
    },
    about: {
      position: position.about,
      rotation: 2,
      link: 'about-me',
      size: size.about,
      boxColor: {
        normal: '#765615',
        hover: '#47330c',
      },
    },
    project: {
      position: position.project,
      rotation: 2,
      link: 'mini-project',
      size: size.project,
      boxColor: {
        normal: '#153976',
        hover: '#0c2247',
      },
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
