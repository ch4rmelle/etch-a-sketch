// query selectors
const container = document.querySelector(".container")
const createBtn = document.querySelector('#create-btn')


let userInput;
let columnDiv
let squareDiv

//display Start UI
displayStartGrid();
changeColors();

//trigger create grid
createBtn.addEventListener('click', start);

function start() {
    createNewGrid();
    changeColors();
}
function changeColors(){
    const squareDivs = document.querySelectorAll('.squareDiv')
    squareDivs.forEach((squareDiv) => {
        squareDiv.addEventListener('mouseover', function(e) {
            e.target.style.backgroundColor = "black";
        })
    })
}

function displayStartGrid() {
    for (let y = 1; y <= 16; y++) {
        columnDiv = document.createElement("div")
        columnDiv.classList.add('columnDiv')
        container.appendChild(columnDiv)
        for (let x = 1; x <= 16; x++){
                squareDiv = document.createElement("div")
                squareDiv.classList.add(`squareDiv`)
                applyDivStyle();
                columnDiv.appendChild(squareDiv)
            }
    }

}
//create a 16x16 grid
// for loop to create 16 divs
function createNewGrid() {
    removeSquares()
    userInput = document.getElementById("user-input").value;
    let size = Number(userInput)
    console.log(userInput)
    for (let y = 1; y <= size; y++) {
        columnDiv = document.createElement("div")
        columnDiv.classList.add('columnDiv')
        container.appendChild(columnDiv)
        for (let x = 1; x <= size; x++){
                squareDiv = document.createElement("div")
                squareDiv.classList.add(`squareDiv`)
                applyDivStyle();
                columnDiv.appendChild(squareDiv)
            }
    }
}

function removeSquares() {
   while(container.firstChild) {
    container.removeChild(container.firstChild)
   }
   
}

//function for div style
function applyDivStyle() {
    squareDiv.style.display = "block"
    squareDiv.style.visibility = "visible"
    squareDiv.style.border = "1px solid black"
    squareDiv.style.width = "25px"
    squareDiv.style.height = "25px"
    
}

