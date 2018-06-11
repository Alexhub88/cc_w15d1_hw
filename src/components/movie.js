import React from 'react'
import Title from './title.js'

const Movie = (props) => {
  // const timeNodes = props.data.times

  const movieNodes = props.data.map(movie => {
    return (
      <Title title={movie.title} key={movie.id}>
         {movie.title}
      </Title>
    )
   }
  )

  return (
    <div className="movie-list">
      {movieNodes}
    </div>
  )
}

export default Movie;
