import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    text-align: left;
    margin: 2rem 0;
  }
`
export const MovieList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(150px, 1fr) );
    column-gap: 3rem;
    row-gap: 4rem;

    @media (min-width: 1500px) {
    grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
    }
`
export const Movie = styled.li`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

  img {
    width: 100%;
    max-width: 100%;
    border-radius: 1rem;
    margin-bottom: 2rem;
  }

  span {
    font-weight: bold;
    font-size: 120%;
    text-align: center;
  }

  a {
    transition: all 0.3s;
  }

  a:hover {
    transform: scale(1.1);
  }
`