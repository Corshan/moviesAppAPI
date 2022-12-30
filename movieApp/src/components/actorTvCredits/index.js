import React from "react";
import Chip from "@mui/material/Chip";
import { useQuery } from "react-query";
import Spinner from '../spinner'
import { getActorTVShowCredits} from "../../api/tmdb-api";
import { Link } from "react-router-dom";

const chip = { margin: 0.5 };

const ActorTvCredits = ({ actor }) => {
    const { data , error, isLoading, isError } = useQuery(
        ["TVCredits", { id: actor.id }],
        getActorTVShowCredits
        );
    
      if (isLoading) {
        return <Spinner />;
      }
    
      if (isError) {
        return <h1>{error.message}</h1>;
      }
        const tvShowCredits = data;
    
    
    return (
    <>
        {tvShowCredits.cast.map((c) => (
        <li key={c.name}>
          <Link to={`/tvshow/${c.id}`}>
          <Chip label={c.name} sx={chip} />
      </Link>
        </li>
        ))} 
            </>
    )

}
export default ActorTvCredits;