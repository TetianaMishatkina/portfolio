import styled from "styled-components/macro";

export const StyledProjectInformation = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:center ;
`;



export const StyledProjectName = styled.div`
  padding: 10px;
  font-size: 25px;
  font-weight: 500;
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
`;

export const StyledProjectAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 30px;
  & img {
    width: 75px;
    height: 75px;
    object-fit: cover;
    border-radius: 50%;
  }
`;
export const StyledProjectInfoContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
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
  max-width: 500px;
  height: 1px;
  background-color: black;
  margin: 5px 0;
`;
export const StyledQuestion = styled.div`
  font-size: 14px;
  color: #65142f;
`;

export const StyledProjectDescription = styled.div`
  padding: 10px;
  width: 100%;
  max-width: 500px;
  display: flex;
  font-size: 16px;
`;
export const StyledProjectLink = styled.a`
  padding: 10px;
  width: 100%;
  max-width: 500px;
  font-size: 12px;
  opacity: 70%;
  color: #752f62;
`;

export const StyledProjectVisualozation = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
margin: 0 30px;
 & img{
  border-radius: 10px;
  width:300px;
  margin:0 autopx;
 }
`

export const StyledProjectContent = styled.div`
padding:0 40px;
box-sizing: content-box;
width:100%;`