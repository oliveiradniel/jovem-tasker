import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 64px auto;
  max-width: 800px;
  padding: 0 10px;

  p {
    color: ${({ theme }) => theme.colors.gray[300]};
    font-size: 12px;
  }
`;
