
import { assert } from 'chai';
import board from '../game/board.js';

const blankBoard = [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
]

const testBoard = [
    [-1,0,0,0,0,0,0],
    [1,0,0,0,0,0,0],
    [-1,0,0,0,0,0,0],
    [1,0,0,0,0,0,0],
    [-1,0,0,0,0,0,0],
    [1,0,0,0,0,0,0],
]

const rowWinBoard = [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,-1,0,0,0],
    [-1,1,1,1,1,0,0],
    [-1,-1,-1,1,0,0,0],
]

const colWinBoard = [
    [0,0,0,0,0,0,0],
    [0,0,1,0,0,0,0],
    [0,0,1,-1,0,0,0],
    [0,-1,1,-1,1,0,0],
    [-1,1,1,1,-1,0,0],
    [-1,-1,-1,1,0,0,0],
]

const leftDiagonalWinBoard = [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [1,0,0,0,0,0,0],
    [-1,1,0,0,0,0,0],
    [1,1,1,-1,0,0,0],
    [-1,-1,-1,1,0,0,0],
]
const rightDiagonalWinBoard = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0,0,1,-1,0,0,0],
    [0,1,-1,1,0,0,0],
    [1,-1,-1,-1,0,0,0],
    
]



describe('board', function(){
    it('Should return an empty 2d array of specified height', function(){
        assert.equal(board.refreshBoard().length, blankBoard.length)
    })
    it('Should return an empty 2d array of specified length', function(){
        assert.equal(board.refreshBoard()[0].length, blankBoard[0].length)
    })
})

describe('win check', function(){
    it('A player with four in a row should win', function(){
        assert.equal(board.checkWin(4, 4, rowWinBoard), 'winner');
    })
    it('A player with a column of four should win', function(){
        assert.equal(board.checkWin(1, 2, colWinBoard), 'winner')
    })
    it('A player with a diagonal of four from top to bottom should win', function(){
        assert.equal(board.checkWin(2, 0, leftDiagonalWinBoard), 'winner')
    })
    it('A player with a diagonal of four from bottom to top should win', function(){
        assert.equal(board.checkWin(2, 2, rightDiagonalWinBoard), 'winner')
    })
})

// test('Play throws error when input greater than 6', () => {
//     expect(play(7)).toBe('invalid-move')
//     expect(play(6)).not.toBe('invalid-move')
// })

// test('Play throws error when player tries to place in an occupied column', () => {
//     expect(play(0, testBoard)).toBe('invalid-move')
//     expect(play(1, testBoard)).not.toBe('invalid-move')
// })
