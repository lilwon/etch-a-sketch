const DEFAULTGRIDSIZE = 560; // pixel size of

let gridContainer = document.querySelector("#gridContainer");
gridContainer.className = "grid";

// still need to fix when user inputs nothing
function createGrid(size) {
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
        " (The maximum size is 100. Default is 16.)"); 
    if ( isNaN(parseInt(input))) {
        removeGrid(); 
        createGrid(16);
        blackWhite(); 
    }
    else {
        const size = parseInt(input);
        // put limitation on grid size
        if ( size > 0 && size < 101) {
            removeGrid(); 
            createGrid(size);
            blackWhite();
        }
        else {
            // default grid size
            removeGrid(); 
            createGrid(16);
            blackWhite();
        }
    }
}

// only reset the grid
function resetGrid() {
    clearGrid(); 
}

function updateGrid() {
    clearGrid();  // does it even need to clear the grid if user is going to change it?
    //do prompt to ask how many squares for new grid..
    changeGrid(); 
}

// Does the "hover" effect
// It's own function otherwise it would never run the second time after eset
function RGBColor() {
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

// toggle dark mode
function darkMode() {
    const body = document.body; 
    body.classList.toggle("darkMode");

    let x = document.getElementById("dkMode").innerText;
    document.getElementById("dkMode").innerText = 
        (x == "brightness_3") ? "wb_sunny" : "brightness_3";

}

function changeToggleText() {
    let text = document.getElementById("chooseMode").innerText;
    document.getElementById("chooseMode").innerText = 
        ( text == "RGB On") ? "RGB Off" : "RGB On"; 
}

// first run.
createGrid();
blackWhite();

// used to for the toggle color
document.addEventListener("DOMContentLoaded", function() {

    var checkbox = document.querySelector(`input[type="checkbox"]`);

    checkbox.addEventListener("click", function() {
        if ( checkbox.checked) {
            changeToggleText();
            console.log("Checked");
            RGBColor();
        }
        else {
            changeToggleText();
            console.log("Not Checked");
            blackWhite();
        }
    });

})