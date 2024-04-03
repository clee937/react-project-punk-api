import "./Button.scss";
import { MouseEventHandler } from "react";

type ButtonProps = {
  label: string;
  handleButtonClick: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ label, handleButtonClick }: ButtonProps) => {
  return (
    <button className="button" type="button" onClick={handleButtonClick}>
      {label}{" "}
    </button>
  );
};

export default Button;
