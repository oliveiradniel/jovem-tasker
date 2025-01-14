import styled, { css } from 'styled-components';

type ContainerProps = {
  $isDone: boolean;
}

export const Container = styled.div<ContainerProps>`
  background-color: ${({ theme}) => theme.colors.gray[500]};
  border: 1px solid ${({ theme}) => theme.colors.gray[400]};
  border-radius: 6px;
  display: flex;
  gap: 16px;
  padding: 20px;

  .is-done-input {
    appearance: none;
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.colors.purple.dark};
    border-radius: 50%;
    cursor: pointer;
    height: 18px;
    margin: 0;
    width: 18px;

    transform: translateY(0);
    transition: all .2s ease-in-out;

    &:checked {
      background-color: ${({ theme }) => theme.colors.purple.dark};
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
    color: ${({ theme }) => theme.colors.gray[100]};
    flex: 1;
    word-break: break-all;

    transition: all .4s ease-in-out;

    ${({ $isDone }) => $isDone && css`
      text-decoration: line-through;
    `}
  }

  .delete-task-container {
    button {
      outline: none;
      border: none;
      padding: 0 2px;
      border-radius: 4px;
      background-color: transparent;

      &:hover {
        background-color: ${({ theme }) => theme.colors.gray[400]}
      }

      svg path {
        transition: all .3s ease-in-out;

        &:hover {
          fill: ${({ theme }) => theme.colors.red};
        }
      }
    }
  }
`;
