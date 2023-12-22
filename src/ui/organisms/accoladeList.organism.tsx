import Accolade from "../molecules/accolade.molecule";

const AccoladeList = ({ className }: { className?: string }) => {
  const accolateInfo = [
    "Always building quality industrial",
    "Using the newest manufacturing tech",
    "Experienced trusted contractor",
    "Best manufacturing service provider",
  ];

  return (
    <div className={`grid gap-6 ${className} md:grid-cols-2`}>
      {accolateInfo.map((info, index) => (
        <Accolade key={index} text={info} />
      ))}
    </div>
  );
};

export default AccoladeList;
