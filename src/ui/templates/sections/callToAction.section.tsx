import Button from "../../atoms/button.atom";
import Body from "../../atoms/typographies/body.atom";
import SubHeading from "../../atoms/typographies/subHeading.atom";
import CallToActionData from "../../../data/callToAction.data.json";
import ScrollReveal from "../../../lib/scrollReveal.lib";
import { useEffect } from "react";

const CallToActionSection = () => {
  useEffect(() => {
    ScrollReveal.reveal("#callToActionSection");
  }, []);

  return (
    <div className="bg-white py-12 md:py-20 lg:py-16 xl:py-20 w-screen">
      <div className="2xl:max-w-[90rem] 2xl:mx-auto p-4 md:p-12">
        <div className="bg-anti-flash-white rounded-2xl p-8 md:p-12" id="callToActionSection">
          <SubHeading children={CallToActionData.title} className="mb-4  md:text-4xl" />
          <Body children={CallToActionData.description} className="mb-12 text-sm" />
          <Button intent="secondary" weight="bold" className="px-6">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CallToActionSection;
