import styled from "styled-components";


const PageContainer = styled.div`
	padding: 12rem 2rem;
	text-align: center;
	background-color: ${({ theme }) => theme.pageBgColor};
	min-height: calc(100vh - 9rem);
	transition: all 0.5s linear;
`;

const Home = () => {
	return (
		<PageContainer>
			<div></div>
		</PageContainer>
	);
};

export default Home;
