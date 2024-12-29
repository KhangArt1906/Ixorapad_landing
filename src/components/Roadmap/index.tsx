"use client";
import { Box, Container, Flex, rem, Text } from "@mantine/core";
import { RoadMapList } from "./RoadMapList";

export const RoadMap = () => {
  return (
    <Box component="section" id="roadmap" py={128}>
      <Container size="xl">
        <Flex
          direction={"column"}
          align={"center"}
          gap={{
            base: 80,
            md: 120,
          }}
          pos={"relative"}
        >
          <Text
            fz={{ base: rem(48), md: rem(90) }}
            fw={"bold"}
            variant="gradient"
            gradient={{
              from: "violet",
              to: "cyan",
              deg: 90,
            }}
            tt={"uppercase"}
            ta={"center"}
          >
            Roadmap
          </Text>

          <RoadMapList />
        </Flex>
      </Container>
    </Box>
  );
};
