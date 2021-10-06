'use strict';

const btnRoll = document.querySelector('.button');
const snake = document.querySelector('.snake');
const allCells = document.querySelectorAll('.cell');
const oneCell = document.querySelector('.cell');
const br = document.createElement('br');
const winnerPopUp = document.querySelector('.winner');
const closeBtn = document.querySelector('.close');
let dice = document.querySelector('.dice-image');
let number = 0;

btnRoll.addEventListener('click', function() {
    let id = findSnakeId();
    number = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove('hidden');
    dice.src = `./assets/dice-${number}.png`;
    dice.classList.toggle('rotate');
    moveSnake(id);     
});

function findSnakeId() {
    let id;
    for (let i = 0; i < allCells.length; i++) {
        if (allCells[i].contains(snake)) {
            id = Number(allCells[i].id);
            return id;            
        }
    }
    return id;
}

function moveSnake(x) {
    let newId = x + number;   
    let reqCell = document.getElementById(newId);
    reqCell.appendChild(br);
    reqCell.appendChild(snake);
    checkWinner(newId);
}

function checkWinner(id) {
    if (id === 100) {
        winnerPopUp.classList.remove('hidden');
        document.querySelector('.main').classList.add('overlay');
    }
}

function closeWinnerPopUp() {
    winnerPopUp.classList.add('hidden');
    dice.classList.add('hidden');
    document.getElementById('1').appendChild(snake);
    document.querySelector('.main').classList.remove('overlay');
}

closeBtn.addEventListener('click', closeWinnerPopUp);
