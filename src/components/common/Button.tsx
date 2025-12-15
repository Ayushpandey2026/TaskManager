import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  isLoading?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  isLoading = false,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={isLoading || props.disabled}
      className={clsx(
        "px-4 py-2 rounded-md font-medium transition disabled:opacity-50",
        {
          "bg-blue-600 text-white hover:bg-blue-700": variant === "primary",
          "bg-gray-200 text-gray-800 hover:bg-gray-300": variant === "secondary",
          "bg-red-600 text-white hover:bg-red-700": variant === "danger",
        },
        className
      )}
    >
      {isLoading ? "Please wait..." : children}
    </button>
  );
}
