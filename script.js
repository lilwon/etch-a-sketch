let gridContainer = document.querySelector('#gridContainer');
gridContainer.className = 'grid';

function createGrid() {
    for ( let i = 0; i < 16; i++ ) {
        let row = document.createElement('div');
        row.className = 'row'; 
        row.id = `row${i}`;

        for ( let j = 0; j < 16; j++) {
            let col = document.createElement('div');
            col.className = 'col'; 
            col.id = `col${i}`;
            col.textContent = `col${i}`;

            row.appendChild(col);
        }

        gridContainer.appendChild(row);
    }
}

createGrid();