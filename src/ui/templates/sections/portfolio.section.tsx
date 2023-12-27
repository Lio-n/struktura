import Button from "../../atoms/buttons/default.atom";
import Body from "../../atoms/typographies/body.atom";
import Heading from "../../atoms/typographies/heading.atom";
import ProyectsList from "../../organisms/proyectsList.molecule";

const PortfolioSection = () => {
  return (
    <div className="bg-white py-12 md:py-20 lg:py-16 xl:py-20 xl:px-4 w-screen">
      <div className="2xl:max-w-[100rem] 2xl:mx-auto">
        <div className="mb-8 px-8 md:px-16 lg:px-20 xl:px-36">
          <div className="mb-4 md:mb-8 lg:mb-12">
            <Heading className="mb-4">Our Remarkable Project Portfolio</Heading>
            <Body>
              Explore our extensive portfolio showcasing the breadth of our expertise, from iconic structures to sustainable solutions, all
              meticulously crafted to perfection.
            </Body>
          </div>
        </div>
        <ProyectsList />
        <Button intent="primary" className="mt-8 mx-auto block">
          View all product
        </Button>
      </div>
    </div>
  );
};

export default PortfolioSection;
