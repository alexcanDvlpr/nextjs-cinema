import Link from 'next/link'

export default function TVShowCard({ tvShow }) {

    const { id, name, poster } = tvShow;

    const link = `/tv-show/${id}`

    return (
        <Link className="cursorP" href={link}>
            <div className="card">
                <img className="card-img-top avatar-img" src={poster} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                </div>
            </div>
        </Link>
    )
}