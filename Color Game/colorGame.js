//Variables
let gameMode = 6;
let colors = [];
let chosenColor;
let easyIsClicked = false;
let hardIsClicked = false;
//Selectors
let squares = document.querySelectorAll(".square");
let displayColor = document.getElementById("chosenColor");
let result = document.getElementById("result");
let h1 = document.querySelector("h1");
let resetButton = document.getElementById("resetGame");
let easyButton = document.getElementById("easyButton");
let hardButton = document.getElementById("hardButton");

init();

easyButton.addEventListener("click", function() {
    gameMode = 3;
    if(!easyIsClicked) {
        easyIsClicked = true;
        hardIsClicked = false;
        resetGame();
    }
    
})

hardButton.addEventListener("click", function() {
    gameMode = 6;
    if(!hardIsClicked) {
        hardIsClicked = true;
        easyIsClicked = false;
        resetGame();
    }
})

resetButton.addEventListener("click", function() {
    resetGame();
})


//Functions

//Initialize game
function init() {
    modeSelector();
    setupSquares();
    resetGame();
}

//Reset game
function resetGame() {
    result.textContent = "";
    h1.style.backgroundColor = "steelblue";
    //generate new colors
    colors = colorGenerator(gameMode);
    //pick a new random color
    chosenColor = colorPicker();
    displayColor.textContent = chosenColor;
    //change squares colors
    colorChanger(squares);
    resetButton.textContent = "New colors";
    modeSelector(gameMode);
}

//Setup Squares
function setupSquares() {
    for(let i = 0; i < squares.length; ++i) {
        //add click listeners to squares
        squares[i].addEventListener("click", function() {
            //grab clicked color
            let clickedSquare = this.style.backgroundColor;
            //compare color to chosenColor
            if(clickedSquare === chosenColor) {
                result.textContent = "Correct!";
                winGame(chosenColor);
                resetButton.textContent = "Play again?";
                
            } else {
                this.style.backgroundColor = "#232323";
                result.textContent = "Try again!";
            }
        });
    }
}

//Select game mode
function modeSelector(val) {
    if(gameMode === 3) {
        easyButton.classList.add("selected");
        hardButton.classList.remove("selected");
        for(let i = 0; i < squares.length; ++i) {
            if(colors[i]) {
                squares[i].style.backgroundColor = colors[i];
            } else {
                squares[i].style.display = "none";
            }
        }
    } else {
        hardButton.classList.add("selected");
        easyButton.classList.remove("selected");
        for(let i = 0; i < squares.length; ++i) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        }
    }
}

//Changes all the squares and the h1 to the winning color
function winGame(color) {
    //loop through all squares
    for(let i = 0; i < squares.length; ++i) {
        //change each color to the winning color
        squares[i].style.backgroundColor = color;
    }
    h1.style.backgroundColor = color;
}

//Picking a random color
function colorPicker() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

//Creating array of random colors
function colorGenerator(num) {
    //make array
    let arr = [];
    //add random colors to the array
    for(let i = 0; i < num; ++i) {
        //get random color and push it to the array
        arr.push(randomColor());
    }
    return arr;
}

//Generating random colors
function randomColor() {
    //pick "red" from 0 - 255
    let r = Math.floor(Math.random() * 256);
    //pick "green" from 0 - 255
    let g = Math.floor(Math.random() * 256);
    //pick "blue" from 0 - 255
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b +")";
}

//Changing squares colors when reseting
function colorChanger(array) {
    for(let i = 0; i < array.length; ++i) {
        array[i].style.backgroundColor = colors[i];
    }
}
