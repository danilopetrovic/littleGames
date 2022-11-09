const grid = document.querySelector('.grid');

for (let i = 0; i < 9; i++) {
    let div = document.createElement("div");
    div.id = `${i}`;
    div.className = 'square';
    grid.append(div);
}

const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
let score = document.querySelector('#score');
let timeLeft = document.querySelector('#time-left');
let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;

function randomSquare() {
    squares.forEach(oneSquare => {
        oneSquare.classList.remove('mole');
    })

    const randomSquare = Math.floor(Math.random() * 9);
    squares[randomSquare].classList.add('mole');

    hitPosition = randomSquare

}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        // console.log(square.id);
        // console.log(hitPosition);
        // console.log(typeof (square.id), typeof (hitPosition));
        if (parseInt(square.id) === hitPosition) {
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    })
})

function moveMole() {
    timerId = setInterval(randomSquare, 1000);
}

moveMole();

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;
    if (currentTime === 0) {
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        alert("GAME OVER! Your final score is " + result);
    }

}

let countDownTimerId = setInterval(countDown, 1000)