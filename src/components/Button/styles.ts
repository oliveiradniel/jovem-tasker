import styled from 'styled-components';

export const Container = styled.button`
    align-items: center;
    background-color: ${({ theme }) => theme.colors.red.hover};
    border: 1px solid transparent;
    border-radius: 0 4px 4px 0;
    color: ${({ theme }) => theme.colors.gray[200]};
    display: flex;
    font-size: 15px;
    font-weight: 600;
    gap: 8px;
    height: 100%;
    padding: 13.5px 18px;
    outline: 0;

    transition: all .2s ease-in-out;

    &:hover {
      opacity: .8;
    }

    &:disabled {
      background-color: ${({ theme }) => theme.colors.gray[300]};
      cursor: default;
      opacity: 1;
    }

    svg {
      height: 26px;
      width: 50px;
      fill: ${({ theme }) => theme.colors.gray[200]}
    }
`;
