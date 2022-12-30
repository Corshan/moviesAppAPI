import React from "react";
import MovieHeader from "../headerMovie";
import Grid from "@mui/material/Grid";
import { getMovieImages } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'
import Slideshow from "../slideShow";

const TemplateMoviePage = ({ movie, children }) => {
  const { data , error, isLoading, isError } = useQuery(
    ["images", { id: movie.id }],
    getMovieImages
  );
    //console.log("Hello")
 

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const images = data.posters 

  return (
    <>
      <MovieHeader movie={movie} />

      <Grid container spacing={5} sx={{ padding: "15px" }}>
        <Grid item xs={3}>
          <div sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}>
            <Slideshow images={images}/>
          </div>
        </Grid>

        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplateMoviePage;