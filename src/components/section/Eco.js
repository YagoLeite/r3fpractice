"use client";
import { Flex, Text } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const Eco = ({ setSection }) => {
  const refTitle = useRef(null);
  const refDescription = useRef(null);
  const titleIsInView = useInView(refTitle, { margin: "0px 100px -50px 0px" });
  const descriptionIsInView = useInView(refDescription, {
    margin: "0px 100px -50px 0px",
  });

  return (
    <Flex
      as={motion.div}
      w="100%"
      h="100%"
      direction="column"
      //   justify="center"
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
                  transition: { duration: 0.6, delay: 0.5 },
                }
              : { opacity: 0, y: 100, transition: { duration: 0 } }
          }
        >
          <Text fontSize="32px" fontWeight="bold">
            Eco-Friendly Meets High Fashion
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
            Step forward in style and sustainability with our eco-friendly
            shoes. Crafted from environmentally conscious materials, these shoes
            make a statement of care for the planet while keeping you at the
            forefront of fashion trends. With a sleek, modern design, they are
            the perfect blend of responsibility and elegance. Wear them with
            pride, knowing that your fashion choice contributes to a greener
            future.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Eco;
