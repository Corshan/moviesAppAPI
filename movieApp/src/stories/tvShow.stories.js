import React from "react";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";
import TVShowDetails from "../components/tvshowDetails";
import sampleTVshow from "./sampleTVshow";

export default {
  title: "TV Show/TVShowDetails",
  component: TVShowDetails,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <TVShowDetails tvShow = {sampleTVshow}/>
  );
};
Basic.storyName = "Default";