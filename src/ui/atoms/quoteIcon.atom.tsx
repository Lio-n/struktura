import { FC, HTMLAttributes } from "react";

interface QuoteProps extends HTMLAttributes<SVGSVGElement> {}

const QuoteIcon: FC<QuoteProps> = ({ ...props }) => {
  return (
    <svg
      {...props}
      className={`rotate-180 ${props.className}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="#000"
      height="16"
      width="14"
      viewBox="0 0 448 512">
      <path d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z" />
    </svg>
  );
};

export default QuoteIcon;
