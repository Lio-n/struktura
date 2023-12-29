import { AnchorHTMLAttributes, FC } from "react";

interface NavegationLinkProps extends Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  text: string;
}

const NavegationLink: FC<NavegationLinkProps> = ({ href, text }) => (
  <a href={href} className="no-underline text-black transition font-normal hover:font-bold" children={text} />
);

export default NavegationLink;
