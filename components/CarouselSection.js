import Carousel from 'react-multi-carousel';
import TVShowCard from '../components/TVShowCard';

import styles from '../styles/CarouselSection.module.css';

export default function CarouselSection({ title, sources, type }) {

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
        <>
            <h2 className={styles.carousel_title}>{title}</h2>
            <Carousel transitionDuration={150} swipeable={true} draggable={true} infinite={true} itemClass={styles.carousel_item_padding_40_px} className={styles.carousel} responsive={responsive}>
                {
                    sources.map(source => (
                        (type === 'TVSHOW') ? <TVShowCard tvShow={source} key={source.id} /> : <p>Tarjeta de Movie</p>
                    ))
                }
            </Carousel>
        </>
    )
}