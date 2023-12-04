import { PerspectiveCamera, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { MathUtils } from "three";

const MyCamera = () => {
  const cameraRef = useRef(null);
  const scroll = useScroll();

  // useFrame(() => {
  //   const offset = scroll.offset;
  //   const group = cameraRef.current;

  //   if (group) {
  //     let targetY = 0;

  //     if (offset < 0.25) {
  //       // Rotate one way
  //       targetY = (-Math.PI / 0.4) * Math.min(offset / 0.25, 1);
  //     } else if (offset < 0.35) {
  //       // Rotate back to center
  //       const relativeOffset = (offset - 0.25) / 0.1;
  //       targetY = MathUtils.lerp(-Math.PI / 0.4, 0, relativeOffset);
  //     } else if (offset < 0.45) {
  //       // Rotate to the other side
  //       const relativeOffset = (offset - 0.35) / 0.1;
  //       targetY = MathUtils.lerp(0, Math.PI / 0.4, relativeOffset);
  //     } else if (offset < 0.55) {
  //       // Rotate back to center
  //       const relativeOffset = (offset - 0.45) / 0.1;
  //       targetY = MathUtils.lerp(Math.PI / 0.4, 0, relativeOffset);
  //     } else if (offset < 0.65) {
  //       // Rotate to the original side
  //       const relativeOffset = (offset - 0.55) / 0.1;
  //       targetY = MathUtils.lerp(0, -Math.PI / 0.4, relativeOffset);
  //     } else if (offset < 0.75) {
  //       // Rotate back to center
  //       const relativeOffset = (offset - 0.65) / 0.1;
  //       targetY = MathUtils.lerp(-Math.PI / 0.4, 0, relativeOffset);
  //     } else if (offset < 0.85) {
  //       // Rotate to the other side
  //       const relativeOffset = (offset - 0.75) / 0.1;
  //       targetY = MathUtils.lerp(0, Math.PI / 0.4, relativeOffset);
  //     } else if (offset < 0.95) {
  //       // Rotate back to center
  //       const relativeOffset = (offset - 0.85) / 0.1;
  //       targetY = MathUtils.lerp(Math.PI / 0.4, 0, relativeOffset);
  //     } else {
  //       // Rotate to center at 1
  //       const relativeOffset = (offset - 0.95) / 0.05;
  //       targetY = MathUtils.lerp(0, 0, relativeOffset);
  //     }

  //     group.rotation.y = MathUtils.lerp(group.rotation.y, targetY, 0.05);
  //   }
  // });

  return <PerspectiveCamera ref={cameraRef} position={[0, 0, 3]} makeDefault />;
};

export default MyCamera;
