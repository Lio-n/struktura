import { FC } from "react";
import Button from "../atoms/button.atom";
import ChevronIcon from "../atoms/chevronIcon.atom";

interface PaginationControlsProps {
  prev: () => void;
  next: () => void;
}

const PaginationControls: FC<PaginationControlsProps> = ({ prev, next }) => {
  const sharedStyles = { button: "scale-75 md:scale-100" };

  return (
    <div className="md:flex md:gap-4">
      <Button intent="primary" className={sharedStyles.button} onClick={() => prev()}>
        <ChevronIcon />
      </Button>
      <Button intent="primary" className={sharedStyles.button} onClick={() => next()}>
        <ChevronIcon className="rotate-180" />
      </Button>
    </div>
  );
};

export default PaginationControls;
