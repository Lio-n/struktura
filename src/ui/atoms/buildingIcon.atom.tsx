import { FC, HTMLAttributes } from "react";

interface BuildingProps extends HTMLAttributes<SVGSVGElement> {}

const BuildingIcon: FC<BuildingProps> = ({ ...props }) => {
  return (
    <svg {...props} width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg" id="svg-317464773_2130">
      <path
        d="M15 11.999H14.4996V5.49902C14.4993 5.2339 14.3939 4.97972 14.2064 4.79225C14.0189 4.60478 13.7648 4.49933 13.4996 4.49902H9.49963V1.49902C9.49933 1.2339 9.39388 0.979722 9.20641 0.792252C9.01894 0.604781 8.76476 0.499327 8.49963 0.499023H2.49963C2.23451 0.499327 1.98033 0.604781 1.79286 0.792252C1.60539 0.979722 1.49994 1.2339 1.49963 1.49902V11.999H1C0.867392 11.999 0.740215 12.0517 0.646447 12.1455C0.552678 12.2392 0.5 12.3664 0.5 12.499C0.5 12.6316 0.552678 12.7588 0.646447 12.8526C0.740215 12.9463 0.867392 12.999 1 12.999H15C15.1326 12.999 15.2598 12.9463 15.3536 12.8526C15.4473 12.7588 15.5 12.6316 15.5 12.499C15.5 12.3664 15.4473 12.2392 15.3536 12.1455C15.2598 12.0517 15.1326 11.999 15 11.999ZM7.49963 7.49902C7.49963 7.63163 7.44695 7.75881 7.35319 7.85257C7.25942 7.94634 7.13224 7.99902 6.99963 7.99902H4.99963C4.86703 7.99902 4.73985 7.94634 4.64608 7.85258C4.55231 7.75881 4.49963 7.63163 4.49963 7.49902C4.49963 7.36641 4.55231 7.23924 4.64608 7.14547C4.73985 7.0517 4.86703 6.99902 4.99963 6.99902H6.99963C7.13224 6.99902 7.25942 7.0517 7.35319 7.14547C7.44695 7.23924 7.49963 7.36642 7.49963 7.49902ZM3.99963 2.99902H5.99963C6.13224 2.99902 6.25942 3.0517 6.35319 3.14547C6.44696 3.23924 6.49963 3.36642 6.49963 3.49902C6.49963 3.63163 6.44696 3.75881 6.35319 3.85258C6.25942 3.94634 6.13224 3.99902 5.99963 3.99902H3.99963C3.86703 3.99902 3.73985 3.94634 3.64608 3.85258C3.55231 3.75881 3.49963 3.63163 3.49963 3.49902C3.49963 3.36642 3.55231 3.23924 3.64608 3.14547C3.73985 3.0517 3.86703 2.99902 3.99963 2.99902ZM3.99963 9.49902H5.99963C6.13224 9.49902 6.25942 9.5517 6.35319 9.64547C6.44696 9.73924 6.49963 9.86642 6.49963 9.99902C6.49963 10.1316 6.44696 10.2588 6.35319 10.3526C6.25942 10.4463 6.13224 10.499 5.99963 10.499H3.99963C3.86703 10.499 3.73985 10.4463 3.64608 10.3526C3.55231 10.2588 3.49963 10.1316 3.49963 9.99902C3.49963 9.86642 3.55231 9.73924 3.64608 9.64547C3.73985 9.5517 3.86703 9.49902 3.99963 9.49902ZM9.49963 5.49902H13.4996V11.999H9.49963V5.49902Z"
        fill="#111111"></path>
    </svg>
  );
};

export default BuildingIcon;
