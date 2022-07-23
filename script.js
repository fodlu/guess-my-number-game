'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let highscore = 0;
let score = 20;

document.querySelector('.check').addEventListener('click', function(){
    let guess = Number(document.querySelector('.guess').value);

    if (guess === 0) {
        document.querySelector('.message').textContent = 'Not a valid number!'
    }

    else if(guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number!'
        document.querySelector('body').style.backgroundColor = 'green'
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.width = '30rem';

        if (highscore < score) {
            highscore = score;
            document.querySelector('.highscore').textContent = score;
        }
    }

    else if(guess > secretNumber) {
        document.querySelector('.message').textContent = 'Number above guess!'
        document.querySelector('body').style.backgroundColor = 'red'
        score--;
        document.querySelector('.score').textContent = score;

        if (score < 1) {
        document.querySelector('.message').textContent = 'GAME OVER!'
        }
    }

    else if(guess < secretNumber) {
        document.querySelector('.message').textContent = 'Number below guess!'
        document.querySelector('body').style.backgroundColor = 'red'
        score--;
        document.querySelector('.score').textContent = score;

        if (score < 1) {
            document.querySelector('.message').textContent = 'GAME OVER!'
            }
    }
})

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    
    document.querySelector('.guess').value = ' ';
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Guess my number...!'


})