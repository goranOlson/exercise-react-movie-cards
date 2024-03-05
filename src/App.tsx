import { useState } from "react";
import { AddMovie } from "./components/AddMovie";
import { MovieList } from "./components/MovieList";
import './App.css'

export interface IMovieCard {
  id: number;
  title: string;
  genre: string;
  rating: number;
  description: string;
}

let counter: number = 1;

export function App() {
/*
  const movie = {
    id: 1,
    title: "The movie",
    genre: "Drama",
    rating: 4,
    description: "The description the description the description the description the description"
  }
  */


  const [movieList, setMovieList] = useState<IMovieCard[]>([]);

  const addMovieCard = (movie: IMovieCard) => {
    movie.id = counter++;  // Set unique id
    setMovieList([movie, ...movieList]);
    // console.log('movieList => ', movieList);
  }

  const deleteMovieCard = (id: number) => {
    // console.log('--> deleteMovieCard() ' + id);
    const newList = movieList.filter( (movie) => {
      return movie.id != id
    });
    setMovieList(newList);
  }

  return (
    <>
    <div className="app">
      <h1 className="main">Movie Cards</h1>
      <AddMovie addMovieCard={addMovieCard}/>
      <MovieList movieList={movieList} deleteMovieCard={deleteMovieCard} />
    </div>
    </>
  );
}