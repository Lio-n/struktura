import ChevronIcon from "../../atoms/chevronIcon.atom";
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
        <div className="mx-auto mt-8 flex justify-center">
          <Button intent="primary" className="rounded-full">
            <ChevronIcon />
          </Button>
          <Button intent="primary" className="mx-4 block">
            View all product
          </Button>
          <Button intent="primary">
            <ChevronIcon className="rotate-180" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
