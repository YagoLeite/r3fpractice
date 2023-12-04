import { Flex } from "@chakra-ui/react";
import React from "react";

const Section = ({ children, id, ...rest }) => {
  return (
    <Flex {...rest} id={id} px="20px" as="section" h="100vh" w="100%">
      {children}
    </Flex>
  );
};

export default Section;
