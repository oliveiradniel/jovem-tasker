import styled from 'styled-components';

export const Container = styled.div`
  small {
    color: ${({ theme }) => theme.colors.red.hover};
    font-size: 10px;
  }
`;
