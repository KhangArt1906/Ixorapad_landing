import { Box, Flex, Image } from "@mantine/core";
import classes from "./IntroImage.module.css";

export const IntroImage: React.FC = () => {
  return (
    <Box w="100%" h={{ base: 500, md: "100%" }} pos="relative">
      <Box pos="absolute">
        <Flex align="center" justify="center" pos="relative">
          <Image src="/assets/intro/blur.png" alt="Blur" />

          <Image
            src="/assets/intro/logo.png"
            alt="logo"
            w="50%"
            pos="absolute"
            className={classes.image}
          />
        </Flex>
      </Box>

      <Box pos="absolute" top="-5%" left="60%">
        <Flex align="center" justify="center" pos="relative" w="90%">
          <Image src="/assets/intro/blur.png" alt="blur" />

          <Image
            src="/assets/intro/logo.png"
            w="50%"
            alt="logo"
            pos="absolute"
            className={classes.image}
          />
        </Flex>
      </Box>

      <Box pos="absolute" bottom="10%" left="60%">
        <Flex align="center" justify="center" pos="relative" w="95%">
          <Image src="/assets/intro/blur.png" alt="blur" />

          <Image
            src="/assets/intro/logo.png"
            w="50%"
            alt="logo"
            pos="absolute"
            className={classes.image}
          />
        </Flex>
      </Box>
    </Box>
  );
};
