import './App.css';
import React, { Component } from 'react';
import UserInfo from './Components/UserInfo'

class App extends Component {

  state = {
    user: [],
  }


componentDidMount(){
  fetch('http://api.whatpulse.org/user.php?format=json&user=Real_KevBot')
    .then(response => response.json())
    .then(result => this.setState({user: result}))
}

  render() {
    return (
      <main className="App">
        <div>
          
        </div>
        <h1>🖱️Clicky Clacky Tracker⌨️</h1>
        <UserInfo user={this.state.user} />
      </main>
    );
  }
}

export default App;
