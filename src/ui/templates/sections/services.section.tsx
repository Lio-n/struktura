import ServicesList from "../../../components/lists/servicesList.component";
import SectionIntro from "../../molecules/sectionIntro.molecule";
import ServiceData from "../../../data/service.data.json";

const ServicesSection = () => {
  return (
    <div className="bg-white py-12 md:py-20 lg:py-16 xl:py-20 w-screen">
      <div className="2xl:max-w-[90rem] 2xl:mx-auto">
        <SectionIntro {...ServiceData.intro} />

        <ServicesList services={ServiceData.services} />
      </div>
    </div>
  );
};

export default ServicesSection;
