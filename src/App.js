import './App.css'
import React, { useRef, useState, useEffect } from "react";
import { Canvas, extend } from "@react-three/fiber";
import { OrbitControls, Effects, Environment } from '@react-three/drei';
// import { GlitchPass } from './GlitchPass';
import {ReactComponent as Learning} from './learning.svg';
import Eyes from './components/Eyes';
import { Suspense } from "react";

// extend({ GlitchPass })

const App = () => {

   const isMobile = window.innerWidth <= 576;
  const [mousePosition, setMousePosition] = useState([0, 0]);
 
  const mainRef = useRef(null);


  const onMouseMove = (event) => {
   if (!isMobile) {
   const { clientX, clientY } = event;
   const mouseX = (clientX / window.innerWidth) * 2 - 1;
   const mouseY = -(clientY / window.innerHeight) * 2 + 1;
   setMousePosition([mouseX, mouseY]);
   }};


  return (
    <>
      <div style={{ width: "100vw", height: "100%" }} 
      onMouseMove={onMouseMove}>
         <div className='diction'>
         <Learning/>
         <span>.</span>
         <span>.</span>
         <span>.</span>
         </div>
        <main
          ref={mainRef}
          style={{background: '#BABABA'}}>
          <Canvas camera={{ position: [0, -0.2, 1.3] }} >
               {/* <Effects>
                  <glitchPass attachArray="passes"/>
               </Effects> */}
               {/* <ambientLight intensity={0.1} /> */}
               <Environment files="./img/environment.hdr" background blur={0.5} />
               <Suspense fallback={null}>     
                  <Eyes mousePosition={mousePosition} deviceOrientation={null} />
               </Suspense>
            {/* <OrbitControls/> */}
          </Canvas>
        </main>
      </div>
    </>
  );
};

export default App;