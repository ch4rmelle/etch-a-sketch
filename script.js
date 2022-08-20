// global variables
const DEFAULT_SIZE = 16
let userColor
let userInput

// Game function selectors
const container = document.querySelector(".container")
const sizeEl = document.querySelector('#grid-size')
const gradientBtn = document.querySelector('#fun-btn')
const clearBtn = document.querySelector('#clear-btn')
const colorPicker = document.querySelector("#color-picker")
const blackBtn = document.querySelector("#black-btn")
const eraserBtn = document.querySelector("#eraser-btn")
const output = document.querySelector("#output")
const gridlinesBtn = document.querySelector('#gridlines-btn')
const gridValueSpan = document.querySelector('#grid-value')

//Theme selectors


//event listeners
sizeEl.addEventListener('input', createNewGrid)
clearBtn.addEventListener('click', clearBoard)
colorPicker.addEventListener("input", chooseColor)
colorPicker.addEventListener("change", chooseColor)
gridlinesBtn.addEventListener("click", gridlines)

let currentButton = "black";

gradientBtn.addEventListener('click', () => {
    currentButton = "gradient";
    choice();
    console.log(currentButton)
})
blackBtn.addEventListener('click', () => {
    currentButton = "black"
    choice();
    console.log(currentButton)
})
colorPicker.addEventListener('click', () => {
    currentButton = "color"
    console.log(currentButton)
    choice();
})
eraserBtn.addEventListener('click', () => {
    currentButton = "eraser"
    console.log(currentButton)
    choice();
})

sizeEl.oninput = function() {
    output.innerHTML = `${sizeEl.value} x ${sizeEl.value}`
}

// Default Grid Set
function startUI() {
    container.style.setProperty('--size', DEFAULT_SIZE)
    for (let i = 0; i < DEFAULT_SIZE*DEFAULT_SIZE; i++){
        const squareDiv = document.createElement('div')
        squareDiv.classList.add('pixel')
        container.appendChild(squareDiv)
        }
        choice()
    }

function choice() {
    switch(currentButton) {
        case "gradient":
            gradientEffect()
            break
        case "black":
            changeBlack()
            break
        case "eraser":
            eraser()
            break
        case "color":
            console.log(currentButton)
            chooseColor()
            break
    }
}

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
    choice()
}

function getUserInput() {
    userInput = Number(sizeEl.value);
    return userInput;
}

function changeBlack() {
    const squareDivs = document.querySelectorAll(".pixel")
    squareDivs.forEach((squareDiv) => {
        squareDiv.addEventListener('mouseover', () => {
            squareDiv.style.backgroundColor = "black";
        })
    })
}

function gradientEffect(){
    let brightness = 110;
    let randomRGB = generateRGB();
    const squareDivs = document.querySelectorAll(".pixel")
    squareDivs.forEach((squareDiv) => {
        squareDiv.addEventListener('mouseover', () => {
            squareDiv.style.backgroundColor = randomRGB
            brightness = brightness - 10
            if(brightness < 0)
            {
                brightness = 100
            }
            squareDiv.style.filter = `brightness(${brightness}%)`
        })
    })}

function chooseColor() {
    const squareDivs = document.querySelectorAll(".pixel")
    userColor = colorPicker.value
    squareDivs.forEach((squareDiv) => {
        squareDiv.addEventListener('mouseover', () => {
            squareDiv.style.backgroundColor = userColor
            squareDiv.style.filter = `brightness(100%)`
        })
    })
}

function eraser() {
    const squareDivs = document.querySelectorAll('.pixel')
    squareDivs.forEach((squareDiv) => {
        squareDiv.addEventListener('mouseover', () => {
            squareDiv.style.backgroundColor = "white"
            squareDiv.style.filter = "brightness(100%)"
        })
    })
}

function gridlines() {
    const squareDivs = document.querySelectorAll('.pixel')
    squareDivs.forEach((squareDiv) => {
        let gridShow = squareDiv.classList.toggle('pixel-clear')
        if (gridShow) {
            gridValueSpan.textContent = "Off"
        } else {
            gridValueSpan.textContent = "On"
        };
    })
}

function generateRGB() {
    const rgb = Math.floor(Math.random()*16777215).toString(16)
    color = "#" + rgb;
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
choice()