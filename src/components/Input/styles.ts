import styled, { css } from 'styled-components';

type ContainerProps = {
  $isError: boolean;
}

export const Container = styled.input<ContainerProps>`
  background-color: ${({ theme }) => theme.colors.gray[500]};
  border: 1px solid ${({ theme }) => theme.colors.gray[500]};
  border-right: none;
  border-radius: 4px 0 0 4px;
  color: ${({ theme }) => theme.colors.gray[100]};
  font-size: 14px;
  font-weight: 300;
  height: 100%;
  outline: none;
  padding: 12px 16px;
  width: 100%;

  transition: border-color .2s ease-in-out;

  ${({ $isError, theme }) => $isError && css`
    border-color: ${theme.colors.red.hover} !important;
  `}

  &:focus {
    border-color: ${({ theme }) => theme.colors.gray[300]};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[300]};
  }
`;
