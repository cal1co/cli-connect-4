import { assert } from 'chai';
import settings from '../game/settings.js';

describe('settings', function(){
    it('Should switch pc player on in settings when setPcPlayer() called', function(){
        assert.equal(settings.setPcPlayer(true), settings.params.pcPlayer)
    })
    it('Should switch pc player off in settings when setPcPlayer() called', function(){
        assert.equal(settings.setPcPlayer(false), settings.params.pcPlayer)
    })
})