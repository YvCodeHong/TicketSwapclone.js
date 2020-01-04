import React from 'react';
import './App.css';
import Toolbar from '../Toolbar/Toolbar';
import EventsList from '../EventsList/EventsList';
import SearchBar from '../SearchBar/SearchBar';

class App extends React.Component {
  searchTicket(venue) {
    console.log(`You are searching for ${venue}`);
  }
  render() {
    return (
      <div class="App">
          <Toolbar />
        <main style={{marginTop: '56px'}}></main>
           <SearchBar searchTicket={this.searchTicket} />
           <EventsList />
      </div>
    )
  }
}

export default App;

