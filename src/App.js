import React, { useState, useEffect } from "react";
import "./App.css";
import Mvlist from "./components/Mvlist";
import Heading from "./components/Heading";
import Searchbar from "./components/Searchbar";
import Typebar from "./components/Typebar";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [favourites, setFavourites] = useState([]);
  const [type, setType] = useState("movie");

  const getMovieRequest = async (search, type) => {
    const url = `http://www.omdbapi.com/?s=${search}&type=${type}&apikey=b56f3a6`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };
  const AddToFavorite = (movie) => {
    setFavourites([...favourites, movie]);
    saveToLocal(favourites);
  };
  const RemoveFromFavorites = (movie) => {
    const newFav = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );
    setFavourites(newFav);
    saveToLocal(favourites);
  };
  const saveToLocal = (items) => {
    localStorage.setItem("favourites", JSON.stringify(items));
  };
  const getFromLocal = () => {
    const favFromLocal = JSON.parse(localStorage.getItem("favourites"));
    setFavourites(favFromLocal);
  };

  useEffect(() => {
    getMovieRequest(search, type);
  }, [search, type]);

  useEffect(() => {
    getFromLocal();
  }, []);

  useEffect(() => {
    saveToLocal(favourites);
  }, [favourites]);

  return (
    <div>
      <div className="header">
        <Heading heading="Movies/Series" />
        <Typebar type={type} setType={setType} />
        <Searchbar search={search} setSearch={setSearch} />
      </div>
      <div className="listwrap">
        <Mvlist
          movies={movies}
          favourites={favourites}
          setFavourites={setFavourites}
          handleAddRemove={AddToFavorite}
          AddOrRem={"Add to favourites"}
        />
      </div>
      <div className="header">
        <Heading heading="Favourites" />
      </div>
      <div className="listwrap">
        <Mvlist
          movies={favourites}
          favourites={favourites}
          setFavourites={setFavourites}
          handleAddRemove={RemoveFromFavorites}
          AddOrRem={"Remove from favourites"}
        />
      </div>
    </div>
  );
}

export default App;
