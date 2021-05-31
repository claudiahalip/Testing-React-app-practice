import React from 'react';
import {mount} from 'enzyme';

import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;
const initialState={
    comments: ['Comment1', 'Comment2']
}

beforeEach(()=>{
    wrapped = mount(
        <Root initialState={initialState}>
            <CommentList/>
        </Root>
    )
})

it('create one LI per comment', ()=>{
   expect(wrapped.find('li').length).toEqual(2);
});
it('show the text for each comment', ()=>{
    expect(wrapped.render().text('Comment1'))
    expect(wrapped.render().text('Comment2'))
})
