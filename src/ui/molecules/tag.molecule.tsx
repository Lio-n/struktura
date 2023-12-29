import { FC } from "react";

interface TagProps {
  text: string;
}

const Tag: FC<TagProps> = ({ text }: TagProps) => {
  return (
    <div
      className={`w-fit px-4 py-3 border border-black select-none rounded-3xl transition-colors ease-in leading-none whitespace-nowrap hover:text-white hover:bg-black`}
      children={text}
    />
  );
};

export default Tag;
