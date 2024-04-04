import "./Main.scss";
import BeerCard from "../BeerCard/BeerCard";
import { Beer } from "../../types/types";
import placeholderBeer from "../../assets/images/placeholder.png";

type MainProps = {
  filteredBeers: Beer[];
  noOfResults: number;
};

const Main = ({ filteredBeers, noOfResults }: MainProps) => {
  const noResultsFound = <p>No results found</p>;

  return (
    <div className="main">
      {!noOfResults
        ? noResultsFound
        : filteredBeers &&
          filteredBeers.map((beer: Beer) => (
            <BeerCard
              imageUrl={beer.image_url ? beer.image_url : placeholderBeer}
              name={beer.name}
              abv={beer.abv}
              firstBrewed={beer.first_brewed}
              acidity={beer.ph}
              key={beer.id}
            />
          ))}
    </div>
  );
};

export default Main;
