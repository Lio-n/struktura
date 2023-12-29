import { FC, HTMLAttributes } from "react";
import Tag from "../molecules/tag.molecule";

interface TagInfo {
  text: string;
}

interface TagsListProps extends HTMLAttributes<HTMLUListElement> {
  tags: TagInfo[];
}

const TagsList: FC<TagsListProps> = ({ tags, ...props }) => {
  return (
    <ul className={`flex flex-wrap gap-3`} {...props}>
      {tags.map((info, index) => (
        <li key={index}>
          <Tag text={info.text} />
        </li>
      ))}
    </ul>
  );
};

export default TagsList;
