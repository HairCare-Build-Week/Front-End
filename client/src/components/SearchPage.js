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
                <h1>Now Viewing Stylists in {data.city}.</h1>
                <form onSubmit={handleSubmit}>
                    <input
                    id='city'
                    type='text'
                    name='textfield'
                    placeholder='Enter City'
                    value={searchTerm}
                    onChange={handleChange}/>
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
    margin: 0 auto;  
    width: 80%;
    display: flex;
`;

const SearchBar = styled.form`
    width: 80%;
    margin: 10px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    form{
        border-bottom: 1.5px solid gray;
        height: 30px;

        button{
            background: none;
            border: 1px solid black;
            padding: 7px;
        }
        input{
            border: none;
            width: 200px;
        }
    }
`;