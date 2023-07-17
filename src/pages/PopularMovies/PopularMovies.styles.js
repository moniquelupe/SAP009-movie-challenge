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
    grid-template-columns: 1fr 1fr;
    column-gap: 3rem;
    row-gap: 4rem;

    @media (min-width: 768px) {
    grid-template-columns: repeat( 4, 1fr );
    }

    @media (min-width: 1200px) {
    grid-template-columns: repeat( auto-fit, minmax(200px, 1fr) );
    
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
    margin-bottom: 1.5rem;
  }

  span {
    font-weight: bold;
    font-size: 16px;
    text-align: center;

    @media (min-width: 1200px) {
      font-size: 25px;
  }
} 

  a {
    transition: all 0.3s;
  }

  a:hover {
    transform: scale(1.1);
  }
`