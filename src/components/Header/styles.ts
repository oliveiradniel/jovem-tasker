import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 220px;
  margin: 0 auto;
  max-width: 800px;
  padding: 100px 10px 0;
  background-color: ${({ theme }) => theme.colors.gray[700]};

  form {
    align-items: center;
    display: flex;
    gap: 40px;
    margin-top: 40px;
    width: 100%;
  }

  .task-input {
    flex: 1;
  }
`;
