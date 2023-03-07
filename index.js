const board = document.querySelector('.board');
document.addEventListener("DOMContentLoaded", (event) => {
  board.classList.add('x');
});
window.addEventListener("load", (event) => {

});

const cellElements = document.querySelectorAll('[data-cell]');
cellElements.forEach(cell => {
  cell.addEventListener('click', handleClick, { once: true });
});

function handleClick(e) {
  const turn = checkTurn();
  const cell = e.target;
  cell.classList.add(turn);
  switchTurn();
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
