import "./Checkbox.scss";
import { FormEvent } from "react";

type CheckboxProps = {
  label: string;
  id: string;
  name: string;
  value: string;
  handleAbvCheckboxInput?: (event: FormEvent<HTMLInputElement>) => void;
  handleClassicRangeCheckboxInput?: () => void;
  handleAcidityCheckboxInput?: () => void;
};

const Checkbox = ({
  label,
  id,
  name,
  value,
  handleAbvCheckboxInput,
  handleClassicRangeCheckboxInput,
  handleAcidityCheckboxInput,
}: CheckboxProps) => {
  return (
    <div className="checkbox" data-testid="checkbox">
      <label htmlFor={name} className="checkbox__label">
        {label}
      </label>
      <input
        className="checkbox__input"
        type="checkbox"
        id={id}
        name={name}
        value={value}
        onChange={
          handleAbvCheckboxInput ||
          handleClassicRangeCheckboxInput ||
          handleAcidityCheckboxInput
        }
      />
    </div>
  );
};

export default Checkbox;
