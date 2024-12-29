"use client";
import {
  Box,
  Card,
  Center,
  Container,
  Grid,
  Image,
  rem,
  Stack,
  Text,
} from "@mantine/core";
import classes from "./Tokenomics.module.css";
import { vt323 } from "@/theme/fonts";
import { ChartItem } from "./ChartItem";

const token = [
  {
    color: "#fff5eb",
    text: "IDO/ICO 1%",
  },
  {
    color: "#c082e5",
    text: "Private Round 1%",
  },
  {
    color: "#258bc9",
    text: "Team 20%",
  },
  {
    color: "#38469e",
    text: "Marketing 20%",
  },
  {
    color: "#ff245a",
    text: "Community 17%",
  },
  {
    color: "#fed40e",
    text: "Liquidity 15%",
  },
  {
    color: "#53ced4",
    text: "Ecosystem 20%",
  },
  {
    color: "#ff0ad7",
    text: "Angel Investment 1%",
  },
];

export const Tokenomics: React.FC = () => {
  return (
    <Box
      component="section"
      id="tokenomics"
      pos={"relative"}
      style={{
        zIndex: 1,
      }}
      py={128}
    >
      <Box
        w={"100%"}
        h={"100%"}
        pos={"absolute"}
        inset={0}
        style={{
          objectFit: "fill",
          zIndex: -1,
        }}
      >
        <Image src="/assets/photo.png" alt="tokenomics" />
      </Box>

      <Container size={"xl"} h={"100%"}>
        <Stack align="center">
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
            Tokenomics
          </Text>

          <Grid mt={48}>
            <Grid.Col span={{ base: 12, md: 6 }} pt={{ base: 2, md: 1 }}>
              <Center>
                <Card
                  w={{ base: "100%", md: "50%" }}
                  className={classes.bgBlur}
                >
                  <Text
                    c={"var(--mantine-color-gray-0)"}
                    className={vt323.className}
                    fz={rem(28)}
                  >
                    Token distribution
                  </Text>

                  <Stack mt={12}>
                    {token.map((item) => (
                      <ChartItem
                        key={item.color}
                        color={item.color}
                        text={item.text}
                      />
                    ))}
                  </Stack>
                </Card>
              </Center>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }} pt={{ base: 1, md: 2 }}>
              <Image src="/assets/tokenomics.png" alt="tokenomics" />
            </Grid.Col>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};
