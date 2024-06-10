function createPlayer(player){
    const playerSign=''
    return{player,playerSign}
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
this.playerSign='o'
return{player2,playerSign}
})()





const gameboard=(function(){
let board=[
    ["","","",],
    ["","","",],
    ["","","",],
]

let renderBoard=function(){
    const container=document.querySelector('#container')
    let results=document.querySelector('#results')
    const playAgain=document.createElement('button') 
                playAgain.classList.add('play-again') 
                  playAgain.textContent="Play Again" 
                  playAgain.addEventListener('click',()=>{
                    results.textContent=''
                    playAgain.remove()
                    reset()})
    while( container.hasChildNodes() ){
        container.removeChild(container.lastChild);} 
    for(let i=0;i<gameboard.board.length;i++){
        let array=gameboard.board[i];
        for(let j=0;j<array.length;j++){
            const content=document.createElement('button')
            let row=i
            let column=j
            content.classList.add('content')
            content.addEventListener('click',()=>{
                let gameMode=mode
                if(gameMode==='playerVsComputer'){
                game.playerChoice1(Number(row), Number(column))
                let playerWin=game.checkBoard()
                if (playerWin===true){
                    results.textContent="player wins"
                    results.appendChild(playAgain);
                    return "player wins"
                }
                let run=game.checkForTie()
                if(run===false){
                    results.textContent="Tie Game"
                    results.appendChild(playAgain);
                    return "tie game"
                }
                game.computerChoice()
                let computerWin=game.checkBoard()
                if (computerWin===true){
                    results.textContent="computer wins"
                    results.appendChild(playAgain);
                    return "computer wins"
                }
            }

            else if(gameMode==='playerVsPlayer'){
                game.playerChoice1(Number(row), Number(column))
                let player1Win=game.checkBoard()
                if (player1Win===true){
                    results.textContent="player 1 wins"
                    results.appendChild(playAgain);
                    return "player 1 wins"
                }
                let run=game.checkForTie()
                if(run===false){
                    results.textContent="Tie Game"
                    results.appendChild(playAgain);
                    return "tie game"
                }
                game.playerChoice2(Number(row), Number(column))
                let player2Win=game.checkBoard()
                if (player2Win===true){
                    results.textContent="Player 2 wins"
                    results.appendChild(playAgain);
                    return "player 2 wins"
                }
            }
            })
            content.textContent=gameboard.board[i][j]
            if(content.textContent==='x'||content.textContent==='o'){
                content.disabled=true
            }
            let endGame=game.checkBoard()
            if (endGame===true){
                
                content.disabled=true
                
             
            }
            container.appendChild(content)
            }
    }  

}

let mode='playerVsComputer'

const changeMode=function(){
   
    if (mode==='playerVsPlayer'){
        mode='playerVsComputer'
        return mode
    }
    else if (mode==='playerVsComputer'){
        mode='playerVsPlayer'
        return mode
    }
}

let startGame=function(){
    let modeDiv=document.querySelector("#mode-div")
    modeDiv.textContent=`${mode}`
    let changeModeButton=document.querySelector('#change-mode')
    changeModeButton.addEventListener('click',()=>{
    changeMode()
    modeDiv.textContent=`${mode}`
    })
  let startButton=document.querySelector('#start-button')
  startButton.addEventListener('click',()=>{
    renderBoard()
    startButton.remove()
    changeModeButton.remove()
    modeDiv.remove()
  })
}


let reset=function(){
    for(let i=0;i<gameboard.board.length;i++){
        let row=gameboard.board[i];
        for(let j=0;j<row.length;j++){
            gameboard.board[i][j]=''
        }
    }    
    renderBoard()
}



return {board,renderBoard,startGame,reset,mode, changeMode};
})()
gameboard.startGame()



    

const game=(function(){
    
    
    const playerChoice1=function(row,column){
        if(gameboard.board[Number(row)][Number(column)]===''){
        gameboard.board[Number(row)][Number(column)]=`${player1.playerSign}`
    gameboard.renderBoard()
     
    }
        else return("spot is taken, try again")
    }

    //need to create code that changes
    //player turn

    const playerChoice2=function(row,column){
        if(gameboard.board[Number(row)][Number(column)]===''){
        gameboard.board[Number(row)][Number(column)]=`${player2.playerSign}`
    gameboard.renderBoard()
     
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
        ){return true }
        else if (gameboard.board[0][0]==='o'&&gameboard.board[1][0]==='o'&&gameboard.board[2][0]==='o'||
                gameboard.board[0][1]==='o'&&gameboard.board[1][1]==='o'&&gameboard.board[2][1]==='o'||
                gameboard.board[0][2]==='o'&&gameboard.board[1][2]==='o'&&gameboard.board[2][2]==='o'||
                gameboard.board[0][0]==='o'&&gameboard.board[1][1]==='o'&&gameboard.board[2][2]==='o'||
                gameboard.board[0][2]==='o'&&gameboard.board[1][1]==='o'&&gameboard.board[2][0]==='o'||
                gameboard.board[2][0]==='o'&&gameboard.board[2][1]==='o'&&gameboard.board[2][2]==='o'||
                gameboard.board[1][0]==='o'&&gameboard.board[1][1]==='o'&&gameboard.board[1][2]==='o'||
                gameboard.board[0][0]==='o'&&gameboard.board[0][1]==='o'&&gameboard.board[0][2]==='o'
        ){return true}
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
            return false
        } else {sum=0
        return true}
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
        gameboard.renderBoard()
        
    }

    

// else if(gameMode==='vsPlayer'){

// }
return{playerChoice1, playerChoice2, checkBoard, checkForTie,computerChoice,};

})()




//console.log(game.playerChoice(1,1))
//console.log(game.checkBoard())
//console.log(game.checkForTie())
//console.log(game.computerChoice())