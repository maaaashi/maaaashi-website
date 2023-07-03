import { Box } from '@react-three/drei'
import { useFrame, useLoader, useThree } from '@react-three/fiber'
import { useRouter } from 'next/router'
import React, { FC, useMemo, useRef, useState } from 'react'
import { Mesh, TextureLoader, Vector3 } from 'three'

interface Props {
  args: {
    link: string
    position: {
      x: number
      y: number
      z: number
    }
    rotation: number
    size: number
    boxColor: {
      normal: string
      hover: string
    }
  }
}

const BoxComponent: FC<Props> = ({ args }) => {
  const { link, position, rotation, size, boxColor } = args
  const [hovered, setHovered] = useState(false)
  const router = useRouter()
  const { x, y, z } = position
  const { camera } = useThree()
  const [zoom, setZoom] = useState(false)

  useFrame(() => {
    if (zoom && camera.position.z !== 0) {
      camera.position.x = x
      camera.position.y = y
      camera.lookAt(new Vector3(x, y, -10))
      const zoomSpeed = -0.05
      camera.position.z += zoomSpeed
    }
  })

  const clickHandler = () => {
    setZoom(true)

    setTimeout(() => {
      router.push(`/${link}`)
    }, 1000)
  }
  const color = hovered ? boxColor.hover : boxColor.normal

  const TexturedBox = () => {
    const texture = useLoader(TextureLoader, `/${link}.png`)

    const hoverHandler = (hover: boolean) => {
      setHovered(hover)
    }

    const meshRef = useRef<Mesh>()

    useFrame(() => {
      if (meshRef.current) {
        meshRef.current.rotation.x += 0.01
        meshRef.current.rotation.y += 0.01
      }
    })

    return (
      <Box
        // @ts-ignore
        ref={meshRef}
        position={[x, y, z]}
        rotation={[Math.PI / rotation, Math.PI / rotation, 0]}
        onClick={clickHandler}
        onPointerOver={() => hoverHandler(true)}
        onPointerOut={() => hoverHandler(false)}
        args={[size, size, size]}
      >
        <meshLambertMaterial color={color} map={texture} />
      </Box>
    )
  }

  return <TexturedBox />
}

export default BoxComponent
