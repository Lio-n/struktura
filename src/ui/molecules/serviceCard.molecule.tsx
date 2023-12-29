import { FC } from "react";
import Body from "../atoms/typographies/body.atom";
import SubHeading from "../atoms/typographies/subHeading.atom";
import ArrowIcon from "../atoms/arrowIcon.atom";
import ServiceInfo from "../../interfaces/service.interface";

type ServiceCardProps = ServiceInfo & { className?: string };

const ServiceCard: FC<ServiceCardProps> = ({ text, img, content, href, className = "" }) => {
  return (
    <a href={href} className="relative overflow-hidden rounded-2xl group ">
      <div
        className={`${className} p-8 pt-28 flex items-end h-full  rounded-2xl  text-white bg-center bg-no-repeat transition-all duration-500 bg-[length:100%] hover:bg-[length:110%]`}
        style={{ backgroundImage: `url('${img}')` }}>
        <div>
          <SubHeading textWeight="bold" className="mb-4">
            {text}
          </SubHeading>
          <Body className="text-base">{content}</Body>
          <br />
          <a href={href}>
            Learn more <ArrowIcon className="inline ml-2" />
          </a>
        </div>
      </div>
    </a>
  );
};

export default ServiceCard;
