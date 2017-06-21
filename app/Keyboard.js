import React from 'react';
import Key from './Key';

const Keyboard = React.createClass({
    render: function(){
        const row1 = 'abcdefghijklm'.split('');
        const row2 = 'nopqrstuvwxyz'.split('');
        return(
            <div className = 'keyboard'>
                <div className = 'button-row'>
                    {row1.map(function(letter, key){
                        return (
                            <Key key = {key} letter = {letter} checkLetter = {this.props.checkLetter} enabled = {this.props.enabled} />
                        )
                    }.bind(this))}
                </div>
                <div className = 'button-row'>
                    {row2.map(function(letter, key){
                        return (
                            
                            <Key key = {key} letter = {letter} checkLetter = {this.props.checkLetter} enabled = {this.props.enabled} />
                        )
                    }.bind(this))}
                </div>
            </div>
        )
    }
});

export default Keyboard;