import "./Main.scss";
import BeerCard from "../BeerCard/BeerCard";
import { Beer } from "../../types/types";
import placeholderBeer from "../../assets/images/placeholder.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

type MainProps = {
  filteredBeers: Beer[];
  noOfResults: number;
};

const Main = ({ filteredBeers, noOfResults }: MainProps) => {
  const [showButton, setShowButton] = useState<boolean>(false);

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.scrollY || window.pageYOffset > 300
        ? setShowButton(true)
        : setShowButton(false);
    };

    window.addEventListener("scroll", handleScrollButtonVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  }, []);

  const noResultsFound = <p className="main__no-results">No results found</p>;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
                imageUrl={
                  !beer.image_url || " " ? placeholderBeer : beer.image_url
                }
                name={beer.name}
                abv={beer.abv}
                firstBrewed={beer.first_brewed}
                acidity={beer.ph ? beer.ph : "n/a"}
              />
            </Link>
          ))}
      {showButton && (
        <button
          className="main__scroll-button"
          onClick={scrollToTop}
          id="scrollToTop"
          title="Go to top"
        >
          <i className="fa-solid fa-angles-up main__scroll-button-arrow"></i>
        </button>
      )}
    </div>
  );
};

export default Main;
