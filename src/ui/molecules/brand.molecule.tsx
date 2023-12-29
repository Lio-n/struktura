import { VariantProps, cva } from "class-variance-authority";
import { FC, HTMLAttributes } from "react";
import Logo from "../atoms/logo.atom";

const rootBrand = cva(["flex", "gap-2", "w-fit", "items-center", "font-bold"], {
  variants: {
    intent: {
      dafault: ["text-black", "text-xl"],
      primary: ["text-white", "text-4xl", "gap-4"],
    },
  },
  defaultVariants: {
    intent: "dafault",
  },
});

interface BrandProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof rootBrand> {}

const Brand: FC<BrandProps> = ({ className, intent, ...props }) => {
  return (
    <div {...props} className={rootBrand({ intent })}>
      <Logo intent={intent} /> Struktura
    </div>
  );
};

export default Brand;
