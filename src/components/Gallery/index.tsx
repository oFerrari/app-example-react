import { House,User,Gear as Settings, ArrowBendDoubleUpRight, ArrowBendDoubleUpLeft } from 'phosphor-react'

import { useState } from "react";

import { movies } from "./data"

import './style.css'

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
            <h1>{movies[index].title}</h1>

            <section className="gallery">
                <img src={movies[index].images.poster} alt="" />
            </section>

            <p>Duration: {movies[index].duration}</p>

            <div className="botoes">

            <button onClick={handlePreviousClick}><ArrowBendDoubleUpLeft size={45} color="#e00000" /></button>
            <button onClick={handleNextClick} ><ArrowBendDoubleUpRight size={45} color="#e00000" /></button>

            </div>
        </>
    )
}