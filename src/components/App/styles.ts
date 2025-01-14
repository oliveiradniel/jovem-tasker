import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[600]};
  height: 100%;
  min-height: 100vh;
`;
