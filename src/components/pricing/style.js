import Styled from "vue-styled-components";

const ListStyle = Styled.div`
  .icon {
    color: ${({ theme }) => theme['success-color']}
  }
`;

export { ListStyle };
