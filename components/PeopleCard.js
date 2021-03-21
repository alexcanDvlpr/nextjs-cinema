import styles from '../styles/PeopleCard.module.css';

export default function PeopleCard({ people }) {

    const { id, name, known_for_department, known_for, popularity, profile } = people;

    return (
        <>
            <div className={`${styles.cardCustom} card`}>
                <img className={`card-img-top`} src={profile} alt="Card image cap" />
                <div className="card-body">
                    <div className="row">
                        <div className="col-12 col-sm-8">
                            <h5 className="card-title">{name}</h5>
                        </div>
                        <div className="col-12 col-sm-4">
                            <div className={`${styles.popularity}`}>
                                <h5>{popularity.toFixed(1)}</h5>
                                <h5>⭐</h5>
                        </div>
                        </div>
                    </div>
                    <p className="card-text">Filmografía:</p>
                    <ul>
                        {
                            known_for.map(movie => (<li key={movie.id}>{movie.title}</li>))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}