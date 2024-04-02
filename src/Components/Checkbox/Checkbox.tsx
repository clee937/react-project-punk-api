import "./Checkbox.scss";

type CheckboxProps = {
  label: string;
  id: string;
  name: string;
  value: string;
  handleAbvCheckboxInput?: () => void;
  handleClassicRangeCheckboxInput?: () => void;
};

const Checkbox = ({
  label,
  id,
  name,
  value,
  handleAbvCheckboxInput,
  handleClassicRangeCheckboxInput,
}: CheckboxProps) => {
  return (
    <div className="checkbox">
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        onChange={handleAbvCheckboxInput || handleClassicRangeCheckboxInput}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default Checkbox;
