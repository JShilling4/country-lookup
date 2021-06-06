import styled, { keyframes } from "styled-components";
import MainNavigation from "../mainNavigation/MainNavigation";
import logo from "../../assets/images/logo.svg";

const Header = styled.header`
	background-color: #282c34;
	height: 10rem;
	font-size: calc(10px + 2vmin);
	color: white;
`;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	padding: 0 2rem;
	justify-content: space-between;
	max-width: 1400px;
	margin: 0 auto;
`;

const spin = keyframes`
    from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;

const AppLogo = styled.img`
	height: 100px;
	pointer-events: none;
	animation: ${spin} infinite 20s linear;
`;

const AppHeader = () => {
	return (
		<Header>
			<Wrapper>
				<AppLogo src={logo} alt="logo" />
				<MainNavigation />
			</Wrapper>
		</Header>
	);
};

export default AppHeader;
