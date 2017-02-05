import React, {Component} from 'react';

class Poll extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: this.props.name,
      options: this.props.options
    }
  }

  render(){
    return(
      <div className="poll-holder">
        <h3>{this.state.name}</h3>
        <ul>
          {this.state.options.map(function(item){
            return <li>{item.name}, {item.count}</li>
          })
          }
        </ul>
      </div>
    );
  }
}

export default Poll;
