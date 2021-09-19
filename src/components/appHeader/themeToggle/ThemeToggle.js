import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrapper = styled.div`
	cursor: pointer;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
	font-size: 1.8rem;
	color: ${({ theme }) => theme.fontColor};
	margin-right: 1rem;
	transition: all 0.5s linear;
`;

// const Label = styled.span`
// 	color: ${({ theme }) => theme.fontColor};
// 	transition: all 0.5s linear;
// 	font-size: 2rem;
// `;

const ThemeToggle = ({ theme, toggleTheme }) => {
	return (
		<Wrapper onClick={toggleTheme}>
			<StyledFontAwesomeIcon
				icon={["far", theme === "light" ? "moon" : "sun"]}
			/>
			{/* <Label>{theme === "light" ? "Dark Mode" : "Light Mode"}</Label> */}
		</Wrapper>
	);
};

export default ThemeToggle;
