// tic tac toe

// The HTML elements that we need for the game
const board = document.querySelector('#board');
const player1 = document.querySelector('.js-player-1');
const player2 = document.querySelector('.js-player-2');
const endMessageDiv = document.querySelector('.js-end-message');
const restartBtn = document.querySelector('.restart');

// this array tracks the state of the game board.
const game = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// Game Settings
const PLAYER_1_ICON = 'X';
const PLAYER_2_ICON = 'O';
let COUNTER = 0; // track game progress

// game starts with player 1
let currentPlayer = '1';
player1.classList.add('active');

const handleRestart = () => {
  //location.reload(true);
};

const toggleRestartBtn = () => {
  restartBtn.removeAttribute('disabled');
  //restartBtn.addEventListener('click', handleRestart());
};

const win = () => {
  endMessageDiv.innerText = `Player ${currentPlayer} wins!!`;
  board.removeEventListener('click', handleClick);
  toggleRestartBtn();

};

const verifyWin = () => {
  let conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8]
  ];

  for (i = 0; i < 8; i++) {
    let condition = conditions[i];
    let pos1 = game[condition[0]];
    let pos2 = game[condition[1]];
    let pos3 = game[condition[2]];
    console.log(pos1+pos2+pos3);

    if (pos1 === pos2 && pos2 === pos3) return true; 
  }
  return false;
};

const togglePlayer = () => {
  player1.classList.toggle('active');
  player2.classList.toggle('active');
};

const handleClick = (event) => {
  const cell = event.target.id;
  const currentCellDiv = document.getElementById(cell);
  const cellId = cell.charAt(cell.length - 1);
  const icon = currentPlayer === '1' ? PLAYER_1_ICON : PLAYER_2_ICON;

  if (typeof game[cellId] === 'number') {
    currentCellDiv.innerText = icon;
    game[cellId] = icon;
    COUNTER++;
    if (verifyWin() === true) {
      win();
    } else if (COUNTER > 8) {
      endMessageDiv.innerText = `Draw`;
      board.removeEventListener('click', handleClick);
      toggleRestartBtn();
    } else {
      currentPlayer = currentPlayer === '1' ? '2' : '1';
      togglePlayer();
    }
    
  }
};

board.addEventListener('click', handleClick);
