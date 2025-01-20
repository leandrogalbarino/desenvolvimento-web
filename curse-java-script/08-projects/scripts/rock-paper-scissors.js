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
    else if ((playerChoice === 0 && computerChoice === 1) || (playerChoice === 1 && computerChoice === 2) || (playerChoice === 2 && computerChoice === 0) ) {
        roundResult.innerHTML += 'You lose.';
        score.losses++;
    }
    else{
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

scoreShow()