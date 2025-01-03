"use client";

import { Box, Button, Container, Flex, Group, Text } from "@mantine/core";
import { Intro } from "./Intro";
import { Stepper } from "./Stepper";
import { IconArrowRight } from "@tabler/icons-react";
import { poolData } from "./data";
import { CartItems } from "./CardItems";

export const Pool: React.FC = () => {
  return (
    <section>
      <Container
        size={"xl"}
        pt={50}
        pb={30}
        w="100%"
        style={{
          zIndex: 2,
        }}
      >
        <Intro />
        <Stepper />

        <Box mt={55}>
          <Text fw={"bold"} c={"white"} fz={30}>
            Project List
          </Text>

          <Flex
            direction={"row"}
            align={"center"}
            justify={"flex-start"}
            mt={15}
          >
            <Group gap={15}>
              <Text size="md" c={"blue"}>
                Upcoming
              </Text>

              <Button
                rightSection={<IconArrowRight size={16} />}
                size="xs"
                color="cyan"
                variant="filled"
                radius={"xl"}
                fw={"bold"}
                fz={{
                  base: 14,
                  md: 16,
                }}
              >
                View More
              </Button>
            </Group>
          </Flex>

          <Flex
            align={"center"}
            direction={{ base: "column", md: "row" }}
            gap={40}
            mt={30}
          >
            {poolData?.map((item) => (
              <CartItems
                key={item.name}
                cardName={item.name}
                coinAvatar={item.coinAvatar}
                totalRaise={item.totalRaise}
                token={item.token}
                rate={item.rate}
                supported={item.supported}
                status={item.status}
                slug={item.slug}
                src={item.avatar}
              />
            ))}
          </Flex>
        </Box>
      </Container>
    </section>
  );
};
