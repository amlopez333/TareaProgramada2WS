import React from 'react';
import LetterSlot from './LetterSlot'
const LetterContainer = React.createClass({
    render: function(){
        const letters = this.props.word.split('');
        return (
            <div className = 'letter-container'>
                {letters.map(function(letter, key){
                    return(
                        <LetterSlot key = {key}  reveal = {this.props.reveal} letter = {letter} renderLetter = {this.props.renderLetter}/>
                    )
                }.bind(this))}
            </div>
        )
    }
});

export default LetterContainer;