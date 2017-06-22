import React from 'react';
import HangmanDrawing from './HangmanDrawing';
import Keyboard from './Keyboard';
import LetterContainer from './LetterContainer';

const HangmanGame = React.createClass({
    url: 'http://titanic.ecci.ucr.ac.cr:80/~eb43885/tp2/HangmanServiceDocumentLiteral/',
    newGame: function(){
        const pl = new SOAPClientParameters();
        //const url = 'http://titanic.ecci.ucr.ac.cr:80/~eb43885/tp2/HangmanServiceDocumentLiteral/';
        SOAPClient.invoke(this.url, 'getWord', pl, true, function(result){
            console.log('Palabra: ' + result);
            const word = result;
            this.setState({word})
        }.bind(this));
        const word = '';
        const strikes = 0;
        const lost = false;
        const won = false;
        const renderLetter = {};
        this.setState({word, strikes, lost, won, renderLetter})
    },
    hasWon: function(){
        var pl = new SOAPClientParameters();
        SOAPClient.invoke(this.url, 'checkWon', pl, true, function(result){

            const won = result === 'true';
            console.log(result);
            if(won){
                return this.setState({won});
            }

        }.bind(this));
    },
    hasLost: function(strikes){
        var pl = new SOAPClientParameters();
        SOAPClient.invoke(this.url, 'checkLost', pl, true, function(result){

            const lost = result === 'true';
            if(lost){
                return this.setState({lost});
            }

        }.bind(this));
    },
    setStrikes: function(){
        var pl = new SOAPClientParameters();
        SOAPClient.invoke(this.url, 'getWrongCount', pl, true, function(result){
            const strikes = parseInt(result);
            return this.setState({strikes})
        }.bind(this));
    },
    checkLetter: function(letter){
        
        let renderLetter = this.state.renderLetter

        var pl = new SOAPClientParameters();
        pl.add('letter', letter);
        SOAPClient.invoke(this.url, 'checkGuess', pl, true, function(result){
            const guess = result === 'true';
            if(guess){
                renderLetter[letter] = true;
                this.hasWon();
                return this.setState({renderLetter});
            }
            this.setStrikes()
            return this.hasLost();
	    }.bind(this));
    },
    getTitle: function(){
        if (this.state.won) {
            return 'GANASTES!';
        } 
        if (this.state.lost) {
            return 'CROMASTES!';
        }
        return 'Ahorcado';
    },
    getClass: function(){
        if(!this.state.lost && !this.state.won){
            return 'new-game';
        }
        return 'new-game show';
    },
    componentWillMount: function(){
        this.newGame();
    },
    render: function(){
        return (
            <div>
                <h1>{this.getTitle()}</h1>
                
                <HangmanDrawing
                won = {this.state.won}
                strikes = {this.state.strikes}/>
            
                <LetterContainer
                word = {this.state.word}
                reveal = {this.state.lost}
                renderLetter = {this.state.renderLetter}/>
                
                <Keyboard
                checkLetter = {this.checkLetter}
                enabled = {!this.state.lost && !this.state.won}
                />
                
                <button 
                className = {this.getClass()}
                disabled = {!this.state.lost && !this.state.won}
                onClick = {this.newGame}>
                Juego Nuevo
                </button>
            </div>
        )
    }
});
export default HangmanGame;