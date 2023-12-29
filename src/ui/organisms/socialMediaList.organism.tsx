import { FC, HTMLAttributes, ReactNode } from "react";

interface SocialMediaInfo {
  icon: ReactNode;
  href: string;
}

interface SocialMediaListProps extends HTMLAttributes<HTMLUListElement> {
  media: SocialMediaInfo[];
}

const SocialMediaList: FC<SocialMediaListProps> = ({ media, ...props }) => {
  return (
    <ul className={`hidden lg:flex gap-6 items-center`} {...props}>
      {media.map((info, index) => (
        <li key={index}>
          <a href={info.href}>{info.icon}</a>
        </li>
      ))}
    </ul>
  );
};

export default SocialMediaList;
