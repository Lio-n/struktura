type AvatarImage = {
  big: string;
  small: string;
};

type TestimonyContent = {
  title: string;
  description: string;
};

interface TestimonyInfo {
  avatar: AvatarImage;
  full_name: string;
  quote: TestimonyContent;
}

interface QuoteInfo extends Pick<TestimonyInfo, "quote"> {}

export type { AvatarImage, TestimonyContent, QuoteInfo };
export default TestimonyInfo;
