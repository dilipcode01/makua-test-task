"use client"
import { Box, Divider, Heading, Text, VStack } from "@chakra-ui/react";

const Notifications = () => {
  return (
    <VStack spacing="4">
      <Heading as="h1" size="xl" mb="4" textAlign="center">
        Notifications Page
      </Heading>
      <Divider />
      <Text fontSize="md" color="gray.600" textAlign="center">
        This is the Notifications page. Here you will see all your
        notifications.
      </Text>
    </VStack>
  );
};

export default Notifications;
