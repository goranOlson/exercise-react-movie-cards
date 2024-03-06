import { IMovieCard } from "../App"
import { MovieCard } from "./MovieCard";
import './MovieList.css'

interface IMovieListProps {
    movieList: IMovieCard[];
    deleteMovieCard: (id: number) => void;
}

export function MovieList(props: IMovieListProps): JSX.Element {
    const movieList = props.movieList;
    // console.log('movieList: ', movieList);
    
    return <>
        <section className="movie-listing">
            <h1>Movie Cards</h1>
            { movieList.map((movieCard, index) => {
              return (
                <MovieCard key={index} movieCard={movieCard} deleteMovieCard={props.deleteMovieCard} />
                )
              }) 
            }
        </section>
    </>
}