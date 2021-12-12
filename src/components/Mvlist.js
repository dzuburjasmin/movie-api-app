import React, { useState } from "react";
import Favouritestab from "./Favouriestab.";
function Mvlist(props) {
  const AddOrRem = props.AddOrRem;
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="moviecard">
          <div className="imgcont">
            <img src={movie.Poster} alt="movieposter"></img>
            <div onClick={() => props.handleAddRemove(movie)}>
              <Favouritestab AddOrRem={AddOrRem} />
            </div>
          </div>
          <div>
            <p>
              <b>{movie.Title}</b>, {movie.Year}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Mvlist;
