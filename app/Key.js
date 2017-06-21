import React from 'react';

const Key = React.createClass({
    handleClick: function(evt){
        evt.target.disabled = true;
        return this.props.checkLetter(evt.target.value);
    },
    render: function(){
        const letter = this.props.letter;
        return(
            <button value = {letter} onClick = {this.handleClick} disabled = {!this.props.enabled}>{letter}</button>
        )
    }
});

export default Key;