import { FC } from "react";
import Award from "../../ui/molecules/award.molecule";
import AccoladeAwardInfo from "../../interfaces/archivement.interface";
import ScrollReveal from "../../lib/scrollReveal.lib";
import { useEffect } from "react";

type AccoladeAwardsProps = { awards: AccoladeAwardInfo[]; className?: string };

const AccoladeAwards: FC<AccoladeAwardsProps> = ({ awards, className }) => {
  const id = "accolade_award";
  useEffect(() => {
    ScrollReveal.reveal(`#${id}0`, { distance: "20px", origin: "top", delay: 400 });
    ScrollReveal.reveal(`#${id}1`, { distance: "20px", origin: "top", delay: 600 });
    ScrollReveal.reveal(`#${id}2`, { distance: "20px", origin: "top", delay: 800 });
    ScrollReveal.reveal(`#${id}3`, { distance: "20px", origin: "top", delay: 1000 });
  }, []);

  return (
    <div className={`grid gap-6 ${className} px-4 md:px-8 md:grid-cols-2 xl:px-14 xl:grid-cols-4`}>
      {awards.map((info, index) => (
        <Award id={id + index} key={index} children={info.text} />
      ))}
    </div>
  );
};

export default AccoladeAwards;
