/**
 * Created by carhe on 4/19/2018.
 */
import {renderComponent, expect} from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', ()=> {
    let component;

    beforeEach(()=>{
        const props =  {comments: ['C1', 'C2']};
        component = renderComponent(CommentList, null, props);
    });

    it('shows an LI fro  each comment', ()=> {
        expect(component.find('li').length).to.equal(2);
    });

    it('shows each comment that is provided', ()=> {
        expect(component).to.contain('C1');
        expect(component).to.contain('C2');
    });

});
