import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils";

const buttonVariants = cva(
  "bg-indigo-600 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
  {
    variants: {
      size: {
        small: "rounded px-2 py-1 text-xs",
        base: "rounded px-2 py-1 text-sm",
        large: "rounded-md px-2.5 py-1.5 text-sm",
        xlarge: "rounded-md px-3 py-2 text-sm font-semibold",
        xxlarge: "px-4 py-4 rounded-md text-base",
      },
    },
  }
);

// export interface ButtonVarients extends VariantProps<typeof buttonVariants> {}

export interface ButtonProps {
  size?: "small" | "base" | "large" | "xlarge" | "xxlarge";
  text?: string;
  className?: string;
}

export const initialProps: ButtonProps = {
  size: "base",
  text: "Button",
  className: "",
};

const Button = ({ size, text, className }: ButtonProps) => {
  return (
    <button type="button" className={cn(buttonVariants({ size, className }))}>
      {text}
    </button>
  );
};

export default Button;
