import { assert } from 'chai';
import pc from '../game/pc.js'

const testPcPlayRange = () => {
    if (pc.pcPlay(true) >= 0 && pc.pcPlay(true) <= 6){
        return true
    }
}

describe('pc', function(){
    it('Should return a choice between 0 and 6', function(){
        assert.equal(testPcPlayRange(), true)
    })
})
