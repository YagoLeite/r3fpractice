"use client";
import { Flex, Text } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import React, { useRef } from "react";

const Sole = ({ setSection }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  if (isInView) {
    setSection(2);
  }
  return (
    <Flex
      ref={ref}
      w="100%"
      h="100%"
      direction="column"
      //   justify="center"
      align="left"
      px="20px"
    >
      <Flex w="100%" maxW="500px" direction="column" gap="32px">
        <Text fontSize="32px" fontWeight="bold">
          Step into Unmatched Comfort
        </Text>
        <Text fontSize="20px">
          Our shoes are more than just a style statement; they're a testament to
          comfort. The sole of each shoe is engineered with cutting-edge
          technology to provide unparalleled support and cushioning. Perfect for
          those who spend long hours on their feet, our soles absorb impact,
          reducing fatigue and offering a cloud-like walking experience. It's
          not just a sole; it's the foundation of your day-to-day comfort and
          endurance.
        </Text>
      </Flex>
    </Flex>
  );
};

export default Sole;
