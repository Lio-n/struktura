import ChevronIcon from "../../atoms/chevronIcon.atom";
import ProyectsList from "../../../components/lists/proyectsList.component";
import Button from "../../atoms/button.atom";
import SectionIntro from "../../molecules/sectionIntro.molecule";
import PortolioData from "../../../data/portfolio.data.json";

const PortfolioSection = () => {
  return (
    <div id="portfolioSection" className="bg-white py-12 md:py-20 lg:py-16 xl:py-20 xl:px-4 w-screen">
      <div className="2xl:max-w-[100rem] 2xl:mx-auto">
        <SectionIntro {...PortolioData.intro} />

        <ProyectsList proyects={PortolioData.proyects} />
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
