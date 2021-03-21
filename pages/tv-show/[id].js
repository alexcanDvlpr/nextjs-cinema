import * as env from '../../constants/enviroment'

import { getTvShowById } from '../../services/TVShowsService';
import VotesAverage from '../../components/VotesAverage';
import { Accordion, Card } from "react-bootstrap";

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


    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(first_air_date);
    const strDate = date.toLocaleDateString('es-Es', dateOptions);

    poster_path = `${env.posters_base_url}${poster_path}`;

    return (
        <div className="main_container">
            <div className="container">
                <div className={styles.tvshow_container}>
                    <div className={`row gx-0`}>
                        <div className="col-xs-12 col-sm-12 col-lg-5">
                            <div className={`${styles.tvshow_title_container} d-sm-none`}>
                                <h1 className={styles.tvshow_title}>{name}</h1>
                                <small className={styles.tvshow_subtitle}>{tagline}</small>
                            </div>
                            <img className={styles.poster_img} src={poster_path} alt={name} />
                        </div>
                        <div className="col-xs-12 col-sm-12 col-lg-7">
                            <div className={`${styles.tvshow_title_container} d-none d-sm-inline`}>
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
                                <h5>Fecha de estreno: {strDate}</h5>
                            </div>
                            <div className={styles.tvshow_data}>
                                <Accordion>
                                    <Card className={styles.custom_dark_card}>
                                        <Accordion.Toggle as={Card.Header} eventKey="0">
                                            Empresas y País de Grabación
                                    </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                <h5>Compañías</h5>
                                                <ul>
                                                    {
                                                        production_companies.map(company => <li key={company.id}>{company.name}</li>)
                                                    }
                                                </ul>
                                                <h5>Paises</h5>
                                                <ul>
                                                    {
                                                        production_countries.map(country => <li key={country.iso_3166_1}>{country.name}</li>)
                                                    }
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card className={styles.custom_dark_card}>
                                        <Accordion.Toggle as={Card.Header} eventKey="1">
                                            Temporadas
                                    </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>
                                                <p>Número de Temporadas: {number_of_seasons}</p>
                                                <p>Número de Episodios Totales: {number_of_episodes}</p>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card className={styles.custom_dark_card}>
                                        <Accordion.Toggle as={Card.Header} eventKey="2">
                                            Directores y/o Productores
                                    </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="2">
                                            <Card.Body>
                                                <ul>
                                                    {
                                                        created_by.map(owner => <li key={owner.id}>{owner.name}</li>)
                                                    }
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}