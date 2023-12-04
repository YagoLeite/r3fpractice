"use client";
import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { useFrame } from "@react-three/fiber";
import { Color, MathUtils } from "three";
import { Leva, useControls } from "leva";
import { proxy, useSnapshot } from "valtio";
import { HexColorPicker } from "react-colorful";
import { Flex, Text } from "@chakra-ui/react";

const state = proxy({
  current: null,
  items: {
    laces: "#fff",
    mesh: "#fff",
    caps: "#fff",
    inner: "#fff",
    sole: "#fff",
    stripes: "#fff",
    band: "#fff",
    patch: "#fff555",
  },
});

export function ShoeModel(props) {
  const { nodes, materials } = useGLTF("./models/shoe-draco.glb");
  const [hovered, setHovered] = useState(null);
  const snap = useSnapshot(state);
  const groupRef = useRef(null);
  const scroll = useScroll();



    useFrame((_state, delta) => {
      const offset = scroll.offset;
      const group = groupRef.current;

      if (group) {
        let targetX, targetY, targetZ;

        if (offset < 0.25) {
          // Rotations for viewing from the top
          targetX = (Math.PI / 4) * Math.min(offset / 0.25, 1);
          targetY = (-Math.PI / 2) * Math.min(offset / 0.25, 1);
          targetZ = 0; // No Z rotation initially
        } else if (offset < 0.5) {
          // Transition to a position where the bottom is primarily visible
          const relativeOffset = (offset - 0.25) / 0.25;
          targetX = MathUtils.lerp(Math.PI / 4, 0, relativeOffset);
          targetY = MathUtils.lerp(-Math.PI / 2, Math.PI / 4, relativeOffset);
          targetZ = MathUtils.lerp(0, -Math.PI / 8, relativeOffset); // Adding a slight Z rotation
        } else if (offset < 0.65) {
          // Maintain the final position for offsets beyond 0.5 and less than 0.65
          targetX = 0;
          targetY = Math.PI / 4;
          targetZ = -Math.PI / 8; // Final Z rotation
        } else {
          // Rotate back to the position like at 0.25 for offsets beyond 0.65
          const relativeOffset = (offset - 0.65) / (1 - 0.65);
          targetX = MathUtils.lerp(0, Math.PI / 4, relativeOffset);
          targetY = MathUtils.lerp(Math.PI / 4, -Math.PI / 2, relativeOffset);
          targetZ = MathUtils.lerp(-Math.PI / 8, 0, relativeOffset);
        }

        // Lerp the rotation for a smooth transition
        group.rotation.x = MathUtils.lerp(group.rotation.x, targetX, 0.05);
        group.rotation.y = MathUtils.lerp(group.rotation.y, targetY, 0.05);
        group.rotation.z = MathUtils.lerp(group.rotation.z, targetZ, 0.05);
      }
    });

  return (
    <motion.group
      {...props}
      ref={groupRef}
      dispose={null}
      style={{ cursor: hovered ? "pointer" : "auto" }}
      onPointerOver={(e) => (
        e.stopPropagation(), setHovered(e.object.material.name)
      )}
      onPointerOut={(e) => e.intersections.length === 0 && setHovered(null)}
      onClick={(e) => (
        e.stopPropagation(), (state.current = e.object.material.name)
      )}
      scale={[0.7, 0.7, 0.7]}
    >
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.shoe.geometry}
        material={materials.laces}
        material-color={snap.items.laces}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.shoe_1.geometry}
        material={materials.mesh}
        material-color={snap.items.mesh}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.shoe_2.geometry}
        material={materials.caps}
        material-color={snap.items.caps}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.shoe_3.geometry}
        material={materials.inner}
        material-color={snap.items.inner}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.shoe_4.geometry}
        material={materials.sole}
        material-color={snap.items.sole}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.shoe_5.geometry}
        material={materials.stripes}
        material-color={snap.items.stripes}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.shoe_6.geometry}
        material={materials.band}
        material-color={snap.items.band}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.shoe_7.geometry}
        material={materials.patch}
        material-color={snap.items.patch}
      />
    </motion.group>
  );
}

export function Picker() {
  const snap = useSnapshot(state);
  console.log(state);
  return (
    <Flex
      position="relative"
      w="100%"
      h="100%"
      // align="left"
      justify="center"
      direction="column"
      align="end"
    >
      {snap.current && (
        <HexColorPicker
          style={{
            position: "absolute",
            top: "10%",
            left: "20%",
            transform: "translate(-50%, 50%)",
            width: "120px",
            height: "120px",
          }}
          className="picker"
          color={snap.items[snap.current]}
          onClick={(e) => e.stopPropagation()}
          onChange={(color) => (state.items[snap.current] = color)}
        />
      )}

      <Flex
        w="100%"
        maxW="500px"
        direction="column"
        gap="25px"
        px="20px"
        fontSize="30px"
        fontWeight="semibold"
      >
        <h1 style={{ color: "black" }}>{snap.current}</h1>
        <Text>Now you do it!</Text>
        <Text>Click on the part you want to change the color</Text>
      </Flex>
    </Flex>
    // <div style={{ display: snap.current ? "block" : "none" }}>
    //   <HexColorPicker
    //     className="picker"
    //     color={snap.items[snap.current]}
    //     onChange={(color) => (state.items[snap.current] = color)}
    //   />
    //   <h1>{snap.current}</h1>
    // </div>
  );
}

useGLTF.preload("./models/shoe-draco.glb");
