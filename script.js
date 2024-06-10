document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('chessboard');
    const pieces = [
        'R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R',
        'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P',
        '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '',
        'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p',
        'r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'
    ];
    for (let i = 0; i < 64; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.classList.add((Math.floor(i / 8) + i) % 2 === 0 ? 'white' : 'black');
        if (pieces[i]) {
            const piece = document.createElement('div');
            piece.textContent = pieces[i];
            piece.classList.add('piece');
            square.appendChild(piece);
        }
        board.appendChild(square);
    }
    let selectedPiece = null;
    board.addEventListener('click', (e) => {
        if (e.target.classList.contains('piece')) {
            if (selectedPiece) {
                selectedPiece.style.backgroundColor = '';
            }
            selectedPiece = e.target;
            selectedPiece.style.backgroundColor = 'yellow';
        } else if (selectedPiece && e.target.classList.contains('square')) {
            e.target.appendChild(selectedPiece);
            selectedPiece.style.backgroundColor = '';
            selectedPiece = null;
        }
    });
 });