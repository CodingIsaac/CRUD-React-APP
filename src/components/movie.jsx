import React, { Component, Fragment } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id != movie._id);
    this.setState({ movies });
  };
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
      </Fragment>
    );
  }
}

export default Movies;
