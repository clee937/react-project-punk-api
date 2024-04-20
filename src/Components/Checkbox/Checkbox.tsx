import "./Checkbox.scss";

type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange: () => void;
};

const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
  return (
    <div className="checkbox" data-testid="checkbox">
      <label htmlFor={label} className="checkbox__label">
        {label}
      </label>
      <input
        className="checkbox__input"
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
    </div>
  );
};

export default Checkbox;
