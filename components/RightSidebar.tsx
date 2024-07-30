"use client";
import {
  Avatar,
  Box,
  Button,
  Center,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

const RightSidebar = () => {
  return (
    <Box
      width="20%"
      height="80vh"

    >
      <VStack
        spacing={0}
        align="left"
        bg={"transparent"}
        maxH={"80vh"}
        borderRadius={"20px"}
        position={"sticky"}
        top={"0"}
      >
        <Box
          bg="white"
          width="80%"
          ps={"40px"}
          pe={"40px"}
          maxH={"100vh"}
          w={"100%"}
          paddingTop={"40px"}
          paddingBottom={"80px"}
          borderRadius={"20px"}
          position={"sticky"}
          top={"50px"}
          style={{ boxShadow: "2px 2px 40px rgba(0, 0, 0, 0.10)" }}
        >
          <Center paddingTop={"20px"}>
            <Avatar
              src={"/images/makuan.png"}
              style={{ width: "100px", height: "100px" }}
              overflow={"hidden"}
              bg={"white"}
              borderWidth={"2px"}
              borderColor={"red"}
            />
          </Center>
          <Center
            fontFamily={"Montserrat"}
            fontWeight={700}
            fontSize={"18px"}
            mt={"30px"}
            lineHeight={"24px"}
          >
            John Doe
          </Center>
          <Center
            fontFamily={"Montserrat"}
            fontWeight={500}
            color={"#8F8F90"}
            fontSize={"14px"}
            mt={"30px"}
            lineHeight={"24px"}
            textAlign={"center"}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Center>
          <Center
            fontFamily={"Montserrat"}
            fontWeight={500}
            fontSize={"14px"}
            mt={"30px"}
            lineHeight={"24px"}
            textAlign={"center"}
          >
            <Button
              bg={"white"}
              w={"120px"}
              h={"36px"}
              borderRadius={"36px"}
              borderColor={"#EE2E12"}
              borderWidth={"1px"}
            >
              <Link href={"/editprofile"}>
                <Text
                  color={"#EE2E12"}
                  ms={"5px"}
                  fontSize={"14px"}
                  fontWeight={"500"}
                >
                  Edit profile
                </Text>
              </Link>
            </Button>
          </Center>
        </Box>
      </VStack>
    </Box>
  );
};

export default RightSidebar;
