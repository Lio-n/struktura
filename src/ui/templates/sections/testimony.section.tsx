import QuoteCard from "../../molecules/quoteCard.molecule";
import SectionIntro from "../../molecules/sectionIntro.molecule";
import TestimonyData from "../../../data/testimony.data.json";

const TestimonySection = () => {
  return (
    <div className="bg-white py-12 md:py-20 lg:py-16 xl:py-20 w-screen">
      <div className="2xl:max-w-[90rem] 2xl:mx-auto">
        <SectionIntro {...TestimonyData.intro} />

        <QuoteCard quote={TestimonyData.qoute} />
      </div>
    </div>
  );
};

export default TestimonySection;
