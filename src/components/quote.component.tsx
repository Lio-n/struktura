import { FC, HTMLAttributes, useState } from "react";
import QuoteAttribution from "../ui/molecules/quoteAttribution.molecule";
import QuoteBody from "../ui/molecules/quoteBody.molecule";
import TestimonyInfo from "../interfaces/testimony.interface";
import { useMediaQuery } from "@uidotdev/usehooks";
import MediaQueryInfo from "../constants/mediaQuery.constanst.json";
import PaginationControls from "../ui/molecules/paginationControls.molecule";
import validLoopedIndex from "../helpers/validateLoopedIndex.helper";
import Avatar from "../ui/atoms/avatar.atom";
import QuoteIcon from "../ui/atoms/quoteIcon.atom";

interface QuoteProps extends HTMLAttributes<HTMLDivElement> {
  testimonies: TestimonyInfo[];
}

const Quote: FC<QuoteProps> = ({ testimonies, id }) => {
  const [currTestimony, setTestimony] = useState<{ data: TestimonyInfo; index: number }>({ data: testimonies[0], index: 0 });
  const isMidDevice = useMediaQuery(MediaQueryInfo.max.md);
  const isLargeDevice = useMediaQuery(MediaQueryInfo.min.lg);

  const handlePrev = () => {
    const newIndex = validLoopedIndex(currTestimony.index - 1, testimonies.length);
    setTestimony({ data: testimonies[newIndex], index: newIndex });
  };

  const handleNext = () => {
    const newIndex = validLoopedIndex(currTestimony.index + 1, testimonies.length);
    setTestimony({ data: testimonies[newIndex], index: newIndex });
  };

  const avatarImage = isMidDevice ? currTestimony.data.avatar.small : currTestimony.data.avatar.big;

  return (
    <div id={id} className="px-4 md:px-8 lg:px-10 md:grid md:grid-cols-[minmax(0,_1fr)_minmax(0,_22rem)] md:gap-4">
      <div className="bg-light-beige rounded-2xl p-6 md:gap-4 md:p-8 lg:p-12 lg:flex lg:gap-8">
        <QuoteIcon className="w-[2rem] lg:scale-150" />
        <div className="lg:grid lg:grid-rows-[1fr]">
          <QuoteBody quote={currTestimony.data.quote} />

          {isLargeDevice && (
            <>
              <div className="flex justify-between w-full">
                <QuoteAttribution {...currTestimony.data.attribution} />
                <PaginationControls prev={handlePrev} next={handleNext} />
              </div>
            </>
          )}
        </div>
      </div>
      <div className="flex mt-4 md:m-0 md:flex-col w-full gap-4">
        <Avatar src={avatarImage} intent={`${isMidDevice ? "dafault" : "primary"}`} />

        {!isLargeDevice && (
          <>
            <div className="flex justify-between w-full">
              <QuoteAttribution {...currTestimony.data.attribution} />
              <PaginationControls prev={handlePrev} next={handleNext} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Quote;
