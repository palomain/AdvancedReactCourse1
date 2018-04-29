/**
 * Created by carhe on 4/19/2018.
 */
import {expect} from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import {SAVE_COMMENT} from '../../src/actions/types'

describe('Comments reducer', ()=> {
    it('handles action with unknown type', ()=> {
        expect(commentReducer()).to.be.eql([]);

    });

    it('handles action with SAVE_COMMENT', ()=> {
        const action = {type:SAVE_COMMENT, payload:'new comment'};
        expect(commentReducer([], action)).to.eql(['new comment']);
    });


})

