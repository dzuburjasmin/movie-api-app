import React from "react";

function Typebar(props) {
  return (
    <div className="typecont">
      <select
        name="type"
        className="typebar"
        size="2"
        onChange={(event) => props.setType(event.target.value)}
      >
        <option value="movie" selected="selected">
          Movies
        </option>
        <option value="series">Series</option>
      </select>
    </div>
  );
}
export default Typebar;
