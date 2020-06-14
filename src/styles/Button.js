import styled from 'styled-components';
import theme from './theme';

const { fontSizes, colors } = theme;

const Button = styled.button`
    cursor: pointer;
    border: 0;
    border-radius: 0;
    text-transform: none;
    color: ${colors.blue};
    background-color: transparent;
    font-size: ${fontSizes.small};
    font-family: 'Poppins', sans-serif;

    &:hover,
    &:focus,
    &:active {
        color: ${colors.dirtyBlue};
        outline: none;
    }
    

    &.outlined {
        border: 1px solid ${colors.blue};
        border-radius: 5px;
        padding: 5px 10px;

        &:hover,
        &:focus,
        &:active {
            border-color: ${colors.dirtyBlue};
        }
    }

    &:after {
        display: none !important;
    }
`;

export default Button;