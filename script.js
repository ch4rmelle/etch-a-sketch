// global variables
const DEFAULT_SIZE = 16
let userColor
let userInput
let currentSelection = "color";
let mouseDown = false;
let drag = false;

// Game function selectors
const container = document.querySelector(".container")
const sizeEl = document.querySelector('#grid-size')
const colorPicker = document.querySelector("#color-picker")
const output = document.querySelector("#output")
const gridValueSpan = document.querySelector('#grid-value')
const nightBtn = document.querySelector('#night-theme')
const bodyEl = document.querySelector(".body")
const headerEl = document.querySelector(".hdr-color")
const leftEl = document.querySelector(".left-board-btns")
const leftBtns = document.querySelectorAll(".lb")

//event listeners
sizeEl.addEventListener('input', createNewGrid)
colorPicker.addEventListener("input", chooseColor)
colorPicker.addEventListener("change", chooseColor)
nightBtn.addEventListener("click", nightTheme)

leftBtns.forEach((leftBtn) =>
    {
        leftBtn.addEventListener('click', (e) => {
         currentSelection = e.target.id
            console.log(currentSelection)
            choice(currentSelection)
        })
    } )

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
    switch(currentSelection) {
        case "rainbow":
            rainbowEffect()
            break
        // case "black":
        //     changeBlack()
        //     break
        case "eraser":
            eraser()
            break
        case "color":
            console.log(currentSelection)
            chooseColor()
            break
        case "reset":
            resetBoard()
            break
        case "gridlines":
            gridlines()
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

// function changeBlack() {
    
//     const squareDivs = document.querySelectorAll(".pixel")
//     squareDivs.forEach((squareDiv) => {
//         squareDiv.addEventListener('mousedown', () => {
//             squareDiv.style.backgroundColor = "black"
            
//         })
//     })
// }

function rainbowEffect(){
    const squareDivs = document.querySelectorAll(".pixel")
    squareDivs.forEach((squareDiv) => {
        squareDiv.addEventListener('mousedown', () => {
            squareDiv.style.backgroundColor = generateRGB()
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

function resetBoard() {
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