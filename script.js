'use strict';

let dice = document.querySelector('.dice');
let scoreTotal0 = document.getElementById('score--0');
let scoreTotal1 = document.getElementById('score--1');
let curr0El = document.getElementById('current--0');
let curr1El = document.getElementById('current--1');

// Reset The Game
scoreTotal0.textContent = 0;
scoreTotal1.textContent = 0;
dice.classList.add('hidden');

// Selecting buttons
let btnNew = document.querySelector('.btn--new');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');

// Roll Dice button Text :
let rollText = btnRoll.textContent;
let holdText = btnHold.textContent;

let genNumber;
let total0 = 0,
  total1 = 0,
  curr0 = 0,
  curr1 = 0;
let turn = 0;

// Generating number
function generateRandomNumber(min, max) {
  return Math.trunc(Math.random() * (max - min + 1)) + min;
}

// Change current player
let changeTurn = function () {
  // Remove the 'player--active' class from the current player
  document.querySelector(`.player--${turn}`).classList.remove('player--active');

  // Toggle the turn between 0 and 1
  turn = turn === 0 ? 1 : 0;

  // Add the 'player--active' class to the new current player
  document.querySelector(`.player--${turn}`).classList.add('player--active');
};

// Calc current score
let calcCurrentScore = function (number) {
  if (number !== 1) {
    turn === 0 ? (curr0 += number) : (curr1 += number);
  } else {
    turn === 0 ? (curr0 = 0) : (curr1 = 0);

    // reset current score and change turns
    document.getElementById(`current--${turn}`).textContent = 0;
    changeTurn();
  }
  document.getElementById(`current--${turn}`).textContent =
    turn == 0 ? curr0 : curr1;
};

// Rolling dice function
let rollClicked = function () {
  genNumber = generateRandomNumber(1, 6);

  console.log(genNumber);

  // Change the dice image
  dice.src = `dice-${genNumber}.png`;

  // Display the dice if hidden
  dice.classList.remove('hidden');

  // Calc current score
  calcCurrentScore(genNumber, turn);
};

// Clicking the "Roll Dice" button
btnRoll.addEventListener('click', rollClicked);

let checkWinner = function () {
  if (total0 >= 100 || total1 >= 100) {
    document.querySelector(`.player--${turn}`).classList.add('player--winner');

    btnRoll.disabled = true;
    btnHold.disabled = true;

    btnRoll.textContent = `🎉 PLAYER ${turn + 1} WON`;
    btnHold.textContent = `🙏 PLEASE START NEW GAME`;
    return true;
  }
  return false;
};

// Clicking hold
let holdClicked = function () {
  // When clicking hold -> add the current score of the player to the total and change the player

  // sum the score
  turn === 0 ? (total0 += curr0) : (total1 += curr1);

  // display the new total
  document.getElementById(`score--${turn}`).textContent =
    turn == 0 ? total0 : total1;

  // set the current score of the current turn to 0
  turn === 0 ? (curr0 = 0) : (curr1 = 0);
  document.getElementById(`current--${turn}`).textContent =
    turn == 0 ? curr0 : curr1;

  // Check winner, if yes, end the game and don't change turns right now
  // change the turn
  if (!checkWinner()) changeTurn();
};

// Clicking the "HOLD" button
btnHold.addEventListener('click', holdClicked);

// Starting new game
let resetGame = function () {
  // -> Reset current and total scores elements and variables
  // -> reset the turn to player1
  // -> reset the color of the winner
  // -> enable "ROll" and "HOLD" buttons
  // -> Hide the dice

  // 1- Reset current and total scores elements and variables
  curr0El.textContent = 0;
  curr1El.textContent = 0;
  curr0 = 0;
  curr1 = 0;
  scoreTotal0.textContent = 0;
  scoreTotal1.textContent = 0;
  total0 = 0;
  total1 = 0;

  // 2- Reset the color of the winner
  document.querySelector(`.player--${turn}`).classList.remove('player--winner');

  // 3- Reset the turn to player1
  // make the turn to player2 then call the function changeTurn and it will change the turn for us
  turn = 1;
  changeTurn();

  // 4- enable "ROll" and "HOLD" buttons
  btnRoll.disabled = false;
  btnHold.disabled = false;
  btnRoll.textContent = rollText;
  btnHold.textContent = holdText;

  // hide the dice
  dice.classList.add('hidden');
};

// clicking NEW GAME button
btnNew.addEventListener('click', resetGame);
