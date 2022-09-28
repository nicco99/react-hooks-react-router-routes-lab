import React from "react";
import { actors } from "../data";


function Actor({actor}) {

  let movArr = actor.movies.map((mov,i) => <li key={i}>{mov}</li>)
  return (
    <div>
      <h3>{actor.name}</h3>
      <ul>
        {movArr}
      </ul>
    </div>
  )
}


function Actors() {
  let actorsArr = actors.map((actor,i) => <Actor key={i} actor={actor}/>)
  return <div>
    <h1>Actors Page</h1>
    {actorsArr}
  </div>;
}

export default Actors;
