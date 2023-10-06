import styles from "../../../styles/Button.module.css";

interface ButtonProps {
  type?: "primary" | "secondary";
  size?: "small" | "base" | "large" | "xlarge" | "xxlarge";
  text?: string;
  className?: string;
}

const Button = ({
  type = "primary",
  size = "base",
  text = "Button",
  className = "",
}: ButtonProps) => {
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
