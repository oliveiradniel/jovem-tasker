import styled, { css } from 'styled-components';

type ContainerProps = {
  $isFocused: boolean;
  $isError: boolean;
  $isFilled: boolean;
}
export const Container = styled.div<ContainerProps>`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray[500]};
  border: 1px solid ${({ theme }) => theme.colors.gray[500]};
  border-right: none;
  border-radius: 4px 0 0 4px;
  display: flex;
  height: 100%;
  padding: 12px 16px;
  width: 100%;

  transition: border-color .2s ease-in-out;

  ${({ $isFocused, theme }) => $isFocused && css`
    border-color: ${theme.colors.gray[300]};
  `}

  ${({ $isError, theme }) => $isError && css`
    border-color: ${theme.colors.red.hover} !important;
  `}

  svg {
    fill: ${({ theme }) => theme.colors.gray[300]};
    height: 20px;
    width: 20px;

    transition: fill .2s ease-in-out;

    ${({ $isFilled, theme }) => $isFilled && css`
      fill: ${theme.colors.red.hover};
    `}
  }
`;

export const StyledInput = styled.input`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.gray[100]};
  font-size: 14px;
  font-weight: 300;
  height: 100%;
  outline: none;
  padding: 12px 16px;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[300]};
  }
`;
