import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-default" role="navigation">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">jeiben's Voting App</a>
            </div>
            <div>
              <ul className="nav navbar-nav">
                <li className="active"><a href="#">Home</a></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#">My Polls</a></li>
                <li><a href="#">Login</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <h1>App goes here!</h1>
      </div>
    );
  }
}

export default App;
