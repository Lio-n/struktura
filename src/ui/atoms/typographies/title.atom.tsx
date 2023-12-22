import { FC, HTMLAttributes } from "react";
import Typography from "../../../interfaces/typography.interface";

interface TitleProps extends HTMLAttributes<HTMLHeadingElement>, Partial<Typography> {}

const Title: FC<TitleProps> = ({ textWeight = "normal", textColor = "body", className, ...props }) => (
  <h1 className={`text-4xl md:text-5xl lg:text-6xl text-${textColor} font-${textWeight} ${className}`} {...props} />
);

export default Title;
