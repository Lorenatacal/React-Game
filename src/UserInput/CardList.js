import React from 'react';
import Card from './Card';

const CardList = (props) => {
    return (
        <div>
            <Card 
                name="Paul O’Shannessy"
                avatar_url="https://avatars1.githubusercontent.com/u/8445?v=4"
                company="Facebook"
            />
        </div>
    );
}


export default CardList;