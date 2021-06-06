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

const About = () => {
	return (
		<PageContainer>
			<PageHeading>About Page</PageHeading>
		</PageContainer>
	);
};

export default About;
