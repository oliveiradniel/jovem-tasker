import styled from 'styled-components';

export const Container = styled.button`
    align-items: center;
    background-color: ${({ theme }) => theme.colors.red.main};
    border: 1px solid transparent;
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.gray[200]};
    display: flex;
    font-size: 15px;
    font-weight: 600;
    gap: 8px;
    padding: 13.5px 18px;
    outline: 0;

    transition: background-color .2s ease-in-out;

    &:hover {
      background-color:${({ theme }) => theme.colors.red.hover}
    }

    &:disabled {
      background-color: ${({ theme }) => theme.colors.gray[300]};
      cursor: default;
    }

    svg {
      height: 26px;
      width: 50px;
      fill: ${({ theme }) => theme.colors.gray[200]}
    }
`;
