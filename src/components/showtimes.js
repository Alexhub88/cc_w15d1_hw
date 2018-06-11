import React from 'react'
import Title from './Title'

const Movie = (props) => {

  const timeNodes = props.data.map(time => {
    return (
      <Time key={time.id}>
         {time.text}
      </Time>
    )
   }
  )

  return (
    <div className="movie">
      <Title key={title.id}>
         {title.text}
      </Title>
        <label className = "showtime-label">Showtime</label>
          {timeNodes}
    </div>
  )
}

export default Showtimes;
