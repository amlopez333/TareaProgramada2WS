import React from 'react';
import ReactDOM from 'react-dom';
import HangmanGame from './HangmanGame';

let word = 'atun';
let strikes = 0;
let guesses = [];
let over = false;
let won = false;
ReactDOM.render(
    <HangmanGame word = {word} strikes = {strikes} guesses = {guesses} over = {over} won = {won} />,
    document.getElementById('app')
);