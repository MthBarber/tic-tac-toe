//Function to make gameboard
const gameboardCreator = (grid, turnNumber, gameWon, winner) => {
    return {grid, turnNumber, gameWon, winner};
}
//gameboard object created
const gameboard = gameboardCreator([1,2,3,4,5,6,7,8,9],1,false, "player");

//Factory function to create players

const createPlayer = (name) => {
    return {name};
}

//player object creation
const player1 = createPlayer("");
const player2 = createPlayer("");

// function to add player name to UI


const setPlayerName = (name) =>{
    const player1Div = document.getElementById('playerOne');
    const player2Div = document.getElementById('playerTwo');
    if (name == player1.name){
        return player1Div.innerHTML = name;
    }else if (name == player2.name) {
       return player2Div.innerHTML = name;
    }
}

//factory function to add player name
const PlayerName = (name) => {
    const getName = prompt("Whats your name player?"); //Prompt function to add name, not currently used
    return getName;
}

//Create method to type in player 1 name?
const submitButtonOne = document.getElementById("submitOne");


submitButtonOne.addEventListener("click", (e) => {
    const nameInputOne = document.getElementById("nameOne");
    const nameOneField = document.getElementById("nameOneHere");
    nameOneField.innerHTML = nameInputOne.value;
    player1.name = nameInputOne.value;
    nameInputOne.value = "";
})



//Create method to type in player 2 name?
const submitButtonTwo = document.getElementById("submitTwo");


submitButtonTwo.addEventListener("click", (e) => {
    const nameInputTwo = document.getElementById("nameTwo");
    const nameTwoField = document.getElementById("nameTwoHere");
    nameTwoField.innerHTML = nameInputTwo.value;
    player2.name = nameInputTwo.value;
    nameInputTwo.value = "";
})


//Get start button
const startButton = document.getElementById('start');

startButton.addEventListener("click", (e) =>{    
    /*player1.player1Name = PlayerName();
    player2.player2Name = PlayerName();
    setPlayerName(player1.player1Name); //Left in place so names can be added using prompts if wanted
    setPlayerName(player2.player2Name);*/
    turnControl();
    
})

//Code to check for a winner
const checkWinnerX = (e) => {
    if (gameboard.grid[0] + gameboard.grid[1] + gameboard.grid[2] === 'XXX'){
        
        gameboard.winner = player1.name;
        return gameboard.gameWon = true;
    }else if (gameboard.grid[3] + gameboard.grid[4] + gameboard.grid[5] === 'XXX'){
        
        gameboard.winner = player1.name;
        return gameboard.gameWon = true;
    }else if (gameboard.grid[6] + gameboard.grid[7] + gameboard.grid[8] === 'XXX'){
        
        gameboard.winner = player1.name;
        return gameboard.gameWon = true;
    }else if (gameboard.grid[0] + gameboard.grid[3] + gameboard.grid[6] === 'XXX'){
        
        gameboard.winner = player1.name;
        return gameboard.gameWon = true;
    }else if (gameboard.grid[1] + gameboard.grid[4] + gameboard.grid[7] === 'XXX'){
        
        gameboard.winner = player1.name;
        return gameboard.gameWon = true;
    }else if (gameboard.grid[2] + gameboard.grid[5] + gameboard.grid[8] === 'XXX'){
        
        gameboard.winner = player1.name;
        return gameboard.gameWon = true;
    }else if (gameboard.grid[0] + gameboard.grid[4] + gameboard.grid[8] === 'XXX'){
        
        gameboard.winner = player1.name;
        return gameboard.gameWon = true;
    }else if (gameboard.grid[2] + gameboard.grid[4] + gameboard.grid[6] === 'XXX'){
        
        gameboard.winner = player1.name;
        return gameboard.gameWon = true;
    }else
        return false;
}

const checkWinner0 = (e) => {
    if (gameboard.grid[0] + gameboard.grid[1] + gameboard.grid[2] === '000'){
        
        gameboard.winner = player2.name;
        return gameboard.gameWon = true;
    }else if (gameboard.grid[3] + gameboard.grid[4] + gameboard.grid[5] === '000'){
        
        gameboard.winner = player2.name;
        return gameboard.gameWon = true;
    }else if (gameboard.grid[6] + gameboard.grid[7] + gameboard.grid[8] === '000'){
        
        gameboard.winner = player2.name;
        return gameboard.gameWon = true;
    }else if (gameboard.grid[0] + gameboard.grid[3] + gameboard.grid[6] === '000'){
        
        gameboard.winner = player2.name;
        return gameboard.gameWon = true;
    }else if (gameboard.grid[1] + gameboard.grid[4] + gameboard.grid[7] === '000'){
        
        gameboard.winner = player2.name;
        return gameboard.gameWon = true;
    }else if (gameboard.grid[2] + gameboard.grid[5] + gameboard.grid[8] === '000'){
        
        gameboard.winner = player2.name;
        return gameboard.gameWon = true;
    }else if (gameboard.grid[0] + gameboard.grid[4] + gameboard.grid[8] === '000'){
        
        gameboard.winner = player2.name;
        return gameboard.gameWon = true;
    }else if (gameboard.grid[2] + gameboard.grid[4] + gameboard.grid[6] === '000'){
        
        gameboard.winner = player2.name;
        return gameboard.gameWon = true;
    }else
        return false
}



//Add eventlisteners to each grid for interactivity of page
//use a turnCounter and increment by 1, this will control what is put in next, either or 0 or X, then increment the turn number, max turns = 9


const turnControl = (e)=> {
    //Get grid from DOM
        let gridSquares = document.getElementsByClassName('grid');    
        for (let i = 0; i < gridSquares.length; i++){            
            gridSquares[i].addEventListener("click", (e) => {
                if (gameboard.turnNumber === 10){
                    alert("Its A Draw!");
                }else if ((gameboard.turnNumber % 2 === 1) && ((gridSquares[i].innerHTML != 'X') && (gridSquares[i].innerHTML != '0'))){
                    //add x to the board            
                    gridSquares[i].innerHTML = 'X';                   
                    gameboard.grid[i] = 'X';
                    gameboard.turnNumber++;                    
                    checkWinnerX();
                    gameOver();                    
                }else if ((gameboard.turnNumber % 2 === 0) && ((gridSquares[i].innerHTML != 'X') && (gridSquares[i].innerHTML != '0'))){
                    //add 0 to the board
                    gridSquares[i].innerHTML = '0';                  
                    gameboard.grid[i] = '0';
                    gameboard.turnNumber++;                    
                    checkWinner0();
                    gameOver();                     
                }else {
                    gameboard.turnNumber = gameboard.turnNumber;
                    console.log(gameboard.turnNumber);
                }
            })
        }
}

//Create a function that resets the game and grid when a winner is found put function inside checkWinner Function  

function gameOver(){
    if (gameboard.gameWon === true){
        alert("Game Won by " + gameboard.winner);
        resetGame();
        
    }else if (gameboard.gameWon === false){

    }
}

//create a function to reset board

function resetGame(){
    gameboard.grid = [1,2,3,4,5,6,7,8,9];
    gameboard.turnNumber = 1;
    gameboard.winner = "";
    gameboard.gameWon = false;
    //Get grid from DOM
    let gridSquares = document.getElementsByClassName('grid');
    for (let i = 0; i < gridSquares.length; i++){
        gridSquares[i].innerHTML = "";

    }
}
