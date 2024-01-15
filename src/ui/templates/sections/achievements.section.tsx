import AccoladeAwards from "../../../components/lists/accoladeAwards.component";
import MetricsList from "../../molecules/metricsList.molecule";
import SectionIntro from "../../molecules/sectionIntro.molecule";
import AchievementData from "../../../data/archievement.data.json";
import ScrollReveal from "../../../lib/scrollReveal.lib";
import { useEffect } from "react";

const AchievementSection = () => {
  useEffect(() => {
    ScrollReveal.reveal("#achievementSection_intro");
  }, []);

  return (
    <div className="bg-[#eaf3f5] py-12 md:py-20 lg:py-16 xl:py-20 w-screen">
      <div className="2xl:max-w-[90rem] 2xl:mx-auto">
        <SectionIntro
          id="achievementSection_intro"
          {...AchievementData.intro}
          children={<MetricsList metrics={AchievementData.metrics} className="grid grid-cols-2 gap-4 md:grid-cols-4 mb-8" />}
        />

        <AccoladeAwards awards={AchievementData.awards} />
      </div>
    </div>
  );
};

export default AchievementSection;
