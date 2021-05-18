import React from 'react';
import { mount} from 'enzyme';
import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach( ()=>{
    wrapped = mount(<CommentBox/>)
})

afterEach(()=>{
    wrapped.unmount();
})

it('has a textarea and a button', () => {
     wrapped = mount(<CommentBox />);
    expect(wrapped.find('textarea').length).toEqual(1)
    expect(wrapped.find('button').length).toEqual(1)

})