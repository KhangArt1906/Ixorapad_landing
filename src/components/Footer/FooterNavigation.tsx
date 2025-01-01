import { Stack } from "@mantine/core";
import Link from "next/link";
import classes from "./Footer.module.css";

type FooterNavProps<T> = {
  links: T[];
};

export const FooterNavigation: React.FC<FooterNavProps<any>> = ({ links }) => {
  return (
    <Stack>
      {links.map((item) => (
        <Link href={item.href} key={item.title} className={classes.link}>
          {item.title}
        </Link>
      ))}
    </Stack>
  );
};
