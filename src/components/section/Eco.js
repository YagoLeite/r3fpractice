"use client";
import { Flex, Text } from "@chakra-ui/react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const Eco = ({ setSection }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <Flex
      as={motion.div}
      ref={ref}
      w="100%"
      h="100%"
      direction="column"
      //   justify="center"
      align="end"
      px="20px"
    >
      <Flex w="100%" maxW="500px" bg="orange" direction="column" gap="32px">
        <Text fontSize="32px" fontWeight="bold">
          Eco-Friendly Meets High Fashion
        </Text>
        <Text fontSize="20px">
          Step forward in style and sustainability with our eco-friendly shoes.
          Crafted from environmentally conscious materials, these shoes make a
          statement of care for the planet while keeping you at the forefront of
          fashion trends. With a sleek, modern design, they are the perfect
          blend of responsibility and elegance. Wear them with pride, knowing
          that your fashion choice contributes to a greener future.
        </Text>
      </Flex>
    </Flex>
  );
};

export default Eco;
