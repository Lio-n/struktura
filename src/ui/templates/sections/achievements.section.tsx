import Body from "../../atoms/typographies/body.atom";
import Heading from "../../atoms/typographies/heading.atom";
import AccoladeList from "../../organisms/accoladeList.organism";
import AchievementMetrincs from "../../organisms/achievementMetrics.organism";

const AchievementSection = () => {
  return (
    <div className="bg-[#eaf3f5] py-12 md:py-20 lg:py-16">
      <div className="px-6 md:px-16 lg:px-20">
        <div className="mb-4 md:mb-8 lg:mb-12">
          <Heading className="mb-4">Our Legacy of Excellence</Heading>
          <Body>
            Established 2012, Struktura has been a leading force in the construction industry, specializing in commercial office building
            construction. Our commitment to quality and innovation sets us apart
          </Body>
        </div>
        <AchievementMetrincs className="grid grid-cols-2 gap-4 md:grid-cols-4 mb-8" />
      </div>

      <AccoladeList />
    </div>
  );
};

export default AchievementSection;
