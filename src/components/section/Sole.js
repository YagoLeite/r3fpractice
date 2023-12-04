"use client";
import { Flex, Text } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const Sole = ({ setSection }) => {
  const refTitle = useRef(null);
  const refDescription = useRef(null);
  const titleIsInView = useInView(refTitle, { margin: "0px 100px -50px 0px" });
  const descriptionIsInView = useInView(refDescription, {
    margin: "0px 100px -50px 0px",
  });
  return (
    <Flex
      w="100%"
      h="100%"
      direction="column"
      //   justify="center"
      align="left"
    >
      <Flex w="100%" maxW="500px" direction="column" gap="32px">
        <Flex
          w="fit-content"
          h="fit-content"
          ref={refTitle}
          as={motion.div}
          initial={{ opacity: 0, y: 100 }}
          animate={
            titleIsInView
              ? {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: 0.5 },
                }
              : { opacity: 0, y: 100, transition: { duration: 0 } }
          }
        >
          <Text fontSize="32px" fontWeight="bold">
            Step into Unmatched Comfort
          </Text>
        </Flex>
        <Flex
          w="fit-content"
          h="fit-content"
          as={motion.div}
          ref={refDescription}
          initial={{ opacity: 0, y: 100 }}
          animate={
            descriptionIsInView
              ? {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: 0.7 },
                }
              : { opacity: 0, y: 100, transition: { duration: 0 } }
          }
        >
          <Text fontSize="20px">
            Our shoes are more than just a style statement; they're a testament
            to comfort. The sole of each shoe is engineered with cutting-edge
            technology to provide unparalleled support and cushioning. Perfect
            for those who spend long hours on their feet, our soles absorb
            impact, reducing fatigue and offering a cloud-like walking
            experience. It's not just a sole; it's the foundation of your
            day-to-day comfort and endurance.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Sole;
