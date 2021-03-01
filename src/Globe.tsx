import React, { useRef } from "react";
import { Sphere, useTexture } from "@react-three/drei";
import { Color } from "three";
import { useFrame } from "react-three-fiber";

const Globe = () => {
  const texture = useTexture("/earthmap1k.jpg");
  const bumpMap = useTexture("/earthbump1k.jpg");
  const specMap = useTexture("/earthspec1k.jpg");
  const clouds = useTexture("/clouds.png");
  const earthRef = useRef();
  const cloudRef = useRef();

  useFrame(() => {
    if (!earthRef || !cloudRef) return;
    earthRef.current.rotation.y = earthRef.current.rotation.y - 0.002;
    cloudRef.current.rotation.y = cloudRef.current.rotation.y - 0.0005;
    cloudRef.current.rotation.x = cloudRef.current.rotation.x - 0.0005;
  });

  return (
    <>
      <Sphere args={[0.5, 32, 32]} ref={earthRef}>
        <meshPhongMaterial
          map={texture}
          bumpMap={bumpMap}
          bumpScale={0.2}
          specularMap={specMap}
          specular={new Color("grey")}
        />
      </Sphere>
      <Sphere args={[0.51, 32, 32]} ref={cloudRef}>
        <meshPhongMaterial map={clouds} transparent={true} opacity={0.8} />
      </Sphere>
    </>
  );
};

export default Globe;
