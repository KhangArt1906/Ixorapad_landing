"use client";
import { Box, Container, Grid, Image } from "@mantine/core";
import { IntroInfo } from "./IntroInfo";
import { IntroImage } from "./IntroImage";

export const Intro: React.FC = () => {
  return (
    <Box
      component="section"
      id="intro"
      h="100dvh"
      pos="relative"
      style={{ zIndex: 1 }}
    >
      <Box
        w="100%"
        h="100%"
        pos="absolute"
        inset={0}
        style={{ objectFit: "fill", zIndex: -1 }}
      >
        <Image w="100%" h="100%" src="/assets/bg.svg" alt="bg" />
      </Box>

      <Container size={"xl"} h="100%" mt={24}>
        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }} pt={{ base: 2, md: 1 }}>
            <IntroInfo />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }} pt={{ base: 1, md: 2 }}>
            <IntroImage />
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};
