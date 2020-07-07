let gridContainer = document.querySelector("#gridContainer");
gridContainer.className = "grid";

function createGrid() {
    for ( let i = 0; i < 16; i++ ) {
        let row = document.createElement("div");
        row.className = "row"; 
        row.id = `row${i}`; // might not need..

        for ( let j = 0; j < 16; j++) {
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

function updateGrid() {
    // clear the grid
    clearGrid(); 
    //do prompt to ask how many squares for new grid..
}


createGrid();
// Does the "hover" effect
let pixels = document.getElementsByClassName("color");

for ( let i = 0; i < pixels.length; i++ ) {
    pixels[i].addEventListener("mouseover", addColor);
}