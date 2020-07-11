const DEFAULTGRIDSIZE = 560;

let gridContainer = document.querySelector("#gridContainer");
gridContainer.className = "grid";

//document.getElementById("gridContainer").style = "width: 600px; height: 600px";
//document.getElementById("gridContainer").style = "height: 600px";


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

    // adjust the col..
    fixCols(size);

    const tempPix = DEFAULTGRIDSIZE / size; 
    // changes the entire grid template columns to the default size..
    document.getElementById("gridContainer").style = 
        `grid-template-columns: repeat(${size}, ${tempPix}px)`; 


}

// fixes the padding for the Column sizes..
function fixCols(size) {
    const numCols = document.getElementsByClassName("col"); 
    const newSize = DEFAULTGRIDSIZE / size / 2; 
    for (let i = 0; i < numCols.length; i++) {
        numCols[i].style.padding = `${newSize}px`;
    }
}

function addColor() {
    this.style.backgroundColor = "blue";
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
    let input = prompt("Enter a number for the new size of your grid:"); 
    const size = parseInt(input); 

    console.log(size);

    if ( size === NaN) {
        console.log("NaN if");
        createGrid(16);
        hoverEffect();  
    }
    else {
        removeGrid(); 
        createGrid(size);
        hoverEffect(); 
    }
}

function updateGrid() {
    // clear the grid
    clearGrid(); 
    //do prompt to ask how many squares for new grid..
    changeGrid(); 
}

// Does the "hover" effect
// It's own function otherwise it would never run the second time after "reset"
function hoverEffect() {
    let pixels = document.getElementsByClassName("color");
    for ( let i = 0; i < pixels.length; i++ ) {
        pixels[i].addEventListener("mouseover", addColor);
    }
}

createGrid();
hoverEffect(); 