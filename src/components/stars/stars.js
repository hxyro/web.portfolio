import { React } from "react";
import { OrbitControls, Stars} from "@react-three/drei";


export function Orbit0(){
    return <OrbitControls enablePan={false} enableZoom={true} enableRotate={true} zoomSpeed={0.3} rotateSpeed={0.32} autoRotate={true} autoRotateSpeed={0.9} minDistance={5} maxDistance={1410}/> 
}
export function Orbit1(){
    return <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} rotateSpeed={0.32} autoRotate={true} autoRotateSpeed={0.9} minDistance={5} maxDistance={1410}/> 
}
export function Orbit2(){
    return <OrbitControls enabled={false} enablePan={false} enableZoom={false} enableRotate={false}/> 
}

export function Star(){
    return (
        <>
            <ambientLight intensity={8} />
            <Stars radius={400} depth={20} count={20000} factor={9} saturation={0} fade={true} />
            <Stars radius={380} depth={18} count={20000} factor={9} saturation={0} fade={true} />
            <Stars radius={350} depth={15} count={20000} factor={9} saturation={0} fade={true} />
            <Stars radius={300} depth={15} count={20000} factor={9} saturation={0} fade={true} />
            <Stars radius={280} depth={15} count={20000} factor={9} saturation={0} fade={true} />
            <Stars radius={174} depth={1} count={9000} factor={12} saturation={0} fade={true} />
        </>
    );
}
