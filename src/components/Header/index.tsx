"use client";

import {
  Box,
  Burger,
  Button,
  Container,
  Drawer,
  Group,
  rem,
  ScrollArea,
} from "@mantine/core";
import { useClickOutside, useDisclosure } from "@mantine/hooks";
import { usePathname } from "next/navigation";
import { IconArrowRight } from "@tabler/icons-react";
import classes from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import { montserrat } from "@/theme/fonts";

const links = [
  {
    href: "#about",
    title: "About",
  },
  {
    href: "#overview",
    title: "Overview",
  },
  {
    href: "#ecosystem",
    title: "Ecosystem",
  },
  {
    href: "#vision",
    title: "Vision & Mission",
  },
  {
    href: "#roadmap",
    title: "Roadmap",
  },
  {
    href: "#tokenomics",
    title: "Tokenomics",
  },
  {
    href: "/pool",
    title: "Pool",
  },
  {
    href: "/staking",
    title: "Staking",
  },
  {
    href: "/covernance",
    title: "Covernance",
  },
  {
    href: "#",
    title: "Buy Ixora",
  },
];

export const Header: React.FC = () => {
  const pathName = usePathname();
  const [drawOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  const ref = useClickOutside(closeDrawer);

  const link =
    pathName !== "/"
      ? links.slice(6, 10).map((item) => (
          <Box
            component={Link}
            key={item.title}
            href={item.href}
            className={classes.link}
            p={8}
          >
            {item.title}
          </Box>
        ))
      : links.slice(0, 6).map((item) => (
          <Box
            component={Link}
            key={item.title}
            href={item.href}
            className={classes.link}
            p={8}
          >
            {item.title}
          </Box>
        ));

  return (
    <Box component="section" id="header" className={classes.background}>
      <Container size={"xl"} mx="auto">
        <Box>
          <header className={classes.header}>
            <Group h="100%">
              <Link href={"/"}>
                <Image
                  src="/assets/logo.png"
                  alt="Logo"
                  width={200}
                  height={60}
                />
              </Link>

              <Group
                gap={12}
                visibleFrom="md"
                className={montserrat.className}
                justify="center"
                align="center"
                flex={1}
              >
                {link}
              </Group>

              {pathName !== "/" ? (
                <Group gap={10} visibleFrom="md">
                  <Button
                    variant="gradient"
                    gradient={{
                      from: "blue",
                      to: "violet",
                      deg: 90,
                    }}
                    radius="xl"
                    size="md"
                  >
                    Connect Wallet
                  </Button>
                </Group>
              ) : (
                <Group visibleFrom="md">
                  <Button
                    variant="gradient"
                    gradient={{
                      from: "violet",
                      to: "cyan",
                      deg: 90,
                    }}
                    component={Link}
                    href="/pool"
                    size="lg"
                    className={classes.button}
                    tt={"uppercase"}
                  >
                    Launch App
                  </Button>
                </Group>
              )}

              <Group flex={1} justify="end" hiddenFrom="md">
                <Burger
                  opened={drawOpened}
                  onClick={toggleDrawer}
                  size={"md"}
                  classNames={{ root: classes.burger }}
                />
              </Group>
            </Group>
          </header>

          <Drawer
            opened={drawOpened}
            onClose={closeDrawer}
            size="100%"
            padding={"md"}
            hiddenFrom="md"
            zIndex={1000000}
            transitionProps={{
              transition: "fade-left",
              duration: 150,
              timingFunction: "linear",
            }}
            classNames={{ header: classes.background }}
          >
            <ScrollArea
              h={`calc(100vh - ${rem(80)})`}
              mx="-md"
              className={montserrat.className}
              bg="#0f05fd1"
            >
              <Box ref={ref} onClick={closeDrawer}>
                {link}
              </Box>

              <Group justify="center" grow pb="xl" px="md" mt={24}>
                <Button
                  component={Link}
                  href="/pool"
                  className={classes.button}
                  variant="gradient"
                  gradient={{ from: "violet", to: "cyan", deg: 90 }}
                  tt={"uppercase"}
                >
                  Launch App
                </Button>

                <Button
                  component={Link}
                  href="/"
                  variant="subtle"
                  rightSection={<IconArrowRight />}
                >
                  Whitepaper
                </Button>
              </Group>
            </ScrollArea>
          </Drawer>
        </Box>
      </Container>
    </Box>
  );
};
