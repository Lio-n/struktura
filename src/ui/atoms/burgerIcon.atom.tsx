import { FC, HTMLAttributes } from "react";

interface BurgerProps extends HTMLAttributes<SVGSVGElement> {}

const BurgerIcon: FC<BurgerProps> = ({ ...props }) => {
  return (
    <svg {...props} viewBox="0 0 20 20" fill="currentColor" width="32" height="32" color="rgb(0, 0, 0)">
      <path
        fill-rule="evenodd"
        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        clip-rule="evenodd"></path>
    </svg>
  );
};

export default BurgerIcon;
