import React from 'react';

const NewGameSection = React.createClass({
    getInitialState: function(){
         return {name: ''};
    },
    handleClick: function(){
        const name = this.refs.name.value.trim() || 'Anonymous User';
        return this.props.onClick(name);
    },
    onChangeName: function(evt){
        this.setState({name: evt.target.value});
    },
    render: function(){
        return(
            <div className = {this.props.className}>
                <input type = 'text' className = 'name' ref = 'name' placeholder = 'Nombre' onChange = {this.onChangeName} value = {this.state.name}/>
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