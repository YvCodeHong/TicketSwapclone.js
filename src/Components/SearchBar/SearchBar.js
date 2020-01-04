import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           venue: '', 
        };
        this.handleEventChange = this.handleEventChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(event) {
        this.props.searchTicket(this.state.venue);
        event.preventDefault();
    }

    handleEventChange(event) {
        this.setState({ venue: event.target.value });
    }

    render() {
        return (
            <div className="SearchBar">
                The safest way to buy and sell e-tickets
                <input placeholder="Search for events, venues and cities" onChange={this.handleEventChange}/>
                <button className="SearchButton" onClick={this.handleSearch}>SEARCH</button>
            </div>
        )
    }
}

export default SearchBar;
