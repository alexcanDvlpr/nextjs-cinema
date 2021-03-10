import Link from 'next/link'
import styles from '../styles/TVMovieCard.module.css';

export default function TVShowCard({ tvShow }) {

    const { id, name, poster, vote_average } = tvShow;

    return (
        <Link className="cursorP" href={`/tv-show/${id}`}>
            <div className={styles.card}>
                {
                    (poster !== null) ? <img className={styles.avatar_img} src={poster} alt={name} /> : <img className={styles.not_avaible} src="https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png" alt={name} />
                }
                <div className={styles.back_card}>
                    <h5>{name}</h5>
                    <h5>{vote_average} 👍</h5>
                </div>
            </div>
        </Link>
    )
}