import { FC } from "react";
import AboutAwardInfo from "../../interfaces/about.interface";
import Phrase from "../../ui/atoms/typographies/phrase.atom";
import Award from "../../ui/molecules/award.molecule";
import ScrollReveal from "../../lib/scrollReveal.lib";
import { useEffect } from "react";

type AboutAwardsProps = { awards: AboutAwardInfo[]; className?: string };

const AboutAwards: FC<AboutAwardsProps> = ({ awards, className }) => {
  const bgColors = ["vanilla-cream", "anti-flash-white", "isabelline"];
  const id = "about_award";

  useEffect(() => {
    ScrollReveal.reveal(`#${id}0`, { distance: "20px", origin: "top", delay: 400 });
    ScrollReveal.reveal(`#${id}1`, { distance: "20px", origin: "top", delay: 600 });
    ScrollReveal.reveal(`#${id}2`, { distance: "20px", origin: "top", delay: 800 });
  }, []);

  const AboutItem = (props: { text: string; content: string }) => (
    <div>
      <Phrase className="mb-2 text-xl font-bold block">{props.text}</Phrase>
      <Phrase>{props.content}</Phrase>
    </div>
  );

  return (
    <div className={`grid gap-6 ${className} px-4 md:px-8 md:grid-cols-2 md:gap-8 xl:px-14 xl:grid-cols-3`}>
      {awards.map((info, index) => (
        <Award
          id={id + index}
          key={index}
          children={<AboutItem {...info} />}
          intent="primary"
          className={`bg-${bgColors[index % bgColors.length]} flex flex-col gap-8 md:gap-12`}
        />
      ))}
    </div>
  );
};

export default AboutAwards;
