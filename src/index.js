import React from 'react';
import ReactDOM from 'react-dom';
import {BroserRouter, Route} from 'react-router-dom';

import Root from 'Root';

import App from 'components/App';


ReactDOM.render(
    <Root>
        <BroserRouter>
            <Route path = "/" component ={App}/>
       </BroserRouter>
    </Root>, 
    document.querySelector('#root')
);
