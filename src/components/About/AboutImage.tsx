import { Box, Image, Paper } from "@mantine/core";
import classes from "./AboutImage.module.css";

const AboutCard = ({ pos, url }: { pos: number; url: string }) => {
  return (
    <Paper
      radius={"md"}
      className={classes.item}
      style={{ "--position": pos } as React.CSSProperties}
    >
      <Image
        src={url}
        alt="side-game"
        w="100%"
        h="100%"
        radius={"md"}
        style={{
          objectFit: "cover",
        }}
      />
    </Paper>
  );
};

const slides = [
  {
    pos: 1,
    url: "/assets/slides/game_1.webp",
  },
  {
    pos: 2,
    url: "/assets/slides/game_2.webp",
  },
  {
    pos: 3,
    url: "/assets/slides/game_3.webp",
  },
  {
    pos: 4,
    url: "/assets/slides/game_4.webp",
  },
  {
    pos: 5,
    url: "/assets/slides/game_5.webp",
  },
  {
    pos: 6,
    url: "/assets/slides/game_6.webp",
  },
  {
    pos: 7,
    url: "/assets/slides/game_7.webp",
  },
  {
    pos: 8,
    url: "/assets/slides/game_8.webp",
  },
  {
    pos: 9,
    url: "/assets/slides/game_9.webp",
  },
  {
    pos: 10,
    url: "/assets/slides/game_10.webp",
  },
];

export const AboutImage: React.FC = () => {
  return (
    <Box className={classes.banner} style={{ zIndex: 10 }}>
      <Box
        className={classes.slider}
        style={{ "--quantity": 10 } as React.CSSProperties}
      >
        {slides.map((item) => (
          <AboutCard key={item.pos} pos={item.pos} url={item.url} />
        ))}
      </Box>
    </Box>
  );
};
