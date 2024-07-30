"use client"
import { Heading, Text, VStack } from "@chakra-ui/react";

const Settings = () => {
  return (
    <VStack spacing="4">
      <Heading as="h1" size="xl" mb="4" textAlign="center">
        settings Page
      </Heading>
      <Text fontSize="md" color="gray.600" textAlign="center">
        This is the settings page.
      </Text>
    </VStack>
  );
};

export default Settings;
