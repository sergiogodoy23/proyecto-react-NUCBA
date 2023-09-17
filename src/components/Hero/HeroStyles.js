import styled from 'styled-components';
import { devices } from '../../styles/MediaQueries';

export const HeroContainerStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
  h2 {
    color: #0035a6;
    margin-bottom: 2rem;
    font-size: 2.5rem;
    font-weight: 600;
  }

  
`;

export const HeroFormStyled = styled.form`
  display: flex;
  gap: 20px;
  position: relative;
`;

export const HeroSearchBarStyled = styled.input`
  background-color: #4f4f4f;
  outline: none;
  border: none;
  border-radius: 15px;
  padding: 0.5rem 2.3rem;
  color: white;
`;

export const IconWrapperStyled = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  font-size: 1.1rem;
`;

export const HeroBtnStyled = styled.input`
  padding: 0.8rem 1.5rem;
  outline: none;
  border: none;
  border-radius: 10px;
  background: var(--btn-gradient);
  color: white;
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;
`;

export const ContainerImageHero = styled.div`
  max-width: 750px;
  height: 600px;
  background: transparent;


  img{
    width: 95%;
    height: 80%;
  }
  
`
