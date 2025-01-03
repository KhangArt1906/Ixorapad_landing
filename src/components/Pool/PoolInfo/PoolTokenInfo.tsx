import {
  ActionIcon,
  Badge,
  Box,
  Card,
  Divider,
  Group,
  Image,
  Stack,
  Text,
} from "@mantine/core";
import { IconPointFilled } from "@tabler/icons-react";
import Link from "next/link";
import { socialType, tokenInfoType } from "../data";
import classes from "./PoolTokenInfo.module.css";

export type PoolTokenInfoProps = {
  coverPhoto: string;
  avatar: string;
  name: string;
  status: string;
  social: socialType[];
  intro: string;
  tokenInfo: tokenInfoType[];
  schedule: tokenInfoType[];
};

export const PoolTokenInfo: React.FC<PoolTokenInfoProps> = ({
  coverPhoto,
  avatar,
  name,
  status,
  social,
  intro,
  tokenInfo,
  schedule,
}) => {
  return (
    <Card radius="md" bg="var(--mantine-color-dark-7)">
      <Card.Section>
        <Image src={coverPhoto} alt="cover-photo" h={200} />
      </Card.Section>

      <Stack align="center">
        <Box className={classes.transY} h={100}>
          <Image radius="50%" h={150} w={150} src={avatar} alt="avatar" />
        </Box>
        <Text fz={24} fw="bold" tt="capitalize" c="var(--mantine-color-gray-2)">
          {name}
        </Text>
        <Badge
          leftSection={<IconPointFilled size={20} color="lime" />}
          size="lg"
          variant="gradient"
          gradient={{ from: "violet", to: "cyan", deg: 90 }}
          tt="capitalize"
        >
          {status}
        </Badge>
        <Group>
          {social?.map((item, index) => (
            <ActionIcon
              key={index}
              component={Link}
              href={item.socialLink}
              variant="gradient"
            >
              {item.icon}
            </ActionIcon>
          ))}
        </Group>
      </Stack>
      <Divider my="lg" variant="solid" />
      <Box mt={24} c="var(--mantine-color-gray-4)">
        <Text fw="bold" mb={8} fz="xl" c="var(--mantine-color-gray-2)">
          About
        </Text>
        <Text ta="justify">{intro}</Text>
      </Box>

      <Box mt={24} c="var(--mantine-color-gray-4)">
        <Text fw="bold" mb={8} fz="xl" c="var(--mantine-color-gray-2)">
          Token
        </Text>
        {tokenInfo?.map((i) => (
          <Box key={i.title}>
            <Group justify="space-between" mt={8}>
              <Text>{i.title}:</Text>
              <Text>{i.content}</Text>
            </Group>
            <Divider my="xs" variant="solid" size="xs" />
          </Box>
        ))}
      </Box>

      <Box mt={24} c="var(--mantine-color-gray-4)">
        <Text fw="bold" mb={8} fz="xl" c="var(--mantine-color-gray-2)">
          Sale Schedule
        </Text>
        {schedule?.map((i) => (
          <Box key={i.title}>
            <Group justify="space-between" mt={8}>
              <Text>{i.title}:</Text>
              <Text>{i.content}</Text>
            </Group>
            <Divider my="xs" variant="solid" size="xs" />
          </Box>
        ))}
      </Box>
    </Card>
  );
};
