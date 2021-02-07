const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}





// const player1Score = document.querySelector('#player1');
// let p1Score = 0;
// const player1Plus = document.querySelector('#p1Button')

// const player2Score = document.querySelector('#player2');
// let p2Score = 0;
// const player2Plus = document.querySelector('#p2Button');

const resetScore = document.querySelector('#reset');
const playTo = document.querySelector('#number');

const outcome = document.querySelector('#outcome');
const winner = document.querySelector('#winner');

let isGameOver = false;

outcome.style.display = 'none';


function scoreKeeper(player, opponent, outcome) {
    if(!isGameOver) {
        player.score++;
        if(player.score === parseInt(playTo.value)) {
            isGameOver = true;
            player.display.classList.add('win');
            opponent.display.classList.add('lose');
            player.button.disabled = true;
            opponent.button.disabled = true;
            outcome.classList.add('win');
            outcome.style.display = 'block';
        }
        player.display.textContent = player.score;
    }
}

p1.button.addEventListener('click', (e) => {
    // if(p1Score < parseInt(playTo.value)) {
    //     p1Score++;
    //     player1Score.textContent = p1Score;

    // }
    // if (p1Score === parseInt(playTo.value)){
    //     player2Score.classList.add('lose');
    //     player1Score.classList.add('win');
    //     player2Plus.disabled = true;
    //     winner.textContent = 'Player 1';
    //     outcome.classList.add('win');
    //     outcome.style.display = 'block';
    // }
    scoreKeeper(p1,p2,outcome);
    winner.textContent = 'Player 1';
});


p2.button.addEventListener('click', (e) => {
    // if(p2Score < parseInt(playTo.value)) {
    //     p2Score++;
    //     player2Score.textContent = p2Score;

    // }
    // if (p2Score === parseInt(playTo.value)){
    //     player1Score.classList.add('lose');
    //     player2Score.classList.add('win');
    //     player1Plus.disabled = true;
    //     winner.textContent = 'Player 2';
    //     outcome.classList.add('win');
    //     outcome.style.display = 'block';

    // }

    scoreKeeper(p2,p1, outcome);
    winner.textContent = 'Player 2';
});

resetScore.addEventListener('click', e => {
    location.reload();
})

