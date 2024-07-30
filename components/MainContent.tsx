"use client";
import { Box, Button, VStack, useDisclosure } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const CustomModal = dynamic(() => import("../components/customModal"), {
  ssr: false,
  loading: () => null,
});

const MainContent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box flex="1" p="4">
      <Button onClick={onOpen} mb="4" bg={"gray.200"} borderRadius={"50px"} padding={"12px 30px"}>
        Open modal
      </Button>
      {isOpen && <CustomModal isOpen={isOpen} onClose={onClose} />}
      <VStack spacing={5}></VStack>
    </Box>
  );
};

export default MainContent;
