import React, { Component } from 'react';
import './App.css';
import MemoryCard from './MemoryCard.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p id ="title">
            Memory Game
          </p>
          <div id ="subtitle">
            Match cards to win
          </div>
        </header>
        <div>  
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        </div>
        <div>  
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        </div>
        <div>  
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        </div>
        <div>  
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        </div>
      
      </div>
    );
  }
}

export default App;
