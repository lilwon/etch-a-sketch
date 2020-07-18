const DEFAULTGRIDSIZE = 560; // pixel size of

let gridContainer = document.querySelector("#gridContainer");
gridContainer.className = "grid";

// still need to fix when user inputs nothing
function createGrid(size) {

    console.log(size);

    if ( size == undefined || size === NaN ) {
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
    // adjust the col sizes for padding
    fixCols(size);

    const tempPix = DEFAULTGRIDSIZE / size; 
    // changes the entire grid template columns to the default size..
    document.getElementById("gridContainer").style = 
        `grid-template-columns: repeat(${size}, 1fr)`; 
}

// fixes the padding for the Column sizes..
function fixCols(size) {
    const numCols = document.getElementsByClassName("col"); 
    const newSize = DEFAULTGRIDSIZE / size / 2; 
    for (let i = 0; i < numCols.length; i++) {
        numCols[i].style.padding = `${newSize}px`;
    }
}

// normal
function addBlackColor() {
    this.style.backgroundColor = "black";
}

// RGB colors
function addRGBColor() {
    this.style.backgroundColor = `hsla(${Math.random() * 360}, 75%, 50%, 1)`;  
}

function clearGrid() {
    const squares = document.getElementsByClassName("color"); 
    for ( let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = "white";
    }
}

function removeGrid() {
    let temp = document.getElementById("gridContainer");
    while ( temp.hasChildNodes()) {
        temp.removeChild(temp.firstChild); 
    }
}

function changeGrid() {
    let input = prompt("Enter a number for the new size of your grid." + 
        " Note the larger the number the longer it will take to load"); 
    if ( isNaN(parseInt(input))) {
        removeGrid(); 
        createGrid(16);
        blackWhite(); 
    }
    else {
        const size = parseInt(input);
        removeGrid(); 
        createGrid(size);
        blackWhite();
    }
}

function updateGrid() {
    clearGrid();  // does it even need to clear the grid if user is going to change it?
    //do prompt to ask how many squares for new grid..
    changeGrid(); 
}

// Does the "hover" effect
// It's own function otherwise it would never run the second time after eset
function RGBColor(color) {
    let pixels = document.getElementsByClassName("color");
    for ( let i = 0; i < pixels.length; i++ ) {
        pixels[i].addEventListener("mouseover", addRGBColor);
    }
}

function blackWhite() {
    let pixels = document.getElementsByClassName("color");
    for ( let i = 0; i < pixels.length; i++ ) {
        pixels[i].addEventListener("mouseover", addBlackColor);
    }
}

// first run.
createGrid();
blackWhite(); // default color 