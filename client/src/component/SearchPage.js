import React, { useState, useEffect } from 'react';
import SearchCard from './SearchCard';
import styled from 'styled-components';

function SearchPage(data) {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    // useEffect(()=> {
    //     const results = data.filter(item=> item.toLowerCase().includes(searchTerm.toLowerCase()));
    //     setSearchResults(results);
    // }, [searchTerm])

    const handleChange = e => {
        setSearchTerm(e.target.value)
    };

    const handleSubmit = e => {
        e.preventDefault();
    }

    return(
        <div>
            <SearchBar>
                <h1>Search Page</h1>
            <form>
                <input
                id='city'
                type='text'
                name='textfield'
                placeholder='Enter City'
                value={searchTerm}
                onChange={handleChange}/>
                <button onClick={handleSubmit}>Search</button>
            </form>
            </SearchBar>

            <SearchContainer>
                <SearchCard/>
                <div className='search-results'>
                        {searchResults.map(stylist=> (
                            <SearchCard key = {stylist.id}/>
                        ))}
                </div>
            </SearchContainer>
        </div>
    )
}

export default SearchPage;


const SearchContainer = styled.div`
    border: 2px solid red;   
`;

const SearchBar = styled.form`
    width: 45%;
    margin: 0 auto;
`;