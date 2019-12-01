import React from 'react';
import './App.css';
import Toolbar from '../Toolbar/Toolbar';

import SearchBar from '../SearchBar/SearchBar';

class App extends React.Component {
  render() {
    return (
      <div class="App">
        <Toolbar />
        <main style={{marginTop: '54px'}}></main>
        <p>The safest way to buy and sell e-tickets</p>
           <SearchBar />
      </div>
    )
  }
}

export default App;

