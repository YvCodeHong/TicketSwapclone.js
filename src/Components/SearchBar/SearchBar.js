import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    render() {
        return (
            <div className="SearchBar">r
                <input placeholder="Search for events, venues and cities"/>
                <button className="SearchButton">SEARCH</button>
            </div>
        )
    }
}

export default SearchBar;