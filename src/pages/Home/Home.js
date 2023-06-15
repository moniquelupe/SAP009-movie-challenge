import PopularMovies from "../PopularMovies/PopularMovies";
import TopRatedMovies from "../TopRatedMovies/TopRatedMovies";
import { Container } from "./Home.styles";

function Home() {

  return (
    <Container>
      <h1>Popular Movies</h1>
      <PopularMovies/>
      <h2>Top Rated Movies</h2>
      <TopRatedMovies/>
    </Container>
  )
}

export default Home;