import { render, screen } from "@testing-library/react";
import Checkbox from "./Checkbox";

it("should render the Checkbox component", () => {
  const handleInput = () => {
    console.log("handling input");
  };

  render(
    <Checkbox
      label="acidity"
      id="1"
      name="acidity"
      value="acidity"
      handleAbvCheckboxInput={handleInput}
      handleClassicRangeCheckboxInput={handleInput}
      handleAcidityCheckboxInput={handleInput}
    />
  );

  const checkbox = screen.getByTestId("checkbox");

  expect(checkbox).toBeInTheDocument();
});
