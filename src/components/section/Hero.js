import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const Hero = () => {
  return (
    <Flex
      w="100%"
      h="100%"
      direction="column"
      justify="space-between"
      py="50px"
    >
      <Flex w="100%" justify="space-between">
        <Flex
          as={motion.div}
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay: 0.3 },
          }}
          w="100%"
          h="fit-content"
          fontSize="60px"
        >
          <Text>Welcome</Text>
        </Flex>
        <Flex
          as={motion.div}
          initial={{ opacity: 0, y: -100 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay: 0.6 },
          }}
          //   w="fit-content"
          h="fit-content"
          fontSize="45px"
        >
          <Text w="100%">To Shoe Experience</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Hero;
