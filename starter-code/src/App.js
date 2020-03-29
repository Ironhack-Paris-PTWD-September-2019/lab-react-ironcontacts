import React, { Component } from 'react';
import './App.css';
//import contacts from './contacts.json';
import Contacts from './Contacts.js'; 

class App extends Component {
  render() {
    return (
      <div className="App">
       <Contacts/>

      </div>
    );
  }
}

export default App;
