import { poolData } from "@/components/Pool/data";
import { PoolInfo } from "@/components/Pool/PoolInfo";

export async function generateStaticParams() {
  return poolData.map((item) => ({
    slug: item.slug,
  }));
}

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const pools = poolData.find((pool) => pool.slug === params.slug);
  return { title: pools?.name };
};

export default function poolListPage({ params }: { params: { slug: string } }) {
  return <PoolInfo params={params} />;
}
