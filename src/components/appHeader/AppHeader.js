import styled from "styled-components";
import logo from "../../assets/images/logo.png";
import ThemeToggle from "./themeToggle/ThemeToggle.js";

const Header = styled.header`
	background-color: ${({ theme }) => theme.headerBgColor};
	height: 9rem;
	font-size: calc(10px + 2vmin);
	color: white;
	transition: all 0.5s linear;
`;

const Container = styled.div`
	display: flex;
	align-items: center;
	padding: 0 2rem;
	justify-content: space-between;
	max-width: 1400px;
	margin: 0 auto;
	height: 100%;
`;

const LeftHeader = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
`;

const AppLogo = styled.img`
	height: 75px;
`;

const AppTitle = styled.span`
	color: ${({ theme }) => theme.fontColor};
	font-weight: 800;
	transition: all 0.5s linear;
`;

const AppHeader = ({ theme, toggleTheme }) => {
	return (
		<Header>
			<Container>
				<LeftHeader>
					<AppLogo src={logo} alt="logo" />
					<AppTitle>Country Lookup</AppTitle>
				</LeftHeader>
				<ThemeToggle theme={theme} toggleTheme={toggleTheme} />
			</Container>
		</Header>
	);
};

export default AppHeader;
