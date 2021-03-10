import Carousel from 'react-multi-carousel';
import TVShowCard from '../components/TVShowCard';
import { getPopularTvShows } from '../services/TVShowsService';

import 'react-multi-carousel/lib/styles.css';
import styles from '../styles/TVShows.module.css';

export async function getServerSideProps() {
    const data = await getPopularTvShows()
    return {
        props: {
            data
        }
    }
}

export default function Movies({ data }) {

    const tvShows = data;

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div>
            <div className={styles.carousel_group}>
                <h2>Series Populares</h2>
                <Carousel transitionDuration={150} swipeable={true} draggable={true} infinite={true} itemClass={styles.carousel_item_padding_40_px} className={styles.carousel} responsive={responsive}>
                    {
                        tvShows.map(tvShow => <TVShowCard tvShow={tvShow} key={tvShow.id} />)
                    }
                </Carousel>
            </div>
            <div className={styles.carousel_group}>
                <h2>Últimas Novedades</h2>
                <Carousel transitionDuration={150} swipeable={true} draggable={true} infinite={true} itemClass={styles.carousel_item_padding_40_px} className={styles.carousel} responsive={responsive}>
                    {
                        tvShows.map(tvShow => <TVShowCard tvShow={tvShow} key={tvShow.id} />)
                    }
                </Carousel>
            </div>
        </div>
    )
}