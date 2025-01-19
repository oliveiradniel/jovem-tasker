import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 205px;
  margin: 0 auto;
  max-width: 800px;
  padding: 100px 10px 0;
  background-color: ${({ theme }) => theme.colors.gray[700]};

  .image-container {
    display: flex;
    margin: 0 auto;
  }

  form {
    align-items: center;
    display: flex;
    height: 40px;
    margin-top: 40px;
    width: 100%;
  }

  small {
    color: ${({ theme }) => theme.colors.red.hover};
    font-size: 10px;
    margin-top: 4px;
  }
`;
