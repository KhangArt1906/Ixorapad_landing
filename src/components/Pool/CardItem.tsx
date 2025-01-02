import {
  ActionIcon,
  Avatar,
  Box,
  Button,
  Card,
  Flex,
  Group,
  Image,
  NumberFormatter,
  Text,
} from "@mantine/core";
import Link from "next/link";

export type CartItemType = {
  cardName: string;
  src: string;
  coinAvatar: string;
  totalRaise: number;
  token: string;
  rate?: string;
  percent?: string;
  supported: string;
  access?: string;
  status: string;
  slug: string;
};

export const CartItems: React.FC<CartItemType> = ({
  src,
  cardName,
  coinAvatar,
  totalRaise,
  token,
  rate,
  supported,
  status,
  slug,
}) => {
  return (
    <Card
      component={Link}
      href={`/pool/${slug}`}
      radius={"lg"}
      bg="#1f242c"
      w="100%"
      maw={400}
      pos={"relative"}
    >
      <Card.Section>
        <Image src={src} alt={cardName} height={160} />
      </Card.Section>

      <Box py={20} px={5}>
        <Flex direction={"column"} justify={"space-between"}>
          <Group justify="space-between" mb={5}>
            <Text size={"md"} fw={"bold"} c={"blue"}>
              {cardName}
            </Text>

            <ActionIcon
              variant="default"
              radius={"xl"}
              aria-label="Settings"
              size="sm"
            >
              <Avatar src={coinAvatar} size={24} />
            </ActionIcon>
          </Group>

          <Group justify="space-between" mb={5}>
            <Text size={"md"} fw={"bold"} c={"var(--mantine-color-gray-4)"}>
              Total Raise
            </Text>

            <Text size="md" fw={"bold"} c="white">
              <NumberFormatter
                value={totalRaise}
                prefix="$"
                thousandSeparator
              />
            </Text>
          </Group>

          <Group justify="space-between" mb={5}>
            <Text size={"md"} fw={"bold"} c={"var(--mantine-color-gray-4)"}>
              Rate
            </Text>

            <Text size="md" fw={"bold"} c="white">
              1 {token} = {rate}
            </Text>
          </Group>

          <Group justify="space-between" mb={5}>
            <Text size={"md"} fw={"bold"} c={"var(--mantine-color-gray-4)"}>
              Supported
            </Text>

            <Text size="md" fw={"bold"} c="white">
              {supported}
            </Text>
          </Group>

          <Button fullWidth mt={"md"} radius={"xl"} disabled>
            {status}
          </Button>
        </Flex>
      </Box>
    </Card>
  );
};
