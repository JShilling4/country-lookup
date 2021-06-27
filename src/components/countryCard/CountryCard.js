import styled from "styled-components";

// STYLES

const Wrapper = styled.div`
    background-color: #fff;
    margin: 4rem 4rem;
    border-radius: 10px;
    max-width: 27rem;
    box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.3);
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

const DetailLabel = styled.span`
    color: #333;
    font-weight: 600;
`;

const CountryName = styled.h2`
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
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
                <p className='detail'>
                    <DetailLabel>Population:</DetailLabel> {country.population.toLocaleString()}
                </p>
                <p className='detail'>
                    <DetailLabel>Region:</DetailLabel> {country.region}
                </p>
                <p className='detail'>
                    <DetailLabel>Capital:</DetailLabel> {country.capital}
                </p>
            </DetailContainer>
        </Wrapper>
    );
};

export default CountryCard;
