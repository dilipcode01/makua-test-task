import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import RightSidebar from "../components/RightSidebar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <Flex gap="30px" padding={"35px"} bg="gray.200" height={"100vh"}>
            <Sidebar />
            <Box
              flex="1"
              alignItems={"center"}
              height="100%"
              overflow={"auto"}
              p="4"
              bg="#fff"
              borderRadius="20px"
            >
              {children}
            </Box>
            <RightSidebar />
          </Flex>
        </ChakraProvider>
      </body>
    </html>
  );
};

export default RootLayout;
