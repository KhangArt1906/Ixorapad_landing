"use client";
import { Box, Container, Image, rem, Stack, Text } from "@mantine/core";
import "@mantine/carousel/styles.css";
import { Carousel } from "@mantine/carousel";
import { OverviewCard } from "./OverviewCard";
import classes from "./Overview.module.css";

export const Overview: React.FC = () => {
  return (
    <Box
      component="section"
      id="overview"
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
        style={{
          objectFit: "fill",
          zIndex: -1,
        }}
      >
        <Image w="100%" h="100%" src="/assets/photo.png" alt="overview" />
      </Box>
      <Container size={"xl"}>
        <Stack align="center">
          <Text
            fz={{ base: rem(32), md: rem(64) }}
            fw="bold"
            variant="gradient"
            gradient={{
              from: "violet",
              to: "cyan",
              deg: 90,
            }}
            tt={"uppercase"}
            ta={"center"}
          >
            Overview
          </Text>

          {/* Carousel */}
          <Box pt={32} w={{ base: "100%", md: "80%" }}>
            <Carousel
              slideSize="100%"
              slideGap={"md"}
              loop
              classNames={classes}
            >
              <OverviewCard />
            </Carousel>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
