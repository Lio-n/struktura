import { ReactNode } from "react";

const listContent = ["Home", "About us", "Porfolio", "Services", "Our team", "Our story"];

const MenuList = ({ className, children }: { className?: string; children?: ReactNode }) => {
  const LinkItem = ({ href, text }: { href: string; text: string }) => (
    <a href={href} className="no-underline text-black transition font-normal hover:font-bold" children={text} />
  );

  return (
    <ul className={`gap-4 text-center w-[40rem] ${className}`}>
      {listContent.map((item, index) => (
        <li className="py-1" key={index}>
          <LinkItem href={"#"} text={item} />
        </li>
      ))}
      {children}
    </ul>
  );
};

export default MenuList;
