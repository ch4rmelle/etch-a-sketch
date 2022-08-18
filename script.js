// query selectors
const container = document.querySelector(".container")
const createBtn = document.querySelector('#create-btn')
const sizeEl = document.querySelector('#grid-size')
const funBtn = document.querySelector('#fun-btn');

// global variables
let userInput
let defaultSize = 16
let counter = 0
let randomRGB = generateRGB();
let brightness = 110;


function populate(size) {
    container.style.setProperty('--size', size)
    for (let i = 0; i < size*size; i++){
        const div = document.createElement('div')
        div.classList.add('pixel')
        container.appendChild(div)
    }
}
//display Start UI
populate(defaultSize)
changeBlack()

//trigger create new grid
createBtn.addEventListener('click', createNewGrid);
funBtn.addEventListener('click', changeColors);

// game functions
function createNewGrid() {
    removeSquares()
    getUserInput()
    // check userinput is valid
    if (userInput > 100 || !userInput | isNaN(userInput)){
        populate(defaultSize);
        return alert('Please enter a number between 1-100')
    }
    else {
        populate(userInput)
        changeBlack()
    }
}

function getUserInput() {
    userInput = Number(sizeEl.value);
    return userInput;
}
    
function removeSquares() {
    while(container.firstChild) {
     container.removeChild(container.firstChild)
    }
    
 }
function changeBlack() {
    const squareDivs = document.querySelectorAll('.pixel')
    squareDivs.forEach((squareDiv) => {
        squareDiv.addEventListener('mouseover', function(e) {
            e.target.style.backgroundColor = "black";
        })
    })
}

function changeColors(){
    const squareDivs = document.querySelectorAll('.pixel')
    squareDivs.forEach((squareDiv) => {
        squareDiv.addEventListener('mouseover', function(e) {
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

function generateRGB() {
    const rgb = Math.floor(Math.random()*16777215).toString(16)
    color = "#" + rgb;
    console.log(color)
    return color;
}

