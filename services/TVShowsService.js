
var apiKey = '3494423e1bd9d68b43adaf5270347b0b';
var page = 1;
var lang = 'es-ES';

export async function getPopularTvShows() {

    let tvShows = [];

    const response = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=${lang}&page=${page}`);

    const { results } = await response.json();

    tvShows = results.map(tvShow => {
        return {
            id: tvShow.id,
            name: tvShow.name,
            overview: tvShow.overview,
            poster: `https://image.tmdb.org/t/p/w500${tvShow.backdrop_path}`
        }
    });
    return tvShows;
}

export async function getTvShowById(id) {

    const response = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=${lang}`)
    let data = await response.json()
    console.log(data);
    return data

}