import { FC, HTMLAttributes } from "react";
import Typography from "../../../interfaces/typography.interface";

interface SubHeadingProps extends HTMLAttributes<HTMLHeadingElement>, Partial<Typography> {}

const SubHeading: FC<SubHeadingProps> = ({ textWeight = "normal", textColor = "body", className, ...props }) => (
  <h3 className={`text-2xl text-${textColor} font-${textWeight} ${className}`} {...props} />
);

export default SubHeading;
