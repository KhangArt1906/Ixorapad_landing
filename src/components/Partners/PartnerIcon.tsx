import { SimpleGrid } from "@mantine/core";
import { PartnerImage } from "./PartnerImage";

const images = [
  {
    src: "/assets/partner/partners_1.png",
    alt: "partners_1",
  },
  {
    src: "/assets/partner/partners_2.png",
    alt: "partners_2",
  },
  {
    src: "/assets/partner/partners_3.png",
    alt: "partners_3",
  },
  {
    src: "/assets/partner/partners_4.png",
    alt: "partners_4",
  },
  {
    src: "/assets/partner/partners_5.png",
    alt: "partners_5",
  },
  {
    src: "/assets/partner/partners_6.png",
    alt: "partners_6",
  },
  {
    src: "/assets/partner/partners_7.png",
    alt: "partners_7",
  },
  {
    src: "/assets/partner/partners_8.png",
    alt: "partners_8",
  },
  {
    src: "/assets/partner/partners_9.png",
    alt: "partners_9",
  },
];

export const PartnerIcon = () => {
  return (
    <SimpleGrid cols={{ base: 2, md: 3 }} pt={32}>
      {images.map((item) => (
        <PartnerImage key={item.alt} src={item.src} alt={item.alt} />
      ))}
    </SimpleGrid>
  );
};
