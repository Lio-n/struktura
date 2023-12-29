import AccoladeAwards from "../../../components/lists/accoladeAwards.component";
import AccoladeAwardInfo from "../../../interfaces/archivement.interface";
import Body from "../../atoms/typographies/body.atom";
import Heading from "../../atoms/typographies/heading.atom";
import MetricsList from "../../molecules/metricsList.molecule";

const AchievementSection = () => {
  const accolateAwards: AccoladeAwardInfo[] = [
    { text: "Always building quality industrial" },
    { text: "Best manufacturing service provider" },
    { text: "Using the newest manufacturing tech" },
    { text: "Experienced trusted contractor" },
  ];

  const metricsInfo = [
    { text: "260+", content: "Proyects Completed" },
    { text: "95%", content: "Satisfaction Rate" },
    { text: "200+", content: "Satisfied Clients" },
    { text: "100+", content: "Qualified Engineers" },
  ];

  return (
    <div className="bg-[#eaf3f5] py-12 md:py-20 lg:py-16 xl:py-20 w-screen">
      <div className="2xl:max-w-[90rem] 2xl:mx-auto">
        <div className="px-8 md:px-16 lg:px-20 xl:px-36">
          <div className="mb-4 md:mb-8 lg:mb-12">
            <Heading className="mb-4">Our Legacy of Excellence</Heading>
            <Body>
              Established 2012, Struktura has been a leading force in the construction industry, specializing in commercial office building
              construction. Our commitment to quality and innovation sets us apart
            </Body>
          </div>
          <MetricsList metrics={metricsInfo} className="grid grid-cols-2 gap-4 md:grid-cols-4 mb-8" />
        </div>

        <AccoladeAwards awards={accolateAwards} />
      </div>
    </div>
  );
};

export default AchievementSection;
