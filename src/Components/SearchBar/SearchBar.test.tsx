import { render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";

it("should render the SearchBar component", () => {
  const handleInput = () => {
    console.log("handling input");
  };

  render(
    <SearchBar
      label="Search"
      searchTerm="In"
      placeHolderText="Search by name…"
      handleInput={handleInput}
    />
  );

  const searchBar = screen.getByTestId("search-bar");

  expect(searchBar).toBeInTheDocument();
});
