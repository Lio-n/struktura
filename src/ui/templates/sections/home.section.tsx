import { useEffect, useState } from "react";
import PrimaryHeader from "../../../components/primaryHeader.component";
import SecondaryHeader from "../../../components/secondaryHeader.component";
import HeroContent from "../../molecules/heroContent.molecule";

const HomeSection = () => {
  const [hideSecondaryHeader, setHideSecondaryHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      const shouldHide = currentScrollPos > 0;
      setHideSecondaryHeader(shouldHide);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="h-[40rem] w-screen bg-bottom bg-cover bg-hero-mobile md:bg-hero-table lg:bg-center xl:bg-hero-desktop">
      {!hideSecondaryHeader && <SecondaryHeader />}
      <PrimaryHeader />
      <div className="px-10 py-24 md:px-20 md:pb-40 lg:py-36">
        <HeroContent />
      </div>
    </div>
  );
};

export default HomeSection;
