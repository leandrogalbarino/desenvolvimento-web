function scoreShow() {
    let scoreDiv = document.querySelector('.score');
    scoreDiv.innerHTML = `Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties} `;
}

function scoreReset() {
    score.losses = 0;
    score.wins = 0;
    score.ties = 0;
    scoreShow();
    localStorage.removeItem('score');
}

function choiceName(choice) {

    if (choice === 0) {
        return 'rock';
    }
    if (choice === 1) {
        return 'paper';
    }
    if (choice === 2) {
        return 'scissors';
    }
}

let isAutoPlaying = false;
let intervalId;

// In this type of function, preffer regular function, because:
// 1. easier to read
// 2. hoisting - we can call this function before we create it and we don't hava to worry about witch order we write the code
function autoPlay() {
    if (isAutoPlaying) {
        clearInterval(intervalId);
        isAutoPlaying = false;
        return;
    }
    isAutoPlaying = true;

    intervalId = setInterval(() => {
        const playMove = parseInt(Math.random() * 3);
        game(playMove);
    }, 1000);

}

function game(playerChoice) {
    const computerChoice = parseInt(Math.random() * 3);
    const roundResult = document.querySelector('.js-round-result');
    const roundPlay = document.querySelector('.js-round-play');

    roundPlay.innerHTML = `You <img class="img-moves" src="./image-project/${choiceName(playerChoice)}-emoji.png" alt="choiceName(${playerChoice})">`;
    roundPlay.innerHTML += `<img class="img-moves" src="./image-project/${choiceName(computerChoice)}-emoji.png" alt="choiceName(${computerChoice})"> Computer`;
    roundResult.innerHTML = '';

    if (playerChoice === computerChoice) {
        roundResult.innerHTML += 'Tie.';
        score.ties++;
    }
    //      0 - Rock 1- Paper, 2- Scissors
    else if ((playerChoice === 0 && computerChoice === 1) || (playerChoice === 1 && computerChoice === 2) || (playerChoice === 2 && computerChoice === 0)) {
        roundResult.innerHTML += 'You lose.';
        score.losses++;
    }
    else {
        roundResult.innerHTML += 'You win.';
        score.wins++;
    }
    scoreShow();
    localStorage.setItem('score', JSON.stringify(score));
}


let score = JSON.parse(localStorage.getItem('score'));
if (!score) {
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    };
}
const rockElement = document.querySelector('.js-button-rock');
const paperElement = document.querySelector('.js-button-paper');
const scissorsElement = document.querySelector('.js-button-scissors');
const resetElement = document.querySelector('.js-reset-button');
const autoPlayElement = document.querySelector('.js-reset-autoplay');

document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
        game(0);
    }
    else if (event.key === 'p') {
        game(1);
    }
    else if (event.key === 's') {
        game(2);
    }

})

rockElement.addEventListener('click', () => game(0));
paperElement.addEventListener('click', () => game(1));
scissorsElement.addEventListener('click', () => game(2));


resetElement.addEventListener('click', () => scoreReset());
autoPlayElement.addEventListener('click', () => autoPlay());

scoreShow()