import styled from "styled-components";

const PageContainer = styled.div`
	padding: 12rem 2rem;
	text-align: center;
	background-color: gray;
	min-height: calc(100vh - 10rem);
`;

const PageHeading = styled.div`
	color: #fff;
	font-size: 5rem;
`;

const Home = () => {
	return (
		<PageContainer>
			<PageHeading>Home Page</PageHeading>
		</PageContainer>
	);
};

export default Home;
