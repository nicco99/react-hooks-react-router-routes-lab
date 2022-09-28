import React from "react";

function Movie({movie}) {
    let genresArr = movie.genres.map((genre,i) => <li key={i}>{genre}</li>)
return (
    <div>
        <h3>{movie.title}</h3>
        <h3>{movie.time}</h3>
        <ul>
           {genresArr}
        </ul>
    </div>
)
}

export default Movie