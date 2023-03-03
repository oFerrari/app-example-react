import { movies } from "./data"

export function Gallery() {
    let movie = movies[0]
    return (
        <>
        <section className="gallery">
            <img src={movie.images.poster} alt="" />
            <img src={movies[0].images.poster} alt="" />
        </section>

        <button>ant</button>
        <button>prox</button>
        </>
    )
}