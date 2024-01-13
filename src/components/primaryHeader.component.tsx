import DesktopHeader from "../ui/organisms/desktopHeader.organism";
import MobileHeader from "../ui/organisms/mobileHeader.organism";
import { useMediaQuery } from "@uidotdev/usehooks";
import MediaQueryInfo from "../constants/mediaQuery.constanst.json";

const PrimaryHeader = () => {
  const isLargeDevice = useMediaQuery(MediaQueryInfo.min.lg);

  return <div className={`w-full backdrop-blur-lg fixed z-10`}>{isLargeDevice ? <DesktopHeader /> : <MobileHeader />}</div>;
};

export default PrimaryHeader;
