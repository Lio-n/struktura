import Phrase from "../ui/atoms/typographies/phrase.atom";
import SocialMediaList from "../ui/organisms/socialMediaList.organism";
import { mediaInfo } from "./secondaryHeader.component";

const SecondaryFooter = () => {
  return (
    <div className={`w-full bg-[#f7f6f4] px-14 py-2 gap-8 justify-between md:flex`}>
      <Phrase textWeight="thin" className="text-sm">
        © Copyright 2023 Struktura
      </Phrase>

      <SocialMediaList media={mediaInfo} className="fill-black flex gap-4 mt-2 md:mt-0" />
    </div>
  );
};

export default SecondaryFooter;
