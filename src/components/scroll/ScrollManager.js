import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";

const ScrollManager = ({ onSectionChange, section }) => {
  const data = useScroll();
  const lastSection = useRef(null);

  useEffect(() => {
    const test = document?.getElementById(section);
    console.log(test);
    test?.scrollIntoView();
  }, [section]);
  // data.el.querySelector("section").scrollIntoView();

  // useFrame(() => {
  //   // Calculate the current section index
  //   // const currentSection = Math.floor(data.scroll.current * data.pages);

  //   // // Check if the section has changed since the last frame
  //   // if (lastSection.current !== currentSection) {
  //   //   // Call the onSectionChange function with the new section index
  //   //   onSectionChange(currentSection);
  //   //   // Update the lastSection ref to the current section
  //   //   lastSection.current = currentSection;
  //   // }

  // });

  return <></>;
};

export default ScrollManager;
