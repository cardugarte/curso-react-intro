import React from "react";
import "../App.css";

function TodoSearch({searchValue, setSearchValue}) {

  return (
    <div className="search__container">
      <input
        className="search"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value)
        }}
        placeholder="Cortar Cebolla"
      />
    </div>
  );
}

export { TodoSearch };
