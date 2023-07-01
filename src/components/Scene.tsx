import React, { useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import { Box, OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei'
import { TextureLoader } from 'three'

function hslToRgb(h: number, s: number, l: number) {
  h /= 360
  s /= 100
  l /= 100
  let r, g, b
  if (s === 0) {
    r = g = b = l // achromatic
  } else {
    const hue2rgb = (p, q, t) => {
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
  const toHex = (x) => {
    const hex = Math.round(x * 255).toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }
  return '#' + toHex(r) + toHex(g) + toHex(b)
}

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
  let element = document.querySelector('html')!
  let hsl = window.getComputedStyle(element).getPropertyValue('--p')
  let [h, s, l] = hsl.split(' ').map((str) => str.trim().replace('%', ''))

  return (
    <Box position={[0, 0.5, 0]}>
      <meshLambertMaterial color={hslToRgb(+h, +s, +l)} />
      {/* <meshBasicMaterial map={texture} /> */}
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
      <TexturedBox />
      <Stars />
    </Canvas>
  )
}

export default Scene
