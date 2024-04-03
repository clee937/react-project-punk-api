import "./Checkbox.scss";

type CheckboxProps = {
  label: string;
  id: string;
  name: string;
  value: string;
  handleAbvCheckboxInput?: () => void;
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
    <div className="checkbox">
      <input
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
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default Checkbox;
