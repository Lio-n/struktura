import { FC, HTMLAttributes } from "react";
import ProyectInfo from "../../interfaces/proyect.interface";
import ProyectCard from "../../ui/molecules/proyectCard.molecule";

interface ProyectsListProps extends HTMLAttributes<HTMLUListElement> {
  proyects: ProyectInfo[];
}

const ProyectsList: FC<ProyectsListProps> = ({ proyects, ...props }) => {
  return (
    <ul className={`grid lg:grid-cols-2 2xl:grid-cols-3 gap-3 px-4 md:px-8 xl:p-0`} {...props}>
      {proyects.map((info, index) => (
        <li key={index} className={`w-full ${index === proyects.length - 1 ? "hidden 2xl:inline-block" : ""}`}>
          <ProyectCard {...info} />
        </li>
      ))}
    </ul>
  );
};

export default ProyectsList;
