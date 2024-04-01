import SearchBar from "../SearchBar/SearchBar";
import { FormEventHandler } from "react";
import "./Nav.scss";

type NavProps = {
  searchTerm: string;
  handleInput: FormEventHandler<HTMLInputElement>;
};

const Nav = ({ searchTerm, handleInput }: NavProps) => {
  return (
    <div className="nav">
      <SearchBar
        label="Beer"
        searchTerm={searchTerm}
        placeHolderText="Search by name..."
        handleInput={handleInput}
      />
    </div>
  );
};

export default Nav;
