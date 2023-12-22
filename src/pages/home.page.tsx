import AboutSection from "../ui/templates/sections/about.section";
import AchievementSection from "../ui/templates/sections/achievements.section";
import HomeSection from "../ui/templates/sections/home.section";

const HomePage = () => {
  return (
    <div className="h-screen">
      <HomeSection />
      <AchievementSection />
      <AboutSection />
    </div>
  );
};

export default HomePage;
