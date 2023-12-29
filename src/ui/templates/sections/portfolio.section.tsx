import ChevronIcon from "../../atoms/chevronIcon.atom";
import Body from "../../atoms/typographies/body.atom";
import Heading from "../../atoms/typographies/heading.atom";
import ProyectInfo from "../../../interfaces/proyect.interface";
import ProyectsList from "../../../components/lists/proyectsList.component";
import Button from "../../atoms/button.atom";

const PortfolioSection = () => {
  const proyectsInfo: ProyectInfo[] = [
    {
      img: "/proyects/kardian_office_tower_construction.webp",
      href: "#",
      text: "Kardian Office Tower Construction",
      description:
        "Construction of a 40-story, state-of-the-art office tower in the heart of the downtown financial district. The project includes modern office spaces, retail outlets, and advanced energy-efficient systems.",
      location: "Tegal, Indonesia",
      duration: "36 months",
      total_budget: "$200 million",
    },
    {
      img: "/proyects/bridge_reconstruction_interstate_highway.webp",
      href: "#",
      text: "Bridge Reconstruction - Interstate Highway",
      description:
        "Reconstruction and widening of a vital interstate highway bridge to enhance traffic flow and safety. The project includes the demolition of the existing structure and the installation of a new, wider bridge.",
      location: "Pekalongan, Indonesia",
      duration: "18 months",
      total_budget: "$45 million",
    },
    {
      img: "/proyects/residential_housing_development.webp",
      href: "#",
      text: "Residential Housing Development",
      description:
        "Development of a suburban residential community consisting of 150 single-family homes and associated infrastructure, including roads, utilities, and recreational areas.",
      location: "Downtown Financial District",
      duration: "24 months",
      total_budget: "$75 million",
    },
  ];

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
        <ProyectsList proyects={proyectsInfo} />
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
