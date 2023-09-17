import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { devices } from '../../styles/MediaQueries';

export const NavbarContainerStyled = styled.div`
  height: 100px;
  background-color: #003566;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;

  @media ${devices.tablet}{
    padding: .5rem 2rem;
  }
`;

export const NameHome = styled.h1`
  font-size: 2.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #fff;

  @media ${devices.tablet}{
    font-size: 1.8rem;
  }
`

export const ModalOverlayStyled = styled(motion.div)`
  position: fixed;  
  top: 0;
  left: 0;
  z-index: 50;
  width: calc(100vw - 450px);
  height: 100vh;

  ${({ isHidden }) =>
    !isHidden &&
    css`
      backdrop-filter: blur(4px);
    `}
`;

export const LinksContainerStyled = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  a {
    padding: 1rem 1.5rem;
  }

  a:first-child {
    background: #fff;
    color: #21295c;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    font-weight: 600;
  }
  @media ${devices.tablet}{
    display: none;
  }
`;

export const LinkContainerStyled = styled.div`
  font-size: 1.2rem;
  color: ${props => (props.home ? '#21295c' : '#fff')};
`;

export const CartNavStyled = styled.div`
  position: relative;
  cursor: pointer;

  span {
    position: absolute;
    top: 0;

    height: 20px;
    width: 20px;
    text-align: center;

    border-radius: 1rem;
    border: 1px solid white;
    color: white;
    background-color: blue;
    font-size: 0.9rem;
  }
`;

export const UserNavStyled = styled.div`
  gap: 15px;
  cursor: pointer;
  span {
    color: white;
    font-size: 1rem;
    margin-right: 20px;
  }
`;

export const SpanStyled = styled.span`
  &:hover {
    text-decoration: underline;
  }
`;
