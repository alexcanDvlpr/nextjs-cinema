import PeopleCard from "../components/PeopleCard"
import { getPopularPeople } from "../services/PeopleService"

export default function Actors({ actors }) {

    const popularActors = actors.filter(actor => actor.known_for_department === 'Acting')

    return (
        <div className="main">
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-12 pt-4">
                        <h2>Actores Top</h2>
                    </div>
                    <div className="col-12 pt-1">
                        <div className="card-columns">
                            {
                                popularActors.map(actor => (<PeopleCard people={actor} key={actor.id} />))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps() {
    const actors = await getPopularPeople()

    return {
        props: {
            actors
        }
    }
}