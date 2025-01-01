"use client";
import { Box, Container, Image, rem, Text } from "@mantine/core";
import { PartnerIcon } from "./PartnerIcon";

export const Partner = () => {
  return (
    <Box
      component="section"
      id="partner"
      py={128}
      pos={"relative"}
      style={{
        zIndex: 1,
      }}
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
        <Image src="/assets/photo.png" alt="partner" />
      </Box>

      <Container size={"xl"}>
        <Text
          fz={{ base: rem(48), md: rem(90) }}
          fw={"bold"}
          variant="gradient"
          gradient={{
            from: "violet",
            to: "cyan",
            deg: 90,
          }}
          ta={"center"}
          tt={"uppercase"}
        >
          Partners
        </Text>

        <PartnerIcon />
      </Container>
    </Box>
  );
};
