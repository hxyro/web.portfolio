import './App.css'
import { Suspense } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { ClassicEarth, NightlyEarth, NordEarth, Ceres, Makemake, Eris, Shake} from "./components/earth/earth/earth.js";
import { Star, Orbit0, Orbit1, Orbit2 } from "./components/stars/stars.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/navbar.js";
import { Sauce } from './components/sauce/sauce.js';
import { Social } from './components/social/social.js';
import { Portfolio } from './components/portfolio/portfolio.js';
import { Aboutfolio } from './components/about/about.js';

import { Tiles, state } from "./components/portfolio/tiles.js";

const CanvasContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
`;
const TilesContainer = styled.div`
    position: relative;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 30;
`;

function App() {
  return (
      <Router>
      <Navbar/>
    <Routes>
        
        <Route path='/' element={
            <CanvasContainer>
                <Canvas>
                    <Suspense fallback={null}>
                        <Star/>
                        <Orbit0/>
                    </Suspense>
                    <Suspense fallback={null}>
                        <ClassicEarth/>
                    </Suspense>
                    <Suspense fallback={null}>
                        <NightlyEarth/>
                    </Suspense>
                    <Suspense fallback={null}>
                        <NordEarth/>
                    </Suspense>
                </Canvas>
            </CanvasContainer>
        }/>
          
        <Route path='/about' element={
            <CanvasContainer>
                <Canvas>
                    <Suspense fallback={null}>
                        <Star/>
                        <Orbit1/>
                    </Suspense>
                    <Suspense fallback={null}>
                        <Makemake />
                    </Suspense>
                </Canvas>
            <Aboutfolio/>
            </CanvasContainer>
        } />

        <Route path='/contact' element={
            <CanvasContainer>
                <Canvas>
                    <Suspense fallback={null}>
                        <Star/>
                        <Orbit1/>
                    </Suspense>
                    <Suspense fallback={null}>
                        <Eris />
                    </Suspense>
                </Canvas>
            <Social/>
            </CanvasContainer>
        } />
      
        <Route path='/portfolio' element={
            <>
            <CanvasContainer>
                <Canvas>
                    <Suspense fallback={null}>
                        <Star/>
                        <Orbit1/>
                    </Suspense>
                </Canvas>
            </CanvasContainer>
            <TilesContainer>
                <Canvas gl={{ antialias: false }} dpr={[1, 1.5]} onPointerMissed={() => (state.clicked = null)}>
                    <Suspense fallback={null}>
                        <Tiles />
                    </Suspense>
                </Canvas>
            </TilesContainer>
            <Portfolio/>
            </>
        } />

        <Route path='/sauce' element={
            <CanvasContainer>
                <Canvas>
                    <Suspense fallback={null}>
                        <Star/>
                        <Orbit2/>
                    </Suspense>
                    <Suspense fallback={null}>
                        <Shake/>
                        <Ceres />
                    </Suspense>
                </Canvas>
            <Sauce/>
            </CanvasContainer>
        } />
        
    </Routes>
      </Router>
  );
}

export default App;
