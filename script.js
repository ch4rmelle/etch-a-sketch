// query selectors
const container = document.querySelector(".container")
let columnDiv;
let squareDiv;

// test user imput
let userInput = Number(prompt("Enter Grid Size"))
createGrid(userInput);
const squareDivs = document.querySelectorAll('.squareDiv')

function startColor(){
    squareDivs.forEach((squareDiv) => {
        squareDiv.addEventListener('mouseover', function(e) {
            e.target.style.backgroundColor = "black";
        })
    })
}
//create a 16x16 grid
// for loop to create 16 divs
function createGrid(gridNum) {
    limitX = gridNum
    limitY = gridNum
    for (let y = 1; y <= limitY; y++) {
        columnDiv = document.createElement("div");
        columnDiv.classList.add('columnDiv');
        container.appendChild(columnDiv)
        for (let x = 1; x <= limitX; x++){
                squareDiv = document.createElement("div")
                squareDiv.classList.add(`squareDiv`)
                applyDivStyle();
                columnDiv.appendChild(squareDiv);
            }
    }

}

function changeColor() {
    squareDiv.style.backgroundColor = "black";
}
//function for div style
function applyDivStyle() {
    squareDiv.style.display = "block";
    squareDiv.style.border = "1px solid black"
    squareDiv.style.width = "25px"
    squareDiv.style.height = "25px"
}

startColor();