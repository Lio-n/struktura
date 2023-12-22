import { useState } from "react";
import LogoWithName from "../molecules/logoWithName.molecule";
import CrossIcon from "../atoms/crossIcon.atom";
import BurgerIcon from "../atoms/burgerIcon.atom";
import MenuList from "../molecules/navList.molecule";
import Button from "../atoms/buttons/default.atom";

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const MenuListMobileStyles = `w-full absolute transition-opacity duration-300 ease-in bg-white ${
    isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
  } flex flex-col items-center gap-8 p-4`;

  return (
    <div className={`w-full ${isOpen ? "bg-white" : "bg-transparent"}`}>
      <div className="w-full flex justify-between my-0 mx-auto px-6 py-4 md:px-9">
        <LogoWithName />
        <button onClick={toggleMenu}>{isOpen ? <CrossIcon /> : <BurgerIcon />}</button>
      </div>

      <MenuList className={MenuListMobileStyles} children={<Button intent="primary" weight="bold" children="Get in touch" />} />
    </div>
  );
};

export default MobileHeader;
