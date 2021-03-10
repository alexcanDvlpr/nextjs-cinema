import * as env from '../constants/enviroment'

export async function getPopularTvShows() {

    let tvShows = []

    const response = await fetch(`${env.base_url}/tv/popular?api_key=${env.apiKey}&language=${env.lang}&page=${env.page}`)
    const { results } = await response.json()

    tvShows = results.map(tvShow => {
        return {
            id: tvShow.id,
            name: tvShow.name,
            overview: tvShow.overview,
            vote_average: tvShow.vote_average,
            poster: `${env.posters_base_url}${tvShow.backdrop_path}`
        }
    })
    return tvShows
}

export async function getTvShowById(id) {

    const response = await fetch(`${env.base_url}/tv/${id}?api_key=${env.apiKey}&language=${env.lang}`)
    let data = await response.json()

    return data
}

export async function getTopRatedTvShows() {

    let tvShows = []

    const response = await fetch(`${env.base_url}/tv/top_rated?api_key=${env.apiKey}&language=${env.lang}&page=${env.page}`)
    let { results } = await response.json()

    tvShows = results.map(tvShow => {
        return {
            id: tvShow.id,
            name: tvShow.name,
            overview: tvShow.overview,
            vote_average: tvShow.vote_average,
            poster: (tvShow.backdrop_path !== null) ? `${env.posters_base_url}${tvShow.backdrop_path}` : null
        }
    })
    return tvShows
}
