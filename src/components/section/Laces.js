"use client";
import { Flex, Text } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const Laces = ({ setSection }) => {
  const refTitle = useRef(null);
  const refDescription = useRef(null);
  const titleIsInView = useInView(refTitle, { margin: "0px 100px -50px 0px" });
  const descriptionIsInView = useInView(refDescription, {
    margin: "0px 100px -50px 0px",
  });

  return (
    <Flex
      // as={motion.div}
      // ref={ref}
      w="100%"
      h="100%"
      direction="column"
      justify="center"
      align="end"
      px="20px"
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
                  transition: { duration: 0.6, delay: 0.3 },
                }
              : { opacity: 0, y: 100, transition: { duration: 0 } }
          }
        >
          <Text fontSize="32px" fontWeight="bold">
            Experience the Perfect Fit with Our Revolutionary Laces
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
                  transition: { duration: 0.6, delay: 0.4 },
                }
              : { opacity: 0, y: 100, transition: { duration: 0 } }
          }
        >
          <Text fontSize="20px">
            Dive into the world of unparalleled comfort and style with our
            shoes. Our innovative laces are designed to adjust perfectly to the
            contours of your foot, ensuring a snug and secure fit every time.
            Whether you're on a casual walk or a vigorous run, our laces
            maintain their grip, providing you with an effortless wearing
            experience. Say goodbye to constant retying and embrace the blend of
            functionality and fashion.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Laces;
