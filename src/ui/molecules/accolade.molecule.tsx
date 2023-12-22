import CheckIcon from "../atoms/checkIcon.atom";

const Accolade = ({ text }: { text: string }) => {
  return (
    <div className="border border-body rounded-full py-4 px-5 flex text-xl gap-4 items-center lg:py-8 xl:py-4">
      <CheckIcon className="w-8" />
      {text}
    </div>
  );
};

export default Accolade;
