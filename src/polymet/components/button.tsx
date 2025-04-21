import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = "primary",
      size = "md",
      fullWidth = false,
      icon,
      iconPosition = "left",
      ...props
    },
    ref,
  ) => {
    const variantClasses = {
      primary:
        "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      outline:
        "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
    };

    const sizeClasses = {
      sm: "h-9 px-3 text-sm",
      md: "h-10 px-4",
      lg: "h-12 px-6 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:scale-[1.02] active:scale-[0.98]",
          variantClasses[variant],
          sizeClasses[size],
          fullWidth && "w-full",
          className,
        )}
        {...props}
        data-pol-id="n1zx9g"
        data-pol-file-name="button"
        data-pol-file-type="component"
      >
        {icon && iconPosition === "left" && (
          <span
            className="mr-2 transition-transform duration-300"
            data-pol-id="6ieyme"
            data-pol-file-name="button"
            data-pol-file-type="component"
          >
            {icon}
          </span>
        )}
        {children}
        {icon && iconPosition === "right" && (
          <span
            className="ml-2 transition-transform duration-300"
            data-pol-id="lggcc1"
            data-pol-file-name="button"
            data-pol-file-type="component"
          >
            {icon}
          </span>
        )}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
