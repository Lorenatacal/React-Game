import React from 'react';
import './Game.css';

class Instructions extends React.Component {
    state = {
        className: "instructions-invisible",
    };
    
    handleClick = this.handleClick.bind(this);

    handleClick() {
        this.setState({className: "instructions-visible"});
      }
    render() {
        return (
            <div>
                <button className="instructionsButon" onClick={this.handleClick}>Instructions:</button>
                <div className={this.state.className}>
                    <p> - You will receive a random number of stars;</p>
                    <p> - Match them with the specific number or with the sum of more numbers;</p>
                    <p> - Click the equal sign to see if your response is correct;</p>
                    <p> - Click again the equal sign to confirm your response;</p>
                    <p> - If you don't have any equivalent number click the redraw button;</p> 
                    <p> - Match all the numbers with the stars and you won, remain without numbers that are matching the stars and you lost.</p>
                </div>
            </div>
        )
      }  
    }

export default Instructions;