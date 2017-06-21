import React from 'react';

const levelMap = [
    {'strike-0': 0},
    {'strike-1': 1},
    {'strike-2': 2},
    {'strike-3': 3},
    {'strike-4': 4},
    {'strike-5': 5}
]
const HangmanDrawing = React.createClass({
    level: function(){
        if(this.props.won){
            return -1;
        }
        return Math.min(this.props.strikes, 6);
    },
    getClass: function(label, strikes){
        let current = '';
        if(strikes === this.level()){
            current = 'current';
        }
        return `${label} ${current}`;
    },
    render: function(){
        return(
            <div className = 'hangman-sprites'>
                {levelMap.map(function(level, key){
                    const label = Object.keys(level)[0];
                    const strike = level[label];
                    const levelClass = this.getClass(label, strike);
                    console.log(levelClass);
                    return(
                        <div key = {key} className = {levelClass}></div>
                    )
                }.bind(this))}
            </div>
        )
    }
});

export default HangmanDrawing;