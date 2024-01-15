import { FC, HTMLAttributes } from "react";
import ServiceCard from "../../ui/molecules/serviceCard.molecule";
import ServiceInfo from "../../interfaces/service.interface";

interface ServicesListProps extends HTMLAttributes<HTMLUListElement> {
  services: ServiceInfo[];
}

const ServicesList: FC<ServicesListProps> = ({ services, className, id }) => {
  return (
    <div id={id} className={`grid gap-6 ${className} px-4 md:px-8 md:gap-8 2xl:px-0 xl:gap-4 xl:h-[25rem] xl:grid-cols-3`}>
      {services.map((info, index) => (
        <ServiceCard key={index} {...info} />
      ))}
    </div>
  );
};

export default ServicesList;
