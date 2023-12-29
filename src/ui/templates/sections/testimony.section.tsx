import Body from "../../atoms/typographies/body.atom";
import Heading from "../../atoms/typographies/heading.atom";
import QuoteCard from "../../molecules/quoteCard.molecule";

const TestimonySection = () => {
  return (
    <div className="bg-white py-12 md:py-20 lg:py-16 xl:py-20 w-screen">
      <div className="2xl:max-w-[90rem] 2xl:mx-auto">
        <div className="mb-8 px-8 md:px-16 lg:px-20 xl:px-36">
          <div className="mb-4 md:mb-8 lg:mb-12">
            <Heading className="mb-4">Client Voices of Satisfaction</Heading>
            <Body>Listen to delighted clients who've experienced Struktura's exceptional craftsmanship and professionalism.</Body>
          </div>
        </div>
        <QuoteCard
          quote={{
            title: "They seamlessly modernized our office, showcasing their professionalism",
            description:
              "The team at Struktura transformed our outdated office space into a modern and efficient workspace. Their professionalism and ability to work around our schedule made the process seamless. Thank you!",
          }}
        />
      </div>
    </div>
  );
};

export default TestimonySection;
