import styled from "styled-components/macro";

export const StyledLeftSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  min-width: 400px;
  height: 100vh;
  z-index: 2;
  box-shadow: 15px 0px 10px 0px #f7e0db;
  background-color: #f7e0db;
`;

export const StyledRightSide = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 5px;
  padding-left: 50px;

  justify-content: center; /* Horizontally centers the items */
  align-items: center;
  flex: 2;
  min-width: 400px;
  height: 100vh;
  background-color: #d5f5ff;
`;

export const StyledMain = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  height: 100vh;
`;
