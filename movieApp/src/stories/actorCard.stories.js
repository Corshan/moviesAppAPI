import React from "react";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";
import Card from "../components/actorCard";
import sample from "./sampleActor";

export default {
  title: "Actor/ActorCard",
  component: Card,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <Card actor={sample}/>
  );
};
Basic.storyName = "Default";