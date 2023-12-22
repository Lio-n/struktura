import Button from "../atoms/buttons/default.atom";
import LogoWithName from "../molecules/logoWithName.molecule";
import MenuList from "../molecules/navList.molecule";

const DesktopHeader = () => {
  return (
    <div className="w-full px-12 py-7 flex justify-between my-0 mx-auto gap-4">
      <LogoWithName />
      <MenuList className="grid grid-cols-6 items-center" />
      <Button intent="primary" weight="bold" children="Get in touch" />
    </div>
  );
};

export default DesktopHeader;
