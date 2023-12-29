import Button from "../atoms/button.atom";
import Brand from "../molecules/brand.molecule";
import MenuList from "../molecules/navList.molecule";
import HeaderData from "../../data/header.data.json";

const DesktopHeader = () => {
  return (
    <div className="w-full px-12 py-7 flex justify-between my-0 mx-auto gap-4">
      <Brand />
      <MenuList className="grid grid-cols-6 items-center" navLinks={HeaderData.navLinks} />
      <Button intent="primary" weight="bold" children="Get in touch" />
    </div>
  );
};

export default DesktopHeader;
