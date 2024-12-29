import { vt323 } from "@/theme/fonts";
import { Card, Group, Text } from "@mantine/core";

type ChartItemProps = {
  color: string;
  text: string;
};

export const ChartItem: React.FC<ChartItemProps> = ({ color, text }) => {
  return (
    <Group>
      <Card w={18} h={18} bg={color} radius={"sm"} p={"sm"} />
      <Text
        className={vt323.className}
        fz={"xl"}
        fw={"bold"}
        variant="gradient"
        gradient={{
          from: "violet",
          to: "cyan",
          deg: 90,
        }}
      >
        {text}
      </Text>
    </Group>
  );
};
