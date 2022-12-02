import React from 'react';
import axios from 'axios';
import './App.css';

// import addition react-router-dom, react-redux, react functions
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/Q1">Q1</Link>
          </li>
            <li>
              <Link to="/Q2">Q2</Link>
            </li>
            <li>
              <Link to="/Q3">Q3</Link>
            </li>
            <li>
              <Link to="/Admin">Admin</Link>
            </li>
          </ul>
        </nav>

        {/* routes go here */}
        <Route exact path="/">
          {/* <SelectYourPizza /> */}
        </Route>
        <Route exact path="/SelectYourPizza">
          {/* <SelectYourPizza /> */}
        </Route>

        <Route exact path="/CustomerInfo">
          {/* <CustomerInfo /> */}
        </Route>

        {/* Detail Page or Detail View */}
        <Route exact path="/Checkout">
          {/* <Checkout /> */}
        </Route>
        <Route exact path="/Admin">
          {/* <Admin /> */}
        </Route>
      </Router>
    </div>
  );
}

export default App;
