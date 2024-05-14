function createPlayer(player){
    const playerLetter='X'
    return{player,playerLetter}
}


//need to add objects or values
const player1=(function(player1){
    player1= createPlayer("player1")
   return{player1}
})()


//need to add objects or values
const player2=(function(player2){
 player2=createPlayer('player2')
return{player2}
})()





const gameboard=(function(){
let board=[
    ["","","",],
    ["","","",],
    ["","","",],
]
return {board}
})()





// const game=function(){
// let gameMode='vsComputer'
// if (gameMode==="vsComputer"){

    const singleRound=function(row,column){
        if(gameboard.board[Number(row)][Number(column)]==='')
        gameboard.board[Number(row)][Number(column)]='o'
        else return("spot is taken, try again")
    
        let checkForScore= function(){ 
             let sum=0
            for(let i=0;i<gameboard.board.length;i++){
                let row=gameboard.board[i];
                for(let j=0;j<row.length;j++){
                    if (gameboard.board[i][j]==='x'||gameboard.board[i][j]==='o') {
                        sum+=1}
                }
            }      
        }
        checkForScore()
        if (sum===9){
            return "tie game"
        }else {sum=0}

        let choice=0
        let secondChoice=0
        const computerChoice=function(){
            let getComputerChoice=function(){
                choice = Number(Math.floor(Math.random()*gameboard.board.length))
                secondChoice=Number(Math.floor(Math.random()*gameboard.board.length))
            }
            getComputerChoice()
            do{getComputerChoice()
            } while(!gameboard.board[Number(choice)][Number(secondChoice)]=='')
        
            gameboard.board[Number(choice)][Number(secondChoice)]='x'
            console.log(gameboard.board)
            console.log(choice)
            console.log(secondChoice)
        }
    computerChoice()
    }

    // playerChoice()
// }

// else if(gameMode==='vsPlayer'){

// }

// }