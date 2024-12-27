import { vt323 } from "@/theme/fonts";
import { Button, Group, rem, Stack, Text } from "@mantine/core";
import Link from "next/link";
import classes from "./IntroInfo.module.css";
import {
  IconBrandInstagram,
  IconBrandTelegram,
  IconBrandTwitter,
} from "@tabler/icons-react";

export const IntroInfo: React.FC = () => {
  return (
    <Stack gap={24}>
      <Stack gap={4}>
        <Text c="var(--mantine-color-gray-0)" className={vt323.className}>
          Welcome to Ixorapad, a decentralized launchpad connecting individual
          investors and venture capital
        </Text>

        <Text
          fz={{ base: rem(32), md: rem(64) }}
          fw="bold"
          variant="gradient"
          gradient={{
            from: "violet",
            to: "cyan",
            deg: 90,
          }}
        >
          Offering exclusive early-state GameFi investment opportunities
        </Text>

        <Text
          size="xl"
          c="var(--mantine-color-gray-0)"
          className={vt323.className}
        >
          A secure, transparent platform supporting the future of blockchain
          gaming
        </Text>
      </Stack>

      <Group>
        <Button
          variant="gradient"
          gradient={{
            from: "violet",
            to: "cyan",
            deg: 90,
          }}
          component={Link}
          href="/"
          className={classes.button}
        >
          WHITEPAPER
        </Button>
      </Group>

      <Group>
        <Link className={classes.icon} href="/">
          <IconBrandTelegram />
        </Link>

        <Link className={classes.icon} href="/">
          <IconBrandInstagram />
        </Link>

        <Link className={classes.icon} href="/">
          <IconBrandTwitter />
        </Link>
      </Group>
    </Stack>
  );
};
