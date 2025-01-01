import { Center, Image } from "@mantine/core";

type PartnerProps = {
  src: string;
  alt: string;
};
export const PartnerImage: React.FC<PartnerProps> = ({ src, alt }) => {
  return (
    <Center>
      <Image src={src} alt={alt} w={{ base: "60%", md: "70%" }} />
    </Center>
  );
};
