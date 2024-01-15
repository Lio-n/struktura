import ServicesList from "../../../components/lists/servicesList.component";
import SectionIntro from "../../molecules/sectionIntro.molecule";
import ServiceData from "../../../data/service.data.json";
import ScrollReveal from "../../../lib/scrollReveal.lib";
import { useEffect } from "react";

const ServicesSection = () => {
  useEffect(() => {
    ScrollReveal.reveal("#servicesSection_intro");
    ScrollReveal.reveal("#servicesSection_services");
  }, []);

  return (
    <div id="servicesSection" className="bg-white py-12 md:py-20 lg:py-16 xl:py-20 w-screen">
      <div className="2xl:max-w-[90rem] 2xl:mx-auto">
        <SectionIntro {...ServiceData.intro} id="servicesSection_intro" />

        <ServicesList services={ServiceData.services} id="servicesSection_services" />
      </div>
    </div>
  );
};

export default ServicesSection;
