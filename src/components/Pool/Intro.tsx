import { ActionIcon, Button, Flex, Text, Title } from "@mantine/core";
import { IconBrandTelegram, IconBrandTwitter } from "@tabler/icons-react";

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
        <ActionIcon bg="#525c9e" aria-label="Settings">
          <IconBrandTelegram
            style={{ width: "70%", height: "70%" }}
            stroke={1.5}
          />
        </ActionIcon>

        <ActionIcon bg="#525c9e" aria-label="Settings">
          <IconBrandTelegram
            style={{ width: "70%", height: "70%" }}
            stroke={1.5}
          />
        </ActionIcon>

        <ActionIcon bg="#525c9e" aria-label="Settings">
          <IconBrandTwitter
            style={{ width: "70%", height: "70%" }}
            stroke={1.5}
          />
        </ActionIcon>
      </Flex>
    </Flex>
  );
};
