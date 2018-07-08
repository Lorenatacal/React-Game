import React, { Component } from 'react';
import IncrementButtons from './Buttons/IncrementButtons';
import Card from './UserInput/Card';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
         <h1>React Game</h1>
          <IncrementButtons />
        </div>
        <div>
          <Card />
        </div>
      </div>
    );
  };
}

export default App;