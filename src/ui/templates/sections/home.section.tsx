import { useEffect, useState } from "react";
import PrimaryHeader from "../../../components/primaryHeader.component";
import SecondaryHeader from "../../../components/secondaryHeader.component";
import Title from "../../atoms/typographies/title.atom";
import Body from "../../atoms/typographies/body.atom";
import Button from "../../atoms/button.atom";
import ScrollReveal from "../../../lib/scrollReveal.lib";

const HomeSection = () => {
  const [hideSecondaryHeader, setHideSecondaryHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      const shouldHide = currentScrollPos > 0;
      setHideSecondaryHeader(shouldHide);
    };

    window.addEventListener("scroll", handleScroll);
    ScrollReveal.reveal("#homeSection_intro");

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="h-[40rem] w-screen bg-bottom bg-cover bg-hero-mobile md:bg-hero-table lg:bg-center xl:bg-hero-desktop">
      {!hideSecondaryHeader && <SecondaryHeader />}
      <PrimaryHeader />
      <div className="px-10 py-24 md:px-20 md:pb-40 lg:py-36">
        <div className="xl:w-fit my-0 mx-auto" id="homeSection_intro">
          <Title children="Building Your Vision with Precision" />
          <Body
            children="We are Struktura, your trusted partner in the world of construction. With a legacy of excellence and a commitment to quality, we turn your visions into reality"
            className="mt-5 mb-7 md:mt-7 md:mb-14"
          />

          <Button weight="bold" className="px-7">
            Learn more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
