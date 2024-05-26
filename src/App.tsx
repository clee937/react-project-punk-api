import "./App.scss";
import { useState } from "react";
import beers from "./data/beers";
import { FormEvent } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import BeerInfo from "./components/BeerInfo/BeerInfo";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [checkboxFiltersCheckedState, setCheckboxFiltersCheckedState] =
    useState<boolean[]>([false, false, false]);

  //   const [beers, setBeers] = useState<Beer[]>();

  //   const getBeers = async () => {
  //     const url = "./data/punkapiData.json";
  //     const res = await fetch(url);
  //     const data: Beer[] = await res.json();
  //     console.log(data);
  //     setBeers(data);
  //   };

  //   useEffect(() => {
  //     getBeers();
  //   }, []);

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget.value.toLowerCase();
    setSearchTerm(input);
  };

  const handleFilterChange = (filterId: number) => {
    const updatedCheckedState = checkboxFiltersCheckedState.map(
      (filterCategory, index) =>
        index === filterId ? !filterCategory : filterCategory
    );

    setCheckboxFiltersCheckedState(updatedCheckedState);
  };

  let filteredBeers = beers;

  if (searchTerm) {
    filteredBeers = filteredBeers.filter((beer) =>
      beer.name.toLowerCase().includes(searchTerm)
    );
  }

  if (checkboxFiltersCheckedState[0]) {
    filteredBeers = filteredBeers.filter((beer) => beer.abv > 6);
  }

  if (checkboxFiltersCheckedState[2]) {
    filteredBeers = filteredBeers.filter(
      (beer) => beer.ph < 4 && typeof beer.ph === "number"
    );
  }

  if (checkboxFiltersCheckedState[1]) {
    filteredBeers = filteredBeers.filter((beer) => {
      if (beer.first_brewed.includes("/")) {
        const index: number = beer.first_brewed.indexOf("/");
        const firstBrewedYear: number = parseInt(
          beer.first_brewed.slice(index + 1)
        );
        return firstBrewedYear < 2010;
      } else {
        return parseInt(beer.first_brewed) < 2010;
      }
    });
  }

  //   const clearFilters = () => {
  //     setCheckboxFiltersCheckedState([false, false, false]);
  //     setSearchTerm("");
  //   };

  return (
    <BrowserRouter>
      <div className="app" data-testid="app">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                filteredBeers={filteredBeers}
                searchTerm={searchTerm}
                noOfResults={filteredBeers.length}
                filterCheckedStateArray={checkboxFiltersCheckedState}
                handleSearchbarInput={handleInput}
                onFilterChange={handleFilterChange}
                // handleButtonClick={clearFilters}
              />
            }
          />
          <Route
            path="beers/:beerId"
            element={<BeerInfo beers={filteredBeers} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
