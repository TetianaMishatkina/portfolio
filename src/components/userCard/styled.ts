import styled from "styled-components/macro";

export const StyledUserCard = styled.div`
  display: flex;
  width: 100%;
  max-width: 350px;
  height: auto;
  flex-direction: column;
  border-radius: 20px;
`;

export const StyledAvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  & img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const StyledAboutSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
