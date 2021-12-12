// Selectors
let drawboard = document.querySelector('#drawing-board');

let content = document.querySelector('#content');

let restartButton = document.createElement('button')

let square = document.createElement('div');

let dimensions = 16;


// Start
startInstance();
function startInstance() {
    
    let squareNum = Math.pow(dimensions, 2);
    content.appendChild(restartButton);
    content.appendChild(drawboard);

    drawboard.style.setProperty('--dimensions', dimensions + 1);
    drawboard.style.setProperty('grid-template-columns', `repeat(${--dimensions + 1}, 1fr`);
    drawboard.style.setProperty('grid-template-rows', `repeat(${--dimensions + 2}, 1fr`);

    restartButton.textContent = 'Restart';
    restartButton.classList.add('restart-button')
    for (let i = 0; i < squareNum; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        drawboard.appendChild(square);
        square.addEventListener('mouseover', function() {
            console.log('hovered!');
            square.classList.add('square-hover');
        });
    } // Makes the squares needed to fill up the dimensions
    

}


// Functions


// Event Listeners

restartButton.addEventListener('click', function() {
    drawboard.textContent = '';
    content.removeChild(restartButton);
    console.log('restarting...');
    dimensions = prompt('Input the dimensions of the grid (16, 32, etc.)');
    startInstance();
    let squares = document.querySelectorAll('.square')
    squares = Array.from(squares);
    squares.forEach(square => {
        square.classList.remove('square-hover');
    });

});

square.addEventListener('mouseover', function() {
    console.log('hovered!');
    square.classList.add('square-hover');
});
