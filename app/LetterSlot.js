import React from 'react';

const LetterSlot = React.createClass({
	render: function(){
		const guesses = this.props.guesses;
		const letter = this.props.letter;
		const reveal = this.props.reveal;
		let contents = ' ';
		if(guesses.includes(letter)){
			contents = letter;
		}
		return (
			<div className = 'letter-slot'>
				{contents}
			</div>
		)
	}
	
});
export default LetterSlot;