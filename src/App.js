import React, { Component } from 'react';
import IncrementButtons from './Buttons/IncrementButtons';
import CardList from './UserInput/CardList';
import Card from './UserInput/Card';
import Form from './UserInput/Form';
import './App.css';

class App extends React.Component { // very good job babes
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };

    this.addNewCard = this.addNewCard.bind(this);
  }

  addNewCard = (cardInfo) => {
    this.setState(prevState => ({
      cards: prevState.cards.concat(cardInfo)
    }));
  };

  render() {
    return (
      <div>
        {/* <div>
         <h1>React Game</h1>
          <IncrementButtons />
        </div> */}
        <div>
          <Form onSubmit={this.addNewCard} />
          <CardList cards={this.state.cards} />
          
        </div>
      </div>
    );
  };
}

export default App;