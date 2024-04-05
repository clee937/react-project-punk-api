import { render, screen } from "@testing-library/react";
import BeerCard from "./BeerCard";

it("should render the BeerCard component", () => {
  render(
    <BeerCard
      imageUrl="../../assets/images/placeholder.png"
      name="Indigo"
      abv={6}
      firstBrewed="02/2009"
      acidity={4}
    />
  );

  const beerCard = screen.getByTestId("beer-card");

  expect(beerCard).toBeInTheDocument();
});
