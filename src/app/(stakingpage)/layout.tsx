import { MainLayout } from "@/components/Layouts/MainLayout";

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <MainLayout>{children}</MainLayout>;
}
