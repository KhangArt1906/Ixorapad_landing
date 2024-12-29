"use client";

import { Box, Container, Grid, Image, rem, Stack, Text } from "@mantine/core";
import { VisionImage } from "./VisionImage";
import { VisionContent } from "./VisionContent";

export const Vision: React.FC = () => {
  return (
    <Box
      component="section"
      id="vision"
      py={128}
      pos={"relative"}
      style={{ zIndex: 1 }}
    >
      <Box
        w={"100%"}
        h={"100%"}
        pos={"absolute"}
        inset={0}
        style={{ objectFit: "fill", zIndex: -1 }}
      >
        <Image src={"/assets/photo.png"} alt="vision" />
      </Box>

      <Container size={"xl"}>
        <Stack align="center" gap={"xl"}>
          <Text
            fz={{ base: rem(48), md: rem(90) }}
            fw="bold"
            variant="gradient"
            gradient={{
              from: "violet",
              to: "cyan",
              deg: 90,
            }}
            ta={"center"}
          >
            Vision & Mission
          </Text>
          <Grid>
            <Grid.Col span={{ base: 12, md: 6 }} pt={{ base: 1, md: 2 }}>
              <VisionContent />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }} pt={{ base: 2, md: 1 }}>
              <VisionImage />
            </Grid.Col>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};
