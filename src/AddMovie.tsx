import { ReactElement, useState } from "react"
import './AddMovie.css'


export function AddMovie(): ReactElement {
    

    return <>
        <form>
            <article className="add-movie-card">
                <h1>Add Movie Card</h1>
                <div className="add-row">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" />
                </div>
                <div className="add-row">
                    <label htmlFor="rating-">Rating</label>
                    <div className="row-rating">
                        <span>1</span>
                        <input id="rating" type="range" min="1" max="5"/>
                        <span>5</span>
                    </div>
                </div>
                <div className="add-row">
                <label htmlFor="genre">Genre</label>
                    <select id="genre">
                        <option value=""></option>
                        <option value="drama">Drama</option>
                        <option value="comedy">Comedy</option>
                    </select>
                </div>
                <div className="add-row">
                    <label htmlFor="description">Description</label>
                    <textarea id="description" cols={30} rows={10}></textarea>
                </div>
                <div className="add-row buttons">
                    <button>Clear</button>
                    <button>Add</button>
                </div>

            </article>
        </form>
    </>
}