import React from 'react';
import './App.css';
import Toolbar from '../Toolbar/Toolbar';

import SearchBar from '../SearchBar/SearchBar';

class App extends React.Component {
  render() {
    return (
      <div class="App">
          <Toolbar />
        <main style={{marginTop: '56px'}}></main>
           <SearchBar />
      </div>
    )
  }
}

export default App;

