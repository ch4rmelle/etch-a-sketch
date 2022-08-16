// query selectors
const container = document.querySelector(".container")
let container2 = document.createElement("div");
let div = document.createElement("div")
let div2 = document.createElement("div")

// test user imput
let userInput = Number(prompt("Enter Grid Size"))
createGrid(userInput);

//create a 16x16 grid
// for loop to create 16 divs
function createGrid(gridNum) {
    limitX = gridNum
    limitY = gridNum
    for (let y = 0; y < limitY; y++) {
        container2 = document.createElement("div");
        container.appendChild(container2)
        for (let x = 0; x < limitX; x++){
                div = document.createElement("div")
                applyStyle();
                container2.appendChild(div);
            }
    }
}

//function for div style
function applyStyle() {
    div.style.display = "block";
    div.style.border = "1px solid black"
    div.style.width = "25px"
    div.style.height = "25px"
}
