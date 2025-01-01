"use client";
import { Box, Container, Grid, Group, Image, Stack, Text } from "@mantine/core";
import classes from "./Footer.module.css";
import { FooterNavigation } from "./FooterNavigation";
import Link from "next/link";
import { IconChevronRight } from "@tabler/icons-react";
import { SubFooter } from "./SubFooter";

const menuLinks = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Overview",
    href: "#overview",
  },
  {
    title: "Vision & Mission",
    href: "#vision",
  },
  {
    title: "Ecosystem",
    href: "#ecosystem",
  },
  {
    title: "Tokenomics",
    href: "#roadmap",
  },
];

const socialLinks = [
  {
    title: "Telegram",
    href: "#telegram",
  },
  {
    title: "Telegram Group",
    href: "#telegram",
  },
  {
    title: "Twitter",
    href: "#telegram",
  },
];

export const Footer = () => {
  return (
    <Box component="section" id="footer" className={classes.bg}>
      <Container size={"xl"} mx="auto" pt={32}>
        <Grid>
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Stack align="center">
              <Image src="/assets/logo.png" alt="logo" w="40%" />
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 2 }} visibleFrom="md">
            <FooterNavigation links={menuLinks} />
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 2 }} visibleFrom="md">
            <FooterNavigation links={socialLinks} />
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 3 }}>
            <Stack>
              <Group>
                <Link href="" className={classes.link}>
                  Whitepaper
                </Link>
                <IconChevronRight color="var(--mantine-color-gray-0)" />
              </Group>

              <Text c="var(--mantine-color-gray-0)">
                partnership@ixorapad.com
              </Text>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
      <SubFooter />
    </Box>
  );
};
