const player1Score = document.querySelector('#player1');
let p1Score = 0;
const player1Plus = document.querySelector('#increaseP1')

const player2Score = document.querySelector('#player2');
let p2Score = 0;
const player2Plus = document.querySelector('#increaseP2')

const resetScore = document.querySelector('#reset');
const playTo = document.querySelector('#number');

const outcome = document.querySelector('#outcome');
const winner = document.querySelector('#winner');

outcome.style.display = 'none';

player1Plus.addEventListener('click', (e) => {
    if(p1Score < parseInt(playTo.value)) {
        p1Score++;
        player1Score.textContent = p1Score;

    }
    if (p1Score === parseInt(playTo.value)){
        player2Score.classList.add('lose');
        player1Score.classList.add('win');
        player2Plus.disabled = true;
        winner.textContent = 'Player 1';
        outcome.classList.add('win');
        outcome.style.display = 'block';
    }
});


player2Plus.addEventListener('click', (e) => {
    if(p2Score < parseInt(playTo.value)) {
        p2Score++;
        player2Score.textContent = p2Score;

    }
    if (p2Score === parseInt(playTo.value)){
        player1Score.classList.add('lose');
        player2Score.classList.add('win');
        player1Plus.disabled = true;
        winner.textContent = 'Player 2';
        outcome.classList.add('win');
        outcome.style.display = 'block';

    }
});

resetScore.addEventListener('click', e => {
    location.reload();
})

