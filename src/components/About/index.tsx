"use client";
import { Box, Container, Grid, Image } from "@mantine/core";
import { AboutImage } from "./AboutImage";
import { AboutContent } from "./AboutContent";

export const About: React.FC = () => {
  return (
    <Box
      component="section"
      id="about"
      h="100dvh"
      pos={"relative"}
      style={{ zIndex: 1 }}
      py={128}
    >
      <Box
        w={"100%"}
        h={"100%"}
        pos={"absolute"}
        inset={0}
        style={{ objectFit: "fill", zIndex: -1 }}
      >
        <Image src="/assets/bg.svg" w="100%" h="100%" alt="background" />
      </Box>

      <Container size="xl" h={"100%"}>
        <Grid>
          <Grid.Col span={{ base: 12, md: 7 }} pt={{ base: 128, md: 0 }}>
            <AboutImage />
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 5 }}>
            <AboutContent />
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};
