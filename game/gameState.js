
let params = {
    playerTurn: 1,
    currentPlayer: 'X',
    inPlay: true,
    winner: null,
}

const switchPlayer = (playerTurn=params.playerTurn) => {
    params.playerTurn = playerTurn *= -1
    if (params.playerTurn === 1){
        params.currentPlayer = "X"
    } else {
        params.currentPlayer = "O"
    }
    return params.playerTurn
}

export default {
    params,
    switchPlayer,
}
