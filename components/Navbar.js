import Link from 'next/link'

export default function Navbar() {


    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">Cinema - Alexcan.Dvlpr</span>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <Link href="/actors">
                            <a className="nav-link active">Actors</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/movies">
                            <a className="nav-link">Movies</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/tv-shows">
                            <a className="nav-link">TV Shows</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}