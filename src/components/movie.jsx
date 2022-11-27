import React, { Component } from "react";
import { getGenres } from "../services/fakeGenreService";
import { getMovies } from "../services/fakeMovieService";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import MoviesTable from "./moviesTable";
import _ from 'lodash';

class Movies extends Component {
  state = {
    movies: [],
    currentPage: 1,
    genres: [],
    pageSize: 4,
    sortColumn: { path: 'title', order: 'asc' }
  };
  componentDidMount() {
    const genres = [ { _id: '', name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  likeHandler = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  pageChangeHandler = (page) => {
    this.setState({ currentPage: page });
  };
  genreSelectionHandler = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };
  handleSort = sortColumn => {
    

    this.setState({ sortColumn })
  }

  render() {
    const { length: moviesCount } = this.state.movies;
    const {
      pageSize,
      currentPage,
      selectedGenre,
      movies: allMovies,
      sortColumn
    } = this.state;

    if (moviesCount === 0) return <p>We have no movies at the moment</p>;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;

   const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])

    const movies = paginate(sorted, currentPage, pageSize);
    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            textProperty="name"
            valueProperty="_id"
            onItemSelect={this.genreSelectionHandler}
            selectedItem={this.state.selectedGenre}
          />
        </div>
        <div className="col">
          <p>Showing {filtered.length} movies in our Show Room</p>
          <MoviesTable
            movies={movies}
            sortColumn={sortColumn}
            onLike={this.likeHandler}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.pageChangeHandler}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
