import React, { Component } from 'react';
import './App.css';

import contacts from './contacts.json';

class App extends Component {
  state = {
    contacts: contacts.slice(0, 5)
  }

  addRandomContact = () => {
    const contactsCopy = [...this.state.contacts];
    const randomContact = contacts[Math.floor(Math.random()*contacts.lenght)];
    contactsCopy.push(randomContact);
    
    this.setState({
      contacts: contactsCopy
    })
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={(event) => this.addRandomContact()}>Add Random Contact</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
          {this.state.contacts.map((item, index) => (
            <tr>
              <td key={index}><img src={item.pictureUrl} alt=""/></td>
              <td>{item.name}</td>
              <td>{item.popularity.toFixed(2)}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
