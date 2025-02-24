import styled from 'styled-components'

export const ContainerMain = styled.div`
  background-color: #08141f;
  padding: 20px;
  border-radius: 25px;
  width: 100%;

  @media screen and (min-width: 1200px) {
    width: 65vw;
    grid-template-columns: 2fr 2fr 2fr;
  }

  @media screen and (max-width: 900px) {
    width: 75vw;
    grid-template-columns: 2fr 2fr 2fr;
  }
`

export const SectionCenter = styled.div`
  width: 100%;
  max-width: 1170px;
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  gap: 3rem 2rem;
  justify-items: center;

  @media screen and (max-width: 900px) {
    width: 50vw;
    grid-template-columns: 2fr 2fr;
  }

  @media screen and (max-width: 800px) {
    width: 75vw;
    grid-template-columns:2fr;
  }
`
export const MenuItem = styled.article`
  display: grid;
  gap: 1rem 2rem;
  max-width: 25rem;
  background-color: white;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);
  background-color: #08141f;


  @media screen and (min-width: 768px) {
    /* grid-template-columns: 225px 1fr; */
    grid-column: span 1;
    grid-row: span 2;
    gap: 0 1.25rem;
    max-width: 40rem;
  }

  img {
    object-fit: cover;
    height: 200px;
    width: 100%;
    border-radius: 0.25rem;
    display: block;
    border-radius: 5px;

  @media screen and (min-width: 768px) {
    height: 175px;
  }

  @media screen and (min-width: 1200px) {
    height: 220px;
  }
  }
`

export const DivLInk = styled.a`
  text-decoration: none;
  transition: transform 0.3s ease;

  :hover {
    transform: scale(1.05)
  }
`
export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #08141f;


  h4, p {
      color: white;
      letter-spacing: 0.1rem;
      text-transform: capitalize;
      line-height: 1.25;
      margin: 5px 0; 
    }

    p {
      margin: 0;
      opacity: 0.8;
    }
`
export const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;

export const CategoryButton = styled.button`
  padding: 8px 15px;
  border: none;
  border-radius: 20px;
  background-color: ${(props) => (props.active ? '#007bff' : '#102537')};
  color: ${(props) => (props.active ? '#fff' : '#fff')};
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.active ? '#0056b3' : '#ddd')};
  }
`;
// export const Container = styled.div`
  
// `
