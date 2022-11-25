import React, { Component, Fragment } from "react";
import { getMovies } from "../services/fakeMovieService";
import LikeButton from "./common/like";
import Pagination from "./common/pagination";

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  likeHandler = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = {...movies[index]};
    movies[index].liked = !movies[index].liked;
    this.setState({ movies })

  }
  pageChangeHandler = (page) => {

  }
  render() {

    const { length: moviesCount } = this.state.movies; 
    if (moviesCount === 0)
        return<p>We have no movies at the moment</p>
    return (
        <Fragment>
        <p>Showing {moviesCount} movies in our Show Room</p>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Number</th>
            <th>Ratings</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.state.movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <LikeButton liked={movie.liked} onClick={() => this.likeHandler(movie)} />
              </td>


              <td>
                <button
                  onClick={() => this.handleDelete(movie)}
                  className="btn btn-danger btn-sm"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
      itemsCount={moviesCount} 
      pageSize = {this.state.pageSize}
      onPageChange ={this.pageChangeHandler}
      
      />
      </Fragment>
    );
  }
}

export default Movies;
