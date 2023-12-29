import { FC, HTMLAttributes } from "react";
import SubHeading from "../atoms/typographies/subHeading.atom";
import Phrase from "../atoms/typographies/phrase.atom";
import ProyectInfo from "../../interfaces/proyect.interface";
import Body from "../atoms/typographies/body.atom";
import Button from "../atoms/button.atom";

interface ProyectCardProps extends HTMLAttributes<HTMLDivElement>, ProyectInfo {}

const ProyectCard: FC<ProyectCardProps> = ({ text, img, href, description, location, duration, total_budget, className = "" }: ProyectCardProps) => {
  return (
    <div className="bg-white block rounded-2xl">
      <img src={img} alt={`image : ${img.toString()}`} className="rounded-2xl object-cover h-60 w-full" />
      <div className={`${className} p-4 grid gap-4 md:gap-6 lg:px-2`}>
        <div>
          <SubHeading textWeight="bold">{text}</SubHeading>
          <Body children={description} />
        </div>
        <div className="grid grid-cols-2 grid-flow-row-3 gap-2">
          <Phrase children="Location" />
          <Phrase children={location} className="text-end" />
          <Phrase children="Duration" />
          <Phrase children={duration} className={`text-end`} />
          <Phrase children="Total Budget" />
          <Phrase children={total_budget} className={`text-end`} />
        </div>

        <a href={href} className="w-full">
          <Button intent="primary" className="w-full">
            Read me
          </Button>
        </a>
      </div>
    </div>
  );
};

export default ProyectCard;
