import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 64px auto;
  max-width: 800px;
  padding: 0 10px;

  .empty-box {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 32px auto 0;

    p {
      color: ${({ theme }) => theme.colors.gray[300]};
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 32px;
      text-align: center;
    }

    svg {
      height: 140px;
      width: 140px;
    }
  }

  p {
    color: ${({ theme }) => theme.colors.gray[300]};
    font-size: 12px;
  }
`;
