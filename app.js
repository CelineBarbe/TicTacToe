var gameBoard = document.getElementById('board');

var nbCellules = 3 * 3;
for (var indexCell = 0; indexCell < nbCellules; indexCell++) {
    var cell = document.createElement('div');
    cell.classList.add('case');
    gameBoard.appendChild(cell);
    cell.addEventListener('click', onClick)
}

var round = 0;

function onClick(event) {
    var cell = event.target;
    if (round % 2 == 0) {
        cell.classList.add('redcase');
    } else {
        cell.classList.add('bluecase');
    };
    round +=1;
    console.log(round);
}
