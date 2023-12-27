import { FC, HTMLAttributes } from "react";
import ProyectInfo from "../../interfaces/proyect.interface";
import ProyectCard from "../molecules/proyectCard.molecule";

interface ProyectsListProps extends HTMLAttributes<HTMLUListElement> {}

const ProyectsList: FC<ProyectsListProps> = ({ ...props }) => {
  const proyectsInfo: ProyectInfo[] = [
    {
      bgImage: "/proyects/kardian_office_tower_construction.webp",
      href: "#",
      text: "Kardian Office Tower Construction",
      description:
        "Construction of a 40-story, state-of-the-art office tower in the heart of the downtown financial district. The project includes modern office spaces, retail outlets, and advanced energy-efficient systems.",
      location: "Tegal, Indonesia",
      duration: "36 months",
      total_budget: "$200 million",
    },
    {
      bgImage: "/proyects/bridge_reconstruction_interstate_highway.webp",
      href: "#",
      text: "Bridge Reconstruction - Interstate Highway",
      description:
        "Reconstruction and widening of a vital interstate highway bridge to enhance traffic flow and safety. The project includes the demolition of the existing structure and the installation of a new, wider bridge.",
      location: "Pekalongan, Indonesia",
      duration: "18 months",
      total_budget: "$45 million",
    },
    {
      bgImage: "/proyects/residential_housing_development.webp",
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
    <ul className={`grid lg:grid-cols-2 2xl:grid-cols-3 gap-3 px-4 md:px-8 xl:p-0`} {...props}>
      {proyectsInfo.map((info, index) => (
        <li key={index} className={`w-full ${index === proyectsInfo.length - 1 ? "hidden 2xl:inline-block" : ""}`}>
          <ProyectCard {...info} />
        </li>
      ))}
    </ul>
  );
};

export default ProyectsList;
