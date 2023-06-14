import PopularMovies from "../PopularMovies/PopularMovies";
import { Container } from "./Home.styles";

function Home() {

  return (
    <Container>
      <h1>Popular Movies</h1>
      <PopularMovies/>
    </Container>
  )
}

export default Home;