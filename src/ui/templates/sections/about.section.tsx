import AboutAwards from "../../../components/lists/aboutAwards.component";
import SectionIntro from "../../molecules/sectionIntro.molecule";
import AboutData from "../../../data/about.data.json";

const AboutSection = () => {
  return (
    <div className="bg-white py-12 md:py-20 lg:py-16 xl:py-20 w-screen">
      <div className="2xl:max-w-[90rem] 2xl:mx-auto">
        <SectionIntro {...AboutData.intro} />

        <AboutAwards className="md:grid-cols-3" awards={AboutData.awards} />
      </div>
    </div>
  );
};

export default AboutSection;
