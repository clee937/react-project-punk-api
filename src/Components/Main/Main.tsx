import "./Main.scss";
import BeerCard from "../BeerCard/BeerCard";
import { Beer } from "../../types/types";

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
              imageUrl={
                beer.image_url
                  ? beer.image_url
                  : "./../../assets/images/placeholder.png"
              }
              // imageUrl="./../../assets/images/placeholder.png"
              name={beer.name}
              abv={beer.abv}
              firstBrewed={beer.first_brewed}
              acidity={beer.ph}
              info={beer.description}
              key={beer.id}
            />
          ))}
    </div>
  );
};

export default Main;
