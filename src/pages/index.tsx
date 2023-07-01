import React from 'react'
import dynamic from 'next/dynamic'
import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'

const Scene = dynamic(() => import('@/components/Scene'), {
  ssr: false,
})

function App() {
  return (
    <div className='h-full w-full bg-black' style={{ cursor: 'grab' }}>
      <Scene />
    </div>
  )
}

export default App
