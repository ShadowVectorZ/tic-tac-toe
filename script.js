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



const computerChoice=function(){
    let choice=0
    let secondChoice=0 
    choice = Number(Math.floor(Math.random()*gameboard.board.length))
    secondChoice=Number(Math.floor(Math.random()*gameboard.board.length))
    gameboard.board[Number(choice)][Number(secondChoice)]='x'
    console.log(gameboard.board)
}


const game=function(){
let gameMode
if (gameMode==="vsComputer"){

}

else if(gameMode==='vsPlayer'){

}

}