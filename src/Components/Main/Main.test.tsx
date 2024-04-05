import { render, screen } from "@testing-library/react";
import Main from "./Main";
import beers from "../../data/beers";

it("should render the main page", () => {
  render(<Main filteredBeers={beers} noOfResults={5} />);

  const main = screen.getByTestId("main-container");

  expect(main).toBeInTheDocument();
});
