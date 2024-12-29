"use client";

import { Box, Container, Grid, Image } from "@mantine/core";
import { EcosystemContent } from "./EcosystemContent";

export const Ecosystem = () => {
  return (
    <Box
      component="section"
      id="ecosystem"
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
        <Image src="/assets/photo.png" w="100%" h="100%" alt="ecosystem" />
      </Box>

      <Container size="xl" h={"100%"}>
        <Grid gutter={24}>
          <Grid.Col span={{ base: 12, md: 6 }} pt={{ base: 2, md: 1 }}>
            <Image
              src="/assets/ecosystem.png"
              alt="ecosystem"
              mt={64}
              w={{ base: "100%", md: "90%" }}
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }} pt={{ base: 2, md: 1 }}>
            <EcosystemContent />
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};
