import SectionIntro from "../../molecules/sectionIntro.molecule";
import TestimonyData from "../../../data/testimony.data.json";
import Quote from "../../../components/quote.component";

const TestimonySection = () => {
  return (
    <div id="testimonySection" className="bg-white py-12 md:py-20 lg:py-16 xl:py-20 w-screen">
      <div className="2xl:max-w-[90rem] 2xl:mx-auto">
        <SectionIntro {...TestimonyData.intro} />

        <Quote testimonies={TestimonyData.testimonies} />
      </div>
    </div>
  );
};

export default TestimonySection;
