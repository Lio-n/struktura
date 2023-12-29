import AccoladeAwards from "../../../components/lists/accoladeAwards.component";
import MetricsList from "../../molecules/metricsList.molecule";
import SectionIntro from "../../molecules/sectionIntro.molecule";
import AchievementData from "../../../data/archievement.data.json";

const AchievementSection = () => {
  return (
    <div className="bg-[#eaf3f5] py-12 md:py-20 lg:py-16 xl:py-20 w-screen">
      <div className="2xl:max-w-[90rem] 2xl:mx-auto">
        <SectionIntro
          {...AchievementData.intro}
          children={<MetricsList metrics={AchievementData.metrics} className="grid grid-cols-2 gap-4 md:grid-cols-4 mb-8" />}
        />

        <AccoladeAwards awards={AchievementData.awards} />
      </div>
    </div>
  );
};

export default AchievementSection;
