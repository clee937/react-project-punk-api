import "./Main.scss";
import BeerCard from "../BeerCard/BeerCard";
import { Beer } from "../../types/types";

type MainProps = {
  filteredBeers: Beer[];
};

const Main = ({ filteredBeers }: MainProps) => {
  return (
    <div className="main">
      {filteredBeers &&
        filteredBeers.map((beer: Beer) => (
          <BeerCard
            imageUrl={beer.image_url}
            name={beer.name}
            info={beer.description}
            key={beer.id}
          />
        ))}
    </div>
  );
};

export default Main;
