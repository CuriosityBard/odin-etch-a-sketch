// create grid of divs 
function makeGrid(w) {
    // w = number of squares per side
    const container = document.querySelector('#canvas');

    const vpWidth = document.documentElement.clientWidth;
    console.log(vpWidth);

    // sizing the pixels
    let boxSize = 640 / w;
    // sizing for narrow screens
    if (vpWidth < 650 && vpWidth >= 410) {
        boxSize = 400 / w;
    } else if (vpWidth < 410) {
        boxSize = 300 / w;
    }
    console.log(boxSize);

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

        // event listener for drawing: 
        newDiv.addEventListener('mouseenter', colorSquare);
        newDiv.addEventListener('touchstart', colorSquare);

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

// drawing function: 
function colorSquare(e) {
    const targetSquare = e.target;
   
    // depending on the darkness of the pixel, darken the pixel
    if (Array.from(targetSquare.classList).length == 1) {
        targetSquare.classList.add('colored');
    } else if (Array.from(targetSquare.classList).toString() == ['pixel', 'colored'].toString()) {
        targetSquare.classList.remove('colored');
        targetSquare.classList.add('colored2');
    } else if (Array.from(targetSquare.classList).toString() == ['pixel', 'colored2'].toString() 
               || Array.from(targetSquare.classList).toString() === ['pixel', 'colored3'].toString()) {
        targetSquare.classList.remove('colored2');
        targetSquare.classList.add('colored3');
    } 
}