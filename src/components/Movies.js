import React from "react";
import { movies } from "../data";
import Movie from "./Movie";
function Movies() {

  let moviesArr = movies.map((movie,i) => <Movie key={i} movie={movie}/> )
  return (<div>
    <h1>Movies Page</h1>
    {moviesArr}
  </div>)
}

export default Movies;
