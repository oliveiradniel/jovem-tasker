import styled from 'styled-components';

export const Container = styled.input`
  background-color: ${({ theme }) => theme.colors.gray[500]};
  border: 2px solid ${({ theme }) => theme.colors.gray[500]};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.gray[100]};
  font-size: 16px;
  outline: none;
  padding: 12px 16px;
  width: 100%;

  transition: border-color .2s ease-in-out;

  &:focus {
    border-color: ${({ theme }) => theme.colors.gray[400]};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[300]};
  }
`;
