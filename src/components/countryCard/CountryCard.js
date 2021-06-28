import styled from "styled-components";

// STYLES

const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.elementBgColor};
    margin: 4rem 4rem;
    border-radius: 10px;
    max-width: 27rem;
    box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.3);
	transition: background-color .5s linear;
`;

const FlagContainer = styled.div``;

const FlagImage = styled.img`
    object-fit: cover;
    height: 15rem;
    width: 27rem;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

const DetailContainer = styled.div`
    padding: 1rem 2rem 2rem;
    text-align: left;
`;

const Detail = styled.p`
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.fontColor};
	opacity: .9;
`;

const DetailLabel = styled.span`
    color: #333;
    font-weight: 600;
    color: ${({ theme }) => theme.fontColor};
`;

const CountryName = styled.h2`
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
	opacity: .9;
    color: ${({ theme }) => theme.fontColor};
`;

// HTML
const CountryCard = (props) => {
    const { country } = props;
    return (
        <Wrapper>
            <FlagContainer>
                <FlagImage src={country.flag} alt='' />
            </FlagContainer>
            <DetailContainer>
                <CountryName>{country.name}</CountryName>
                <Detail>
                    <DetailLabel>Population:</DetailLabel> {country.population.toLocaleString()}
                </Detail>
                <Detail>
                    <DetailLabel>Region:</DetailLabel> {country.region}
                </Detail>
                <Detail>
                    <DetailLabel>Capital:</DetailLabel> {country.capital}
                </Detail>
            </DetailContainer>
        </Wrapper>
    );
};

export default CountryCard;
