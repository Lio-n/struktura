import { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<InputProps> = ({ ...props }) => {
  return <input {...props} className="pb-4 bg-transparent text-xl text-white w-full focus-visible:outline-none" />;
};

export default Input;
