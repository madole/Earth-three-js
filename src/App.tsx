import React, { Suspense, useState } from "react";
import "./App.css";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Globe from "./Globe";
import Mars from "./Mars";

function App() {
  const [planet, setPlanet] = useState<"earth" | "mars">("earth");
  return (
    <div className="app">
      <select
        className="planet-selector"
        onChange={(e) => setPlanet(e.target.value)}
      >
        <option value={"earth"}>Earth</option>
        <option value={"mars"}>Mars</option>
      </select>
      <Canvas
        shadowMap
        gl={{ alpha: false }}
        camera={{ position: [-1, 2, 10], fov: 10 }}
      >
        <Stars />
        <hemisphereLight intensity={0.35} />
        <ambientLight intensity={0.5} />
        <spotLight
          position={[-200, 100, 50]}
          angle={0.3}
          penumbra={1}
          intensity={0.8}
          castShadow
          color={"white"}
        />
        <color attach="background" args={["black"]} />
        <OrbitControls autoRotate={true} autoRotateSpeed={0.2} />
        <Suspense fallback={null}>
          {planet === "earth" ? <Globe /> : <Mars />}
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
