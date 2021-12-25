import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from "react-router-dom";
import ReactDOM from 'react-dom';

import Home from './components/Home';
import Happy from './components/Happy';
import Sleepy from './components/Sleepy';
import Guilty from './components/Guilty';

const Root = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/guilty">Guilty</Link>
            </li>
            <li>
              <Link to="/happy">Happy</Link>
            </li>
            <li>
              <Link to="/sleepy">Sleepy</Link>
            </li>
          </ul>

          <Route exact path='/home' component={Home} />
          <Route path="/guilty" component={Guilty} />
          <Route path="/happy" component={Happy} />
          <Route path="/sleepy" component={Sleepy} />
        </div>
      </BrowserRouter>
  </div>
  );
};





ReactDOM.render( <Root />, document.getElementById('root') );
