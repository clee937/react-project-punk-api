import SearchBar from "../SearchBar/SearchBar";
import { FormEventHandler } from "react";
import "./Nav.scss";
import Checkbox from "../Checkbox/Checkbox";

type NavProps = {
  searchTerm: string;
  noOfResults: number;
  handleSearchbarInput: FormEventHandler<HTMLInputElement>;
  handleAbvCheckboxInput: () => void;
  handleClassicRangeCheckboxInput: () => void;
  handleAcidityCheckboxInput: () => void;
};

const Nav = ({
  searchTerm,
  noOfResults,
  handleSearchbarInput,
  handleAbvCheckboxInput,
  handleClassicRangeCheckboxInput,
  handleAcidityCheckboxInput,
}: NavProps) => {
  return (
    <div className="nav">
      <SearchBar
        label="Beer"
        searchTerm={searchTerm}
        placeHolderText="Search by name..."
        handleInput={handleSearchbarInput}
      />
      <Checkbox
        label="ABV greater than 6%"
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
        label="High Acidity (pH lower than 4)"
        id="acidity"
        name="acidity"
        value="acidity"
        handleAcidityCheckboxInput={handleAcidityCheckboxInput}
      />
      <p>Number of results: {noOfResults}</p>
    </div>
  );
};

export default Nav;
