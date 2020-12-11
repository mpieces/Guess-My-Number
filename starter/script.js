'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // 0 is falsey, but ! makes it true
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No Number!';
    //when guess is correct
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = ' 🎉 Correct Number!';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too high!';
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too low!';
  }
});

// What happens when guess is correct?
// What happens when guess is too low/high?

// Start by defining secret number
