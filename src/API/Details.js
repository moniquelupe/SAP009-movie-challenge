import { APIKey } from "../config/key";

// GetDetails: função assíncrona que recebe id e image_path como parâmetros. 
// Essa função realiza uma requisição à API, através da função fetch, para obter detalhes dos filmes.

async function GetDetails(id, image_path) {
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=us-US&page=1`)
        .then(response => response.json())
        .then(data => {
          
          const { title, poster_path, overview, release_date } = data /*Extrai as propriedades title, poster_path, overview e release_date do objeto data.*/
          const movie = { /*Cria um objeto movie que contém as informações do filme.*/
            id,
            title,
            overview: overview,
            image: `${image_path}${poster_path}`,
            releaseDate: release_date,
          } 
          return movie;}) /*Retorna o objeto movie como resultado da função GetDetails.*/
};

export default GetDetails

