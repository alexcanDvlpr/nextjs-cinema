import { getTvShowById } from '../../services/TVShowsService';
import VotesAverage from '../../components/VotesAverage';

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
            <div className="tvshow-container">
                <div className="row gx-0 pt-40">
                    <div className="col-5">
                        <img className="poster-img" src={poster_path} alt="543654" />
                    </div>
                    <div className="col-7">
                        <div className="tvshow-title-container">
                            <h1 className="tvshow-title">{name}</h1>
                            <small className="tvshow-subtitle">{tagline}</small>
                        </div>
                        <hr />
                        <div className="tvshow-description">
                            <div className="row gx-0">
                                <div className="col-10">
                                    <div className="tvshow-genres-container">
                                        {
                                            genres.map(genre => <span key={genre.id} className="badge badge-success">{genre.name}</span>)
                                        }
                                    </div>
                                </div>
                                <div className="col-2">
                                    <VotesAverage votes_average={ vote_average } />
                                </div>
                            </div>
                            <p className="overview">{overview}</p>
                        </div>
                        <div className="tvshow-data">
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