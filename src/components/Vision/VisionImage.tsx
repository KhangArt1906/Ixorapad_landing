import { Box, Image } from "@mantine/core";

export const VisionImage = () => {
  return (
    <Box w={"100%"} h={{ base: 500, md: "100%" }}>
      <Image w="100%" h={"100%"} src={"/assets/vision_1.png"} alt="vision" />
    </Box>
  );
};
