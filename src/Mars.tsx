import React, { useRef } from "react";
import { Sphere, useTexture } from "@react-three/drei";
import { useFrame } from "react-three-fiber";

const Mars = () => {
  const bumpMap = useTexture("/mars-terrain.jpg");
  const marsRef = useRef();

  useFrame(() => {
    if (!marsRef.current) return;
    // @ts-ignore
    marsRef.current.rotation.y = marsRef.current.rotation.y - 0.002;
  });

  return (
    <>
      <Sphere args={[0.5, 16, 16]} ref={marsRef}>
        <meshNormalMaterial bumpMap={bumpMap} bumpScale={0.15} />
      </Sphere>
    </>
  );
};

export default Mars;
