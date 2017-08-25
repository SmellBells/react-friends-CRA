import React, { Component } from 'react';
import FriendsList from './components/FriendsList';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
            <h1>The facebook Friend Machine</h1>

            <div className="friends">
                <FriendsList />
            </div>
        </div>
    );
  }
}

export default App;
