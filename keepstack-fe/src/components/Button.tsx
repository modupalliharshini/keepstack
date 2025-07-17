import { ReactNode } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  text: string;
  startIcon?: ReactNode;
  onClick?: () => void;
  fullWidth?: boolean;
  medium?: boolean;
}

const varaintStyles = {
  primary: "bg-primary-color text-white",
  secondary: "bg-secondary-color text-purple-700",
};

const defaultStyles =
  "rounded-md pr-4 pl-2 py-2 flex justify-center items-center cursor-pointer";

export function Button({
  variant,
  text,
  startIcon,
  onClick,
  fullWidth,
  medium,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={
        varaintStyles[variant] +
        " " +
        defaultStyles +
        `${fullWidth ? " w-full flex justify-center items-center" : ""}` +
        `${medium ? " w-[10vw]" : ""}`
      }
    >
      <div className="pr-2">{startIcon}</div>
      {text}
    </button>
  );
}
