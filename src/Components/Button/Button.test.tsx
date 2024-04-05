import { render, screen } from "@testing-library/react";
import Button from "./Button";

it("should render the Button component", () => {
  const handleInput = () => {
    console.log("handling input");
  };

  render(<Button label="Clear filters" handleButtonClick={handleInput} />);

  const button = screen.getByTestId("button");

  expect(button).toBeInTheDocument();
});
