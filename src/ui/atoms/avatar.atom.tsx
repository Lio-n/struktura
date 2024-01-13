import { FC, ImgHTMLAttributes } from "react";
import { VariantProps, cva } from "class-variance-authority";

const rootImg = cva(["block object-cover"], {
  variants: {
    intent: {
      dafault: ["w-12 h-12 rounded-full"],
      primary: ["w-full h-full rounded-2xl"],
    },
  },
  defaultVariants: {
    intent: "dafault",
  },
});

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>, VariantProps<typeof rootImg> {}

const Avatar: FC<AvatarProps> = ({ className = "", alt = "Avatar", intent, ...props }) => {
  return <img {...props} alt={alt} className={rootImg({ className, intent })} />;
};

export default Avatar;
