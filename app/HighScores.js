import React from 'react';
import ReactModal from 'react-modal';

const HighScores = React.createClass({
    getInitialState: function(){
        return {showModal: false};
    },
    handleOpenModal: function(){
        this.props.showHighScores();
        this.setState({ showModal: true });
    },
    handleCloseModal: function(){
        document.getElementsByClassName('modal-button')[0].blur();
        this.setState({ showModal: false });
    },
    render: function() {

        return (
        <div>
            <button className = 'modal-button' onClick={this.handleOpenModal}>Show High Scores</button>
            <ReactModal 
            isOpen={this.state.showModal}
            contentLabel="onRequestClose Example"
            onRequestClose={this.handleCloseModal}
            className="Modal"
            overlayClassName="Overlay"
            >
            <table>
                <thead>
                    <tr>
                        <th className = 'string'>Player</th>
                        <th className = 'numeric'>Score (seconds)</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(this.props.highScores).map(function(score, key){
                        //console.log(score);
                        score = score[1].split(',');
                        return(
                            <tr key = {key}>
                                <td className = 'string'>{key + 1 + '. ' + score[0]}</td>
                                <td className = 'numeric'>{score[1]}</td>
                            </tr>
                            );
                        }.bind(this)
                    )}
                </tbody>
            </table>
            <button className = 'modal-button' onClick={this.handleCloseModal}>Hide High Scores</button>
            </ReactModal>
        </div>
        );
    }
});

export default HighScores;