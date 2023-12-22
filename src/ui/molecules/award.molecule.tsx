import { FC, HTMLAttributes } from "react";
import { VariantProps, cva } from "class-variance-authority";
import CheckIcon from "../atoms/checkIcon.atom";

const rootAward = cva([], {
  variants: {
    intent: {
      dafault: ["border border-body rounded-full flex text-xl gap-4 items-center py-4 px-5 lg:py-8 xl:py-4"],
      primary: ["rounded-3xl p-7 md:p-6"],
    },
  },
  defaultVariants: {
    intent: "dafault",
  },
});

interface BodyProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof rootAward> {}

const Award: FC<BodyProps> = ({ intent, children, ...props }) => (
  <>
    <div {...props} className={`${rootAward({ intent })} ${props.className}`}>
      <CheckIcon />
      {children}
    </div>
  </>
);

export default Award;
