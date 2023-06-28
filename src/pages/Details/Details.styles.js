import styled from 'styled-components'

export const Container = styled.div`
  
  padding: 4rem 0;
  
  h1 {
    margin: 3rem 0;
  }

  movie {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 300px;
    max-width: 300px;
    border-radius: 1rem;
  }

  details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 2rem;
    text-align: center;
    max-width: 100%;
  }

  button {
    background: #4DBFFF;
    border: none;
    cursor: pointer;
    border-radius: 1rem;
    color: white;
    padding: 0.8rem 2rem;
    margin-top: 1rem;
    font-size: 100%;
    transition: a11 0.3s;
  }

  button:hover {
    background: #096599;
  }

  span {
    line-height: 130%;
    margin-bottom: 1rem;
    font-size: 110%;
  }

  release-date {
    opacity: 0.5;
  }

  @media (min-width: 768px) {
    .movie {
      flex-direction: row;
      justify-content: flex-start;
    }

    .details {
      align-items: flex-start;
      margin-left: 4rem;
      text-align: left;
      max-width: 50%;
    }
  }
`