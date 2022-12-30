import React from "react";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";
import Actordetails from "../components/actorDetails";
import sample from "./sampleActor";

export default {
  title: "Actor/Actordetails",
  component: Actordetails,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <Actordetails actor={sample}/>
  );
};
Basic.storyName = "Default";