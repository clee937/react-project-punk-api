import "./App.scss";
import { useState } from "react";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import beers from "./data/beers";
import { Beer } from "./types/types";
import { FormEvent } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget.value.toLowerCase();
    setSearchTerm(input);
  };

  const filteredBeers: Beer[] = beers.filter((beer: Beer) => {
    return beer.name.toLowerCase().includes(searchTerm);
  });

  return (
    <div className="app">
      <Nav searchTerm={searchTerm} handleInput={handleInput} />
      <Main filteredBeers={filteredBeers} />
    </div>
  );
}

export default App;
