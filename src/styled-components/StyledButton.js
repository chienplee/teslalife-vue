import styled from "vue-styled-components";
// const buttonProps = { theme: Object };

export const StyledButton = styled.button`
  font-size: 2em;  
  background-color: ${({theme}) => theme['primary-color']};
  letter-spacing: 3px;
`;
