import { Box, Container, Flex, Text } from "@mantine/core";

const content = {
  textOne: "@2024. All rights reserved",
  textTwo: "Privacy Policy",
  textThree: "Terms & Conditions",
};

export const SubFooter: React.FC = () => {
  return (
    <Box bg={"var(--mantine-color-dark-9)"}>
      <Container size={"xl"}>
        <Flex
          align={"center"}
          justify={{ base: "center", md: "space-between" }}
          py={12}
          mt={32}
          c="var(--mantine-color-gray-0)"
        >
          <Text fz="sm">{content.textOne}</Text>
          <Text fz="sm" visibleFrom="md">
            {content.textTwo}
          </Text>
          <Text fz="sm" visibleFrom="md">
            {content.textThree}
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};
