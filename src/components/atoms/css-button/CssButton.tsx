import styles from "../../../styles/Button.module.css";
// import { initialProps } from "../Button";

interface ButtonProps {
  type?: "primary" | "secondary";
  size?: "small" | "base" | "large" | "xlarge" | "xxlarge";
  text?: string;
  className?: string;
}

export const initialProps: ButtonProps = {
  type: "primary",
  size: "base",
  text: "Button",
  className: "",
};

const Button = ({ type, size, text, className = "" }: ButtonProps) => {
  const combinedStyles = [
    styles.button,
    styles[type],
    styles[size],
    className,
  ].join(" ");

  return (
    <button type="button" className={combinedStyles}>
      {text}
    </button>
  );
};

export default Button;
