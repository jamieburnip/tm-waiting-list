import { keyframes } from "styled-components";

export const blink = keyframes`
  0% {
    opacity: 0.2;
  }

  20% {
    opacity: 1;
  }
  
  100% {
    opacity: 0.2;
  }
`;
