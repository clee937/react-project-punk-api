import "./Button.scss";
import { MouseEventHandler } from "react";

type ButtonProps = {
  label: string;
  handleButtonClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ label, handleButtonClick }: ButtonProps) => {
  return (
    <div className="button-container">
      <button
        className="button"
        type="reset"
        onClick={handleButtonClick}
        data-testid="button"
      >
        {label}{" "}
      </button>
    </div>
  );
};

export default Button;
