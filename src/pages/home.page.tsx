import AboutSection from "../ui/templates/sections/about.section";
import AchievementSection from "../ui/templates/sections/achievements.section";
import HomeSection from "../ui/templates/sections/home.section";
import ServicesSection from "../ui/templates/sections/services.section";

const HomePage = () => {
  return (
    <div className="h-screen">
      <HomeSection />
      <AchievementSection />
      <AboutSection />
      <ServicesSection />
    </div>
  );
};

export default HomePage;
