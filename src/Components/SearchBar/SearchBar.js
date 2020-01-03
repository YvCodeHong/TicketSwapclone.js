import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           venues: '', 
        };
        this.handleEventChange = this.handleEventChange.bind(this);
    }

    handleEventChange(event) {
        this.setState({ venue: event.target.value });
    }

    render() {
        return (
            <div className="SearchBar">
                The safest way to buy and sell e-tickets
                <input placeholder="Search for events, venues and cities"/>
                <button className="SearchButton">SEARCH</button>
            </div>
        )
    }
}

export default SearchBar;
