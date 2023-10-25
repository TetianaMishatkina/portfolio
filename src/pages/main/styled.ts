import styled from "styled-components/macro";

const mobileBreakpoint = "768px";

export const StyledLeftSide = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;
	position: relative;
	z-index: 3;
	min-width: 300px;
	height: 100vh;
	background: #170d25;
	box-shadow: 15px 0px 10px 0px #170d25;

	@media (max-width: ${mobileBreakpoint}) {
		height: auto;
		min-width: 100%;
		box-shadow: none;
	}
`;

export const StyledRightSide = styled.div`
	gap: 1px;
	justify-content: center;
	align-items: center;
	flex: 3;
	min-width: 500px;
	height: 100vh;
	overflow: scroll;

	@media (max-width: ${mobileBreakpoint}) {
		height: auto;
		min-width: 100%;
	}
`;

export const StyledMain = styled.div`
	display: flex;
	width: 100%;
	flex-wrap: wrap;
	height: 100vh;
	background: #170d25;
	overflow: hidden;

	@media (max-width: ${mobileBreakpoint}) {
		flex-direction: column;
		height: auto;
		overflow: visible;
	}
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

	@media (max-width: ${mobileBreakpoint}) {
		flex-direction: column;
	}
`;
