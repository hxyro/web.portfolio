import { React } from "react";
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import { CameraShake, PerspectiveCamera } from '@react-three/drei'
import  CloudMap  from "../map/clouds/cloud.jpg";
import  ClassicMap  from "../map/classic/main.jpg";
import  NordMap from "../map/nord/main.jpg";
import  DarkMap  from "../map/dark/main.jpg";
import  HaumeaMap from "../map/moon/haumea.jpg"
import  ErisMap from "../map/moon/eris.jpg"
import  MakemakeMap from "../map/moon/makemake.jpg"
import  MoonMap from "../map/moon/moon.jpg"
import  CeresMap from "../map/moon/ceres.jpg"
import  SunMap from "../map/moon/sun.jpg"
import  VenusMap from "../map/moon/venus.jpg"

const config = {
  maxYaw: 0.1,
  maxPitch: 0.1,
  maxRoll: 0.1,
  yawFrequency: 3,
  pitchFrequency: 3,
  rollFrequency: 2,
  intensity: 1,
  decay: false,
  decayRate: 0.65,
  additive: false,
}


export function Shake(){
    return <CameraShake {...config} />
}
export function Cam(){
    return <PerspectiveCamera manual onUpdate={(c) => c.updateProjectionMatrix()}/>
}
export function ClassicEarth(){
    const [classicMap, cloudMap] = useLoader(TextureLoader, [ClassicMap, CloudMap ]);
    return (
        <>  
            <mesh>
                <sphereGeometry args={[2.009, 40, 40]} />
                <meshPhongMaterial map={cloudMap} opacity={0.35} depthWrite={true} transparent={true} />
            </mesh>
            <mesh>
                <sphereGeometry args={[2, 40, 40]}/>
                <meshPhongMaterial specularMap={cloudMap} />
                <meshStandardMaterial map={classicMap} metalness={0.9} roughness={0.5} />
            </mesh>
        </>
    );
}


export function NordEarth(){
    const [nordMap, cloudMap] = useLoader(TextureLoader, [NordMap, CloudMap]);
    return(
        <>
                <mesh>
                    <sphereGeometry args={[20.07, 32, 32]} />
                    <meshPhongMaterial map={cloudMap} opacity={0.3} depthWrite={true} transparent={true} />
                </mesh>
                
                <mesh>
                    <sphereGeometry args={[20, 32, 32]} />
                        <meshPhongMaterial specularMap={nordMap} />
                        <meshStandardMaterial map={nordMap} metalness={0.5} roughness={0.5} />
                </mesh>
        </>
    )
}

export function NightlyEarth(){
    const [darkMap] = useLoader(TextureLoader, [DarkMap]);
    return (
            <mesh>
                <sphereGeometry args={[350, 40, 40]}/>
                <meshPhongMaterial specularMap={darkMap} />
                <meshStandardMaterial map={darkMap} metalness={0.9} roughness={0.5} />
            </mesh>
    );
}

export function Moon(){
    const [moonMap] = useLoader(TextureLoader, [MoonMap]);
    return (
            <mesh>
                <sphereGeometry args={[2, 40, 40]}/>
                <meshPhongMaterial specularMap={moonMap} />
                <meshStandardMaterial map={moonMap} metalness={0.9} roughness={0} />
            </mesh>
    );
}
export function Haumea(){
    const [haumeaMap] = useLoader(TextureLoader, [HaumeaMap]);
    return (
            <mesh>
                <sphereGeometry args={[2, 40, 40]}/>
                <meshPhongMaterial specularMap={haumeaMap} />
                <meshStandardMaterial map={haumeaMap} metalness={0.9} roughness={0} />
            </mesh>
    );
}
export function Makemake(){
    const [makemakeMap] = useLoader(TextureLoader, [MakemakeMap]);
    return (
            <mesh>
                <sphereGeometry args={[2, 40, 40]}/>
                <meshPhongMaterial specularMap={makemakeMap} />
                <meshStandardMaterial map={makemakeMap} metalness={0.9} roughness={0} />
            </mesh>
    );
}
export function Eris(){
    const [erisMap] = useLoader(TextureLoader, [ErisMap]);
    return (
            <mesh>
                <sphereGeometry args={[2, 40, 40]}/>
                <meshPhongMaterial specularMap={erisMap} />
                <meshStandardMaterial map={erisMap} metalness={0.9} roughness={0} />
            </mesh>
    );
}
export function Ceres(){
    const [ceresMap] = useLoader(TextureLoader, [CeresMap]);
    return (
            <mesh>
                <sphereGeometry args={[2, 40, 40]}/>
                <meshPhongMaterial specularMap={ceresMap} />
                <meshStandardMaterial map={ceresMap} metalness={0.9} roughness={0} />
            </mesh>
    );
}
export function Venus(){
    const [venusMap] = useLoader(TextureLoader, [VenusMap]);
    return (
            <mesh>
                <sphereGeometry args={[2, 40, 40]}/>
                <meshPhongMaterial specularMap={venusMap} />
                <meshStandardMaterial map={venusMap} metalness={0.9} roughness={0} />
            </mesh>
    );
}
export function Sun(){
    const [sunMap] = useLoader(TextureLoader, [SunMap]);
    return (
            <mesh>
                <sphereGeometry args={[2, 40, 40]}/>
                <meshPhongMaterial specularMap={sunMap} />
                <meshStandardMaterial map={sunMap} metalness={0.9} roughness={0} />
            </mesh>
    );
}
