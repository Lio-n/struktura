import { FC, ReactNode } from "react";
import Body from "../atoms/typographies/body.atom";
import Heading from "../atoms/typographies/heading.atom";

interface SectionIntroProps {
  title: string;
  description: string;
  id?: string;
  children?: ReactNode;
}

const SectionIntro: FC<SectionIntroProps> = ({ title, description, children, id }) => {
  return (
    <div id={id} className="mb-4 md:mb-8 lg:mb-12 px-8 md:px-16 lg:px-20 xl:px-36">
      <div className="mb-4 md:mb-8 lg:mb-12">
        <Heading className="mb-4" children={title} />
        <Body children={description} />
      </div>

      {children}
    </div>
  );
};

export default SectionIntro;
