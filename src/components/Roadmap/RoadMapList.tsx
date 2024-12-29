import { Grid, Image, List } from "@mantine/core";
import { RoadMapCard } from "./RoadMapCard";

export const RoadMapList = () => {
  return (
    <Grid align="center" mt={48} pos={"relative"}>
      <Image
        visibleFrom="md"
        src={"/assets/roadmap_bg.png"}
        alt="Intro roadmap"
        top={0}
        left={0}
        fit="contain"
        maw="120%"
        mah="auto"
        pos={"absolute"}
        style={{
          zIndex: 0,
        }}
      />

      <Grid.Col span={{ base: 12, md: 4 }}>
        <RoadMapCard img="/assets/shape-4.png" height={350} stage="Stage 1">
          <List.Item>Project Inception</List.Item>
          <List.Item>Core Team Formation</List.Item>
          <List.Item>Research & Development</List.Item>
          <List.Item>Whitepaper Release </List.Item>
          <List.Item>Ixorapad Mainnet Launch (Launchpad, Earn)</List.Item>
          <List.Item>
            Building networks with top crypto KOLs and partners for community
            access.
          </List.Item>
          <List.Item>Rewards and Bounty Programs</List.Item>
        </RoadMapCard>
      </Grid.Col>

      <Grid.Col span={{ base: 12, md: 4 }} mt={{ base: 92, md: 0 }}>
        <RoadMapCard img="/assets/shape-3.png" height={470} stage="Stage 2">
          <List.Item>Third-party smart contract audits and reports</List.Item>
          <List.Item>
            Establishment of media partnerships and PR activities
          </List.Item>
          <List.Item>Fundraising (Pre-Seed/Seed/Private)</List.Item>
          <List.Item>Cex/Dex Listings</List.Item>
          <List.Item>Staking Mainnet Launch</List.Item>
          <List.Item>Ixora Incubation Hub</List.Item>
        </RoadMapCard>
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 4 }}>
        <RoadMapCard img="/assets/shape-2.png" height={350} stage="Stage 3">
          <List.Item>Marketing Push</List.Item>
          <List.Item>Cex Listings</List.Item>
          <List.Item>AI Product Launch</List.Item>
          <List.Item>Ixorapad Upgrade</List.Item>
        </RoadMapCard>
      </Grid.Col>
    </Grid>
  );
};
