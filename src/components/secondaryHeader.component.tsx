import BuildingIcon from "../ui/atoms/buildingIcon.atom";
import EmailIcon from "../ui/atoms/emailIcon.atom";
import FacebookIcon from "../ui/atoms/facebookIcon.atom";
import InstagramIcon from "../ui/atoms/instagramIcon.atom";
import LinkedinIcon from "../ui/atoms/linkedinIcon.atom";
import PhoneIcon from "../ui/atoms/phoneIcon.atom";
import TwitterIcon from "../ui/atoms/twitterIcon.atom";
import YoutubeIcon from "../ui/atoms/youtubeIcon.atom";
import SocialMediaList from "../ui/organisms/socialMediaList.organism";

const SecondaryHeader = () => {
  const contactInfo = [
    { icon: <EmailIcon />, text: "support@struktura.com" },
    { icon: <PhoneIcon />, text: "+1 0239 0310" },
    { icon: <BuildingIcon />, text: "Tegal, Indonesia" },
  ];

  const mediaInfo = [
    { icon: <FacebookIcon className="w-4" />, href: "#" },
    { icon: <TwitterIcon className="w-4" />, href: "#" },
    { icon: <LinkedinIcon className="w-4" />, href: "#" },
    { icon: <YoutubeIcon className="w-4" />, href: "#" },
    { icon: <InstagramIcon className="w-4" />, href: "#" },
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

      <SocialMediaList media={mediaInfo} />
    </div>
  );
};

export default SecondaryHeader;
