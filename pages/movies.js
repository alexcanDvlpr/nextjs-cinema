import { getPopularMovies } from "../services/MoviesService"
import CarouselSection from '../components/CarouselSection'

import 'react-multi-carousel/lib/styles.css';
import styles from '../styles/Movies.module.css';

export default function Movies({ popularMovies }) {

    const movie = 'MOVIE'

    return (
        <div className="main_container">
            <div className={styles.carousel_group}>
                <CarouselSection title="Películas Populares" sources={popularMovies} type={movie} />
            </div>
        </div>
    )
}

export async function getServerSideProps() {
    const popularMovies = await getPopularMovies()

    return {
        props: {
            popularMovies
        }
    }
}