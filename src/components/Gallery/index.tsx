import { useState } from "react";
import { movies } from "./data"

export function Gallery() {
    
    const [index, setIndex] = useState(0);


    function handleNextClick() {
        if(index < movies.length -1)
        setIndex(index + 1);
    }

    function handlePreviousClick() {
        if(index > 0){
            setIndex(index - 1);
        }
    }

    return (
        <>
            <section className="gallery">
                <img src={movies[index].images.poster} alt="" />
            </section>

            <button onClick={handleNextClick}>Next</button>
            <button onClick={handlePreviousClick}>Previous</button>
        </>
    )
}