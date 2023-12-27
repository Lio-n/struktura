import { FC, HTMLAttributes } from "react";
import FacebookIcon from "../atoms/facebookIcon.atom";
import TwitterIcon from "../atoms/twitterIcon.atom";
import LinkedinIcon from "../atoms/linkedinIcon.atom";
import YoutubeIcon from "../atoms/youtubeIcon.atom";
import InstagramIcon from "../atoms/instagramIcon.atom";

interface SocialMediaListProps extends HTMLAttributes<HTMLUListElement> {}

const SocialMediaList: FC<SocialMediaListProps> = ({ ...props }) => {
  const mediaInfo = [
    { icon: <FacebookIcon className="w-4" />, href: "#" },
    { icon: <TwitterIcon className="w-4" />, href: "#" },
    { icon: <LinkedinIcon className="w-4" />, href: "#" },
    { icon: <YoutubeIcon className="w-4" />, href: "#" },
    { icon: <InstagramIcon className="w-4" />, href: "#" },
  ];

  return (
    <ul className={`hidden lg:flex gap-6 items-center`} {...props}>
      {mediaInfo.map((info, index) => (
        <li key={index}>
          <a href={info.href}>{info.icon}</a>
        </li>
      ))}
    </ul>
  );
};

export default SocialMediaList;
