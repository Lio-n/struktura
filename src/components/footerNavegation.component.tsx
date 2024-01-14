import FooterInfo from "../data/footer.data.json";
import StruktureInfo from "../data/strukture.data.json";
import BuildingIcon from "../ui/atoms/buildingIcon.atom";
import EmailIcon from "../ui/atoms/emailIcon.atom";
import NavegationLink from "../ui/atoms/navegationLink.atom";
import PhoneIcon from "../ui/atoms/phoneIcon.atom";
import Body from "../ui/atoms/typographies/body.atom";

const FooterNavegation = () => {
  return (
    <div className="pt-12 flex flex-col gap-8 md:gap-0 md:flex-row">
      <NavegationSections />
      <NavegationLegalesInfo />
      <ContectInfo />
    </div>
  );
};

const sharedStyles = "grid grid-rows-3 grid-cols-[repeat(2,_minmax(0,_10rem))] my-0 mx-auto gap-2";

const NavegationSections = () => {
  return (
    <ul className={sharedStyles}>
      {FooterInfo.navegationSections.map((item, index) => (
        <li className="py-1" key={index}>
          <NavegationLink href={item.href} text={item.name} intent="primary" weight="bold" size="large" />
        </li>
      ))}
    </ul>
  );
};

const NavegationLegalesInfo = () => {
  return (
    <ul className={sharedStyles}>
      {FooterInfo.navegationLegalesInfo.map((item, index) => (
        <li className="py-1" key={index}>
          <NavegationLink href={item.href} text={item.name} intent="primary" weight="bold" size="large" />
        </li>
      ))}
    </ul>
  );
};

const ContectInfo = () => {
  const contactInfo = [
    { icon: <EmailIcon fill="#fff" />, text: StruktureInfo.contact.email },
    { icon: <PhoneIcon fill="#fff" />, text: StruktureInfo.contact.phone_n },
    { icon: <BuildingIcon fill="#fff" />, text: StruktureInfo.contact.location },
  ];
  return (
    <ul className="grid gap-6 my-0 md:mx-auto">
      {contactInfo.map((info, index) => (
        <li key={index} className="flex gap-3 items-baseline">
          {info.icon} <Body textColor="white">{info.text}</Body>
        </li>
      ))}
    </ul>
  );
};

export default FooterNavegation;
