import { FC, HTMLAttributes } from "react";
import { QuoteInfo } from "../../interfaces/testimony.interface";
import Body from "../atoms/typographies/body.atom";
import SubHeading from "../atoms/typographies/subHeading.atom";

interface QuoteBodyProps extends HTMLAttributes<HTMLDivElement>, QuoteInfo {}

const QuoteBody: FC<QuoteBodyProps> = ({ quote }: QuoteBodyProps) => {
  return (
    <div>
      <div className="mt-12 lg:m-0">
        <div>
          <SubHeading children={quote.title} className="mb-4  md:text-3xl lg:text-5xl" />
          <Body children={quote.description} className="mb-4 text-sm" />
        </div>
      </div>
    </div>
  );
};

export default QuoteBody;
