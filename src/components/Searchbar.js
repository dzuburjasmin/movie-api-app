import React from "react";

function Searchbar(props) {
  return (
    <input
      type="text"
      placeholder="Start typing to search ..."
      onChange={(event) => props.setSearch(event.target.value)}
    />
  );
}
export default Searchbar;
