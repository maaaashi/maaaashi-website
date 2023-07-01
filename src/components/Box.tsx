import { Box } from '@react-three/drei'
import { ThreeEvent, useFrame } from '@react-three/fiber'
import { useRouter } from 'next/router'
import React, { FC, useMemo, useRef, useState } from 'react'
import { Mesh, TextureLoader } from 'three'

const hslToRgb = (h: number, s: number, l: number) => {
  h /= 360
  s /= 100
  l /= 100
  let r, g, b
  if (s === 0) {
    r = g = b = l // achromatic
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1
      if (t > 1) t -= 1
      if (t < 1 / 6) return p + (q - p) * 6 * t
      if (t < 1 / 2) return q
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
      return p
    }
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s
    const p = 2 * l - q
    r = hue2rgb(p, q, h + 1 / 3)
    g = hue2rgb(p, q, h)
    b = hue2rgb(p, q, h - 1 / 3)
  }
  const toHex = (x: number) => {
    const hex = Math.round(x * 255).toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }
  return '#' + toHex(r) + toHex(g) + toHex(b)
}

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
  }
}

const BoxComponent: FC<Props> = ({ args }) => {
  const { link, position, rotation, size } = args
  const [hovered, setHovered] = useState(false)
  const router = useRouter()
  const { x, y, z } = position

  const clickHandler = () => {
    router.push(`/${link}`)
  }
  const element = document.querySelector('html')!
  const fontColor = window.getComputedStyle(element).getPropertyValue('--pc')
  const [fh, fs, fl] = fontColor
    .split(' ')
    .map((str) => str.trim().replace('%', ''))
  const boxColor = hovered
    ? window.getComputedStyle(element).getPropertyValue('--pf')
    : window.getComputedStyle(element).getPropertyValue('--p')
  const [h, s, l] = boxColor
    .split(' ')
    .map((str) => str.trim().replace('%', ''))

  const TexturedBox = () => {
    const canvas = document.createElement('canvas')
    const texture = useMemo(() => {
      const context = canvas.getContext('2d')!
      canvas.width = 256
      canvas.height = 256
      context.fillStyle = 'white'
      context.fillRect(0, 0, canvas.width, canvas.height)
      context.fillStyle = 'black'
      context.font = '36px sans-serif'
      context.textAlign = 'center'
      context.textBaseline = 'middle'
      context.fillText(
        link.toLocaleUpperCase(),
        canvas.width / 2,
        canvas.height / 2
      )
      return new TextureLoader().load(canvas.toDataURL())
    }, [])

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
        <meshLambertMaterial color={hslToRgb(+h, +s, +l)} map={texture} />
      </Box>
    )
  }

  return <TexturedBox />
}

export default BoxComponent
