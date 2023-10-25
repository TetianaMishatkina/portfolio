import styled from "styled-components/macro";

export const StyledPersonalInformation = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const StyledName = styled.div`
	padding: 5px;
	color: white;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
		"Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
		sans-serif;
	font-size: 25px;
`;
export const StyledEmail = styled.div`
	padding: 10px;
	font-size: 12px;
	opacity: 70%;
	& a {
		color: white;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
			"Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
			"Helvetica Neue", sans-serif;
	}
`;
export const StyledInfo = styled.div`
	padding: 10px;
	width: 100%;
	max-width: 200px;
	display: flex;
	color: white;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
		"Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
		sans-serif;
	font-size: 17px;
`;

export const StyledInfoContainer = styled.div``;
export const StyledQuestionBlock = styled.div`
	margin: 30px 0;
	display: flex;
	text-align: center;
	align-items: center;
	flex-direction: column;
	justify-content: center;
`;
export const StyledDivider = styled.div`
	width: 100%;
	height: 1px;
	background-color: white;
	opacity: 50%;
	margin: 5px 0;
`;
export const StyledQuestion = styled.div`
	color: #f5a9a9;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
		"Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
		sans-serif;
	font-size: 12px;
`;

export const StyledLocation = styled.div`
	display: flex;
	align-self: center;
	justify-content: center;
	flex-direction: row;
`;

export const StyledNameLocation = styled.div`
	font-size: 12px;
	margin-left: 5px;
	opacity: 70%;
	color: white;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
		"Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
		sans-serif;
`;

export const StyledLinkeDin = styled.div`
	padding: 10px;
	font-size: 12px;
	opacity: 70%;
	& a {
		color: white;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
			"Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
			"Helvetica Neue", sans-serif;
	}
`;
