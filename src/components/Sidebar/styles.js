import styled from 'styled-components'

export const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
  max-width: 400px;
  width: 400px;
  background-color: #08141f;
  border-radius: 25px;
  color: white;

  @media screen and (max-width: 900px) {
    height: 70vh;
    width: 300px;

  }
  @media screen and (max-width: 300px) {
    height: 50vh;
    width: 300px;

  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  img {
    height: 200px;
    width: 200px;
    border-radius: 50%;
  }

  h2, h3 {
    margin: 0;
  }

  h3 {
    padding: 5px;
    cursor: default;
    background-color: gray;
    border-radius: 5px;
    color: #ffffff;
  }

  @media screen and (max-width: 900px) {
  gap: 10px;

     img {
      height: 100px;
      width: 100px;
     }
  }
`

export const ContainerContact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 10px;
`

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;

  svg {
    color: #1DA1F2;
  }

  a {
    color: #ffffff;
    text-decoration: none
  }
`
