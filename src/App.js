import React, { Component } from 'react';
import Poll from './components/Poll';
import PollList from './components/PollList';
import UserPolls from './components/UserPolls';
import Lodash from 'lodash';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        {
          pollName: "poll1",
          options: [{name:"o1", count:0}, {name:"o2", count: 0}, {name:"o3", count: 0}],
        },
        {
          pollName: "poll2",
          options: [{name:"o1", count:0}, {name:"o2", count: 0}, {name:"o3", count: 0}],
        },
        {
          pollName: "poll3",
          options: [{name:"o1", count:0}, {name:"o2", count: 0}, {name:"o3", count: 0}],
        }
      ],
      currentView: "poll",
      currentPoll: "poll1",
      loggedIn: false,
      userName: '',
    }
    this.openPollView = this.openPollView.bind(this);
  }

  openPollView(name){
    this.setState({currentPoll: name});
    this.setState({currentView: "poll"});
  }

  render() {

    let view;

    if(this.state.currentView === "pollList"){
      const polls = this.state.data.map(function(d){
        return <li
            className="poll-list-item"
          >{d.pollName}</li>
      });
      view = polls;
    } else if(this.state.currentView === "poll"){
      let picked = Lodash.filter(this.state.data, x => x.pollName === this.state.currentPoll);
      view = <Poll
        name={picked[0].name}
        options={picked[0].options}
      />;
    } else if(this.state.currentView === "userPolls"){
      view = <h2>User poll list goes here!</h2>;
    }

    return (
      <div className="App">
        <nav className="navbar navbar-default" role="navigation">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">jeiben's Voting App</a>
            </div>
            <div>
              <ul className="nav navbar-nav navbar-right">
                <li className="active"><a href="#">Home</a></li>
                <li><a href="#">My Polls</a></li>
                <li><a href="#">New Poll</a></li>
                <li><a href="#">Login</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <h1>Polls:</h1>
        <h3>Click on a poll below to vote or <a href="#">make your own poll!</a></h3>
        <ul className="poll-list">
          {view}
        </ul>
      </div>
    );
  }
}

export default App;
