import Body from "../../atoms/typographies/body.atom";
import Heading from "../../atoms/typographies/heading.atom";
import AboutAwards from "../../organisms/aboutAwards.organism";

const AboutSection = () => {
  return (
    <div className="bg-white py-12 md:py-20 lg:py-16 xl:py-18 w-screen">
      <div className="2xl:max-w-[90rem] 2xl:mx-auto">
        <div className="px-8 md:px-16 lg:px-20 xl:px-36">
          <div className="mb-4 md:mb-8 lg:mb-12">
            <Heading className="mb-4">Why Choose Struktura Construction</Heading>
            <Body>
              At Struktura Construction, our commitment to excellence, unparalleled expertise, and unwavering dedication set us apart. Here's why you
              should choose us:
            </Body>
          </div>
        </div>

        <AboutAwards className="md:grid-cols-3" />
      </div>
    </div>
  );
};

export default AboutSection;
