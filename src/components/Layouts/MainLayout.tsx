"use client";
import { AppShell, AppShellFooter, AppShellHeader } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { PropsWithChildren } from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";

export const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const [opened] = useDisclosure();

  return (
    <AppShell
      header={{ height: 120 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      bg="#0C142E"
    >
      <AppShellHeader>
        {/* Header */}
        <Header />
      </AppShellHeader>
      <AppShell.Main pos={"relative"} bg="#0f051d" px={0}>
        {children}
      </AppShell.Main>
      {/* Footer */}
      <Footer />
    </AppShell>
  );
};
