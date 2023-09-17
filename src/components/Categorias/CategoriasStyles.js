import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CategoriasContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

export const CardCategoria = styled(motion.div)`
  background-color: ${({ selected }) =>
    selected ? 'var(--blue-bg)' : 'var(--white-bg)'};
    color: ${({ selected }) =>
    selected ? '#fff' : ""};
  width: 100px;
  text-align: center;
  max-height: 20px;
  border-radius: 15px;
  border: 2px solid var(--blue-bg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0.5rem;
  gap: 0.5rem;
  cursor: pointer;

  


  h2 {
    font-size: 1rem;
    font-weight: 600;
  }

`;

export const BorderDecoration = styled.div`
  height: 5px;
  width: 30%;
  background: var(--btn-gradient);
  border-radius: 15px;
`;
