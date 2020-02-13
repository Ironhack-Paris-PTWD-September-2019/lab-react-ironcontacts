import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import json from './contacts.json';

class App extends Component {
  state = {
    contacts: json.slice(0, 5)
  }

  addHandler = () => {
    const randContact = json[Math.floor(Math.random()*json.length)];

    this.setState({
      contacts: [...this.state.contacts, randContact]
    })
  }

  sortByNameHandler = () => {
    this.setState({
      contacts: [...this.state.contacts].sort(function (a, b) {
        return a.name.localeCompare(b.name);
      })
    })
  }

  sortByPopularityHandler = () => {
    this.setState({
      contacts: [...this.state.contacts].sort(function (a, b) {
        return a.popularity - b.popularity;
      })
    })
  }

  deleteHandler = (name) => {
    const contactsCopy = [...this.state.contacts];

    const contactIndexToRemove = contactsCopy.findIndex(el => el.name === name);
    contactsCopy.splice(contactIndexToRemove, 1);

    this.setState({
      contacts: contactsCopy
    })
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>

        <p>
          <button onClick={this.addHandler}>Add new contact</button>
          <button onClick={this.sortByNameHandler}>Sort by name</button>
          <button onClick={this.sortByPopularityHandler}>Sort by popularity</button>
        </p>

        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map(contact => {
              return (
                <tr>
                  <td>
                    <img src={contact.pictureUrl} style={{width: '100px'}} />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                  <td>
                    <button onClick={e => {
                      this.deleteHandler(contact.name)
                    }}>Delete</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>

        
      </div>
    );
  }
}

export default App;
