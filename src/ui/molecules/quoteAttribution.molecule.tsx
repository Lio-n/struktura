import { FC, HTMLAttributes } from "react";
import { TestimonyAttribution } from "../../interfaces/testimony.interface";
import Body from "../atoms/typographies/body.atom";
import Phrase from "../atoms/typographies/phrase.atom";

interface QuoteAttributionProps extends HTMLAttributes<HTMLDivElement>, TestimonyAttribution {}

const QuoteAttribution: FC<QuoteAttributionProps> = ({ author, job_title }: QuoteAttributionProps) => {
  return (
    <div className="w-fit">
      <Body children={author} textWeight="bold" />
      <Phrase children={job_title} />
    </div>
  );
};

export default QuoteAttribution;
