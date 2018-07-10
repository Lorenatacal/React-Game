import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const Numbers = (props) => {
    const numberClassName = (number) => {
        if (props.selectedNumbers.indexOf(number) >=0) {
            return 'selected';

        }
    }
    return (
        <div className="card text-center">
            <div>
                {Numbers.list.map((number, i) =>
                    <span key={i} className={numberClassName(number)}
                          onClick={() => props.selectNumber(number)}>
                    {number}
                 </span>
                )}
            </div>
        </div>
    );
};
Numbers.list = _.range(1, 10);

export default Numbers;