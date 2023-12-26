import Body from "../../atoms/typographies/body.atom";
import Heading from "../../atoms/typographies/heading.atom";
import ServiceBlocks from "../../organisms/serviceBlocks.organism";

const ServicesSection = () => {
  return (
    <div className="bg-white py-12 md:py-20 lg:py-16 xl:py-18 w-screen">
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

        <ServiceBlocks />
      </div>
    </div>
  );
};

export default ServicesSection;
