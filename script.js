'use strict';

const player1 = document.querySelector('.player-0');
const player2 = document.querySelector('.player-1');
const btnRoll = document.querySelector('.button');
const snakeYellow = document.querySelector('.snakeYellow');
const snakeGreen = document.querySelector('.snakeGreen');
const allCells = document.querySelectorAll('.cell');
const oneCell = document.querySelector('.cell');
const br = document.createElement('br');
const winnerPopUp = document.querySelector('.winner');
const closeBtn = document.querySelector('.close');
let dice = document.querySelector('.dice-image');
let winnerText = document.querySelector('.winner-text');
let number = 0;
let activePlayer = true;
let playing = true;

player1.classList.add('player-active');

btnRoll.addEventListener('click', function() {
    if (playing) {        
        if (player1.classList.contains('player-active')) {
            playTurn(snakeYellow);
        } else if (player2.classList.contains('player-active')) {
            playTurn(snakeGreen);
        };        
    };
});

function playTurn(snake) {    
    let id = findSnakeId(snake);
    number = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove('hidden');
    dice.src = `./assets/dice-${number}.png`;
    dice.classList.toggle('rotate');
    moveSnake(id, snake);   
    player1.classList.toggle('player-active');
    player2.classList.toggle('player-active');  
}

function findSnakeId(snake) {
    let id;
    for (let i = 0; i < allCells.length; i++) {
        if (allCells[i].contains(snake)) {
            id = Number(allCells[i].id);
            return id;            
        }
    }
    return id;
}

function moveSnake(id, snake) {
    let newId = id + number;   
    let reqCell = document.getElementById(newId);
    reqCell.appendChild(snake);
    checkWinner(newId, snake);
}

function checkWinner(id, snake) {
    if (id === 100) {
        playing = false;
        player1.classList.remove('player-active');
        player1.classList.remove('player-active');
        winnerPopUp.classList.remove('hidden');
        winnerPopUp.appendChild(winnerText);
        document.querySelector('.main').classList.add('overlay');
    } 
}

function closeWinnerPopUp() {
    playing = true;
    winnerPopUp.classList.add('hidden');
    dice.classList.add('hidden');
    document.getElementById('1').appendChild(snakeYellow);
    document.getElementById('1').appendChild(snakeGreen);
    document.querySelector('.main').classList.remove('overlay');
    player1.classList.add('player-active');
}

closeBtn.addEventListener('click', closeWinnerPopUp);
