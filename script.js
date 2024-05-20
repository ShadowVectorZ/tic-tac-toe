function createPlayer(player){
    const playerSign=''
    const changePlayerSign= () =>
        {if(this.playerSign==='x'){
            this.playerSign='o'
        }
        else if(this.playerSign==='o'){
        this.playerSign='x'}}
    return{player,playerSign,changePlayerSign}
}


//need to add objects or values
const player1=(function(player1){
    player1= createPlayer("player1")
    this.playerSign='x'
   return{player1,playerSign}
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

let reset=function(){
    for(let i=0;i<gameboard.board.length;i++){
        let row=gameboard.board[i];
        for(let j=0;j<row.length;j++){
            gameboard.board[i][j]=''
        }
    }    
    console.log(board)
}
return {board,reset};
})()



const changeGameMode=function(){
    let gameMode
    if (gameMode==='Vs Computer'){
        gameMode==='Vs Player'
    }
    else if(gameMode==='Vs Player'){
        gameMode==='Vs Computer'
    }
}

    

const game=(function(){
// let gameMode='vsComputer'
// if (gameMode==="vsComputer"){

    const playerChoice=function(row,column){
        // if(game.checkBoard===true&&game.checkForTie===true){
        if(gameboard.board[Number(row)][Number(column)]===''){
        gameboard.board[Number(row)][Number(column)]=`${player1.playerSign}`
    console.log(gameboard.board)    
    }
        else return("spot is taken, try again")
    }

    let checkBoard=function(){
        if (gameboard.board[0][0]==='x'&&gameboard.board[1][0]==='x'&&gameboard.board[2][0]==='x'||
            gameboard.board[0][1]==='x'&&gameboard.board[1][1]==='x'&&gameboard.board[2][1]==='x'||
            gameboard.board[0][2]==='x'&&gameboard.board[1][2]==='x'&&gameboard.board[2][2]==='x'||
            gameboard.board[0][0]==='x'&&gameboard.board[1][1]==='x'&&gameboard.board[2][2]==='x'||
            gameboard.board[0][2]==='x'&&gameboard.board[1][1]==='x'&&gameboard.board[2][0]==='x'||
            gameboard.board[2][0]==='x'&&gameboard.board[2][1]==='x'&&gameboard.board[2][2]==='x'||
            gameboard.board[1][0]==='x'&&gameboard.board[1][1]==='x'&&gameboard.board[1][2]==='x'||
            gameboard.board[0][0]==='x'&&gameboard.board[0][1]==='x'&&gameboard.board[0][2]==='x'
        ){return 'X wins' }
        else if (gameboard.board[0][0]==='o'&&gameboard.board[1][0]==='o'&&gameboard.board[2][0]==='o'||
                gameboard.board[0][1]==='o'&&gameboard.board[1][1]==='o'&&gameboard.board[2][1]==='o'||
                gameboard.board[0][2]==='o'&&gameboard.board[1][2]==='o'&&gameboard.board[2][2]==='o'||
                gameboard.board[0][0]==='o'&&gameboard.board[1][1]==='o'&&gameboard.board[2][2]==='o'||
                gameboard.board[0][2]==='o'&&gameboard.board[1][1]==='o'&&gameboard.board[2][0]==='o'||
                gameboard.board[2][0]==='o'&&gameboard.board[2][1]==='o'&&gameboard.board[2][2]==='o'||
                gameboard.board[1][0]==='o'&&gameboard.board[1][1]==='o'&&gameboard.board[1][2]==='o'||
                gameboard.board[0][0]==='o'&&gameboard.board[0][1]==='o'&&gameboard.board[0][2]==='o'
        ){return 'O wins'}
    }
    

    let checkForTie= function(){
        let sum=0 
        for(let i=0;i<gameboard.board.length;i++){
            let row=gameboard.board[i];
            for(let j=0;j<row.length;j++){
                if (gameboard.board[i][j]==='x'||gameboard.board[i][j]==='o') {
                    sum+=1}
            }
        } if (sum===9){
            return 'tie game'
        } 
    }

    const computerChoice=function(){
        let choice=0
        let secondChoice=0
        let getComputerChoice=function(){
            choice = Number(Math.floor(Math.random()*gameboard.board.length))
            secondChoice=Number(Math.floor(Math.random()*gameboard.board.length))
        }
        getComputerChoice()
        do{getComputerChoice()
        } while(!gameboard.board[Number(choice)][Number(secondChoice)]=='')
        let computerSign=''
        if(player1.playerSign==='x'){
            computerSign='o'
        }
        else computerSign='x'
        gameboard.board[Number(choice)][Number(secondChoice)]=`${computerSign}`
        console.log(gameboard.board)
        
    }

    // }

// else if(gameMode==='vsPlayer'){

// }
return{playerChoice, checkBoard, checkForTie,computerChoice};

})()




//console.log(game.playerChoice(1,1))
//console.log(game.checkBoard())
//console.log(game.checkForTie())
//console.log(game.computerChoice())