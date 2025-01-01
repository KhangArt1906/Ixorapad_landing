import { About } from "@/components/About";
import { Ecosystem } from "@/components/Ecosystem";
import { Intro } from "@/components/Intro";
import { MainLayout } from "@/components/Layouts/MainLayout";
import { Overview } from "@/components/Overview";
import { Partner } from "@/components/Partners";
import { RoadMap } from "@/components/Roadmap";
import { Tokenomics } from "@/components/Tokenomics";
import { Vision } from "@/components/Vision";

export default function Home() {
  return (
    <MainLayout>
      <Intro />
      <About />
      <Overview />
      <Vision />
      <Ecosystem />
      <Tokenomics />
      <RoadMap />
      <Partner />
    </MainLayout>
  );
}
