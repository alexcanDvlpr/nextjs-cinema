
var apiKey = process.env.API_KEY
var page = 1
var lang = process.env.API_KEY
var base_url = process.env.MOVIEDB_BASE_URL;
var posters_base_url = process.env.POSTERS_BASE_URL;

export async function getPopularTvShows() {

    let tvShows = []

    const response = await fetch(`${base_url}/tv/popular?api_key=${apiKey}&language=${lang}&page=${page}`)
    const { results } = await response.json()

    tvShows = results.map(tvShow => {
        return {
            id: tvShow.id,
            name: tvShow.name,
            overview: tvShow.overview,
            vote_average: tvShow.vote_average,
            poster: `${posters_base_url}${tvShow.backdrop_path}`
        }
    })
    return tvShows
}

export async function getTvShowById(id) {

    const response = await fetch(`${base_url}/tv/${id}?api_key=${apiKey}&language=${lang}`)
    let data = await response.json()

    return data
}