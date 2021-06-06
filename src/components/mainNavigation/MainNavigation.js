import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
	display: flex;
	align-items: center;
`;

// const Link = styled.a`
// 	color: #fff;
// 	margin: 0 0 0 2rem;
// `;

const MainNavigation = () => {
	return (
		<Nav>
			<Link to="/about">About</Link>
			<Link to="/">link2</Link>
			<Link to="/">link3</Link>
			<Link to="/">link4</Link>
		</Nav>
	);
};

export default MainNavigation;
