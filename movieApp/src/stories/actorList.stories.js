import React from "react";
import { MemoryRouter } from "react-router";
//import { action } from "@storybook/addon-actions";
// import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";
import Grid from "@mui/material/Grid";
import ActorList from "../components/actorList";
import Sample from '../stories/sampleActor';


export default {
  title: "Actor/ActorList",
  component: ActorList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => {
  const actors = [
    { ...Sample, id: 1 },
    { ...Sample, id: 2 },
    { ...Sample, id: 3 },
    { ...Sample, id: 4 },
    { ...Sample, id: 5 },
  ];
  return (
    <Grid container spacing={5}>
      <ActorList actors={actors}></ActorList>
    </Grid>
  );
};
Basic.storyName = "Default";