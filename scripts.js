// create grid of divs 
function makeGrid() {
    const container = document.querySelector('#canvas');

    for (let i = 0; i < (16*16); i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('pixel');  // for styling

        container.appendChild(newDiv);
    }
}
makeGrid();