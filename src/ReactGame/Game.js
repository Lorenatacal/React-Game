import React from 'react';
import './Game.css';
import Answer from './Answer';
import GameButton from './GameButton';
import Stars from './Stars';
import Numbers from './Numbers';


class Game extends React.Component {
    state = {
        selectedNumbers: [],
        randomNumberOfStars: 1 + Math.floor(Math.random()*9),
    };

    selectNumber = (clickedNumber) => {
        if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0) { return; }
        this.setState(prevState => ({
           selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
        }));
    };

    unselectNumber = (clickedNumber) => {
        this.setState(prevState => ({
            selectedNumbers: prevState.selectedNumbers
                                     .filter(number => number !== clickedNumber)
        }));
    };

    render() {
        const { selectedNumbers, randomNumberOfStars } = this.state;
        return (
            <div className="container">
                <h3>Play Nine</h3>
                <div className="row">
                    <Stars numberOfStars={randomNumberOfStars}/>
                    <GameButton selectedNumbers={selectedNumbers}/>
                    <Answer selectedNumbers={selectedNumbers}
                            unselectNumber={this.unselectNumber} />
                </div>
                <Numbers selectedNumbers={selectedNumbers} 
                         selectNumber={this.selectNumber}/>
            </div>
        )
    }
}

export default Game;