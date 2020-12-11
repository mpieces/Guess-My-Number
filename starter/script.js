'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random() * 20) + 1;
// score is part of 'state' of application
let score = 20;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // 0 is falsey, but ! makes it true
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No Number!';
    //when guess is correct
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.score').textContent = 0;
    } else {
      document.querySelector('.message').textContent = ' You lost the game!';
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.score').textContent = 0;
    } else {
      document.querySelector('.message').textContent = ' You lost the game!';
    }
  }
});

// now score needs to decrease by 1 if number guessed is too high or too low
// need a check when score reaches/decrements to 0 (score > 1)
