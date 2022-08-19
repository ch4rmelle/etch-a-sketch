// global variables
const DEFAULT_SIZE = 4
let currentColor = 'black'
let userColor;
// let currentSelection;
let userInput

const container = document.querySelector(".container")
const sizeEl = document.querySelector('#grid-size')
const gradientBtn = document.querySelector('#fun-btn')
const clearBtn = document.querySelector('#clear-btn')
const colorPicker = document.querySelector("#color-picker")

// Default Grid Set
function startUI() {
container.style.setProperty('--size', DEFAULT_SIZE)
for (let i = 0; i < DEFAULT_SIZE*DEFAULT_SIZE; i++){
    const div = document.createElement('div')
    div.classList.add('pixel')
    container.appendChild(div)
}
}

//event listeners
sizeEl.addEventListener('input', createNewGrid)
gradientBtn.addEventListener('click', gradientEffect)
clearBtn.addEventListener('click', clearBoard)
colorPicker.addEventListener("input", chooseColor, false)
colorPicker.addEventListener("change", chooseColor, false)

// game functions
function populate(size) {
    container.style.setProperty('--size', size)
    for (let i = 0; i < size*size; i++){
        const div = document.createElement('div')
        div.classList.add('pixel')
        container.appendChild(div)
    }
}

function createNewGrid() {
    removeSquares()
    getUserInput()
    populate(userInput)
    return
}

function getUserInput() {
    userInput = Number(sizeEl.value);
    return userInput;
}
    
function changeBlack() {
    const squareDivs = document.querySelectorAll(".pixel")
    squareDivs.forEach((squareDiv) => {
        squareDiv.addEventListener('mousedown', function(e) {
            e.target.style.backgroundColor = "black";
        })
    })
}

function gradientEffect(){
    let brightness = 110;
    let randomRGB = generateRGB();
    const squareDivs = document.querySelectorAll(".pixel")
    squareDivs.forEach((squareDiv) => {
        squareDiv.addEventListener('mousedown', function(e) {
            e.target.style.backgroundColor = randomRGB
            brightness = brightness - 10
            if(brightness < 0)
            {
                brightness = 100
            }
            e.target.style.filter = `brightness(${brightness}%)`
            console.log(brightness)
        })
    })}

function chooseColor() {
    const squareDivs = document.querySelectorAll(".pixel")
    userColor = colorPicker.value
    squareDivs.forEach((squareDiv) => {
        squareDiv.addEventListener('mousedown', function(e){
            e.target.style.backgroundColor = userColor;
        })
    })
}

function generateRGB() {
    const rgb = Math.floor(Math.random()*16777215).toString(16)
    color = "#" + rgb;
    console.log(color)
    return color;
}

// reset board
function removeSquares() {
    while(container.firstChild) {
     container.removeChild(container.firstChild)
    }
 }

function clearBoard() {
    const squareDivs = document.querySelectorAll(".pixel")
    squareDivs.forEach((squareDiv => {
    squareDiv.style.backgroundColor = 'white'
    squareDiv.style.filter = "brightness(100%)"
}))
}
startUI()
changeBlack()