import Phrase from "../atoms/typographies/phrase.atom";

const AchievementMetrincs = ({ className }: { className?: string }) => {
  const metricsInfo = [
    { text: "260+", content: "Proyects Completed" },
    { text: "95%", content: "Satisfaction Rate" },
    { text: "200+", content: "Satisfied Clients" },
    { text: "100+", content: "Qualified Engineers" },
  ];

  return (
    <div className={className}>
      {metricsInfo.map((info, index) => (
        <div key={index} className="grid gap-2">
          <Phrase textWeight="bold" className="text-2xl md:text-3xl lg:text-4xl">
            {info.text}
          </Phrase>
          <Phrase>{info.content}</Phrase>
        </div>
      ))}
    </div>
  );
};

export default AchievementMetrincs;
