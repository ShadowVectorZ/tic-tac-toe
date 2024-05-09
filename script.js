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

    const playerChoice=function(row,column){
        if(gameboard.board[Number(row)][Number(column)]==='')
        gameboard.board[Number(row)][Number(column)]='o'
        else return("spot is taken, try again")
    

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