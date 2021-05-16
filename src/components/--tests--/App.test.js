import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

// it is a global functian.First argument is a string description of the test we're running, second argument is a function containing our test logic, stuff to do when this test run 
it('shows a comment box', () => {
   const wrapped = shallow(<App />);
   expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('show a comment list', () =>{
const wrapped = shallow(<App/>);
expect(wrapped.find(CommentList).length).toEqual(1)
})
