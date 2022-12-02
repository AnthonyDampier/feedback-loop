import React from 'react';
import axios from 'axios';
import './App.css';

// import addition react-router-dom, react-redux, react functions
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

//import components
import QuestionOne from '../Question1/Question1';
import QuestionTwo from '../Question2/Question2';
import QuestionThree from '../Question3/Question3';
import QuestionFour from '../Question4/Question4';
import ThankYou from '../ThankYou/ThankYou'

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
              <Link to="/">Q1</Link>
          </li>
            <li>
              <Link to="/2">Q2</Link>
            </li>
            <li>
              <Link to="/3">Q3</Link>
            </li>
            <li>
              <Link to="/4">Comments</Link>
            </li>
            <li>
              <Link to="/5">ThankYou</Link>
            </li>
            <li>
              <Link to="/Admin">Admin</Link>
            </li>
          </ul>
        </nav>

        {/* routes go here */}
        <Route exact path="/">
          <QuestionOne />
        </Route>
        <Route exact path="/2">
          <QuestionTwo />
        </Route>
        <Route exact path="/3">
          <QuestionThree />
        </Route>
        <Route exact path="/4">
          <QuestionFour />
        </Route>
        <Route exact path="/5">
          <ThankYou />
        </Route>
        <Route exact path="/Admin">
          {/* <Admin /> */}
        </Route>
      </Router>
    </div>
  );
}

export default App;
