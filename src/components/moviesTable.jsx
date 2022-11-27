import React from 'react';
import LikeButton from "./common/like";

const MoviesTable = (props) => {
    const { movies, onDelete, onLike, onSort } = props;
    return ( 
        <table className="table">
            <thead>
              <tr>
                < th onClick={() => onSort('title')}>Title</ th>
                < th onClick={() => onSort('genre.name')}>Genre</ th>
                < th onClick={() => onSort('numberInStock')}>Number</ th>
                < th onClick={() => onSort('dailyRentalRate')}>Ratings</ th >
                < th></th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie) => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <LikeButton
                      liked={movie.liked}
                      onClick={() => onLike(movie)}
                    />
                  </td>

                  <td>
                    <button
                      onClick={() => onDelete(movie)}
                      className="btn btn-danger btn-sm"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
     );
}
 
export default MoviesTable;
