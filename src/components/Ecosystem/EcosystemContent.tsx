import { vt323 } from "@/theme/fonts";
import { Box, Group, Image, rem, Stack, Text } from "@mantine/core";

export const EcosystemContent: React.FC = () => {
  return (
    <Stack>
      <Text
        fz={{ base: rem(48), md: rem(90) }}
        fw={"bold"}
        variant="gradient"
        gradient={{
          from: "violet",
          to: "cyan",
          deg: 90,
        }}
      >
        Ixorapad Ecosystem
      </Text>

      <Group>
        <Box>
          <Text
            size="xl"
            c={"var(--mantine-color-gray-0)"}
            className={vt323.className}
          >
            The Ixorapad Ecosystem encompasses a range of services supporting
            both GameFi startups and investors. Through the Ixora Incubation
            Hub, we invest in early-stage GameFi projects, providing founders
            with comprehensive training in areas like market research, product
            design, and fundraising. The Ixora Launchpad offers startups a
            platform to raise capital and showcase their innovations, while
            investors gain early access to promising projects. Ixora Earn
            includes a staking platform for additional earning opportunities.
            Lastly, AI Integration enhances the ecosystem with AI-driven
            customer support, news, KYC & audit services, and a trading
            assistant.
          </Text>

          <Image
            src={"/assets/eco.png"}
            alt="eco"
            w={"100%"}
            visibleFrom="md"
          />
        </Box>
      </Group>
    </Stack>
  );
};
