import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';

class App extends React.Component {
  render() {
    return (
      <div class="App">
      <style></style>
        <ul>
          <li class="logo"><a href="#">TicketSwap</a></li>
          <li class="works"><a href="#">How it works</a></li>
          <li class="login"><a href="#">Login</a></li>
          <li class="item button"><a href="#">Sell Tickets</a></li>
        </ul>
          <h1>The safest way to buy and sell e-tickets</h1>
           <SearchBar />
      </div>
    )
  }
}

export default App;
