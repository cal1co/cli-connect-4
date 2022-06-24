import {assert} from 'chai'
import messages from '../game/messages.js'

describe('board', function(){
    it('Should return X placed when player X places a token', function(){
        assert.equal(messages.placed(1), '1 placed')
    })
    it('Should return O placed when player O places a token', function(){
        assert.equal(messages.placed(-1), '-1 placed')
    })
})