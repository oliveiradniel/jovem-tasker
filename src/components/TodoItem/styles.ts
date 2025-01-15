import styled, { css } from 'styled-components';

type ContainerProps = {
  $isDone: boolean;
}

export const Container = styled.div<ContainerProps>`
  align-items: center;
  background-color: ${({ theme}) => theme.colors.gray[500]};
  border: 1px solid ${({ theme}) => theme.colors.gray[400]};
  border-radius: 4px;
  display: flex;
  gap: 16px;
  height: 50px;
  margin: 48px auto;
  max-width: 800px;
  padding: 20px;

  input {
    appearance: none;
    border: 2px solid ${({ theme }) => theme.colors.red.main};
    border-radius: 50%;
    cursor: pointer;
    height: 18px;
    position: relative;
    width: 18px;

    transition: all .2s ease-in-out;

    &:checked {
      background-color: ${({ theme }) => theme.colors.red.main};
    }

    &::before {
      background-color: ${({ theme }) => theme.colors.gray[100]};
      content: '';
      position: absolute;
      height: 100%;
      opacity: 0;
      width: 100%;

      transition: opacity .2s ease-in-out;

      clip-path: polygon(28% 38%, 41% 53%, 75% 24%, 86% 38%, 40% 78%, 15% 50%);
    }

    &:checked::before {
      opacity: 1;
    }
  }

  .task-title-container {
    flex: 1;

    p {
      color: ${({ theme }) => theme.colors.gray[100]};
      word-break: break-all;

      transition: all .2s ease-in-out;

      ${({ $isDone }) => $isDone && css`
        text-decoration: line-through;
        color: ${({ theme }) => theme.colors.gray[300]};
      `}
    }
  }

  .actions-task-container {
    display: flex;
    gap: 12px;

    button {
      background-color: transparent;
      border: none;
      display: flex;

      transition: opacity .2s ease-in-out;

      &:hover {
        opacity: .7;
      }

      svg {
        width: 22px;
        height: 22px;
      }
    }

    .edit {
      svg {
        fill: ${({ theme }) => theme.colors.blue.main};

      }
    }

    .delete {
      svg {
        fill: ${({ theme }) => theme.colors.red.main};
      }
    }
  }
`;

