import { FC, HTMLAttributes } from "react";
import Typography from "../../../interfaces/typography.interface";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement>, Partial<Typography> {}

const Heading: FC<HeadingProps> = ({ textWeight = "normal", textColor = "body", className, ...props }) => (
  <h2 className={`text-3xl md:text-4xl text-${textColor} font-${textWeight} ${className}`} {...props} />
);

export default Heading;
