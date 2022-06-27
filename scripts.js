// create grid of divs 
function makeGrid(w) {
    // w = number of squares per side
    const container = document.querySelector('#canvas');

    // sizing the pixels
    const boxSize = 640 / w;
    container.style.width = boxSize;
    container.style.height = boxSize; 

    // styling the grid
    container.style.gridTemplateRows = "repeat(1fr, " + w + ")";
    container.style.gridTemplateColumns = "repeat(1fr, " + w + ")";

    for (let i = 0; i < (w*w); i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('pixel');  // for styling

        container.appendChild(newDiv);
    }
}
makeGrid(16);