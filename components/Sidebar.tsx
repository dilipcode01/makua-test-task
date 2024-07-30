"use client";
import { Box, Button, Flex, Link, Text, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import Logo from "../components/assest/logo.svg";
import User from "../components/assest/user.svg";
import notification from "../components/assest/notification.svg";
import setting from "../components/assest/setting.svg";
import Image from "next/image";

const Sidebar = () => {
  return (
    <Box
      width="20%"
      bg="#fff  "
      height="100%"
      left="0"
      top="0"
      boxShadow="2px 2px 40px rgba(0, 0, 0, 0.10)"
      borderRadius="20px"
      p="35px"
    >
      <VStack spacing={10} align="flex-start" padding={"15px 20px"} fontFamily="Nexa">
        <NextLink href="/" passHref>
          <Link
            fontSize="lg"
            color="#404040"
            fontWeight={"600"}
            display={"flex"}
            alignItems={"center"}
            gap={"8px"}
          >
              <Image src={Logo} alt="Logo"></Image>
          </Link>
        </NextLink>
        <NextLink href="/profile" passHref>
          <Link
            fontSize="lg"
            color="#404040"
            fontWeight={"600"}
            display={"flex"}
            alignItems={"center"}
            gap={"8px"}
          >
            <Image src={User} alt="Logo"></Image>
            Profile
          </Link>
        </NextLink>
        <NextLink href="/notifications" passHref>
          <Link
            fontSize="lg"
            color="#404040"
            fontWeight={"600"}
            display={"flex"}
            alignItems={"center"}
            gap={"8px"}
          >
            <Image src={notification} alt="Logo"></Image>
            Notification
          </Link>
        </NextLink>
        <NextLink href="/settings" passHref>
          <Link
            fontSize="lg"
            color="#404040"
            fontWeight={"600"}
            display={"flex"}
            alignItems={"center"}
            gap={"8px"}
          >
            <Image src={setting} alt="Logo"></Image>
            Settings
          </Link>
        </NextLink>
        <NextLink href="/communities" passHref>
          <Link fontSize="lg" color="#404040" fontWeight={"600"}>
            COMMUNITIES
          </Link>
        </NextLink>
      </VStack>
      <Button
        bg={"white"}
        borderRadius={"36px"}
        borderColor={"#EE2E12"}
        borderWidth={"1px"}
        position={"fixed"}
        bottom="80px"
        padding={"8px 20px"}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.5571 7.05882H14.2857V1.17647C14.2857 0.529412 13.6429 0 12.8571 0H7.14286C6.35714 0 5.71429 0.529412 5.71429 1.17647V7.05882H3.44286C2.17143 7.05882 1.52857 8.32941 2.42857 9.07059L8.98571 14.4706C9.54286 14.9294 10.4429 14.9294 11 14.4706L17.5571 9.07059C18.4571 8.32941 17.8286 7.05882 16.5571 7.05882ZM0 18.8235C0 19.4706 0.642857 20 1.42857 20H18.5714C19.3571 20 20 19.4706 20 18.8235C20 18.1765 19.3571 17.6471 18.5714 17.6471H1.42857C0.642857 17.6471 0 18.1765 0 18.8235Z"
            fill="#EE2E12"
          />
        </svg>
        <Text color={"#EE2E12"} ms={"5px"} fontSize={"14px"} fontWeight={"500"}>
          Download the App
        </Text>
      </Button>
    </Box>
  );
};

export default Sidebar;
