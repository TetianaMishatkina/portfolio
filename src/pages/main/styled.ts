import styled from "styled-components/macro";

export const StyledLeftSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  position: relative;
  z-index: 2;
  min-width: 300px;
  height: 100vh;
  background: #170d25;
  box-shadow: 15px 0px 10px 0px #170d25;
`;

export const StyledRightSide = styled.div`
  //display: grid;
  //grid-template-columns: repeat(2, 1fr);
  //grid-template-rows: repeat(2, 1fr);
  gap: 1px;
  //padding-left: 50px;
  justify-content: center; /* Horizontally centers the items */
  align-items: center;
  flex: 3;
  min-width: 500px;
  height: 100vh;
  overflow: scroll;
`;

export const StyledMain = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  height: 100vh;
  background: #170d25;
  overflow: hidden;
`;

export const StyledMock = styled.div`
  width: 100%;
  z-index: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: scroll;
`;
