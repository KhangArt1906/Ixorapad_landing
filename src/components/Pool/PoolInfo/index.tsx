"use client";
import { Container, Grid } from "@mantine/core";
import { PoolTokenInfo } from "./PoolTokenInfo";
import { PoolLeft } from "./PoolLeft";
import { poolData } from "../data";
import { useParams } from "next/navigation";

export const PoolInfo = () => {
  const params = useParams();
  const pools = poolData.find((pool) => pool.slug === params.slug);
  return (
    <section>
      <Container size="xl" py={32}>
        <Grid>
          <Grid.Col span={{ base: 12, md: 8 }}>
            <PoolTokenInfo
              coverPhoto={pools?.coverPhoto!}
              avatar={pools?.avatar!}
              name={pools?.name!}
              intro={pools?.intro!}
              social={pools?.social!}
              status={pools?.status!}
              tokenInfo={pools?.tokenInfo!}
              schedule={pools?.schedule!}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <PoolLeft
              poolStart={pools?.poolStart!}
              poolEnd={pools?.poolEnd!}
              scheduleInfo={pools?.scheduleInfo!}
              poolStatus={pools?.poolStatus!}
              percent={pools?.percent!}
            />
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  );
};
