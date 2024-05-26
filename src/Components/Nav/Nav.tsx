import SearchBar from "../SearchBar/SearchBar";
import { FormEventHandler } from "react";
import "./Nav.scss";
import Checkbox from "../Checkbox/Checkbox";
// import Button from "../Button/Button";
import { Link } from "react-router-dom";

type NavProps = {
  searchTerm: string;
  noOfResults: number;
  filterCheckedStateArray: boolean[];
  handleSearchbarInput: FormEventHandler<HTMLInputElement>;
  onFilterChange: (position: number) => void;
  //   handleButtonClick: () => void;
};

const Nav = ({
  searchTerm,
  noOfResults,
  filterCheckedStateArray,
  handleSearchbarInput,
  onFilterChange,
}: //   handleButtonClick,
NavProps) => {
  const filterCategories = [
    "High ABV (> 6.0%)",
    "Classic Range",
    "Acidic (ph < 4)",
  ];

  const handleCheckboxChange = (filterId: number) => {
    onFilterChange(filterId);
  };

  return (
    <form className="nav" data-testid="navigation">
      <Link
        to={"/"}
        style={{ textDecoration: "none" }}
        className="nav__logo-container"
      >
        <i className="fa-sharp fa-solid fa-beer-mug-empty nav__icon"></i>
        <h1 className="nav__title">Punk API</h1>
      </Link>

      <div className="nav__search-and-clear-filter-container">
        <SearchBar
          label="Beer"
          searchTerm={searchTerm}
          placeHolderText="Search by name..."
          handleInput={handleSearchbarInput}
        />

        {/* <Button label="Clear filters" handleButtonClick={handleButtonClick} /> */}
      </div>

      <div className="nav__checkboxes">
        {filterCategories &&
          filterCategories.map((filterCategory: string, index) => (
            <Checkbox
              key={index}
              label={filterCategory}
              checked={filterCheckedStateArray[index]}
              onChange={() => handleCheckboxChange(index)}
            />
          ))}
      </div>

      <p>Number of results: {noOfResults}</p>
    </form>
  );
};

export default Nav;
