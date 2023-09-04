let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement();

function pickComputerMove() {
    const randomNum = Math.floor(Math.random() * 3);

    let computerMove = randomNum === 0 ? 'rock' : randomNum === 1 ? 'paper' : 'scissors';
    return computerMove;
}

function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result;
    const weapons = {
        rock: {weakTo: 'paper', strongTo: 'scissors'},
        paper: {weakTo: 'scissors', strongTo: 'rock'},
        scissors: {weakTo: 'rock', strongTo: 'paper'}
    }

    if (weapons[playerMove].strongTo === computerMove) {
        score.wins++;
        result = 'You win.';
    }

    else if (weapons[playerMove].weakTo === computerMove) {
        score.losses++;
        result = 'You lose.';
    }

    else {
        score.ties++;
        result = 'You tie.';
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result')
        .innerHTML = result;
    document.querySelector('.js-moves')
        .innerHTML = `You
        <img class="move-icon" src="images/${playerMove}-emoji.png">
        <img class="move-icon" src="images/${computerMove}-emoji.png">
        Computer`;
}

function updateScoreElement() {
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}