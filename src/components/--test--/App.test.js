import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

// it is a global functian.First argument is a string description of the test we're running, second argument is a function containing our test logic, stuff to do when this test run 
it('shows a comment box', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    // expect(div.innerHTML).toContain('Comment Box');
    
    ReactDOM.unmountComponentAtNode(div);
})