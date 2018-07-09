import React, { Component } from 'react';
import IncrementButtons from './Buttons/IncrementButtons';
import CardList from './UserInput/CardList';
import Card from './UserInput/Card';
import './App.css';

class App extends React.Component { // very good job babes
  constructor(props) {
    super(props);
    this.myMethodName = myMethodName.bind(this);
  }
  render() {
    console.log(this.props.cards);
    return (
      <div>
        <div>
         <h1>React Game</h1>
          <IncrementButtons />
        </div>
        <div>
          {this.props.cards.map((card, index) => {
            return (
              <Card 
                key={index}
                name={card.name} 
                avatar_url={card.avatar_url} 
                company={card.company} 
              />
            )
            }
          )}
        </div>
      </div>
    );
  };
}

export default App;