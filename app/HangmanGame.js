import React from 'react';
import HangmanDrawing from './HangmanDrawing';
import Keyboard from './Keyboard';
import LetterContainer from './LetterContainer';

const HangmanGame = React.createClass({
    newGame: function(){
        const word = 'atun';
        const strikes = 0;
        const guesses = [];
        const over = false;
        const won = false;
        this.setState({word, strikes, guesses, over, won})
    },
    hasWon: function(){
        const guesses = this.state.guesses;
        const word = this.state.word.split('');
        let won = true;
        word.forEach(function(letter) {
            won = guesses.includes(letter) && won
        }.bind(this));
        return won;
    },
    hasLost: function(){
        let strikes = this.state.strikes;
        if(strikes >= 6){
            strikes = 6;
            return true
        }
    },
    checkLetter: function(letter){
        const word = this.state.word;
        let strikes = this.state.strikes;
        const guesses = this.state.guesses;
        let over = this.state.over;
        let won = this.state.won;
        guesses.push(letter);
        if(!word.includes(letter)){
            strikes++;
            over = this.hasLost();
        }
        else{
            won = this.hasWon();
        }
        this.setState({strikes, guesses, over, won});
    },
    getTitle: function(){
        if (this.state.won) {
            return 'YOU WON!';
        } 
        if (this.state.over) {
            return 'Game Over';
        }
        return 'Hang Man';
    },
    getClass: function(){
        if(!this.state.over && !this.state.won){
            return 'new-game';
        }
        return 'new-game shown';
    },
    componentWillMount: function(){
        this.newGame();
    },
    render: function(){
        return (
            <div>
                <h1>{this.getTitle}</h1>
                
                <HangmanDrawing
                won = {this.state.won}
                strikes = {this.state.strikes}/>
            
                <LetterContainer
                word = {this.state.word}
                reveal = {this.state.over}
                guesses = {this.state.guesses}/>
                
                <Keyboard
                checkLetter = {this.checkLetter}
                enabled = {!this.state.over && !this.state.won}
                />
                
                <button 
                className = {this.getClass()}
                disabled = {!this.state.over && !this.state.won}
                onClick = {this.newGame}>
                New Game
                </button>
            </div>
        )
    }
});
export default HangmanGame;