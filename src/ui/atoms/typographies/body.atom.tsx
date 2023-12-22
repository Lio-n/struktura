import { FC, HTMLAttributes } from "react";
import Typography from "../../../interfaces/typography.interface";

interface BodyProps extends HTMLAttributes<HTMLParagraphElement>, Partial<Typography> {}

const Body: FC<BodyProps> = ({ textWeight = "normal", textColor = "body", className, ...props }) => (
  <p className={`text-lg sm:text-xl text-${textColor} font-${textWeight} ${className}`} {...props} />
);

export default Body;
