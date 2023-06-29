import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

const Box = () => {
  const ref = useRef(null)

  useFrame(() => {
    const current = ref.current! as any
    current.rotation.x += 0.01
    current.rotation.y += 0.01
  })

  return (
    <mesh ref={ref}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshLambertMaterial color={'skyblue'} />
    </mesh>
  )
}

const App = () => {
  return (
    <div className='h-full'>
      <h2>Home</h2>
      <Canvas dpr={1}>
        <ambientLight intensity={0.5} />
        <directionalLight intensity={0.5} position={[-10, 10, 10]} />
        <Box />
      </Canvas>
    </div>
  )
}

export default App
