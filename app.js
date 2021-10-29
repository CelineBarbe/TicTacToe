var gameBoard = document.getElementById('board');


// Etape 1.2 - "Boucler" 8x8 fois
var nbCellules = 3 * 3;
for (var indexCell = 0; indexCell < nbCellules; indexCell++) {

    // Etape 1.3 - Dans la boucles générer une cases
    var cell = document.createElement('div');
    cell.classList.add('case');
    gameBoard.appendChild(cell);
    cell.addEventListener('click', onClick)
}

function onClick(event) {
    var cell = event.target;
    cell.classList.toggle('redcase')
}