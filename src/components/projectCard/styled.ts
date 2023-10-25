import styled from "styled-components/macro";

export const StyledProjectCard = styled.div<{ languageUrl: string }>`
	display: flex;
	width: 100%;
	flex-direction: column;
	border-radius: 20px;
	height: 100vh;
	justify-content: center;
	padding: 10px;
	align-items: center;
	position: relative;
	box-sizing: border-box;

	&::before {
		position: absolute;
		inset: 0;
		z-index: -1;
		content: "";
		background-image: url(${(props) => props.languageUrl});
		background-attachment: fixed;
		background-size: 100px;
		opacity: 10%;
		width: 100%;
		height: 100%;
		pointer-events: none;

		background-repeat: no-repeat;
		background-position: bottom;
		background-size: cover;
	}
`;

export const StyledAboutSection = styled.section`
	background-color: rgba(255, 255, 255, 1);
	width: 100%;
	max-width: 800px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 10px;
	box-sizing: border-box;
	border-radius: 22px;
`;
