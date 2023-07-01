import React from 'react'
import dynamic from 'next/dynamic'

const Scene = dynamic(() => import('@/components/Scene'), {
  ssr: false,
})

function App() {
  return (
    <div className='h-full w-full' style={{ cursor: 'grab' }}>
      <Scene />
    </div>
  )
}

export default App
