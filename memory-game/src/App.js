import React, { Component } from 'react';
import './App.css';
import MemoryCard from './MemoryCard.js';


generateDeck(){
  
  symbols = [a, ß, £, §, •, $, +, ø];
  deck = [];

  for(var i = 1; i <= 16, i++){
    card = {
      isFlipped: false,
      Symbol: symbols[i%8];
    } // End of Card Object
    deck.push(card);
    shuffle(deck)
    return deck
  }; // End of For Loop
}; // End of generateDeck function

// Shuffle function
function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}



class App extends Component {
  constructor(props){
    super(props);
      this.deck = generateDeck();
      this.pickedCards = [];
  }

  render() {
    var cardsJSX = this.state.deck.map((card, index)=>{
      return <MemoryCard />
    });


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
        <br></br>
        <div>  
        {cardsJSX.slice(0,4)}
        </div>
        <div>  
        {cardsJSX.slice(4,8)}
        </div>
        <div>  
        {cardsJSX.slice(8,12)}
        </div>
        <div>  
        {cardsJSX.slice(12,16)}
        </div>
      
      </div>
    );
  }
}

export default App;
