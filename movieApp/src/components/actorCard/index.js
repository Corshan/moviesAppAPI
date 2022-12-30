import Card from "@mui/material/Card";
import { Link } from "react-router-dom";
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardHeader from "@mui/material/CardHeader";
import img from '../../images/film-poster-placeholder.png';
import CardActions from "@mui/material/CardActions";


export default function ActorCard ({actor}){
    return(
        <Card>
            <CardHeader 
            title = {
                <Typography variant="h5" component="p">
            {actor.name}{" "}
          </Typography>
            }/>
            <CardMedia
        sx={{ height: 500 }}
        image={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
            : img
        }
      />
      <CardActions disableSpacing>
      <Link to={`/actor/${actor.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            Learn More
          </Button>
        </Link>
      </CardActions>
        </Card>
    )
}