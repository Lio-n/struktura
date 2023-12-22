import Phrase from "../atoms/typographies/phrase.atom";
import Award from "../molecules/award.molecule";

const AboutAwards = ({ className }: { className?: string }) => {
  const aboutInfo = [
    { text: "Proven Track Record", content: "We have a decade of successful projects.", bgColor: "vanilla-cream" },
    { text: "Quality Assurance", content: "Meticulous attention to detail and craftsmanship.", bgColor: "anti-flash-white" },
    { text: "Client-Centric Approach", content: "Effective, transparent, and collaborative.", bgColor: "isabelline" },
  ];

  const AboutItem = (props: { text: string; content: string }) => (
    <div>
      <Phrase className="mb-2 text-xl font-bold block">{props.text}</Phrase>
      <Phrase>{props.content}</Phrase>
    </div>
  );

  return (
    <div className={`grid gap-6 ${className} px-4 md:px-8 md:grid-cols-2 md:gap-8 xl:px-14 xl:grid-cols-3`}>
      {aboutInfo.map((info, index) => (
        <Award key={index} children={<AboutItem {...info} />} intent="primary" className={`bg-${info.bgColor} flex flex-col gap-8 md:gap-12`} />
      ))}
    </div>
  );
};

export default AboutAwards;
