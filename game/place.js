import gameState from './gameState.js'
import board from './board.js'
import settings from './settings.js'
import msg from './messages.js'

const play = (col, inputBoard=board.board) => {
    if (gameState.params.inPlay){ // don't need this... just don't call the function if false...
        for (let i = inputBoard.length - 1; i >= 0; i--){
            if (gameState.params.inPlay){
                if (inputBoard[i][col] === 0){
                    if (settings.params.pcPlayer && gameState.params.playerTurn === 1){
                        console.clear()
                    }
                    if (!settings.params.pcPlayer){
                        console.clear()
                    }
                    inputBoard[i][col] = gameState.params.playerTurn;
                    msg.placed(gameState.params.playerTurn, col)
                    board.drawBoard()
                    board.checkWin(i, col)
                    gameState.switchPlayer()
                    break;
                }
                if (col > 6){
                    console.warn(`Sorry ${col} is an invalid column number. Please input a value between 0 and 6`);
                    break
                } else if (inputBoard[0][col] !== 0){
                    console.warn(`Sorry! This column (${col}) is full!`);
                        
                    if (settings.params.pcPlayer === true && gameState.params.playerTurn === -1){
                        msg.pcMoveMsg()
                    }
                    break;
                }
                // console.log(`%cPlayer ${gameState.params.currentPlayer} make your move`, "color:lightgreen");
            }   
        }
    } else {
        console.log(`Sorry, the game is complete. ${gameState.params.winner} won!`)   
    }

    if (settings.params.pcPlayer && (gameState.params.playerTurn === -1) && gameState.params.inPlay){ 
        msg.pcMoveMsg()
    }
}

export default {
    play
}