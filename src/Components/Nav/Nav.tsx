import SearchBar from "../SearchBar/SearchBar";
import { FormEventHandler } from "react";
import "./Nav.scss";
import Checkbox from "../Checkbox/Checkbox";
import Button from "../Button/Button";
import { FormEvent } from "react";

type NavProps = {
  searchTerm: string;
  noOfResults: number;
  handleSearchbarInput: FormEventHandler<HTMLInputElement>;
  handleAbvCheckboxInput: (event: FormEvent<HTMLInputElement>) => void;
  handleClassicRangeCheckboxInput: () => void;
  handleAcidityCheckboxInput: () => void;
  clickFunction: () => void;
};

const Nav = ({
  searchTerm,
  noOfResults,
  handleSearchbarInput,
  handleAbvCheckboxInput,
  handleClassicRangeCheckboxInput,
  handleAcidityCheckboxInput,
  clickFunction,
}: NavProps) => {
  return (
    <form className="nav">
      <div className="nav__search-and-clear-filter-container">
        <SearchBar
          label="Beer"
          searchTerm={searchTerm}
          placeHolderText="Search by name..."
          handleInput={handleSearchbarInput}
        />

        <Button label="Clear filters" clickFunction={clickFunction} />
      </div>

      <div className="nav__checkboxes">
        <Checkbox
          label="High ABV (> 6.0%)"
          id="abv"
          name="abv"
          value="abv"
          handleAbvCheckboxInput={handleAbvCheckboxInput}
        />

        <Checkbox
          label="Classic Range"
          id="classic"
          name="classic"
          value="classic"
          handleAbvCheckboxInput={handleClassicRangeCheckboxInput}
        />

        <Checkbox
          label="Acidic (ph < 4)"
          id="acidity"
          name="acidity"
          value="acidity"
          handleAcidityCheckboxInput={handleAcidityCheckboxInput}
        />
      </div>

      <p>Number of results: {noOfResults}</p>
    </form>
  );
};

export default Nav;
