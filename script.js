const gameboard = {
    grid : [1,2,3,4,5,6,7,8,9],
    turnNumber : 0,
};

const player1 = {
    addX(){
        
    }
}

const player2 = {
    add0(){
        return 
    }
}
//use a turnCounter and increment by 1, this will control what is put in next, either or 0 or X, then increment the turn number, max turns = 9

const turnControl = (e)=> {
    if (gameboard.turnNumber % 2 === 1){
        //add x to the board
    }else {
        //add 0 to the board
    }
}

//Get start button
const startButton = document.getElementById('start');

startButton.addEventListener("click", (e) =>{
    player1.addX();
})

//Get grid from DOM
let gridSquares = document.getElementsByClassName('grid');

//Add eventlisteners to each grid for interactivity of page

for (let i = 0; i < gridSquares.length; i++){
    gridSquares[i].addEventListener("click", (e) => {
        if (gameboard.turnNumber === 9){
            alert("Its A Draw!");
        }else if (gameboard.turnNumber % 2 === 1){
            //add x to the board            
            gridSquares[i].innerHTML = 'X';
            gridSquares[i].value = 'X';
            gameboard.turnNumber++;
        }else if (gameboard.turnNumber % 2 === 0){
            //add 0 to the board
            gridSquares[i].innerHTML = '0';
            gridSquares[i].value = '0';
            gameboard.turnNumber++;
            
        }
    })
}


    
