import "./App.scss";
import { useState } from "react";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import beers from "./data/beers";
// import { Beer } from "./types/types";
import { FormEvent } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showAbvOver6, setShowAbvOver6] = useState<boolean>(false);
  const [showHighAcidity, setShowHighAcidity] = useState<boolean>(false);
  const [showClassicRange, setShowClassicRange] = useState<boolean>(false);

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

  const handleAbvFilterChange = () => {
    setShowAbvOver6(!showAbvOver6);
  };

  const handleAcidityFilterChange = () => {
    setShowHighAcidity(!showHighAcidity);
  };

  const handleClassicRangeFilterChange = () => {
    setShowClassicRange(!showClassicRange);
  };

  let filteredBeers = beers;

  if (searchTerm) {
    filteredBeers = filteredBeers.filter((beer) =>
      beer.name.toLowerCase().includes(searchTerm)
    );
  }

  if (showAbvOver6) {
    filteredBeers = filteredBeers.filter((beer) => beer.abv > 6);
  }

  if (showHighAcidity) {
    filteredBeers = filteredBeers.filter((beer) => beer.ph < 4);
  }

  if (showClassicRange) {
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

  return (
    <div className="app">
      <Nav
        searchTerm={searchTerm}
        handleSearchbarInput={handleInput}
        handleAbvCheckboxInput={handleAbvFilterChange}
        handleClassicRangeCheckboxInput={handleClassicRangeFilterChange}
        handleAcidityCheckboxInput={handleAcidityFilterChange}
        noOfResults={filteredBeers.length}
      />
      <Main filteredBeers={filteredBeers} noOfResults={filteredBeers.length} />
    </div>
  );
}

export default App;
