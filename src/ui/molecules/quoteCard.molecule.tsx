import { FC, HTMLAttributes } from "react";
import QuoteIcon from "../atoms/quoteIcon.atom";
import { QuoteInfo } from "../../interfaces/testimony.interface";
import Body from "../atoms/typographies/body.atom";
import SubHeading from "../atoms/typographies/subHeading.atom";

interface QuoteCardProps extends HTMLAttributes<HTMLDivElement>, QuoteInfo {}

const QuoteCard: FC<QuoteCardProps> = ({ quote, children }: QuoteCardProps) => {
  return (
    <div className="bg-light-beige block rounded-2xl p-4 md:flex md:gap-4 md:p-8">
      <QuoteIcon className="w-[2rem]" />
      <div className="mt-12 md:mt-0">
        <div>
          <SubHeading children={quote.title} className="mb-4" />
          <Body children={quote.description} className="mb-4 text-sm" />
        </div>
        {children}
      </div>
    </div>
  );
};

export default QuoteCard;
