import React from 'react';

const LetterSlot = React.createClass({
	render: function(){
		const letter = this.props.letter;
		const reveal = this.props.reveal;
		let contents = ' ';
		let classNames = ['letter-slot']
		console.log(letter);
		if(this.props.renderLetter[letter]){
			contents = letter;
		}
		if(reveal){
			classNames = classNames.concat(['reveal']);
			contents = letter;
		}
		return (
			<div className = {classNames.join(' ')}>
				{contents}
			</div>
		)
	}
	
});
export default LetterSlot;