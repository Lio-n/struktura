import ServicesList from "../../../components/lists/servicesList.component";
import ServiceInfo from "../../../interfaces/service.interface";
import Body from "../../atoms/typographies/body.atom";
import Heading from "../../atoms/typographies/heading.atom";

const ServicesSection = () => {
  const serviceInfo: ServiceInfo[] = [
    {
      img: "/services/design-and-planning.webp",
      text: "Design and Planning Services",
      content: "Our expert design and planning services ensure meticulous execution.",
      href: "#",
    },
    {
      img: "/services/construction-and-building.webp",
      text: "Construction and Building",
      content: "From groundbreaking to finishing touches, we bring your vision to life with precision.",
      href: "#",
    },
    {
      img: "/services/renovation-and-remodeling.webp",
      text: "Renovation and Remodeling",
      content: "Enhance existing spaces or rejuvenate structures with tailored solutions.",
      href: "#",
    },
  ];

  return (
    <div className="bg-white py-12 md:py-20 lg:py-16 xl:py-20 w-screen">
      <div className="2xl:max-w-[90rem] 2xl:mx-auto">
        <div className="px-8 md:px-16 lg:px-20 xl:px-36">
          <div className="mb-4 md:mb-8 lg:mb-12">
            <Heading className="mb-4">Tailored Construction Solutions</Heading>
            <Body>
              At Struktura, we offer a comprehensive suite of construction services, meticulously tailored to match your unique project requirements,
              ensuring success at every step.
            </Body>
          </div>
        </div>

        <ServicesList services={serviceInfo} />
      </div>
    </div>
  );
};

export default ServicesSection;
