import { APIKey } from "../config/key";

async function GetDetails(id, image_path) {
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=us-US&page=1`)
        .then(response => response.json())
        .then(data => {
          
          const { title, poster_path, overview, release_date } = data
          const movie = {
            id,
            title,
            overview: overview,
            image: `${image_path}${poster_path}`,
            releaseDate: release_date,
          } 
          return movie;})
};

export default GetDetails

