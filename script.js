// global variables
const DEFAULT_SIZE = 16
let userColor
let userInput
let currentButton = "black";

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
const nightBtn = document.querySelector('#night-theme')
const bodyEl = document.querySelector(".body")
const headerEl = document.querySelector(".hdr-color")
const leftEl = document.querySelector(".left-board-btns")
const leftBtns = document.querySelectorAll(".lb")

//event listeners
sizeEl.addEventListener('input', createNewGrid)
clearBtn.addEventListener('click', clearBoard)
colorPicker.addEventListener("input", chooseColor)
colorPicker.addEventListener("change", chooseColor)
gridlinesBtn.addEventListener("click", gridlines)
nightBtn.addEventListener("click", nightTheme)

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

container.style.setProperty('--size', DEFAULT_SIZE)
for (let i = 0; i < DEFAULT_SIZE*DEFAULT_SIZE; i++){
    const squareDiv = document.createElement('div')
    squareDiv.classList.add('pixel')
    container.appendChild(squareDiv)
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
    let mouseDown = false
    const squareDivs = document.querySelectorAll(".pixel")
    squareDivs.forEach((squareDiv) => {
        squareDiv.addEventListener('mousedown', () => {
            squareDiv.style.backgroundColor = "black"
            mouseDown = true
        })
    })
}

function gradientEffect(){
    let brightness = 110;
    let randomRGB = generateRGB();
    const squareDivs = document.querySelectorAll(".pixel")
    squareDivs.forEach((squareDiv) => {
        squareDiv.addEventListener('mousedown', () => {
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
        squareDiv.addEventListener('mousedown', () => {
            squareDiv.style.backgroundColor = userColor
            squareDiv.style.filter = `brightness(100%)`
        })
    })
}

function eraser() {
    const squareDivs = document.querySelectorAll('.pixel')
    squareDivs.forEach((squareDiv) => {
        squareDiv.addEventListener('mousedown', () => {
            squareDiv.removeAttribute('style')
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
    container.innerHTML = ""
 }

function clearBoard() {
    const squareDivs = document.querySelectorAll(".pixel")
    squareDivs.forEach((squareDiv => {
    squareDiv.removeAttribute('style')
}))
}

function nightTheme() {
    bodyEl.classList.toggle("body-night")
    headerEl.classList.toggle("hdr-night")
    container.classList.toggle("container-night")
    leftEl.classList.toggle("left-btns-night")
    nightBtn.classList.toggle("lb-night")
    for (const btn of leftBtns) {
        btn.classList.toggle("lb-night")
      }
}
choice()