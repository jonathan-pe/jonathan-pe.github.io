import styled from 'styled-components';
import theme from './theme';

const { colors } = theme;

const Link = styled.a`
    text-decoration: none;
    color: ${colors.blue};
    
    &.buttoned {
        cursor: pointer;
        border: 0;
        border-radius: 0;
        text-transform: none;
        background-color: transparent;
        font-size: 15px;
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
    }
`;

export default Link;