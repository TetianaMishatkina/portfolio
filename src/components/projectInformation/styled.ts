import styled from "styled-components/macro";

export const StyledProjectInformation = styled.div``;

export const StyledProjectName = styled.div`
  padding: 10px;
  font-size: 20px;
  font-weight: 500;
  display: flex;
`;

export const StyledProjectAvatar = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;
  & img {
    width: 75px;
    height: 75px;
    object-fit: cover;
    border-radius: 50%;
  }
`;
export const StyledProjectInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const StyledQuestionBlock = styled.div`
  margin: 15px 0;
  display: flex;
  width: 100%;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
export const StyledDivider = styled.div`
  width: 100%;
  max-width: 300px;
  height: 1px;
  background-color: black;
  margin: 5px 0;
`;
export const StyledQuestion = styled.div`
  font-size: 11px;
  color: #65142f;
`;

export const StyledProjectDescription = styled.div`
  padding: 10px;
  width: 100%;
  max-width: 300px;
  display: flex;
  font-size: 14px;
`;
export const StyledProjectLink = styled.a`
  padding: 10px;
  width: 100%;
  max-width: 300px;
  font-size: 12px;
  opacity: 70%;
  color: #752f62;
`;