const gameboard = {
    grid : [1,2,3,4,5,6,7,8,9],
    turnNumber : 1,
};

const player1 = {
    addX(){
        return
    }
}

const player2 = {
    add0(){
        return 
    }
}
//use a turnCounter and increment by 1, this will control what is put in next, either or 0 or X, then increment the turn number, max turns = 9

//const turnControl = (e)=> {
    //if (gameboard.turnNumber % 2 === 1){
        //add x to the board
    //}else {
        //add 0 to the board
    //}
//}

//Get start button
const startButton = document.getElementById('start');

startButton.addEventListener("click", (e) =>{
    console.log("You pressed start!");
    turnControl();
    
})

//Code to check for a winner
const checkWinnerX = (e) => {
    if (gameboard.grid[0] && gameboard.grid[1] && gameboard.grid[2] === 'X'){
        console.log("WE HAVE A WINNER! x")
    }else if (gameboard.grid[3] && gameboard.grid[4] && gameboard.grid[5] === 'X'){
        console.log("WE HAVE A WINNER! x")
    }else if (gameboard.grid[6] && gameboard.grid[7] && gameboard.grid[8] === 'X'){
        console.log("WE HAVE A WINNER! x")
    }else if (gameboard.grid[0] && gameboard.grid[3] && gameboard.grid[6] === 'X'){
        console.log("WE HAVE A WINNER! x")
    }else if (gameboard.grid[1] && gameboard.grid[4] && gameboard.grid[7] === 'X'){
        console.log("WE HAVE A WINNER! x")
    }else if (gameboard.grid[2] && gameboard.grid[5] && gameboard.grid[8] === 'X'){
        console.log("WE HAVE A WINNER! x")
    }else if (gameboard.grid[0] && gameboard.grid[4] && gameboard.grid[8] === 'X'){
        console.log("WE HAVE A WINNER! x")
    }else if (gameboard.grid[2] && gameboard.grid[4] && gameboard.grid[6] === 'X'){
        
    }
}

const checkWinner0 = (e) => {
    if (gameboard.grid[0] && gameboard.grid[1] && gameboard.grid[2] === '0'){
        console.log("WE HAVE A WINNER! 0")
    }else if (gameboard.grid[3] && gameboard.grid[4] && gameboard.grid[5] === '0'){
        console.log("WE HAVE A WINNER! 0")
    }else if (gameboard.grid[6] && gameboard.grid[7] && gameboard.grid[8] === '0'){
        console.log("WE HAVE A WINNER! 0")
    }else if (gameboard.grid[0] && gameboard.grid[3] && gameboard.grid[6] === '0'){
        console.log("WE HAVE A WINNER! 0")
    }else if (gameboard.grid[1] && gameboard.grid[4] && gameboard.grid[7] === '0'){
        console.log("WE HAVE A WINNER! 0")
    }else if (gameboard.grid[2] && gameboard.grid[5] && gameboard.grid[8] === '0'){
        console.log("WE HAVE A WINNER! 0")
    }else if (gameboard.grid[0] && gameboard.grid[4] && gameboard.grid[8] === '0'){
        console.log("WE HAVE A WINNER! 0")
    }else if (gameboard.grid[2] && gameboard.grid[4] && gameboard.grid[6] === '0'){
        
    }
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
                    gridSquares[i].value = 'X';
                    console.log("first else if");
                    gameboard.grid[i] = 'X';
                    gameboard.turnNumber++;
                    checkWinnerX();
                }else if ((gameboard.turnNumber % 2 === 0) && ((gridSquares[i].innerHTML != 'X') && (gridSquares[i].innerHTML != '0'))){
                    //add 0 to the board
                    gridSquares[i].innerHTML = '0';
                    gridSquares[i].value = '0';
                    console.log("second else if");
                    gameboard.grid[i] = '0';
                    gameboard.turnNumber++;
                    checkWinner0();
                }else {
                    gameboard.turnNumber = gameboard.turnNumber;
                    console.log(gameboard.turnNumber);
                }
            })
        }
}

    
