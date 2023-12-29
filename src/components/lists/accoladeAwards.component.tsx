import { FC } from "react";
import Award from "../../ui/molecules/award.molecule";
import AccoladeAwardInfo from "../../interfaces/archivement.interface";

type AccoladeAwardsProps = { awards: AccoladeAwardInfo[]; className?: string };

const AccoladeAwards: FC<AccoladeAwardsProps> = ({ awards, className }) => {
  return (
    <div className={`grid gap-6 ${className} px-4 md:px-8 md:grid-cols-2 xl:px-14 xl:grid-cols-4`}>
      {awards.map((info, index) => (
        <Award key={index} children={info.text} />
      ))}
    </div>
  );
};

export default AccoladeAwards;
