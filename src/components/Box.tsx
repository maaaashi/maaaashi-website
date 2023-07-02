import { Box } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import { useRouter } from 'next/router'
import React, { FC, useMemo, useRef, useState } from 'react'
import { Mesh, TextureLoader } from 'three'

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

  const clickHandler = () => {
    router.push(`/${link}`)
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
