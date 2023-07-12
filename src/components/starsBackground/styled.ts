import styled from "styled-components/macro";

export const StyledStarsContainer = styled.canvas<{ isSeeMore: boolean }>`
  position: absolute;
  z-index: 3;
  inset: 0;
  width: 100%;
  height: 100vh;
  pointer-events: none;
  ${(props) =>
    props.isSeeMore
      ? `
       animation-name: zoom;
       animation-delay: 0.3s;
       animation-duration: 2.5s;
       animation-timing-function: ease-in-out;
       animation-iteration-count: 1;
       animation-fill-mode: forwards;
       overflow: hidden;
      `
      : ""}

  @keyframes zoom {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(60);
    }
    100% {
      transform: scale(1);
    }
  }
`;
