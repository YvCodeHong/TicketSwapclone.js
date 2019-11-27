import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';

class App extends React.Component {
  render() {
    return (
      <div class="App">
        <h1>TicketSwap</h1>
          <SearchBar />
      </div>
    )
  }
}

export default App;
