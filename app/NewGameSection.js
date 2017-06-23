import React from 'react';

const NewGameSection = React.createClass({
    getInitialState: function(){
         return {name: ''};
    },
    handleClick: function(){
        let name = this.refs.name.value.trim() || '';
        if(this.props.won && !name){
            name = 'Anonymous User';
        }
        this.setState({name: ''});
        return this.props.onClick(name);
    },
    onChangeName: function(evt){
        this.setState({name: evt.target.value});
    },
    render: function(){
        let won = this.props.won;
        let classNames = ['name'];
        if(won){
            classNames = classNames.concat(['won']);
        }
        return(
            <div className = {this.props.className}>
                <input type = 'text' className = {classNames.join(' ')} ref = 'name' placeholder = 'Nombre' onChange = {this.onChangeName} value = {this.state.name}/>
                <button 
                    className = 'new-game-button'
                    disabled = {this.props.disabled}
                    onClick = {this.handleClick}>
                    New Game
                </button>
            </div>
        )
    }
});

export default NewGameSection;