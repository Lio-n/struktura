import { FC, HTMLAttributes } from "react";
import { VariantProps, cva } from "class-variance-authority";

const rootButton = cva(["border", "rounded-3xl", "transition-colors", "ease-in", "py-4 px-7", "leading-none", "whitespace-nowrap"], {
  variants: {
    intent: {
      dafault: ["bg-white", "text-black", "border-transparent", "hover:text-white hover:bg-black"],
      primary: ["border-black", "bg-transparent", "text-black", "hover:text-white hover:bg-black"],
      secondary: ["bg-black", "text-white", "border-transparent", "hover:text-black hover:bg-white"],
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
    },
    weight: {
      light: ["font-light"],
      medium: ["font-medium"],
      bold: ["font-bold"],
    },
  },
  defaultVariants: {
    intent: "dafault",
    weight: "medium",
    size: "medium",
  },
});

interface BodyProps extends HTMLAttributes<HTMLButtonElement>, VariantProps<typeof rootButton> {}

const Button: FC<BodyProps> = ({ intent, size, weight, ...props }) => <button className={rootButton({ intent, size, weight })} {...props} />;

export default Button;
