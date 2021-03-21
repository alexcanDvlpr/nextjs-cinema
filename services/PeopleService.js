import * as env from '../constants/enviroment'

export async function getPopularPeople() {

    const endpointUrl = `${env.base_url}/person/popular?api_key=${env.apiKey}&language=${env.lang}&page=${env.page}`
    let popularPeople = []

    const response = await fetch(endpointUrl)
    const { results } = await response.json()

    popularPeople = results.map(people => {
        return {
            id: people.id,
            name: people.name,
            known_for_department: people.known_for_department,
            known_for: people.known_for,
            popularity: people.popularity,
            profile: `${env.posters_base_url}${people.profile_path}`
        }
    })

    return popularPeople

}