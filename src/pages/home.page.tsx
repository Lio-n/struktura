import HomeSection from "../ui/templates/sections/home.section";
import AchievementSection from "../ui/templates/sections/achievements.section";
import PrimaryFooter from "../components/primaryFooter.component";
import SecondaryFooter from "../components/secondaryFooter.component";
import AboutSection from "../ui/templates/sections/about.section";
import ServicesSection from "../ui/templates/sections/services.section";
import PortfolioSection from "../ui/templates/sections/portfolio.section";
import ProductsSection from "../ui/templates/sections/products.section";
import TestimonySection from "../ui/templates/sections/testimony.section";
import CallToActionSection from "../ui/templates/sections/callToAction.section";

const HomePage = () => {
  return (
    <div className="h-screen">
      <HomeSection />
      <AchievementSection />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <PortfolioSection />
      <TestimonySection />
      <CallToActionSection />
      <PrimaryFooter />
      <SecondaryFooter />
    </div>
  );
};

export default HomePage;
