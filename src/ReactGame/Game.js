import React from 'react';
import './Game.css';
import Answer from './Answer';
import GameButton from './GameButton';
import Stars from './Stars';
import Numbers from './Numbers';

class Game extends React.Component {
    render() {
        return (
            <div className="container">
                <h3>Play Nine</h3>
                <div className="row">
                    <Stars />
                    <GameButton />
                    <Answer />
                </div>
                <Numbers />
            </div>
        )
    }
}

export default Game;