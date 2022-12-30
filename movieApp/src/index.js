import React from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviesPage from './pages/upcomingMoviePage'
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import TvShowContextProvider from "./contexts/tvShowContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import WatchLaterPage from "./pages/watchLaterPage";
import TVShowPage from "./pages/discoverTVShowsPage";
import ActorListPage from "./pages/PopularActorsPage";
import TopRatedMoviesPage from "./pages/topRatedMoviesPage";
import TemplateActorPage from "./pages/actorDetailsPage"
import TemplateTVShowPage from "./pages/tvShowDetailsPage";
import FavouritrTvShowPage from "./pages/favouriteTvShowsPage";
import PrivateRoutes from "./privateRoute";
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signUpPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <SiteHeader />
        <MoviesContextProvider>
        <TvShowContextProvider> 
      <Routes>
        <Route element={<PrivateRoutes/>}>
      <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
        <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
        <Route exact path="/movies/favourites" element={<FavouriteMoviesPage />} />
        <Route path="/movies/upcoming" element={<UpcomingMoviesPage/>} />
        <Route path="/movies/watchlater" element={<WatchLaterPage></WatchLaterPage>} />
        <Route path="/movies/toprated" element ={<TopRatedMoviesPage/>}/>
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/tvshows/discover" element={<TVShowPage/>}/>
            <Route path="/actors/popular" element={<ActorListPage />} />
              <Route path="/actor/:id" element={<TemplateActorPage />}></Route>
              <Route path="/tvshow/favourites" element={<FavouritrTvShowPage></FavouritrTvShowPage>}></Route>
            <Route path="/tvshow/:id" element={<TemplateTVShowPage/>}></Route>
        <Route path="/" element={<HomePage />} />
              </Route>
              <Route path="/login" element={<LoginPage></LoginPage>}></Route>
              <Route path="/signup" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="*" element={ <Navigate to="/" /> } />
            </Routes>
            </TvShowContextProvider> 
      </MoviesContextProvider>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App /> );