"use client";
import { Canvas } from "@react-three/fiber";
import React, { useState } from "react";
import { Picker, ShoeModel } from "./ShoeModel";
import {
  ContactShadows,
  OrbitControls,
  Scroll,
  ScrollControls,
} from "@react-three/drei";
import Section from "../section/Section";
import Laces from "../section/Laces";
import Sole from "../section/Sole";
import Eco from "../section/Eco";
import ScrollManager from "../scroll/ScrollManager";
import MyCamera from "./MyCamera";

const MyCanvas = () => {
  const [section, setSection] = useState(1);

  return (
    <>
      <Canvas
        style={{ height: "100vh", width: "100%", backgroundColor: "white" }}
        shadows
      >
        <ScrollControls pages={5} damping={0.1}>
          {/* <ScrollManager section={section} onSectionChange={setSection} /> */}
          <axesHelper />
          <MyCamera />
          <ShoeModel />
          <ambientLight intensity={3} />
          <ContactShadows position={[0, -1.2, 0]} color="#ffffff" />
          <OrbitControls enableZoom={false} />
          <Scroll
            html
            style={{
              display: "flex",
              //   gap: "30px",
              width: "100vw",
              flexDirection: "column",
            }}
          >
            <Section id="1">1</Section>
            <Section id="2">
              <Laces setSection={setSection} />
            </Section>
            <Section id="3">
              <Sole setSection={setSection} />
            </Section>
            <Section id="4">
              <Eco setSection={setSection} />
            </Section>
            <Section>
              <Picker />
            </Section>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );
};

export default MyCanvas;
