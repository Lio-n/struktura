import { VariantProps, cva } from "class-variance-authority";
import { AnchorHTMLAttributes, FC } from "react";

const rootNav = cva(["transition font-normal no-underline"], {
  variants: {
    intent: {
      dafault: ["text-black  hover:font-bold"],
      primary: ["hover:text-blizzardBlue text-white"],
    },
    size: {
      small: ["text-sm"],
      medium: ["text-base"],
      large: ["text-xl"],
    },
    weight: {
      light: ["font-light"],
      medium: ["font-medium"],
      bold: ["font-bold"],
    },
  },
  defaultVariants: {
    intent: "dafault",
    size: "medium",
    weight: "medium",
  },
});

interface NavegationLinkProps extends Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "href">, VariantProps<typeof rootNav> {
  text: string;
  className?: string;
}

const NavegationLink: FC<NavegationLinkProps> = ({ intent, weight, size, className, href, text }) => (
  <a href={href} className={rootNav({ className, intent, weight, size })} children={text} />
);

export default NavegationLink;
