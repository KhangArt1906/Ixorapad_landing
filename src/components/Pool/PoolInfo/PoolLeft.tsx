import {
  Accordion,
  Box,
  Button,
  Card,
  Group,
  Progress,
  Text,
  Timeline,
} from "@mantine/core";
import { tokenInfoType } from "../data";

export type PoolLeftProps = {
  poolStart: string;
  poolEnd: string;
  scheduleInfo: tokenInfoType[];
  poolStatus: string;
  percent: number;
};

export const PoolLeft: React.FC<PoolLeftProps> = ({
  poolStart,
  poolEnd,
  poolStatus,
  scheduleInfo,
  percent,
}) => {
  return (
    <Card bg="var(--mantine-color-dark-7)">
      <Accordion variant="filled">
        <Accordion.Item value="Test">
          <Accordion.Control
            p={0}
            c="var(--mantine-color-gray-4)"
            bg="var(--mantine-color-dark-7)"
          >
            <Text fw="bold">Sales schedule</Text>
          </Accordion.Control>
          <Accordion.Panel bg="var(--mantine-color-dark-7)">
            <Timeline active={2} bulletSize={16} lineWidth={2} color="violet">
              <Timeline.Item
                title="Waiting for pool start"
                c="var(--mantine-color-gray-4)"
              >
                <Text size="xs" mt={4}>
                  No one can purchase
                </Text>
              </Timeline.Item>

              <Timeline.Item title="Pool Start" c="var(--mantine-color-gray-4)">
                <Text size="xs" mt={4}>
                  {poolStart}
                </Text>
              </Timeline.Item>
              <Timeline.Item title="Pool Ended" c="var(--mantine-color-gray-4)">
                <Text size="xs" mt={4}>
                  {poolEnd}
                </Text>
              </Timeline.Item>
            </Timeline>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>

      <Box>
        {scheduleInfo?.map((schedule) => (
          <Box key={schedule.title} c="var(--mantine-color-gray-4)">
            <Group justify="space-between" mt={8}>
              <Text fw="bold">{schedule.title}:</Text>
              <Text
                c={
                  schedule.content === "Ended"
                    ? "red"
                    : schedule.content === "Public"
                    ? "lime"
                    : ""
                }
              >
                {schedule.content}
              </Text>
            </Group>
          </Box>
        ))}
      </Box>
      <Progress color="violet" value={percent} animated mt={12} />

      <Button variant="subtle" mt={18} disabled>
        {poolStatus}
      </Button>
    </Card>
  );
};
