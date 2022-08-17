// query selectors
const container = document.querySelector(".container")
const createBtn = document.querySelector('#create-btn')


let userInput;
let columnDiv
let squareDiv

//display Start UI
displayStartGrid();
changeColors();

//trigger create new grid
createBtn.addEventListener('click', start);

// game functions
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

function createNewGrid() {
    removeSquares()
    userInput = Number(document.getElementById("user-input").value)
    console.log(typeof(userInput))
    if (userInput > 100 || !userInput){
        displayStartGrid()
        return  alert('Please enter a number between 1-100')
    }
    let gridSize = userInput
    console.log(userInput)
    for (let y = 1; y <= gridSize; y++) {
        columnDiv = document.createElement("div")
        columnDiv.classList.add('columnDiv')
        container.appendChild(columnDiv)
        for (let x = 1; x <= gridSize; x++){
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

function applyDivStyle() {
    squareDiv.style.display = "block"
    squareDiv.style.visibility = "visible"
    squareDiv.style.border = "1px solid black"
    squareDiv.style.width = "25px"
    squareDiv.style.height = "25px"
    
}

