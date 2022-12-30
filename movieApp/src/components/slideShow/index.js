import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { CardMedia } from "@mui/material";
import Card from "@mui/material/Card";

const Slideshow = ({images}) => {
    const slideImages = images.map((image)=>(
        {
            url:`https://image.tmdb.org/t/p/w500${image.file_path}`
        }
    ))
  return (
    <Card>
      <div className="slide-container">
        <Slide>
         {slideImages.map((image, index)=> (
            <div className="each-slide" key={index}>
             <div>
               <CardMedia image={image.url} sx={{ height: 500}}></CardMedia>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
      </Card>
    )
}

export default Slideshow;