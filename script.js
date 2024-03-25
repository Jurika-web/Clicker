const cross = document.querySelector('.cursor');
const target = document.querySelector('.target');
const target2 = document.querySelector('.target2');
const target3 = document.querySelector('.target3');
const scoreText = document.querySelector('.score');
const timerText = document.querySelector('.timer');
const highscoreText = document.querySelector('.highscore');
const gunshot = document.querySelector('.gunshot');
const gameover = document.querySelector('.gameover');
const menupage = document.querySelector('.main-page');
const playGame = document.querySelector('.play_game');
const themeSong = document.querySelector('.theme');

let score = 0;
let timerLeft = 45;
let highscore = 0;

window.onload = () => {
    if (localStorage.getItem('highscore')) {
        highscore = localStorage.getItem('highscore');
        highscoreText.innerHTML = `Highscore ${highscore}`;
    }
    themeSong.currentTime = 0;
    themeSong.play();

    scoreText.innerHTML = score;
    timerText.innerHTML = timerLeft;
    changePosition();
    changePosition2();
    changePosition3();
}

menupage.addEventListener('click', (e) => e.stopPropagation());

const fadePage = () => {
    themeSong.pause();
    menupage.style.opacity = 0;
    setTimeout(() => {
        menupage.style.display = "none";
    }, 500);
    play();
}

const play = () => {
    setInterval(() => {
        timer()
    }, 1000);
}

const gameOver = () => {
    alert(`Game Over \n Ваш рахунок: = ${score}`);
    alert(`REFRESH THE PAGE TO RETURN TO THE MENU`);
    if (+localStorage.getItem('highScore') < score) {
        localStorage.setItem('highscore', score);
        highscore = score;
        highscoreText.innerHTML = `Highscore ${highscore}`;
    }
    score = 0;
    timeLeft = 45 + 2;
    scoreText.innerHTML = score;
    timerText.innerHTML = timeLeft;
}

const timer = () => {
    if (timerLeft === 0) {
        gameover.play();
        gameOver();
        timerLeft = 45 + 2;
    }
    timerLeft -= 1;
    timerText.innerHTML = timerLeft;
}

document.addEventListener('mousemove', (e) => {
    cross.style.left = `${e.clientX}px`;
    cross.style.top = `${e.clientY}px`;
});

const changePosition = () => {
    const xAxis = Math.floor(Math.random() * 800);
    const yAxis = Math.floor(Math.random() * 200);
    target.style.top = `${yAxis}px`;
    target.style.left = `${xAxis}px`
};

const changePosition2 = () => {
    const xAxis = Math.floor(Math.random() * 900);
    const yAxis = Math.floor(Math.random() * 300);
    target2.style.top = `${yAxis}px`;
    target2.style.left = `${xAxis}px`
};

const changePosition3 = () => {
    const xAxis = Math.floor(Math.random() * 1000);
    const yAxis = Math.floor(Math.random() * 500);
    target3.style.top = `${yAxis}px`;
    target3.style.left = `${xAxis}px`
};

const scoreIncrease = () => {
    gunshot.currentTime = 0;
    gunshot.play();
    score += 1;
    scoreText.innerHTML = score;
    changePosition();
    changePosition2();
    changePosition3();
}

target.addEventListener('click', scoreIncrease);
target2.addEventListener('click', scoreIncrease);
target3.addEventListener('click', scoreIncrease);
playGame.addEventListener('click', fadePage);