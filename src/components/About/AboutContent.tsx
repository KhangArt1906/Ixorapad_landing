import { vt323 } from "@/theme/fonts";
import { Box, Group, rem, Stack, Text } from "@mantine/core";

export const AboutContent: React.FC = () => {
  return (
    <Stack>
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
      >
        ABOUT
      </Text>

      <Group>
        <Box>
          <Text
            size="xl"
            c="var(--mantine-color-gray-0)"
            className={vt323.className}
          >
            Ixorapad is a decentralized launchpad platform that offers
            early-stage Gamefi project investment opportunities to both
            individual investors and venture capital firms.
          </Text>
        </Box>

        <Box>
          <Text
            size="xl"
            c="var(--mantine-color-gray-0)"
            className={vt323.className}
          >
            Ixorapad serves as a bridge between investors and Gamefi project
            founders in the seed and private rounds, with the ultimate goal of
            scaling up the Gamefi & decentralized fundraising market. Ixorapad
            helps accelerate the growth of Gamefi ventures with maximized funds,
            products, people & networks.
          </Text>
        </Box>
      </Group>
    </Stack>
  );
};
