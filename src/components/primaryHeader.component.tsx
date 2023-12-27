import DesktopHeader from "../ui/organisms/desktopHeader.organism";
import MobileHeader from "../ui/organisms/mobileHeader.organism";
import { useMediaQuery } from "@uidotdev/usehooks";

const PrimaryHeader = () => {
  const isLargeDevice = useMediaQuery("only screen and (max-width : 1024px)");

  return <div className={`w-full backdrop-blur-lg fixed z-10`}>{isLargeDevice ? <MobileHeader /> : <DesktopHeader />}</div>;
};

export default PrimaryHeader;
