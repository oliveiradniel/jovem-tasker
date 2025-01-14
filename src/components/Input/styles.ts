import styled from 'styled-components';

export const Container = styled.div`
  input {
    background-color: ${({ theme }) => theme.colors.gray[500]};
    border: 1px solid transparent;
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.gray[100]};
    font-size: 15px;
    width: 100%;

    transition: all .2s ease-in-out;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray[300]};
    }

    &:focus {
      border-color: ${({ theme }) => theme.colors.purple.dark};
    }
  }
`;
