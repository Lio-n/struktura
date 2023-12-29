import Button from "../atoms/button.atom";
import Brand from "../molecules/brand.molecule";
import MenuList from "../molecules/navList.molecule";

const DesktopHeader = () => {
  const navLinks = [
    { text: "Home", href: "/home" },
    { text: "About us", href: "/about" },
    { text: "Portfolio", href: "/portfolio" },
    { text: "Services", href: "/services" },
    { text: "Our team", href: "/team" },
    { text: "Our story", href: "/story" },
  ];

  return (
    <div className="w-full px-12 py-7 flex justify-between my-0 mx-auto gap-4">
      <Brand />
      <MenuList className="grid grid-cols-6 items-center" navLinks={navLinks} />
      <Button intent="primary" weight="bold" children="Get in touch" />
    </div>
  );
};

export default DesktopHeader;
