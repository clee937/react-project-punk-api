import "./Home.scss";
import { FormEventHandler } from "react";
import Nav from "../../components/Nav/Nav";
import Main from "../../components/Main/Main";
import { Beer } from "../../types/types";

type HomeProps = {
  filteredBeers: Beer[];
  searchTerm: string;
  noOfResults: number;
  filterCheckedStateArray: boolean[];
  handleSearchbarInput: FormEventHandler<HTMLInputElement>;
  onFilterChange: (position: number) => void;
  //   handleButtonClick: () => void;
};

function Home({
  filteredBeers,
  searchTerm,
  noOfResults,
  filterCheckedStateArray,
  handleSearchbarInput,
  onFilterChange,
}: //   handleButtonClick,
HomeProps) {
  return (
    <div className="home" data-testid="app">
      <Nav
        filterCheckedStateArray={filterCheckedStateArray}
        searchTerm={searchTerm}
        handleSearchbarInput={handleSearchbarInput}
        onFilterChange={onFilterChange}
        noOfResults={noOfResults}
        // handleButtonClick={handleButtonClick}
      />

      <Main filteredBeers={filteredBeers} noOfResults={noOfResults} />
    </div>
  );
}

export default Home;
