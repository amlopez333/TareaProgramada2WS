import React from 'react';

const LetterSlot = React.createClass({
	getSlot: function(letter, index){
		const guesses = this.props.guesses;
		const reveal = this.props.reveal;
		let contents = ' ';
		if(guesses.includes(letter)){
		contents = letter;
		}
	}
	
})