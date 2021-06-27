import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import CountryCard from "../../components/countryCard/CountryCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// STYLES

const PageContainer = styled.div`
    padding: 12rem 2rem;
    background-color: ${({ theme }) => theme.pageBgColor};
    transition: all 0.5s linear;
`;

const ContentWrapper = styled.div`
    max-width: 1400px;
    margin: 0 auto;
`;

const QueryContainer = styled.div`
    display: inline-block;
    position: relative;
    margin: 0 0 2rem 4rem;
`;

const TextInput = styled.input`
    height: 4rem;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 0 0 0 1rem;
`;

const SearchInput = styled(TextInput)`
    width: 30rem;
`;

const SearchSubmitButton = styled.button`
    position: absolute;
    right: -7rem;
    top: 50%;
    transform: translateY(-50%);
    height: 4rem;
    width: 6rem;
    background-color: #0fc4ec;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    font-size: 1.8rem;
    color: #fff;
    transition: all 0.5s linear;
`;

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

// HTML

const Home = () => {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [query, setQuery] = useState("");

    const fetchAllCountries = () => {
        // https://restcountries.eu/#api-endpoints-all
        return axios.get("https://restcountries.eu/rest/v2/all");
    };

    const fetchCountryByName = (query) => {
        // https://restcountries.eu/#api-endpoints-name
        return axios.get(`https://restcountries.eu/rest/v2/name/${query}`);
    };

    const handleQueryChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearchSubmit = () => {
        fetchCountryByName(query)
            .then((res) => {
                const results = res.data;
                const matches = results.map((result) =>
                    countries.find((country) => country.alpha3Code === result.alpha3Code)
                );
                setFilteredCountries(matches);
				setQuery("");
            })
            .catch(() => setFilteredCountries(countries));
    };

    const handleKeypress = (e) => {
        // enter key submit
        if (e.which === 13) {
            handleSearchSubmit();
        }
    };

    useEffect(() => {
        fetchAllCountries().then((res) => {
            const data = res.data;
            setCountries(data);
            setFilteredCountries(data);
        });
    }, []);

    return (
        <PageContainer>
            <ContentWrapper>
                <QueryContainer>
                    <SearchInput
                        type='text'
                        placeholder='Search for a country...'
                        value={query}
                        onChange={handleQueryChange}
                        onKeyPress={handleKeypress}
                    />
                    <SearchSubmitButton onClick={handleSearchSubmit}>
                        <StyledFontAwesomeIcon icon={["fas", "search"]} />
                    </SearchSubmitButton>
                </QueryContainer>
                <CardContainer>
                    {filteredCountries.map((country) => (
                        <CountryCard key={country.alpha3Code} country={country} />
                    ))}
                </CardContainer>
            </ContentWrapper>
        </PageContainer>
    );
};

export default Home;
