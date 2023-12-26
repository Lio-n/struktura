import { FC, HTMLAttributes } from "react";

interface ArrowProps extends HTMLAttributes<SVGSVGElement> {}

const ArrowIcon: FC<ArrowProps> = ({ ...props }) => {
  return (
    <svg {...props} viewBox="0 0 20 20" fill="currentColor" width="24" height="24" color="rgb(255, 255, 255)">
      <path
        fill-rule="evenodd"
        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
        clip-rule="evenodd"></path>
    </svg>
  );
};

export default ArrowIcon;
