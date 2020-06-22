import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    username : 'entered_name'
  };

  updateState = (event) => {
    this.setState({
      username : event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <UserInput updateEvent={this.updateState} value={this.state.username} />
        <UserOutput username={this.state.username}/>
        <UserOutput username="Ali"/>
      </div>
    );
  }
}

export default App;
