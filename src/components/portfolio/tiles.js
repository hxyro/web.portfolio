import * as THREE from 'three'
import { useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Image, ScrollControls, Scroll, useScroll } from '@react-three/drei'
import { useSnapshot, proxy } from 'valtio'

export const damp = THREE.MathUtils.damp

export const state = proxy({
  clicked: null,
  urls: [2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].map((u) => `/${u}.jpg`)
})


const material = new THREE.LineBasicMaterial({ color: '#ffffff' })
const geometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, -1, 0), new THREE.Vector3(0, 1, 0)])

export function Minimap() {
  const ref = useRef()
  const scroll = useScroll()
  const { urls } = useSnapshot(state)
  const { height } = useThree((state) => state.viewport)
  useFrame((_state, delta) => {
    ref.current.children.forEach((child, index) => {
      const y = scroll.curve(index / urls.length - 1.5 / urls.length, 4 / urls.length)
      child.scale.y = damp(child.scale.y, 0.1 + y / 6, 4, delta)
    })
  })
  return (
    <group ref={ref}>
      {urls.map((_, i) => (
        <line key={i} geometry={geometry} material={material} position={[i * 0.08 - urls.length * 0.04, -height / 1.9 + 0.6, 0]} />
      ))}
    </group>
  )
}



function Item({ index, position, scale, c = new THREE.Color(), ...props }) {
  const ref = useRef()
  const scroll = useScroll()
  const { clicked, urls } = useSnapshot(state)
  const [hovered, hover] = useState(false)
  const click = () => (state.clicked = index === clicked ? null : index)
  const over = () => hover(true)
  const out = () => hover(false)
  useFrame((state, delta) => {
    const y = scroll.curve(index / urls.length - 2 / urls.length, 4 / urls.length)
    ref.current.material.scale[1] = ref.current.scale.y = damp(ref.current.scale.y, clicked === index ? 6.8 : 3.5 + y, 3.5, delta)
    ref.current.material.scale[0] = ref.current.scale.x = damp(ref.current.scale.x, clicked === index ? 5 : scale[0], 3.5, delta)
    if (clicked !== null && index < clicked) ref.current.position.x = damp(ref.current.position.x, position[0] - 2.2, 3.5, delta)
    if (clicked !== null && index > clicked) ref.current.position.x = damp(ref.current.position.x, position[0] + 2.2, 3.5, delta)
    if (clicked === null || clicked === index) ref.current.position.x = damp(ref.current.position.x, position[0], 3.5, delta)
    ref.current.material.grayscale = damp(ref.current.material.grayscale, hovered || clicked === index ? 0 : Math.max(0, 1 - y), 9, delta)
    ref.current.material.color.lerp(c.set(hovered || clicked === index ? 'white' : '#606670'), hovered ? 0.3 : 1)
  })
  return <Image ref={ref} {...props} position={position} scale={scale} onClick={click} onPointerOver={over} onPointerOut={out} />
}

function Items({ w = 0.7, gap = 0.15 }) {
  const { urls } = useSnapshot(state)
  const { width } = useThree((state) => state.viewport)
  const xW = w + gap
  return (
    <ScrollControls horizontal damping={10} pages={(width - xW + urls.length * xW) / width}>
      <Minimap/>
      <Scroll>
        {urls.map((url, i) => <Item key={i} index={i} position={[i * xW, 0, 0]} scale={[w, 4, 1]} url={url} />) /* prettier-ignore */}
      </Scroll>
    </ScrollControls>
  )
}

export const Tiles = () => (
    <Items />
)
