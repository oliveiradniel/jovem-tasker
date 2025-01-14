import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0 auto;
  max-width: 800px;
  padding-top: 22px;

  .logo-container {
    align-items: center;
    display: flex;
    flex: 1;
    justify-content: center;
  }

  .new-task-container {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 40px;
  }

  .new-task-input {
    flex: 1;
  }

  @media (max-width: 840px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;
