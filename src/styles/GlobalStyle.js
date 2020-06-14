import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import Transitions from './Transitions';

const { colors, fonts, fontSizes } = theme;

const GlobalStyle = createGlobalStyle`
    html {
        scroll-behavior: smooth;
        box-sizing: border-box;
        width: 100%;
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        width: 100%;
        min-height: 100%;
        overflow-x: hidden;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        background-color: ${colors.darkBlue};
        color: ${colors.grey};
        font-family: ${fonts.Poppins};
        line-height: 1.2;
        font-weight: 400;
        font-size: ${fontSizes.normal};

        &.hidden {
            overflow: hidden;
        }

        &.blur {
            overflow: hidden;
            #root > #content > * {
                filter: blur(5px) brightness(0.7);
                transition: ${theme.transition};
                pointer-events: none;
                user-select: none;
            }
        }
    }
    
    section {
        padding: 150px 0px;
        margin: 0 auto;
        max-width: 1000px;
    }

    h1 {
        font-size: ${fontSizes.h1};
        font-weight: 700;
        color: ${colors.blue};
    }

    h2 {
        font-size: ${fontSizes.h2};
        font-weight: 700;
        color: ${colors.white};
    }

    h3 {
        font-size: ${fontSizes.h3};
        font-weight: 700;
        color: ${colors.white};
    }

    a {
        color: ${colors.blue};
        text-decoration: none;
        &:hover,
        &:focus {
            color: ${colors.dirtyBlue};
            text-decoration: none;
        }
    }

    button {
        text-transform: none;
        color: ${colors.blue};
        &:hover {
            color: ${colors.dirtyBlue};
        }
        font-size: ${fontSizes.small};

        & .outlined {
            border-color: ${colors.blue};
            &:hover {
                border-color: ${colors.dirtyBlue};
            }
        }
    }

    ul {
        display: grid;
        overflow: hidden;

        li {
            margin-top: 0;
            margin-bottom: 0;
            font-size: ${fontSizes.small};
        }
    }

    ${Transitions}
`;

export default GlobalStyle;