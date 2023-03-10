const board = document.querySelector('.board');
const winnerModal = document.querySelector('.winner-modal');
const button = winnerModal.querySelector('button');
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
document.addEventListener("DOMContentLoaded", (event) => {
  board.classList.add('x');
});

button.addEventListener('click', () => {
  location.reload();
});

const cellElements = document.querySelectorAll('[data-cell]');
cellElements.forEach(cell => {
  cell.addEventListener('click', handleClick, { once: true });
});

function handleClick(e) {
  const cell = e.target;
  const turn = checkTurn();
  cell.classList.add(turn);
  checkWin(cell.parentElement,turn);

  switchTurn();
}

function checkWin(parent,turn){
  const cells = parent.querySelectorAll('[data-cell]');
  WINNING_COMBINATIONS.forEach(combination => {
    const [a,b,c]=combination;
    if(cells[a].classList.contains(turn) && cells[b].classList.contains(turn) && cells[c].classList.contains(turn)){
      winnerModal.classList.add('show');
      winnerModal.querySelector('.winner-message').innerHTML = `${turn} won`;
    }
  });
}

function checkTurn(){
  if(board.classList.contains('x')){
    return 'x';
  }else{
    return 'circle';
  }
}

function switchTurn(){
  board.classList.toggle('x');
  board.classList.toggle('circle');
}