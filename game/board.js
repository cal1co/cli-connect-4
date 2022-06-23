import msg from './messages.js'
import gameState from './gameState.js'

const boardParams = {
    height:6,
    length:7
}

let board = []
const refreshBoard = () => {
    board = Array(boardParams.height).fill().map(() => Array(boardParams.length).fill(0))

} 
refreshBoard()

const drawBoard = (inputBoard=board) => {
    // console.clear()
    let asciiBoard = []

    inputBoard.forEach((e) => {
        e.forEach((f) => {
            if (f === 0){
                asciiBoard.push(`|_|`)
            } else {
                let turn = ''
                if (f === 1){
                    turn = 'x'
                } else {
                    turn = 'o'
                }
                asciiBoard.push(`|${turn}|`)
            }
        })
    })
    let boardIndex = []
    for (let i = 0; i < boardParams.length; i++){
        boardIndex.push(`|${i}|`)
    }
    for (let i = boardParams.length; i < (asciiBoard.length + 7); i+= boardParams.length){
        console.log(asciiBoard.slice((i-7), i).join(''))
    };
    console.log(boardIndex.join(''))

}

const checkWin = (currRow, currCol, inputBoard=board) => {

    // ROWS
    for (let row = 0; row < 4; row++){
        let snippet = inputBoard[currRow].slice(row, (row + 4))
        let snippetSum = snippet.reduce((partialSum, a) => partialSum + a, 0)

        if ((snippetSum * gameState.params.playerTurn) === 4){
            msg.winMsg(gameState.params.currentPlayer)
        }
    }

    // COLS
    for (let col = 0; col < 3; col++){
        let snippet = []
        for (let i = col; i < (col + 4); i++){
            snippet.push(inputBoard[i][currCol])
        }
        let snippetSum = snippet.reduce((partialSum, a) => partialSum + a, 0)

        if ((snippetSum * gameState.params.playerTurn) === 4){
            msg.winMsg(gameState.params.currentPlayer)
        }
    }

    // DIAG
    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++){
            let currLeftTotal = inputBoard[j][i] + inputBoard[j + 1][i + 1] + inputBoard[j + 2][i + 2] + inputBoard[j + 3][i + 3]
            let currRightTotal = inputBoard[j][i + 3] + inputBoard[j + 1][i + 2] + inputBoard[j + 2][i + 1] + inputBoard[j + 3][i]

            if ((currRightTotal * gameState.params.playerTurn) === 4 || (currLeftTotal * gameState.params.playerTurn) === 4){
                msg.winMsg(gameState.params.currentPlayer)
            }
        }
    }

}



export default {
    board, 
    drawBoard,
    refreshBoard,
    checkWin
}
