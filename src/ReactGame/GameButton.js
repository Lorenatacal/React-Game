import React from 'react';
import PropTypes from 'prop-types';

const GameButton = (props) => {
    let gameButton;
    switch(props.answerIsCorrect) {
        case true:
         gameButton =
            <button className="btn btn-success" onClick={props.acceptAnswer}>
                <i className="fa fa-check"></i>
            </button>;
         break;
        case false:
         gameButton =
            <button className="btn btn-danger">
                <i className="fa fa-times"></i>
            </button>;
         break;
        default:
        gameButton =
            <button className="btn" 
                    onClick={props.checkAnswer}
                    disabled={props.selectedNumbers.length === 0}>
                =
            </button>;
         break;
    }
    return (
        <div className="col-2 text-center">
            {gameButton}
            <br /><br />
            <button className="btn btn-warning btn-sm" onClick={props.redraw}
                    disabled={props.redraws === 0}>
                <i className="fa fa-refresh"></i> {props.redraws}
            </button>
        </div>
    );
}

export default GameButton;