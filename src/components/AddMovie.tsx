import { ReactElement, useState } from "react"
import { IMovieCard } from "../App";
import './AddMovie.css'

export interface IAddMovieProps {
    addMovieCard: (movie: IMovieCard) => void;
}

export function AddMovie(props: IAddMovieProps): ReactElement {
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState(3);
    const [genre, setGenre] = useState("");
    const [description, setDescription] = useState("");

    const handelOnSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();

        if (title) {  //  title && genre && description  // 
            const movie: IMovieCard = {
                id: 0,
                title: title,
                rating: rating,
                genre: genre,
                description: description
            }

            props.addMovieCard(movie);
            handleOnReset();  // Empty form
        }
    }

    const handleOnReset = () => {
        // console.log('--> handleOnReset()');
        setTitle('');
        setRating(3);
        setGenre("");
        setDescription("");
    }

    return <>
        <form onSubmit={handelOnSubmit}>
            <article className="add-movie-card">
                <h2>Add new movie card</h2>
                <div className="add-row">
                    <label htmlFor="title">Title</label>
                    <input type="text" onChange={(event) => setTitle(event.target.value)} value={title} required />
                </div>
                <div className="add-row">
                    <label htmlFor="rating-">Rating</label>
                    <div className="row-rating">
                        <span>1</span>
                        <input id="rating" onChange={(event) => setRating(parseInt(event.target.value))} value={rating} type="range" min="1" max="5"/>
                        <span>5</span>
                    </div>
                </div>
                <div className="add-row">
                <label htmlFor="genre">Genre</label>
                    <select id="genre" onChange={(event) => setGenre(event.target.value) } value={genre}>
                        <option value=""></option>
                        <option value="drama">Drama</option>
                        <option value="comedy">Comedy</option>
                    </select>
                </div>
                <div className="add-row">
                    <label htmlFor="description">Description</label>
                    <textarea id="description" onChange={(event) => setDescription(event.target.value)} value={description} cols={30} rows={10}></textarea>
                </div>
                <div className="add-row buttons">
                    <button type="reset" onClick={handleOnReset}>Clear</button>
                    <button type="submit">Add</button>
                </div>

            </article>
        </form>
    </>
}