import styled from 'styled-components'



export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5rem 0;
  /* max-width: 1170px; */

  h1 {
    color: #ffffff;
    font-size: 40px;
    text-align: center;
  }

  @media screen and (min-width: 992px) {
  /* width: 95vw; */
}

.info-button {
    position: fixed;
    top: 20px;
    right: 20px;
    background: transparent;
    color: #ff9d00;
    font-weight: bold;
    font-size: 25px;
    border: none;
    cursor: pointer;
    z-index: 1;

    :hover {
      color: #ff7c03;
    }
  }
`

export const MainSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Title = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h2 {
    margin-top: 0;
    font-size: 50px;
    margin-bottom: 10px;
    color: #FFFFFF;
  }

  div {
    width: 5rem;
    height: 0.25rem;
    background: #FFFFFF;
    margin-left: auto;
    margin-right: auto;
  }

`
// export const Container = styled.div`
  
// `
