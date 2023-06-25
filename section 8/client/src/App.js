import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import React,{Component} from "react";
import otherPage from "./otherPage";
import fib from "./fib";

function App() {
  return (
      <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <Route exact path={"/"} component={fib}/>
        <Route exact path={"/otherpage"} component={otherPage()}/>
      </div>
    </div>
      </Router>
  );
}

export default App;
