import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export const SearchBarContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const SearchIcon = styled(FaSearch)`
  color: #fff;
  margin-right: 10px;
  font-size: 24px;
`;

export const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #fff;
  color: #fff;
  font-size: 18px;
  padding: 10px;
  width: 300px; /* Ancho inicial */
  outline: none;

  &:focus {
    width: 300px; /* Ancho completo al enfocar */
  }
`;