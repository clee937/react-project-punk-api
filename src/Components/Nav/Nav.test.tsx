import { render, screen } from "@testing-library/react";
import Nav from "./Nav";

it("should render the Nav component", () => {
  const handleInput = () => {
    console.log("handling input");
  };

  render(
    <Nav
      searchTerm="In"
      noOfResults={5}
      handleSearchbarInput={handleInput}
      handleAbvCheckboxInput={handleInput}
      handleClassicRangeCheckboxInput={handleInput}
      handleAcidityCheckboxInput={handleInput}
      //   handleButtonClick={handleInput}
    />
  );

  const nav = screen.getByTestId("navigation");

  expect(nav).toBeInTheDocument();
});
