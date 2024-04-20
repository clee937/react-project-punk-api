import "./Main.scss";
import BeerCard from "../BeerCard/BeerCard";
import { Beer } from "../../types/types";
import placeholderBeer from "../../assets/images/placeholder.png";
import { Link } from "react-router-dom";

type MainProps = {
  filteredBeers: Beer[];
  noOfResults: number;
};

const Main = ({ filteredBeers, noOfResults }: MainProps) => {
  const noResultsFound = <p className="main__no-results">No results found</p>;

  return (
    <div className="main" data-testid="main-container">
      {!noOfResults
        ? noResultsFound
        : filteredBeers &&
          filteredBeers.map((beer: Beer) => (
            <Link
              to={`beers/${beer.id}`}
              key={beer.id}
              style={{ textDecoration: "none" }}
            >
              <BeerCard
                id={beer.id}
                imageUrl={beer.image_url ? beer.image_url : placeholderBeer}
                name={beer.name}
                abv={beer.abv}
                firstBrewed={beer.first_brewed}
                acidity={beer.ph ? beer.ph : "n/a"}
              />
            </Link>
          ))}
    </div>
  );
};

export default Main;
