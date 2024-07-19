// components/Button.tsx
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.body};
  border: none;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export default Button;
