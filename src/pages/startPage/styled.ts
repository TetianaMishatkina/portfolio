import styled from "styled-components/macro";

export const StyledStartPage = styled.div<{ isAnimated: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 100vh;
  opacity: ${(props) => (props.isAnimated ? "0" : "1")};
  transition: opacity 0.5s;
`;

export const StyledUserAvatar = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;
  & img {
    width: 170px;
    height: 170px;
    object-fit: cover;
    border-radius: 50%;
  }
`;
export const StyledShortDescriptionBox = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 40px 0;
`;
export const StyledShortDescription = styled.div`
  font-weight: 700;
  font-size: 30px;
  color: white;
`;

export const StyledButton = styled.button`
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  background: transparent;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
  width: 12rem;
  height: auto;

  &:hover {
    .circle {
      width: 100%;
      .icon {
        &.arrow {
          background: black;
          transform: translate(1rem, 0);
        }
      }
    }
    .button-text {
      color: black;
    }
  }
`;
export const StyledButtonCircle = styled.span`
  position: relative;
  display: block;
  margin: 0;
  width: 3rem;
  height: 3rem;
  background: white;
  border-radius: 1.625rem;
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
`;
export const StyledIconArrow = styled.span`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  background: white;
  left: 0.625rem;
  width: 1.125rem;
  height: 0.125rem;
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);

  &::before {
    position: absolute;
    content: "";
    top: -5px;
    right: 0.0625rem;
    width: 0.625rem;
    height: 0.625rem;
    border-top: 0.125rem solid black;
    border-right: 0.125rem solid black;
    transform: rotate(45deg);
  }
`;
export const StyledButtonText = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0.75rem 0;
  margin: 0 0 0 1.85rem;
  color: white;
  font-weight: 700;
  line-height: 1.6;
  text-align: center;
  text-transform: uppercase;
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
`;
