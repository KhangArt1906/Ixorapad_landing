import { Stack, Text } from "@mantine/core";
import { vt323 } from "@/theme/fonts";

export const VisionContent: React.FC = () => {
  return (
    <Stack pt={48}>
      <Text
        size="xl"
        variant="gradient"
        gradient={{
          from: "violet",
          to: "grape",
          deg: 90,
        }}
        className={vt323.className}
      >
        At Ixorapad, we firmly believe that the advent of blockchain technology
        has ushered in a new era of borderless financing. The very essence of
        decentralization, which lies at the heart of this technology, has paved
        the way for greater transparency, distribution, and a permissionless
        approach to financial transactions. By placing the power and control
        back into the hands of users, the traditional centralized systems have
        been effectively challenged and disrupted.
      </Text>

      <Text
        size="xl"
        variant="gradient"
        gradient={{
          from: "violet",
          to: "grape",
          deg: 90,
        }}
        className={vt323.className}
      >
        As a core team at Ixorapad, our vision is to further contribute to the
        decentralization of the financing sector within the blockchain industry.
        We are committed to creating opportunities for investors and community
        members to participate in venture capital-oriented rounds of
        investments. This not only promotes a more inclusive and democratic
        approach to financing but also empowers individuals to be a part of the
        growth and success of innovative projects.
      </Text>

      <Text
        size="xl"
        variant="gradient"
        gradient={{
          from: "violet",
          to: "grape",
          deg: 90,
        }}
        className={vt323.className}
      >
        The inception of Ixorapad was driven by the need to address the
        challenges faced in product development, decentralized crowdfunding, and
        financing for prospective Gamefi projects.
      </Text>
    </Stack>
  );
};
