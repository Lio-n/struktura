import { VariantProps, cva } from "class-variance-authority";
import { FC, HTMLAttributes } from "react";
import Logo from "../atoms/logo.atom";

const rootLogoWithName = cva(["flex", "gap-2", "w-fit", "items-center", "font-bold"], {
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

interface LogoWithNameProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof rootLogoWithName> {}

const LogoWithName: FC<LogoWithNameProps> = ({ className, intent, ...props }) => {
  return (
    <div {...props} className={rootLogoWithName({ intent })}>
      <Logo intent={intent} /> Struktura
    </div>
  );
};

export default LogoWithName;
