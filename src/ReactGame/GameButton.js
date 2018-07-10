import React from 'react';
import PropTypes from 'prop-types';

const GameButton = (props) => {
    return (
        <div className="col-2">
            <button className="btn" disabled={props.selectedNumbers.length === 0}>
                =
            </button>
        </div>
    );
}

export default GameButton;