type AvatarImage = {
  big: string;
  small: string;
};

type TestimonyContent = {
  title: string;
  description: string;
};

type TestimonyAttribution = {
  author: string;
  job_title: string;
};

interface TestimonyInfo {
  avatar: AvatarImage;
  attribution: TestimonyAttribution;
  quote: TestimonyContent;
}

interface QuoteInfo extends Pick<TestimonyInfo, "quote"> {}

export type { AvatarImage, TestimonyContent, QuoteInfo, TestimonyAttribution };
export default TestimonyInfo;
