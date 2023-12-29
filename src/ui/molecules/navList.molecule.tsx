import { FC } from "react";
import NavegationLink from "../atoms/navegationLink.atom";

interface MenuLinkInfo {
  text: string;
  href: string;
}

interface MenuListProps {
  className?: string;
  navLinks: MenuLinkInfo[];
}

const MenuList: FC<MenuListProps> = ({ navLinks, className }) => {
  return (
    <ul className={`gap-4 text-center w-[40rem] ${className}`}>
      {navLinks.map((item, index) => (
        <li className="py-1" key={index}>
          <NavegationLink href={item.href} text={item.text} />
        </li>
      ))}
    </ul>
  );
};

export default MenuList;
