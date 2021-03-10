import CarouselSection from '../components/CarouselSection'
import { getPopularTvShows, getTopRatedTvShows } from '../services/TVShowsService';

import 'react-multi-carousel/lib/styles.css';
import styles from '../styles/TVShows.module.css';

export async function getServerSideProps() {
    const popularTv = await getPopularTvShows()
    const topRatedTv = await getTopRatedTvShows()

    return {
        props: {
            popularTv,
            topRatedTv
        }
    }
}

export default function Movies({ popularTv, topRatedTv }) {

    const tvShow = 'TVSHOW'

    return (
        <div>
            <div className={styles.carousel_group}>
                <CarouselSection title="Series Populares" sources={popularTv} type={tvShow} />
            </div>
            <div className={styles.carousel_group}>
                <CarouselSection title="Series Más Votadas" sources={topRatedTv} type={tvShow} />
            </div>
        </div>
    )
}