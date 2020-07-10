let gridContainer = document.querySelector("#gridContainer");
gridContainer.className = "grid";

function createGrid(size) {

    console.log(size);

    if ( size == undefined ) {
        size = 16; //default grid size 
    }

    for ( let i = 0; i < size ; i++ ) {
        let row = document.createElement("div");
        row.className = "row"; 
        row.id = `row${i}`; // might not need..

        for ( let j = 0; j < size; j++) {
            let col = document.createElement("div");
            // add two classes: col, addColor
            col.className = "col color";
            col.id = `col${i}`; // might not need
            //col.textContent = `col${i}`;

            row.appendChild(col);
        }
        gridContainer.appendChild(row);
    }
}

function addColor() {
    this.style.backgroundColor = "blue";
}

function clearGrid() {
    let squares = document.getElementsByClassName("color"); 
    for ( let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = "white";
    }
}

function changeGrid() {
    let input = prompt("Enter a number for the new size of your grid:"); 

    const size = parseInt(input); 

    if ( size === NaN) {
        createGrid(16); 
    }
    else {
        createGrid(size); 
    }
}

function updateGrid() {
    // clear the grid
    clearGrid(); 
    //do prompt to ask how many squares for new grid..
    changeGrid(); 
}


createGrid();
// Does the "hover" effect
let pixels = document.getElementsByClassName("color");

for ( let i = 0; i < pixels.length; i++ ) {
    pixels[i].addEventListener("mouseover", addColor);
}