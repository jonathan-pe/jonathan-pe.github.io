import { css } from 'styled-components';
import theme from './theme';

// https://reactcommunity.org/react-transition-group/css-transition

const Transitions = css`
  .fade-enter {
    opacity: 0;
    transition: opacity 1000ms ${theme.easing};
  }

  .fade-enter-active {
    opacity: 1;
    transition: opacity 1000ms ${theme.easing};
  }
`;

export default Transitions;