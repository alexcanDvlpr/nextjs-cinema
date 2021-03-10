import { getTvShowById } from '../../services/TVShowsService';
import VotesAverage from '../../components/VotesAverage';

import styles from '../../styles/TVShow.module.css';

export async function getServerSideProps(router) {

    let data = await getTvShowById(`${router.query.id}`);
    return {
        props: {
            data
        }
    }
}

export default function TvShow({ data }) {

    console.log(data);

    let {
        name,
        overview,
        tagline,
        vote_average,
        seasons,
        production_companies,
        production_countries,
        poster_path,
        number_of_seasons,
        number_of_episodes,
        created_by,
        first_air_date,
        genres
    } = data;

    poster_path = `https://image.tmdb.org/t/p/w500${poster_path}`;

    return (
        <div className="container">
            <div className={styles.tvshow_container}>
                <div className={`row gx-0 ${styles.pt_40}`}>
                    <div className="col-xs-12 col-sm-12 col-lg-5">
                        <img className={styles.poster_img} src={poster_path} alt={name} />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-lg-7">
                        <div className={styles.tvshow_title_container}>
                            <h1 className={styles.tvshow_title}>{name}</h1>
                            <small className={styles.tvshow_subtitle}>{tagline}</small>
                        </div>
                        <hr />
                        <div className={styles.tvshow_description}>
                            <div className="row gx-0">
                                <div className="col-12 col-sm-12 col-lg-10">
                                    <div className={styles.tvshow_genres_container}>
                                        {
                                            genres.map(genre => <span key={genre.id} className={`${styles.custom_badge} badge badge-success`}>{genre.name}</span>)
                                        }
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-lg-2">
                                    <VotesAverage votes_average={vote_average} />
                                </div>
                            </div>
                            <p className={styles.overview}>{overview}</p>
                        </div>
                        <div className={styles.tvshow_data}>
                            <ul>
                                {
                                    production_companies.map(company => <li key={company.id}>{company.name}</li>)
                                }
                            </ul>
                            <ul>
                                {
                                    production_countries.map(country => <li key={country.iso_3166_1}>{country.name}</li>)
                                }
                            </ul>
                            <h6>{number_of_seasons}</h6>
                            <h6>{number_of_episodes}</h6>
                            <ul>
                                {
                                    created_by.map(owner => <li key={owner.id}>{owner.name}</li>)
                                }
                            </ul>
                            <h6>{first_air_date}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}