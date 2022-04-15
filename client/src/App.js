import React from 'react';
import {Route} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';
import { history } from 'history';
import './App.css';

import Main from './Main';

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path='/' exact component={Main}/>
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
