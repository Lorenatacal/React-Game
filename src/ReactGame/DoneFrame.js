import React from 'react';
import PropTypes from 'prop-types';

const DoneFrame = (props) => {
    return (
        <div className="text-center">
            <h2>{props.doneStatus}</h2>
            <button className="btn btn-secondary" onClick={props.resetGame}>PlayAgain</button>
        </div>
    );
};

export default DoneFrame;