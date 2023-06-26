import styled from "styled-components/macro";

export const StyledAvatar = styled.div`
  display: flex;
  margin: 20px 0;
  & img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 50%;
  }
`;
