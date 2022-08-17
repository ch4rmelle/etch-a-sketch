// query selectors
const container = document.querySelector(".container")
const createBtn = document.querySelector('#create-btn')
const sizeEl = document.querySelector('#grid-size')

// global variables
let userInput
let defaultSize = 16;

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
changeColors()

//trigger create new grid
createBtn.addEventListener('click', createNewGrid);

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
        changeColors()

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
function changeColors(){
    const squareDivs = document.querySelectorAll('.pixel')
    squareDivs.forEach((squareDiv) => {
        squareDiv.addEventListener('mouseover', function(e) {
            e.target.style.backgroundColor = "black";
        })
    })
}

