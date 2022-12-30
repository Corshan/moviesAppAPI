import React, { useContext } from "react";
import PageTemplate from "../components/templateTvShowList";
import { TvShowContext } from "../contexts/tvShowContext";
import { useQueries } from "react-query";
import { getTvShow } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import RemoveFromFavourites from "../components/TvcardIcons/removeFromFavourite";

const FavouriteTvShowsPage = () => {
  const {favouritesTV: ids} = useContext(TvShowContext);

  // Create an array of queries and run in parallel.
  const favouriteTvShowQueries = useQueries(
    ids.map((Id) => {
      return {
        queryKey: ["tvShow", { id: Id }],
        queryFn: getTvShow,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteTvShowQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }
    const tvShows = favouriteTvShowQueries.map((q) => {
        console.log(q.data);
    q.data.genre_ids = q.data.genres.map(g => g.id)
    return q.data
  });


  return (
    <PageTemplate
      title="Favourite Tv shows"
      tvShows={tvShows}
      action={(tvShow) => {
        return (
          <>
            <RemoveFromFavourites tvShow={tvShow} />
          </>
        );
      }}
    />
  );
};

export default FavouriteTvShowsPage;