import { ActionIcon, Button, Flex, Text, Title } from "@mantine/core";
import { IconBrandTelegram, IconBrandTwitter } from "@tabler/icons-react";
import Link from "next/link";

export const Intro: React.FC = () => {
  return (
    <Flex
      direction={"column"}
      gap={{
        base: 15,
        md: 20,
      }}
      align={"center"}
      px={50}
    >
      <Title
        order={2}
        fz={{
          base: 35,
          md: 50,
        }}
        ta={"center"}
        fw={"bold"}
        c="white"
      >
        The Top Notch Decentralized VC Launchpad
      </Title>

      <Text c="white" fz={"md"} ta={"center"}>
        All-in-one platform providing VC opportunities for the retail investors.
      </Text>

      <Button
        size="md"
        radius={"xl"}
        variant="gradient"
        gradient={{
          from: "blue",
          to: "violet",
          deg: 90,
        }}
      >
        View all projects
      </Button>

      <Flex gap={15} mt={20}>
        <ActionIcon
          component={Link}
          variant="filled"
          href="https://t.me/IxorapadAnn"
          color="rgba(82, 92, 158, 1)"
        >
          <IconBrandTelegram
            style={{ width: "70%", height: "70%" }}
            stroke={1.5}
          />
        </ActionIcon>
        <ActionIcon
          component={Link}
          variant="filled"
          href="https://t.me/IxorapadChat"
          color="rgba(82, 92, 158, 1)"
        >
          <IconBrandTelegram
            style={{ width: "70%", height: "70%" }}
            stroke={1.5}
          />
        </ActionIcon>
        <ActionIcon
          component={Link}
          variant="filled"
          href="https://x.com/Ixorapad"
          color="rgba(82, 92, 158, 1)"
        >
          <IconBrandTwitter
            style={{ width: "70%", height: "70%" }}
            stroke={1.5}
          />
        </ActionIcon>
      </Flex>
    </Flex>
  );
};
