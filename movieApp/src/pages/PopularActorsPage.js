import React from "react";
import {  getPopularActors } from "../api/tmdb-api";
import PageTemplate from '../components/templateActorListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { Link, useLocation } from 'react-router-dom';

const ActorListPage = (props) => {
  const [pageNumber, setPageNumber] = useState(1);
  const {  data, error, isLoading, isError }  = useQuery(['Actors', {id: pageNumber}], getPopularActors)

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1', 10);

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const actors = data.results;

  const handleChange = (event, value) => {
    setPageNumber(value);
  };

  // Redundant, but necessary to avoid app crashing.
//   const favourites = movies.filter(m => m.favourite)
  //localStorage.setItem('favourites', JSON.stringify(favourites))

  return (
    <>
    <PageTemplate
        title="Popular Actors"
        actors={actors}
      />
      <Pagination
      page={page}
      count={data.total_pages}
      onChange={handleChange}
      renderItem={(item) => (
        <PaginationItem
          component={Link}
          to={`/actors/popular${item.page === 1 ? '' : `?page=${item.page}`}`}
          {...item}
          
        />
      )}
    />
    </>
  );
};
export default ActorListPage;