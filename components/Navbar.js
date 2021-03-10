import Link from 'next/link'

export default function Navbar() {


    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">Cinema - Alexcan.Dvlpr</span>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" href="/actors">Actors</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/movies">Movies</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/tv-shows">TV Shows</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}