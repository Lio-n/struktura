import { useState } from "react";
import CrossIcon from "../atoms/crossIcon.atom";
import BurgerIcon from "../atoms/burgerIcon.atom";
import MenuList from "../molecules/navList.molecule";
import Brand from "../molecules/brand.molecule";
import Button from "../atoms/button.atom";

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const MenuListMobileStyles = `w-full flex flex-col items-center gap-8`;
  const navLinks = [
    { text: "Home", href: "/home" },
    { text: "About us", href: "/about" },
    { text: "Portfolio", href: "/portfolio" },
    { text: "Services", href: "/services" },
    { text: "Our team", href: "/team" },
    { text: "Our story", href: "/story" },
  ];

  return (
    <div className={`w-full ${isOpen ? "bg-white" : "bg-transparent"}`}>
      <div className="w-full flex justify-between my-0 mx-auto px-6 py-4 md:px-9">
        <Brand />
        <button onClick={toggleMenu}>{isOpen ? <CrossIcon /> : <BurgerIcon />}</button>
      </div>

      <div
        className={`w-full transition-opacity duration-300 ease-in ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } absolute w-full bg-white p-4`}>
        <MenuList className={MenuListMobileStyles} navLinks={navLinks} />
        <Button intent="primary" weight="bold" children="Get in touch" className="block mt-6 mx-auto" />
      </div>
    </div>
  );
};

export default MobileHeader;
