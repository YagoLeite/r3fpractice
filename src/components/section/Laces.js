"use client";
import { Flex, Text } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const Laces = ({ setSection }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <Flex
      as={motion.div}
      ref={ref}
      w="100%"
      h="100%"
      direction="column"
      justify="center"
      align="end"
      px="20px"
    >
      <Flex w="100%" maxW="500px" direction="column" gap="32px">
        <Text fontSize="32px" fontWeight="bold">
          Experience the Perfect Fit with Our Revolutionary Laces
        </Text>
        <Text fontSize="20px">
          Dive into the world of unparalleled comfort and style with our shoes.
          Our innovative laces are designed to adjust perfectly to the contours
          of your foot, ensuring a snug and secure fit every time. Whether
          you're on a casual walk or a vigorous run, our laces maintain their
          grip, providing you with an effortless wearing experience. Say goodbye
          to constant retying and embrace the blend of functionality and
          fashion.
        </Text>
      </Flex>
    </Flex>
  );
};

export default Laces;
