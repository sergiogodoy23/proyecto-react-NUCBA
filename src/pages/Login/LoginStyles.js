import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const LoginContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: #fff;
  padding-bottom: 17vh;
  padding-top: 2rem;
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  gap: 20px;
`;

export const LoginPasswordStyled = styled.p`
  margin: 0;

  color: var(--blue-bg);

  :hover {
    text-decoration: underline;
    transition: all 0.25s ease-out;
  }
`;

export const LoginButtonGoogleStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 1rem 1.5rem;
  outline: none;
  border: none;
  border-radius: 1rem;
  background: var(--gray-bg);
  color: #666;
  cursor: pointer;
`;

export const LoginEmailStyled = styled.p`
  color: #000;

  :hover {
    text-decoration: underline;
    transition: all 0.25s ease-out;
  }
`;
