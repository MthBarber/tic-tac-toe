const gameboard = {
    grid : [1,2,3,4,5,6,7,8,9],
    turnNumber : 1,
    gameWon : false,
    winner : "player",
};

const player1 = {    
    player1Name: "",
    
    
}

const player2 = {
    player2Name: "",
}

//factory function to add player name

const PlayerName = (name) => {
    const getName = prompt("Whats your name player?");
    return {getName};
}

//Get start button
const startButton = document.getElementById('start');

startButton.addEventListener("click", (e) =>{
    console.log("You pressed start!");
    player1.player1Name = PlayerName();
    player2.player1Name = PlayerName();
    turnControl();
    
})

//Code to check for a winner
const checkWinnerX = (e) => {
    if (gameboard.grid[0] + gameboard.grid[1] + gameboard.grid[2] === 'XXX'){
        console.log("WE HAVE A WINNER! x 012");
        return gameboard.gameWon = true;
    }else if (gameboard.grid[3] + gameboard.grid[4] + gameboard.grid[5] === 'XXX'){
        console.log("WE HAVE A WINNER! x 345");
        return gameboard.gameWon = true;
    }else if (gameboard.grid[6] + gameboard.grid[7] + gameboard.grid[8] === 'XXX'){
        console.log("WE HAVE A WINNER! x 678");
        return gameboard.gameWon = true;
    }else if (gameboard.grid[0] + gameboard.grid[3] + gameboard.grid[6] === 'XXX'){
        console.log("WE HAVE A WINNER! x 036");
        return gameboard.gameWon = true;
    }else if (gameboard.grid[1] + gameboard.grid[4] + gameboard.grid[7] === 'XXX'){
        console.log("WE HAVE A WINNER! x 147");
        return gameboard.gameWon = true;
    }else if (gameboard.grid[2] + gameboard.grid[5] + gameboard.grid[8] === 'XXX'){
        console.log("WE HAVE A WINNER! x 258");
        return gameboard.gameWon = true;
    }else if (gameboard.grid[0] + gameboard.grid[4] + gameboard.grid[8] === 'XXX'){
        console.log("WE HAVE A WINNER! x 048");
        return gameboard.gameWon = true;
    }else if (gameboard.grid[2] + gameboard.grid[4] + gameboard.grid[6] === 'XXX'){
        console.log("we have a winner x 246");
        return gameboard.gameWon = true;
    }else
        return false;
}

const checkWinner0 = (e) => {
    if (gameboard.grid[0] + gameboard.grid[1] + gameboard.grid[2] === '000'){
        console.log("WE HAVE A WINNER! 0 012");
        return gameboard.gameWon = true;
    }else if (gameboard.grid[3] + gameboard.grid[4] + gameboard.grid[5] === '000'){
        console.log("WE HAVE A WINNER! 0 345");
        return gameboard.gameWon = true;
    }else if (gameboard.grid[6] + gameboard.grid[7] + gameboard.grid[8] === '000'){
        console.log("WE HAVE A WINNER! 0 678");
        return gameboard.gameWon = true;
    }else if (gameboard.grid[0] + gameboard.grid[3] + gameboard.grid[6] === '000'){
        console.log("WE HAVE A WINNER! 0 036");
        return gameboard.gameWon = true;
    }else if (gameboard.grid[1] + gameboard.grid[4] + gameboard.grid[7] === '000'){
        console.log("WE HAVE A WINNER! 0 147");
        return gameboard.gameWon = true;
    }else if (gameboard.grid[2] + gameboard.grid[5] + gameboard.grid[8] === '000'){
        console.log("WE HAVE A WINNER! 0 258");
        return gameboard.gameWon = true;
    }else if (gameboard.grid[0] + gameboard.grid[4] + gameboard.grid[8] === '000'){
        console.log("WE HAVE A WINNER! 0 048");
        return gameboard.gameWon = true;
    }else if (gameboard.grid[2] + gameboard.grid[4] + gameboard.grid[6] === '000'){
        console.log("we have a winner 0 246");
        return gameboard.gameWon = true;
    }else
        return false
}

//Get grid from DOM
let gridSquares = document.getElementsByClassName('grid');

//Add eventlisteners to each grid for interactivity of page
//use a turnCounter and increment by 1, this will control what is put in next, either or 0 or X, then increment the turn number, max turns = 9


const turnControl = (e)=> {    
        for (let i = 0; i < gridSquares.length; i++){            
            gridSquares[i].addEventListener("click", (e) => {
                if (gameboard.turnNumber === 10){
                    alert("Its A Draw!");
                }else if ((gameboard.turnNumber % 2 === 1) && ((gridSquares[i].innerHTML != 'X') && (gridSquares[i].innerHTML != '0'))){
                    //add x to the board            
                    gridSquares[i].innerHTML = 'X';                    
                    console.log("first else if");
                    gameboard.grid[i] = 'X';
                    gameboard.turnNumber++;
                    console.log(gridSquares[i]);
                    console.table(gameboard.grid);
                    checkWinnerX();
                    gameOver();
                    //need to add switch statement to break
                }else if ((gameboard.turnNumber % 2 === 0) && ((gridSquares[i].innerHTML != 'X') && (gridSquares[i].innerHTML != '0'))){
                    //add 0 to the board
                    gridSquares[i].innerHTML = '0';                    
                    console.log("second else if");
                    gameboard.grid[i] = '0';
                    gameboard.turnNumber++;                            //Need to break out with Return when winner is found
                    console.log(gridSquares[i]);
                    console.table(gameboard.grid);
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
        alert("Game Won");
        resetGame();
        
    }else if (gameboard.gameWon === false){

    }
}

//create a function to reset board

function resetGame(){
    gameboard.grid = [1,2,3,4,5,6,7,8,9];
    gameboard.turnNumber = 1;
    gameboard.gameWon = false;
    for (let i = 0; i < gridSquares.length; i++){
        gridSquares[i].innerHTML = "";
        


    }
}
