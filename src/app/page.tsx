import { About } from "@/components/About";
import { Intro } from "@/components/Intro";
import { MainLayout } from "@/components/Layouts/MainLayout";
import { Overview } from "@/components/Overview";

export default function Home() {
  return (
    <MainLayout>
      <Intro />
      <About />
      <Overview />
    </MainLayout>
  );
}
