import Button from "../atoms/buttons/default.atom";
import Body from "../atoms/typographies/body.atom";
import Title from "../atoms/typographies/title.atom";

const HeroContent = () => (
  <div className="xl:w-fit my-0 mx-auto">
    <Title children="Building Your Vision with Precision" />
    <Body
      children="We are Struktura, your trusted partner in the world of construction. With a legacy of excellence and a commitment to quality, we turn your visions into reality"
      className="mt-5 mb-7 md:mt-7 md:mb-14"
    />

    <Button weight="bold">Learn more</Button>
  </div>
);

export default HeroContent;
