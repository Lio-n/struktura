import Accolade from "../molecules/accolade.molecule";

const AccoladeList = ({ className }: { className?: string }) => {
  const accolateInfo = [
    "Always building quality industrial",
    "Best manufacturing service provider",
    "Using the newest manufacturing tech",
    "Experienced trusted contractor",
  ];

  return (
    <div className={`grid gap-6 ${className} px-4 md:px-8 md:grid-cols-2 xl:px-14 xl:grid-cols-4`}>
      {accolateInfo.map((info, index) => (
        <Accolade key={index} text={info} />
      ))}
    </div>
  );
};

export default AccoladeList;
