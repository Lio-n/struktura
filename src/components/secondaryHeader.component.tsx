import BuildingIcon from "../ui/atoms/buildingIcon.atom";
import EmailIcon from "../ui/atoms/emailIcon.atom";
import PhoneIcon from "../ui/atoms/phoneIcon.atom";
import SocialMediaList from "../ui/organisms/socialMediaList.molecule";

const SecondaryHeader = () => {
  const contactInfo = [
    { icon: <EmailIcon />, text: "support@struktura.com" },
    { icon: <PhoneIcon />, text: "+1 0239 0310" },
    { icon: <BuildingIcon />, text: "Tegal, Indonesia" },
  ];

  return (
    <div className={`w-full bg-[#f7f6f4] px-14 py-2 gap-8 hidden justify-between md:flex z-10`}>
      <ul className="flex gap-6">
        {contactInfo.map((info, index) => (
          <li key={index} className="flex gap-3 items-baseline">
            {info.icon} {info.text}
          </li>
        ))}
      </ul>

      <SocialMediaList />
    </div>
  );
};

export default SecondaryHeader;
