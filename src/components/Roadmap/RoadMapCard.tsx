import { Image, List, Stack, Text } from "@mantine/core";
import classes from "./RoadMapCard.module.css";
import { vt323 } from "@/theme/fonts";

interface IRoadmapCard {
  img: string;
  height: number;
  children: React.ReactNode;
  stage: string;
}

export const RoadMapCard: React.FC<IRoadmapCard> = ({
  img,
  height,
  children,
  stage,
}) => {
  return (
    <Stack
      align="center"
      pt={70}
      px={18}
      pos={"relative"}
      h={height}
      className={classes.bgBlur}
    >
      <Image src={img} pos={"absolute"} top={-50} w={100} h={100} alt="card" />

      <List
        className={vt323.className}
        p={{
          base: 10,
          md: 0,
        }}
        c={"var(--mantine-color-gray-0)"}
      >
        {children}
      </List>

      <Text
        c={"var(--mantine-color-gray-0)"}
        fw={"bold"}
        opacity={0.2}
        fz={36}
        mt={40}
        className={vt323.className}
      >
        {stage}
      </Text>
    </Stack>
  );
};
