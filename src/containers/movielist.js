import React, {Component} from 'react'
import Movie from '../components/movie.js'

class MovieList extends Component {

 constructor(props){
   super(props);
   this.state = {
     data:[
          {id: 1, title: "Die Hard"},
          {id: 2, title: "Dr No"},
          {id: 3, title: "Jeepers Creepers"}
        ]
      }
   }

  render(){
    return (
      <div className="movie-list">
        <Movie data={this.state.data}/>
      </div>
     )
   }
 }

export default MovieList;
