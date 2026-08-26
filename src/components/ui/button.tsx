import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full",
          {
            "bg-sgv-green text-sgv-black hover:bg-sgv-green/90": variant === "primary",
            "border border-sgv-grey/30 text-sgv-white hover:border-sgv-green hover:text-sgv-green": variant === "secondary",
            "text-sgv-grey hover:text-sgv-white": variant === "ghost",
          },
          {
            "text-xs px-4 py-2": size === "sm",
            "text-sm px-6 py-2.5": size === "md",
            "text-base px-8 py-3": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
export { Button };
