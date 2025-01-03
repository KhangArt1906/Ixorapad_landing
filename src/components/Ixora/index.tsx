"use client";
import { Box, Container, Flex, Grid, Image, Text } from "@mantine/core";

export const Ixora: React.FC = () => {
  return (
    <Box component="section" id="staking" h="100dvh">
      <Container size={"xl"} h="100%">
        <Flex align={"center"} h="100%" pt={24}>
          <Grid>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Text
                fz={50}
                fw={900}
                variant="gradient"
                gradient={{
                  from: "indigo",
                  to: "grape",
                  deg: 159,
                }}
              >
                Coming Soon...
              </Text>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <Image src={"/assets/intro.png"} alt="intro" />
            </Grid.Col>
          </Grid>
        </Flex>
      </Container>
    </Box>
  );
};
