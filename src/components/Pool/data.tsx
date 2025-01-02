import { IconBrandTelegram, IconBrandTwitter } from "@tabler/icons-react";
import { ReactElement } from "react";

export type tokenInfoType = {
  title: string;
  content: string;
};

export type socialType = {
  socialLink: string;
  icon: ReactElement;
};

export type PoolDataType = {
  name: string;
  coverPhoto: string;
  avatar: string;
  coinAvatar: string;
  totalRaise: number;
  token: string;
  rate: string;
  supported: string;
  access: string;
  status: string;
  poolStatus: string;
  slug: string;
  tokenInfo: tokenInfoType[];
  schedule: tokenInfoType[];
  social: socialType[];
  intro: string;
  poolStart: string;
  poolEnd: string;
  scheduleInfo: tokenInfoType[];
  percent: number;
};

export const poolData: PoolDataType[] = [
  {
    name: "Krayon Network (KRY)",
    coverPhoto: "/assets/media/krayon.jpg",
    avatar: "/assets/media/krayon_avatar.jpg",
    coinAvatar: "/assets/media/arbitrum.png",
    totalRaise: 700000,
    token: "KRY",
    rate: "0.1 USDT",
    supported: "USDT",
    access: "Public",
    status: "Ended",
    poolStatus: "Pool Ended",
    slug: "krayon",
    tokenInfo: [
      {
        title: "Total Raise",
        content: "$700,000",
      },
      {
        title: "Token price",
        content: "$0,1",
      },
      {
        title: "Token symbol",
        content: "KRY",
      },
      {
        title: "Network",
        content: "Arbitrum",
      },
      {
        title: "Total supply",
        content: "500,000,000 KRY",
      },
      {
        title: "Vesting details",
        content: "TGE 50%, 1 month vesting",
      },
    ],
    schedule: [
      {
        title: "VIP Round",
        content: "September 9 2024 10:00 UTC",
      },
      {
        title: "KOL Round",
        content: "September 10 2024 10:00 UTC",
      },
      {
        title: "FCFS",
        content: "September 10 2024 11:00 UTC",
      },
      {
        title: "Endtime",
        content: "September 11 2024 11:00 UTC",
      },
    ],
    social: [
      {
        socialLink: "https://t.me/krayonnetworkann",
        icon: <IconBrandTelegram size={18} stroke={1.5} />,
      },
      {
        socialLink: "https://x.com/krayonnetwork_x",
        icon: <IconBrandTwitter size={18} stroke={1.5} />,
      },
    ],
    intro:
      "Krayon is the Art Investment Platform applying Blockchain & AI technologies. Krayon enables artists, investors, galleries, and administrators worldwide to demonstrate and trade their works of art and assess their collections, eventually leading to the development of a system that is both effective and simple to use for determining art value.",
    poolStart: "Pool starts at September 9 2024 10:00 UTC",
    poolEnd: "Pool ends at September 11 2024 11:00 UTC",
    scheduleInfo: [
      {
        title: "Status",
        content: "Ended",
      },
      {
        title: "Sale type",
        content: "Public",
      },
      {
        title: "Current Rate",
        content: "1 KRY = $0,1",
      },
      {
        title: "Current raised",
        content: "$410K/700K (58.57%)",
      },
    ],
    percent: 58.57,
  },

  {
    name: "Ixorapad",
    coverPhoto: "/assets/media/ixora.jpg",
    avatar: "/assets/media/ixora-avatar.jpg",
    coinAvatar: "/assets/media/toncoin.png",
    totalRaise: 500000,
    token: "Ixora",
    rate: "0.01 USDT",
    supported: "USDT",
    access: "Public",
    status: "Ended",
    poolStatus: "Pool Ended",
    slug: "ixora",
    tokenInfo: [
      {
        title: "Total Raise",
        content: "$500,000",
      },
      {
        title: "Token price",
        content: "$0,01",
      },
      {
        title: "Token symbol",
        content: "Ixora",
      },
      {
        title: "Network",
        content: "Ton",
      },
      {
        title: "Total supply",
        content: "5,000,000,000 Ixora",
      },
      {
        title: "Vesting details",
        content: "TGE 20%, 4 month vesting",
      },
    ],
    schedule: [
      {
        title: "VIP Round",
        content: "September 24 2024 10:00 UTC",
      },
      {
        title: "KOL Round",
        content: "September 25 2024 10:00 UTC",
      },
      {
        title: "FCFS",
        content: "September 25 2024 11:00 UTC",
      },
      {
        title: "Endtime",
        content: "September 26 2024 11:00 UTC",
      },
    ],
    social: [
      {
        socialLink: "https://x.com/Ixorapad",
        icon: <IconBrandTwitter size={18} stroke={1.5} />,
      },
      {
        socialLink: "https://t.me/IxorapadChat",
        icon: <IconBrandTelegram size={18} stroke={1.5} />,
      },
      {
        socialLink: "https://t.me/IxorapadAnn",
        icon: <IconBrandTelegram size={18} stroke={1.5} />,
      },
    ],
    intro:
      "Ixorapad is a decentralized launchpad platform that offers early-stage Gamefi project investment opportunities to both individual investors and venture capital firms. It serves as a bridge between investors and Gamefi project founders in the seed and private rounds, with the ultimate goal of scaling up the Gamefi and decentralized fundraising market. Ixorapad helps accelerate the growth of Gamefi ventures with maximized funds, products, people, and networks.",
    poolStart: "Pool starts at September 24 2024 10:00 UTC",
    poolEnd: "Pool ends at September 26 2024 11:00 UTC",
    scheduleInfo: [
      {
        title: "Status",
        content: "Ended",
      },
      {
        title: "Sale type",
        content: "Public",
      },
      {
        title: "Current Rate",
        content: "1 Ixora = $0,01",
      },
      {
        title: "Current raised",
        content: "$500K/500K (100%)",
      },
    ],
    percent: 100,
  },
];
