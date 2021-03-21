import * as env from '../constants/enviroment'

export async function getPopularMovies() {

    const endpointUrl = `${env.base_url}/movie/popular?api_key=${env.apiKey}&language=${env.lang}&page=${env.page}`
    let popularMovies = []

    const response = await fetch(endpointUrl)
    const { results } = await response.json()

    popularMovies = results.map(movie => {
        return {
            id: movie.id,
            name: movie.title,
            date: movie.release_date,
            adult: movie.adult,
            overview: movie.overview,
            vote_average: movie.vote_average,
            poster: `${env.posters_base_url}${movie.poster_path}`,
            backdrop_path: `${env.posters_base_url}${movie.backdrop_path}`
        }
    })
    return popularMovies

}