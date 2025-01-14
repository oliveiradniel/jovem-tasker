import styled from 'styled-components';

export const Container = styled.div`
  button {
    align-items: center;
    background-color: ${({ theme }) => theme.colors.purple.dark};
    border: 1px solid transparent;
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.gray[200]};
    display: flex;
    font-size: 15px;
    font-weight: 600;
    gap: 8px;
    padding: 13.5px 18px;
    outline: 0;

    transition: all .2s ease-in-out;

    &:hover {
      background-color: ${({ theme }) => theme.colors.purple.main};
    }
  }
`;
