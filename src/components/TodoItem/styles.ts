import styled, { css } from 'styled-components';

type ContainerProps = {
  $isDone: boolean;
}

type ActionsTaskContainerProps = {
  $disabled: boolean;
}

export const Container = styled.div<ContainerProps>`
  align-items: center;
  background-color: ${({ theme}) => theme.colors.gray[500]};
  border: 1px solid ${({ theme}) => theme.colors.gray[400]};
  border-radius: 4px;
  display: flex;
  gap: 16px;
  height: 50px;
  width: 100%;
  padding: 20px;

  > input {
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

    &:disabled {
      border-color: ${({ theme }) => theme.colors.gray[400]};
      cursor: default;
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

    input {
      background-color: ${({ theme }) => theme.colors.gray[450]};
      border: none;
      border-radius: 4px;
      caret-color: ${({ theme }) => theme.colors.gray[300]};
      color: ${({ theme }) => theme.colors.gray[100]};
      font-size: 15px;
      outline: none;
      padding: 4px 16px;
      width: 100%;

      &::placeholder {
        color: ${({ theme }) => theme.colors.gray[300]};
      }
    }

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
`;

export const ActionsTaskContainer = styled.div<ActionsTaskContainerProps>`
  display: flex;
  gap: 12px;

  button {
    align-items: center;
    background-color: transparent;
    border: none;
    display: flex;

    transition: opacity .2s ease-in-out;

    &:hover {
      opacity: .7;
    }

    &:disabled {
      cursor: default;
      opacity: 1;
    }

    svg {
      transition: fill .2s ease-in-out;
    }
  }

  .cancel {
    svg {
      fill: ${({ theme }) => theme.colors.red.main};
      height: 18px;
      width: 18px;
    }
  }

  .save {
    &:disabled {
      svg {
        fill: ${({ theme }) => theme.colors.gray[400]};
      }
    }

    svg {
      fill: green;
      height: 22px;
      width: 22px;
    }
  }

  .edit {
    svg {
      fill: ${({ theme, $disabled }) => $disabled ? theme.colors.gray[400] : theme.colors.blue.main};
      height: 18px;
      width: 18px;
    }
  }

  .delete {
    svg {
      fill: ${({ theme, $disabled }) => $disabled ? theme.colors.gray[400] : theme.colors.red.main};
      height: 18px;
      width: 18px;
    }
  }
`;

export const Error = styled.small`
  color: ${({ theme }) => theme.colors.red.hover};
  font-size: 10px;
`;
