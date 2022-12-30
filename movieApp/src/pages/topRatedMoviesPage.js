import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getPopularMovies} from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import MustWatchIcon from '../components/cardIcons/addToMustWatch';
import { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { Link, useLocation } from 'react-router-dom';

const UpcomingMoviesPage = (props) => {
  const [pageNumber, setPageNumber] = useState(1);
  const {  data, error, isLoading, isError }  = useQuery(['popluar', {id: pageNumber}], getPopularMovies)

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1', 10);

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  const handleChange = (event, value) => {
    setPageNumber(value);
  };

  const favourites = movies.filter((m) => m.favourite);
  localStorage.setItem("favourites", JSON.stringify(favourites));

    return(
      <>
        <PageTemplate 
        title="Popluar Movies"
        movies={movies} 
        action={(movie) => {
          return <MustWatchIcon movie={movie} />
        }}
        />
        <Pagination
      page={page}
      count={data.total_pages}
      onChange={handleChange}
      renderItem={(item) => (
        <PaginationItem
          component={Link}
          to={`/movies/toprated${item.page === 1 ? '' : `?page=${item.page}`}`}
          {...item}
          
        />
      )}
    />
    </>
    )
}

export default UpcomingMoviesPage;