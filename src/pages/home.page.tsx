import HomeSection from "../ui/templates/sections/home.section";
import AchievementSection from "../ui/templates/sections/achievements.section";
import AboutSection from "../ui/templates/sections/about.section";
import ServicesSection from "../ui/templates/sections/services.section";
import ProductsSection from "../ui/templates/sections/products.section";

const HomePage = () => {
  return (
    <div className="h-screen">
      <HomeSection />
      <AchievementSection />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
    </div>
  );
};

export default HomePage;
