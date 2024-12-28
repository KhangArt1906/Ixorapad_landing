import { Center, Flex, Image, Paper, rem, Stack, Text } from "@mantine/core";
import { contents } from "./contents";
import { Carousel } from "@mantine/carousel";
import classes from "./Overview.module.css";
import { vt323 } from "@/theme/fonts";

export const OverviewCard = () => {
  const contentArr = contents.map((item) => (
    <Carousel.Slide key={item.title}>
      <Paper key={item.title} p={"md"} className={classes.bgBlur}>
        <Center>
          <Stack gap={0}>
            <Text
              size={rem(28)}
              fw={800}
              variant={"gradient"}
              gradient={{
                from: "violet",
                to: "cyan",
                deg: 90,
              }}
              ta={"center"}
              className={vt323.className}
            >
              {item.title}
            </Text>

            <Flex direction={{ base: "column", md: "row" }} align={"center"}>
              <Image
                src={item.img}
                alt="overview"
                w={{ base: "100%", md: "40%" }}
              />

              <Text
                c="var(--mantine-color-gray-0)"
                ta={"justify"}
                className={vt323.className}
                fz={"xl"}
              >
                {item.desc}
              </Text>
            </Flex>
          </Stack>
        </Center>
      </Paper>
    </Carousel.Slide>
  ));

  return contentArr;
};
