import BuildingIcon from "../ui/atoms/buildingIcon.atom";
import EmailIcon from "../ui/atoms/emailIcon.atom";
import FacebookIcon from "../ui/atoms/facebookIcon.atom";
import InstagramIcon from "../ui/atoms/instagramIcon.atom";
import LinkedinIcon from "../ui/atoms/linkedinIcon.atom";
import PhoneIcon from "../ui/atoms/phoneIcon.atom";
import TwitterIcon from "../ui/atoms/twitterIcon.atom";
import YoutubeIcon from "../ui/atoms/youtubeIcon.atom";
import SocialMediaList from "../ui/organisms/socialMediaList.organism";
import StruktureInfo from "../data/strukture.data.json";
import ScrollReveal from "../lib/scrollReveal.lib";
import { useEffect } from "react";

const mediaInfo = [
  { icon: <FacebookIcon className="w-4" />, href: StruktureInfo.socialMedia.facebook },
  { icon: <TwitterIcon className="w-4" />, href: StruktureInfo.socialMedia.twitter },
  { icon: <LinkedinIcon className="w-4" />, href: StruktureInfo.socialMedia.linkedin },
  { icon: <YoutubeIcon className="w-4" />, href: StruktureInfo.socialMedia.youtube },
  { icon: <InstagramIcon className="w-4" />, href: StruktureInfo.socialMedia.instagram },
];

const contactInfo = [
  { icon: <EmailIcon />, text: StruktureInfo.contact.email },
  { icon: <PhoneIcon />, text: StruktureInfo.contact.phone_n },
  { icon: <BuildingIcon />, text: StruktureInfo.contact.location },
];

const SecondaryHeader = () => {
  useEffect(() => {
    ScrollReveal.reveal("#secondaryHeader_contact", { distance: "-200px", origin: "right" });
    ScrollReveal.reveal("#secondaryHeader_socialMedia", { distance: "-200px", origin: "right" });
  }, []);

  return (
    <div className={`w-full bg-[#f7f6f4] px-14 py-2 gap-8 hidden justify-between md:flex z-10`}>
      <ul className="flex gap-6" id="secondaryHeader_contact">
        {contactInfo.map((info, index) => (
          <li key={index} className="flex gap-3 items-baseline">
            {info.icon} {info.text}
          </li>
        ))}
      </ul>

      <SocialMediaList media={mediaInfo} id="secondaryHeader_socialMedia" />
    </div>
  );
};

export { mediaInfo };
export default SecondaryHeader;
