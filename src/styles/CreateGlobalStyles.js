import { createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* Below animations are for modal created using React-Modal */
  .ReactModal__Overlay {
    transition: transform 300ms ease-in-out;
    transition-delay: 100ms;
    transform: scale(0);
  }
  .ReactModal__Overlay--after-open {
    transform: scale(1);
  }
  .ReactModal__Overlay--before-close {
    transform: scale(0);
  }
`;


export default GlobalStyles