import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
/*
Inside src folder, we can find contacts.json, 
a JSON file with the producer's contacts. 
Import this file and create an array of the 
5 first contacts to use as your initial state.
imported below: 
*/
import contacts from './contacts.json'; 
import Table from './components/DynamicTable';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visibleContacts: contacts.slice(0, 5),
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Ironhack Contacts</h1>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            { 
              this.state.visibleContacts.map((contact,index) => 
           { return <Table key={index} {...contact} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
} 

export default App;