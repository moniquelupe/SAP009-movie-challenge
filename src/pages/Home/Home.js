import { Container } from "./Home.styles";

function Home() {
  return (
    <Container>
      <h1>Movies Library!</h1>
      <ul>
        <li>
          <img src="https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_.jpg" alt="Star Wars"/>
          <span>Star Wars</span>
        </li> 
        <li>
          <img src="https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_.jpg" alt="Star Wars"/>
          <span>Star Wars</span>
        </li>
        <li>
          <img src="https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_.jpg" alt="Star Wars"/>
          <span>Star Wars</span>
        </li>
      </ul>
    </Container>
  )
}

export default Home;