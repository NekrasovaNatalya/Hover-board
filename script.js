const board = document.querySelector('#board');
const colors = ['#FF3366', '#9999FF', '#66CCCC', '#66FFCC', '#3399FF', '#FF9933'];
const squaresNumber = 1504;

for (let i = 0; i < squaresNumber; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseleave', () => removeColor(square));

    board.append(square);
}
