
let params = {
    playerTurn: 1,
    currentPlayer: 'X',
    inPlay: true,
    winner: null,
}

const switchPlayer = () => {
    params.playerTurn *= -1
    if (params.playerTurn === 1){
        params.currentPlayer = "X"
    } else {
        params.currentPlayer = "O"
    }
}

export default {
    params,
    switchPlayer,
}
