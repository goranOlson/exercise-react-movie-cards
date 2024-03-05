import { IMovieCard } from '../App';
import './MovieCard.css'

export interface IMovieCardProps {
    movieCard: IMovieCard;
    deleteMovieCard: (id: number) => void;
}

export function MovieCard(props: IMovieCardProps): JSX.Element {
    const item = props.movieCard;
    const maxRating = 5;

    return <>
        <article className="movie-card" onClick={() => props.deleteMovieCard(item.id)} key={item.id}>
            <h1 className='part movie-header'>{item.title}</h1>
            <div className='part info'>
                <div className='genre'>{item.genre}</div>
                <div>{item.rating}/{maxRating}</div>
            </div>
            <div className='part description'>
                {item.description}
            </div>
        </article>
    </>
}