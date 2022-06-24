
import { assert } from 'chai';
import gameState from '../game/gameState.js';

describe('game state', function(){
    it('Should switch player turns when switchPlayer() called', function(){
        assert.equal(gameState.switchPlayer(1), -1)
    })
    it('Should switch player turns when switchPlayer() called', function(){
        assert.equal(gameState.switchPlayer(-1), 1)
    })
})