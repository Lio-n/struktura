import SectionIntro from "../../molecules/sectionIntro.molecule";
import TestimonyData from "../../../data/testimony.data.json";
import Quote from "../../../components/quote.component";
import ScrollReveal from "../../../lib/scrollReveal.lib";
import { useEffect } from "react";

const TestimonySection = () => {
  useEffect(() => {
    ScrollReveal.reveal("#testimonySection_intro");
    ScrollReveal.reveal("#testimonySection_quote");
  }, []);

  return (
    <div id="testimonySection" className="bg-white py-12 md:py-20 lg:py-16 xl:py-20 w-screen">
      <div className="2xl:max-w-[90rem] 2xl:mx-auto">
        <SectionIntro {...TestimonyData.intro} id="testimonySection_intro" />

        <Quote testimonies={TestimonyData.testimonies} id="testimonySection_quote" />
      </div>
    </div>
  );
};

export default TestimonySection;
