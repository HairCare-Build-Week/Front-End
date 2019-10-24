import React, { useState, useEffect } from 'react';
import SearchCard from './SearchCard';
import styled from 'styled-components';
// import {testStylists} from '../testData';



function SearchPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const testStylists= [
        {
          id: 1,
          username: 'Stella',
          password: 'Stella',
          name: 'Stella',
          salon: 'Stella\'s Salon',
          email: 'stella@gmail.com',
          city: 'Dallas',
          isStylist: true,
          bio: 'Hi, I am Stella. I am a hairstylist.',
          profile_img: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
          images: [
            {
              imageUrl: 'https://images.unsplash.com/photo-1549236177-f9b0031756eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
            },
            {
              imageUrl: 'https://images.unsplash.com/photo-1554519515-242161756769?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
            },
            { imageUrl: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
            }
          ]
        },
        {
          id: 2,
          username: 'Hector',
          password: 'Hector',
          name: 'Hector',
          salon: 'Hector\'s Barber Shop',
          email: 'hector@gmail.com',
          city: 'San Diego',
          isStylist: true,
          bio: 'Wassup? I am a hairstylist in SD.',
          profile_img: 'https://images.unsplash.com/photo-1541705897117-dc56b6637c9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
          images: [
            {
              imageUrl: 'https://images.unsplash.com/photo-1522337094846-8a818192de1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
            },
            {
              imageUrl: 'https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
            },
            { imageUrl: 'https://images.unsplash.com/photo-1534297635766-a262cdcb8ee4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
            }
          ]
        }
      ];

    useEffect(()=> {
        const results = testStylists.filter(item=> item.city.toLowerCase().includes(searchTerm.toLowerCase()));
        setSearchResults(results);
    }, [searchTerm])

    const handleChange = e => {
        e.preventDefault();
        setSearchTerm(e.target.value)
    };

    const handleSubmit = e => {
        e.preventDefault();
    }

    return(
        <div>
            <SearchBar>
                <h1>Now Viewing Stylists in {searchTerm}</h1>
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
                <div className='search-results'>
                        {searchResults.map(stylist=> (
                            <SearchCard key={stylist.id} stylist={stylist}/>
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
    flex-direction: column;
    border: 1px solid #80808095;
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