import React from "react";
import Grid from "@mui/material/Grid";
import Header from "../headerActor";
import  Slideshow  from "../slideShow";
import { getActorImages } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../spinner";

const TemplateActorPage = ({ actor, children }) => { 
  
  const { data , error, isLoading, isError } = useQuery(
    ["ActorImages", { id: actor.id }],
    getActorImages
    );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const images = data;
  
  return (
    <>
      <Header actor={actor}></Header>
      <Grid container spacing={5} sx={{ padding: "15px" }}>
        <Grid item xs={3}>
          <div sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}>
        {/* <CardMedia
        sx={{ height: 500 }}
        image={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
            : img
        }
      /> */}
            <Slideshow images={images.profiles}></Slideshow>
          </div>
        </Grid>

        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplateActorPage;