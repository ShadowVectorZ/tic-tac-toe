function createPlayer(player){
    const playerLetter=''
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


return {board};
})()





    

// const game=function(){
// let gameMode='vsComputer'
// if (gameMode==="vsComputer"){

    const singleRound=function(row,column){
        if(gameboard.board[Number(row)][Number(column)]===''){
        gameboard.board[Number(row)][Number(column)]='o'
        }
        else return("spot is taken, try again")
        let sum=0
        let checkForTie= function(){ 
            for(let i=0;i<gameboard.board.length;i++){
                let row=gameboard.board[i];
                for(let j=0;j<row.length;j++){
                    if (gameboard.board[i][j]==='x'||gameboard.board[i][j]==='o') {
                        sum+=1}
                }
            }      
        }
        checkForTie()
        if (sum===9){
            return "tie game"
        }else {sum=0}
        let checkBoard=function(){
            if (gameboard.board[0][0]==='x'&&gameboard.board[1][0]==='x'&&gameboard.board[2][0]==='x'||
                gameboard.board[0][1]==='x'&&gameboard.board[1][1]==='x'&&gameboard.board[2][1]==='x'||
                gameboard.board[0][2]==='x'&&gameboard.board[1][2]==='x'&&gameboard.board[2][2]==='x'||
                gameboard.board[0][0]==='x'&&gameboard.board[1][1]==='x'&&gameboard.board[2][2]==='x'||
                gameboard.board[0][2]==='x'&&gameboard.board[1][1]==='x'&&gameboard.board[2][0]==='x'||
                gameboard.board[2][0]==='x'&&gameboard.board[2][1]==='x'&&gameboard.board[2][2]==='x'||
                gameboard.board[1][0]==='x'&&gameboard.board[1][1]==='x'&&gameboard.board[1][2]==='x'||
                gameboard.board[0][0]==='x'&&gameboard.board[0][1]==='x'&&gameboard.board[0][2]==='x'
            ){sum= 'X' }
            
            else if (gameboard.board[0][0]==='o'&&gameboard.board[1][0]==='o'&&gameboard.board[2][0]==='o'||
                    gameboard.board[0][1]==='o'&&gameboard.board[1][1]==='o'&&gameboard.board[2][1]==='o'||
                    gameboard.board[0][2]==='o'&&gameboard.board[1][2]==='o'&&gameboard.board[2][2]==='o'||
                    gameboard.board[0][0]==='o'&&gameboard.board[1][1]==='o'&&gameboard.board[2][2]==='o'||
                    gameboard.board[0][2]==='o'&&gameboard.board[1][1]==='o'&&gameboard.board[2][0]==='o'||
                    gameboard.board[2][0]==='o'&&gameboard.board[2][1]==='o'&&gameboard.board[2][2]==='o'||
                    gameboard.board[1][0]==='o'&&gameboard.board[1][1]==='o'&&gameboard.board[1][2]==='o'||
                    gameboard.board[0][0]==='o'&&gameboard.board[0][1]==='o'&&gameboard.board[0][2]==='o'
            ){sum='O'}
        }
        checkBoard()
        if (sum==='X'){
            return "X wins"
        }else if(sum==='O'){
            return 'O wins'
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
    checkBoard()
        if (sum==='X'){
            return "X wins"
        }else if(sum==='O'){
            return 'O wins'
        }else {sum=0}
    }
    // playerChoice()
// }

// else if(gameMode==='vsPlayer'){

// }

// }