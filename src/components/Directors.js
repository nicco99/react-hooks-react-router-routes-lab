import React from "react";
import { directors } from "../data";

function Director({ dir }) {
  let movieArr = dir.movies.map((m,i) => <li key={i} >{m}</li>);
  return (
    <div>
      <h3>{dir.name}</h3>
      <ul>{movieArr}</ul>
    </div>
  );
}

function Directors() {
  let directorsArr = directors.map((dir,i) => <Director key={i} dir={dir} />);
  return (
    <div>
      <h1>Directors Page</h1>
      {directorsArr}
    </div>
  );
}

export default Directors;
