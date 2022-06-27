// create grid of divs 
function makeGrid(w) {
    // w = number of squares per side
    const container = document.querySelector('#canvas');

    // sizing the pixels
    const boxSize = 640 / w;

    // styling the grid
    const gridTemplate = "1fr ".repeat(w);
    container.style.gridTemplateRows = gridTemplate;
    container.style.gridTemplateColumns = gridTemplate;

    // clear previous grid
    container.innerHTML = "";

    for (let i = 0; i < (w*w); i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('pixel');  // for styling
        newDiv.style.height = boxSize + 'px';
        newDiv.style.width = boxSize + 'px';

        container.appendChild(newDiv);
    }
}
makeGrid(16);

function changeResolution() {
    let newRes = prompt("How many squares per side?");

    while (parseInt(newRes) > 100) {
        newRes = prompt("Please enter a number under 100.\nHow many squares per side?");
    }
    
    makeGrid(newRes);
}