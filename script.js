'use strict';

const button = document.querySelector('.button');
const snake = document.querySelector('.snake');
const allCells = document.querySelectorAll('.cell');
const oneCell = document.querySelector('.cell');
const currentNumber = document.querySelector('.number');
const br = document.createElement('br');
const winner = document.querySelector('.winner');
const closeBtn = document.querySelector('.close');
let number = 0;

function play() {
    let id = findId();
    number = Math.trunc(Math.random() * 6) + 1;
    currentNumber.textContent = number;
    moveSnake(id);     
}

button.addEventListener('click', play);

// find snake id
function findId() {
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
    win(newId);
}

function win(x) {
    if (x === 100) {
        winner.classList.remove('hidden');
    }
}

function closeWinner() {
    winner.classList.add('hidden');
    currentNumber.textContent = '';
    document.getElementById('1').appendChild(snake);
}

closeBtn.addEventListener('click', closeWinner);
