import React, { useContext } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import { TvShowContext } from "../../contexts/tvShowContext";
import { Avatar } from "@mui/material";
import { Favorite } from "@mui/icons-material";

const TvShowHeader = ({ tvShow }) => {
    const { favouritesTV } = useContext(TvShowContext);
    const navigate = useNavigate();
    

    // eslint-disable-next-line no-unused-vars
    let fav = favouritesTV.includes(tvShow.id);
    console.log(favouritesTV);
    console.log(tvShow.id);

  return (
    <Paper 
        component="div" 
        sx={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            padding: 1.5,
            margin: 0,
        }}
      >
      <IconButton aria-label="go back" onClick={() => navigate(-1)} >
        <ArrowBackIcon color="primary" fontSize="large" />
          </IconButton>
          
          {
        fav ? <Avatar sx={{backgroundColor: 'red'}}>
          <Favorite/>
        </Avatar> : null
      }

      <Typography variant="h4" component="h3">
        {tvShow.name}
        <a href={tvShow.homepage}>
          <HomeIcon color="primary" />
        </a>
        <br />
        <span sx={{ fontSize: "1.5rem" }}>{`   "${tvShow.tagline}"`} </span>
      </Typography>

      <IconButton aria-label="go forward" onClick={() => navigate(+1) } >
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default TvShowHeader;