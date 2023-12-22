import { VariantProps, cva } from "class-variance-authority";
import { FC, HTMLAttributes } from "react";

const rootLogo = cva([], {
  variants: {
    intent: {
      dafault: ["stroke-black", "w-8"],
      primary: ["fill-white", "scale-150"],
    },
  },
  defaultVariants: {
    intent: "dafault",
  },
});

interface LogoProps extends HTMLAttributes<SVGSVGElement>, VariantProps<typeof rootLogo> {}

const Logo: FC<LogoProps> = ({ className, intent, ...props }) => {
  return (
    <svg
      {...props}
      className={rootLogo({ intent })}
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="32.000000pt"
      height="32.000000pt"
      viewBox="0 0 32.000000 32.000000"
      preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0.000000,32.000000) scale(0.100000,-0.100000)" stroke="none">
        <path
          d="M102 264 l-62 -35 0 -72 0 -72 60 -33 60 -33 0 96 c0 93 -1 95 -20
83 -16 -10 -20 -25 -22 -68 l-1 -55 -6 49 c-5 39 -8 46 -18 35 -6 -8 -13 -25
-16 -39 -2 -14 -5 1 -6 32 l-1 57 46 27 47 28 46 -26 c43 -25 46 -29 49 -74 2
-26 -2 -52 -7 -57 -8 -8 -11 -2 -11 20 0 52 -19 48 -23 -4 l-3 -48 -2 51 c-1
37 -8 56 -22 69 -20 18 -20 17 -20 -78 l0 -96 58 33 57 32 0 72 0 73 -60 34
-61 34 -62 -35z"
        />
      </g>
    </svg>
  );
};

export default Logo;
